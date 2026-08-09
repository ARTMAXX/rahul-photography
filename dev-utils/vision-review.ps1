# vision-review.ps1 - DESIGN-GRADE vision review via MiMo V2.5 Free (OpenCode Zen)
# Hard-coded anti-rubber-stamp rubric: a senior art director's QA, not a description.
#
# Usage:
#   .\dev-utils\vision-review.ps1 -Path public\og-image.png
#   .\dev-utils\vision-review.ps1 -Path x.png -Focus "price section" -Strict
#   -Thumb   : also attach a 600x315 downscale (what social feeds actually render)
#   -Gate    : run objective pixel checks (edge bleeding) and print PASS/FAIL lines
#   -Strict  : any clipping or low-contrast text -> force REJECT verdict
#   -Focus   : ask reviewer to concentrate on one region/concern
#
# Design policy (applies to every single use):
#   * A passing verdict is NEVER a reason to skip our own inspection.
#   * The vision model must argue under the rubric; "looks good" is not an argument.
#   * User preferences are input, not a pass. If it is not ready, we say so with proof.
#   * If the objective gate flags a defect, the gate wins over the model's approval.

param(
    [string]$Path = "",
    [string]$Focus = "",
    [switch]$Thumbs,
    [switch]$Gate,
    [switch]$Strict,
    [string]$Model = "opencode/mimo-v2.5-free"
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

if (-not $Path) { Write-Error "Pass -Path <image>"; exit 1 }
$resolved = (Resolve-Path -LiteralPath $Path).Path
if (-not (Test-Path -LiteralPath $resolved)) { Write-Error "File not found: $Path"; exit 1 }
$full = [System.Drawing.Image]::FromFile($resolved)

$attachments = @()
$attachments += "@$resolved"

# ---- thumbnail = what Twitter / LinkedIn / WhatsApp actually show ----
if ($Thumbs) {
    $tw = 600; $th = 315
    $bmpT = [System.Drawing.Bitmap]::new($tw, $th)
    $gT = [System.Drawing.Graphics]::FromImage($bmpT)
    $gT.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gT.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gT.DrawImage($full, 0, 0, $tw, $th)
    $thumbPath = Join-Path $env:TEMP "opencode\thumb_$(Get-Date -Format 'yyyyMMdd_HHmmss').png"
    if (-not (Test-Path (Split-Path $thumbPath))) { New-Item -ItemType Directory -Path (Split-Path $thumbPath) -Force | Out-Null }
    $bmpT.Save($thumbPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $gT.Dispose(); $bmpT.Dispose()
    Write-Output "[attaching $($tw)x$($th) thumbnail so the feed-size legibility is judged too]"
    $attachments += "@$thumbPath"
}

# ---------------- objective pixel gate (independent of the vision model) ----------------
$gateLines = @()
if ($Gate) {
    $bmp = [System.Drawing.Bitmap]::new($resolved)
    $wG = $bmp.Width; $hG = $bmp.Height

    function MeanLuma([System.Drawing.Bitmap]$b, [int]$x0, [int]$y0, [int]$bw, [int]$bh) {
        $sum = 0.0; $n = 0
        for ($y = $y0; $y -lt $y0 + $bh; $y += 2) {
            for ($x = $x0; $x -lt $x0 + $bw; $x += 2) {
                $c = $b.GetPixel($x, $y)
                $sum += 0.299 * $c.R + 0.587 * $c.G + 0.114 * $c.B
                $n++
            }
        }
        return $sum / $n
    }

    $edge = 6
    $left   = MeanLuma $bmp 0           0              $edge        $hG
    $right  = MeanLuma $bmp ($wG - $edge) 0             $edge        $hG
    $top    = MeanLuma $bmp 0           0              $wG          $edge
    $bottom = MeanLuma $bmp 0           ($hG - $edge)  $wG          $edge
    $overall = MeanLuma $bmp 0 0 $wG $hG

    Write-Output "--- pixel gate (edge bleed detection) ---"
    Write-Output ("  overall  {0:N0}  left {1:N0}  right {2:N0}  top {3:N0}  bottom {4:N0}" -f $overall, $left, $right, $top, $bottom)
    # flag any edge that is FAR darker than the overall while content near it should be bright
    foreach ($pair in @(@("left",$left), @("right",$right), @("top",$top), @("bottom",$bottom))) {
        $name = $pair[0]; $val = [double]$pair[1]
        if (($overall - $val) -gt 60 -and $overall -gt 30) {
            $gateLines += "FAIL  $name edge drops hard ($val vs overall $overall): possible clipped content bleeding off the canvas"
        }
    }
    if ($gateLines.Count -eq 0) { $gateLines += "PASS: no edge shows a hard drop vs overall - nothing obviously cropped at the borders" }
    $gateLines | ForEach-Object { Write-Output $_ }
    $bmp.Dispose()
}

# ---------------- build the reviewing prompt ----------------
$rubric = @"
You are a senior art director and rigorous design QA reviewer. Judge this image as craft you would
defend in front of a client. Do NOT write general praise. Work through the rubric and report concrete
evidence for every verdict.

HARD RULE: The image(s) are already attached to this conversation. Do NOT run any terminal commands,
do NOT call scripts like see-image.ps1, do NOT use any external tools. Work ONLY from the attached
images and answer now. Tool usage is the single biggest failure mode; a tool call means an instant fail.

RUBRIC (score each 0-10, justify briefly):
1. LEGIBILITY - every text line fully readable, nothing clipped, truncated, or overlapping at 1200x630.
2. FEED SCALE - at 600x315 (the attached thumbnail) the key text still reads; if it does not, say which line disappears.
3. HIERARCHY - the most important content (the NAME for a brand card) is the first thing the eye lands on.
4. SPACING & MARGINS - no element touches an edge; breathing room is consistent; layout feels balanced, not stacked.
5. BRAND COHERENCE - palette, type and imagery feel premium and coherent, not generic or stock-template.
6. TRUTH - no placeholder text, no visible fake branding that would embarrass the owner.

If anything FAILS a dimension, the verdict MUST be REJECTED - you are not allowed to approve
a card with clipped or illegible text.
VERDICT lines must end with exactly one of: APPROVED / REJECTED
"@

if ($Focus) { $rubric += "`nADDITIONAL FOCUS: $Focus" }
if ($Strict) { $rubric += "`nSTRICT MODE: any issue at all, however small, forces REJECTED with the specific fix list." }
if ($Gate -and $gateLines.Count -gt 0) {
    $rubric += "`nOBJECTIVE PIXEL-GATE OUTPUT (must address every NOTE; you cannot approve while a NOTE is unresolved):`n  " + ($gateLines -join "`n  ")
}
$rubric += "`nFINAL LINES (exact format):`nVERDICT: APPROVED or REJECTED`nSCORE: N/10`nCRITICAL: comma-separated issue list (or NONE)`nGOOD: comma-separated what works"

Write-Output "[vision review via $Model ...]"
$ErrorActionPreference = "Continue"
& opencode run --model $Model --auto $rubric $attachments 2>&1 | Write-Output