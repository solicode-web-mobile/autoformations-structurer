$RepoUrl = "https://github.com/spartelskills/system.editeur-code.git"
$TempDir = Join-Path $env:TEMP "editeur_update_$([guid]::NewGuid().ToString().Substring(0,8))"
$CurrentDir = $PSScriptRoot
$ScriptName = $MyInvocation.MyCommand.Name

Write-Host ""
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "🔄 Mise à jour de l'Éditeur In-Browser depuis GitHub" -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/4] Téléchargement depuis Git ($RepoUrl)..." -ForegroundColor Yellow
git clone --depth 1 $RepoUrl $TempDir 2>&1 | Out-Null

if (-not (Test-Path $TempDir)) {
    Write-Host "❌ Erreur : Impossible de récupérer le code depuis Git." -ForegroundColor Red
    exit
}

Write-Host "[2/4] Suppression des anciens fichiers locaux..." -ForegroundColor Yellow
# Supprime tout dans le dossier courant SAUF .git, .agent et ce script lui-même
Get-ChildItem -Path $CurrentDir | Where-Object { 
    $_.Name -ne ".git" -and $_.Name -ne ".agent" -and $_.Name -ne $ScriptName 
} | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "[3/4] Installation de la nouvelle version..." -ForegroundColor Yellow
# Copie depuis le dossier temporaire en excluant les dossiers de dev
Get-ChildItem -Path $TempDir -Exclude ".git", ".agent" | Copy-Item -Destination $CurrentDir -Recurse -Force

Write-Host "[4/4] Nettoyage des fichiers temporaires..." -ForegroundColor Yellow
Remove-Item -Path $TempDir -Recurse -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "✅ Mise à jour terminée avec succès ! Le code est à la dernière version." -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host ""
