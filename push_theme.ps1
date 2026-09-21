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

$config = Get-Content $configFile | ConvertFrom-Json

Write-Host "Copie des dossiers synchronisés vers le Core Theme..." -ForegroundColor Cyan
foreach ($dir in $config.sync_directories) {
    $srcDir = Join-Path $currentDir $dir
    $destDir = Join-Path $coreThemeDir $dir

    if (Test-Path $srcDir) {
        if (!(Test-Path $destDir)) {
            New-Item -ItemType Directory -Force -Path $destDir | Out-Null
        }
        Copy-Item -Path "$srcDir\*" -Destination $destDir -Recurse -Force
        Write-Host "  - $dir copié."
    }
}

Write-Host "Copie des fichiers synchronisés vers le Core Theme..." -ForegroundColor Cyan
foreach ($file in $config.sync_files) {
    $srcFile = Join-Path $currentDir $file
    $destFile = Join-Path $coreThemeDir $file

    if (Test-Path $srcFile) {
        $destParent = Split-Path $destFile -Parent
        if (!(Test-Path $destParent)) {
            New-Item -ItemType Directory -Force -Path $destParent | Out-Null
        }
        Copy-Item -Path $srcFile -Destination $destFile -Force
        Write-Host "  - $file copié."
    }
}

Write-Host "Synchronisation Git sur le Core Theme..." -ForegroundColor Cyan
Set-Location $coreThemeDir

$gitStatus = git status --porcelain
if ([string]::IsNullOrWhiteSpace($gitStatus)) {
    Write-Host "Aucune modification détectée dans le Core Theme." -ForegroundColor Yellow
} else {
    git add .
    git commit -m "Mise à jour du socle commun depuis $(Split-Path $currentDir -Leaf)"
    
    if ($Version) {
        git tag $Version
        Write-Host "Tag $Version ajouté." -ForegroundColor Green
        git push origin HEAD --tags
    } else {
        git push origin HEAD
    }
    Write-Host "Push Git terminé." -ForegroundColor Green
}

Set-Location $currentDir
Write-Host "push_theme terminé avec succès !" -ForegroundColor Green
