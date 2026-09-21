param (
    [string]$Version = ""
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$currentDir = Get-Location
$coreThemeDir = Join-Path (Split-Path $currentDir -Parent) "autoformations-core-theme"
$configFile = Join-Path $currentDir "theme-sync.json"

if (!(Test-Path $coreThemeDir)) {
    Write-Host "Le dépôt central est introuvable. Clonage en cours depuis GitHub..." -ForegroundColor Yellow
    $parentDir = Split-Path $currentDir -Parent
    Set-Location $parentDir
    git clone https://github.com/solicode-web-mobile/autoformations-core-theme.git
    Set-Location $currentDir
    
    if (!(Test-Path $coreThemeDir)) {
        Write-Host "Erreur : Le clonage a échoué. Impossible de continuer." -ForegroundColor Red
        exit 1
    }
    Write-Host "Clonage terminé avec succès." -ForegroundColor Green
}

if (!(Test-Path $configFile)) {
    Write-Host "Erreur : theme-sync.json introuvable ($configFile)" -ForegroundColor Red
    exit 1
}

Write-Host "Mise à jour du dépôt Core Theme depuis GitHub..." -ForegroundColor Cyan
Set-Location $coreThemeDir
git fetch origin

if ($Version) {
    git checkout $Version
} else {
    git checkout main 2>$null
    if ($LASTEXITCODE -ne 0) { git checkout master 2>$null }
    git pull origin HEAD
}

Set-Location $currentDir

$config = Get-Content $configFile | ConvertFrom-Json

Write-Host "Importation des dossiers synchronisés depuis le Core Theme..." -ForegroundColor Cyan
foreach ($dir in $config.sync_directories) {
    $srcDir = Join-Path $coreThemeDir $dir
    $destDir = Join-Path $currentDir $dir

    if (Test-Path $srcDir) {
        if (!(Test-Path $destDir)) {
            New-Item -ItemType Directory -Force -Path $destDir | Out-Null
        }
        Copy-Item -Path "$srcDir\*" -Destination $destDir -Recurse -Force
        Write-Host "  - $dir importé."
    } else {
        Write-Host "  - [Attention] Dossier $dir introuvable dans le Core Theme." -ForegroundColor Yellow
    }
}

Write-Host "Importation des fichiers synchronisés depuis le Core Theme..." -ForegroundColor Cyan
foreach ($file in $config.sync_files) {
    $srcFile = Join-Path $coreThemeDir $file
    $destFile = Join-Path $currentDir $file

    if (Test-Path $srcFile) {
        $destParent = Split-Path $destFile -Parent
        if (!(Test-Path $destParent)) {
            New-Item -ItemType Directory -Force -Path $destParent | Out-Null
        }
        Copy-Item -Path $srcFile -Destination $destFile -Force
        Write-Host "  - $file importé."
    } else {
        Write-Host "  - [Attention] Fichier $file introuvable dans le Core Theme." -ForegroundColor Yellow
    }
}

Write-Host "pull_theme terminé avec succès !" -ForegroundColor Green
