# Football Legends - Automated GitHub Push
# This script pushes all changes to GitHub
# Run this from your project folder in PowerShell

Write-Host "=== Football Legends - GitHub Push ===" -ForegroundColor Cyan
Write-Host ""

# Check if git is available
$gitAvailable = $null -ne (Get-Command git -ErrorAction SilentlyContinue)

if (-not $gitAvailable) {
    Write-Host "ERROR: Git is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "✓ Git is available." -ForegroundColor Green
Write-Host ""

# Add all files
Write-Host "Adding all files..." -ForegroundColor Yellow
git add -A

# Commit with message
Write-Host "Committing changes..." -ForegroundColor Yellow
$msg = "Update: Add provider integrations (TheSportsDB, API-Football), square layout, and UI improvements"
git commit -m $msg

# Ensure main branch
Write-Host "Ensuring main branch..." -ForegroundColor Yellow
git branch -M main

# Get current remote
$remote = git config --get remote.origin.url 2>&1

if ($remote) {
    Write-Host "Remote URL: $remote" -ForegroundColor Cyan
} else {
    Write-Host "No remote configured. Please enter your GitHub repo URL:" -ForegroundColor Yellow
    $repoUrl = Read-Host "GitHub repo URL (e.g., https://github.com/HS23-hub/Web-Dev.git)"
    if ($repoUrl) {
        git remote add origin $repoUrl
        Write-Host "✓ Remote added." -ForegroundColor Green
    }
}

# Push to GitHub
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓✓✓ SUCCESS! Files pushed to GitHub! ✓✓✓" -ForegroundColor Green
    Write-Host "Repository: https://github.com/HS23-hub/Web-Dev" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Your updated files are now on GitHub:" -ForegroundColor Green
    Write-Host "  - scripts.js (with TheSportsDB & API-Football integrations)" -ForegroundColor White
    Write-Host "  - styles.css (with square card layout)" -ForegroundColor White
    Write-Host "  - index.html (updated modal UI)" -ForegroundColor White
} else {
    Write-Host "! Push completed with status code: $LASTEXITCODE" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Done! ===" -ForegroundColor Green
Read-Host "Press Enter to exit"
