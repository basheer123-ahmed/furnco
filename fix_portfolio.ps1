$path = "portfolio.html"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
# Remove both 50px and 30px inline opacity styles
$content = $content.Replace(' style="opacity:0;transform:translateY(50px);"', '')
$content = $content.Replace(' style="opacity:0;transform:translateY(30px);"', '')
[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Done. All inline opacity styles removed."
