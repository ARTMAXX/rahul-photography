# generate-og-image.ps1 - Redesigned social share card for Rahul Chanda Photography
# Regenerate: powershell -ExecutionPolicy Bypass -File dev-utils/generate-og-image.ps1
# Produces:   public/og-image.png (1200x630)

Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = "Stop"

$root    = Split-Path -Parent $PSScriptRoot
$outPath = Join-Path $root "public\og-image.png"
$watch   = Join-Path $root "public\best shots\Product image\luxury-watch.png"

$w = 1200; $h = 630
$bmp = [System.Drawing.Bitmap]::new($w, $h)
$g   = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode  = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# ---- palette ----
$bgTop = [System.Drawing.Color]::FromArgb(255, 8, 2, 4)
$bgBot = [System.Drawing.Color]::FromArgb(255, 44, 12, 16)
$red   = [System.Drawing.Color]::FromArgb(255, 232, 59, 44)
$gold  = [System.Drawing.Color]::FromArgb(255, 201, 164, 92)
$muted = [System.Drawing.Color]::FromArgb(205, 255, 255, 255)
$dim   = [System.Drawing.Color]::FromArgb(160, 255, 255, 255)

# 1. background
$bgBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(0, 0, $w, $h), $bgTop, $bgBot, 90.0)
$g.FillRectangle($bgBrush, 0, 0, $w, $h)

# 2. product image (right ~55%), melting out of the dark
$imgRect = [System.Drawing.Rectangle]::new(585, 0, 615, 630)
if (Test-Path -LiteralPath $watch) {
    $src = [System.Drawing.Image]::FromFile($watch)
    $g.DrawImage($src, $imgRect, 0, 0, $src.Width, $src.Height, [System.Drawing.GraphicsUnit]::Pixel)
    $src.Dispose()

    $veil = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(70, 5, 1, 2))
    $g.FillRectangle($veil, 585, 0, 615, 630)

    $fade = [System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(470, 0, 330, 630), $bgTop, [System.Drawing.Color]::FromArgb(0, 8, 2, 4), 0.0)
    $g.FillRectangle($fade, 470, 0, 330, 630)

$rim = [System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(585, 0, 26, 630), [System.Drawing.Color]::FromArgb(90, 201, 164, 92), [System.Drawing.Color]::FromArgb(0, 201, 164, 92), 0.0)
    $g.FillRectangle($rim, 585, 0, 26, 630)

    # soft gold bridge: warm light bleeding from the image toward the text half
    $bridge = [System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(400, 0, 220, 630), [System.Drawing.Color]::FromArgb(0, 201, 164, 92), [System.Drawing.Color]::FromArgb(55, 201, 164, 92), 0.0)
    $g.FillRectangle($bridge, 400, 0, 220, 630)
}

# 3. gold monogram "RC"
$cx = 118; $cy = 92; $r = 52
$pen = [System.Drawing.Pen]::new($gold, 2.0)
$g.DrawEllipse($pen, $cx - $r, $cy - $r, $r * 2, $r * 2)
$fMono   = [System.Drawing.Font]::new("Georgia", 40.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$sfMono  = [System.Drawing.StringFormat]::new()
$sfMono.Alignment = [System.Drawing.StringAlignment]::Center
$sfMono.LineAlignment = [System.Drawing.StringAlignment]::Center
$goldBr  = [System.Drawing.SolidBrush]::new($gold)
$monoRect = [System.Drawing.RectangleF]::new(($cx - $r), ($cy - $r - 4), ($r * 2), ($r * 2))
$g.DrawString("RC", $fMono, $goldBr, $monoRect, $sfMono)

# 4. name, two-line serif
$fN1 = [System.Drawing.Font]::new("Georgia", 108.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fN2 = [System.Drawing.Font]::new("Georgia", 96.0,  [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString("Rahul",  $fN1, [System.Drawing.Brushes]::White, 92, 196)
$g.DrawString("Chanda", $fN2, [System.Drawing.Brushes]::White, 92, 296)

# 5. gold hairline
$line = [System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(92, 424, 340, 3), $gold, [System.Drawing.Color]::FromArgb(40, 201, 164, 92), 0.0)
$g.FillRectangle($line, 92, 424, 340, 3)

# 6. tagline (brand red)
$fTag  = [System.Drawing.Font]::new("Georgia", 21.0, [System.Drawing.FontStyle]::Bold,   [System.Drawing.GraphicsUnit]::Pixel)
$redBr = [System.Drawing.SolidBrush]::new($red)
$g.DrawString("COMMERCIAL PRODUCT", $fTag, $redBr, 92, 456)
$g.DrawString("PHOTOGRAPHER",       $fTag, $redBr, 92, 487)
$g.DrawString("- Dehradun, India",  $fTag, $redBr, 92, 518)

# 7. details + url
$fSmall  = [System.Drawing.Font]::new("Georgia", 16.0, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$muteBr = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(225, 255, 255, 255))
$g.DrawString("PRODUCT  |  FOOD & BEVERAGE  |  FOOTWEAR", $fSmall, $muteBr, 92, 560)

$fUrl  = [System.Drawing.Font]::new("Arial", 12.0, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$dimBr = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(205, 255, 255, 255))
$g.DrawString("rahulchandaphotography.netlify.app", $fUrl, $dimBr, 92, 598)

foreach ($o in @($bgBrush, $pen, $fMono, $sfMono, $goldBr, $fN1, $fN2, $line, $fTag, $redBr, $fSmall, $muteBr, $fUrl, $dimBr, $veil, $fade, $rim)) { try { $o.Dispose() } catch {} }
$g.Dispose()
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
"OK: og-image.png ($w x $h) -> $outPath"