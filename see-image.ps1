# see-image.ps1 — Vision bridge: analyze the image currently in the clipboard using MiMo V2.5 Free (OpenCode Zen)
# Usage:
#   .\see-image.ps1                      # grab clipboard image, describe it
#   .\see-image.ps1 -Path C:\x\img.png   # analyze a specific image file
#   .\see-image.ps1 -Prompt "Find the bug" -Model opencode/mimo-v2.5-free
param(
    [string]$Path = "",
    [string]$Prompt = "Look at the attached image and describe in detail exactly what you see. Include: all visible text, UI elements, layout structure, colors, and any notable features or logos. Be thorough.",
    [string]$Model = "opencode/mimo-v2.5-free"
)

$ErrorActionPreference = "Stop"

# --- Resolve image path: either given, or grab from clipboard ---
if (-not $Path) {
    Add-Type -AssemblyName System.Windows.Forms
    Add-Type -AssemblyName System.Drawing
    if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) {
        Write-Error "Clipboard does not contain an image. Copy an image first, or pass -Path."
        exit 1
    }
    $img = [System.Windows.Forms.Clipboard]::GetImage()
    $Path = Join-Path $env:TEMP "opencode\clipboard_$(Get-Date -Format 'yyyyMMdd_HHmmss').png"
    if (-not (Test-Path (Split-Path $Path))) { New-Item -ItemType Directory -Path (Split-Path $Path) -Force | Out-Null }
    $img.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "[saved clipboard image ($($img.Width)x$($img.Height)) -> $Path]"
}

if (-not (Test-Path -LiteralPath $Path)) { Write-Error "File not found: $Path"; exit 1 }

Write-Output "[analyzing with $Model ...]"
opencode run --model $Model $Prompt "@$Path" 2>&1
