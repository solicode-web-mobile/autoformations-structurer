# Règle d'encodage des fichiers via PowerShell

**OBLIGATION ABSOLUE :**
L'agent ne doit **JAMAIS** utiliser les Cmdlets PowerShell natifs tels que `Get-Content`, `Set-Content`, `Out-File` ou les redirections (`>`) pour lire ou écrire des fichiers texte dans ce projet, particulièrement s'il s'agit d'une modification en masse de fichiers existants.

**Problème rencontré :**
L'utilisation des outils standards de PowerShell sur Windows entraîne systématiquement une lecture avec l'encodage `Windows-1252` et une sauvegarde en `UTF-8 avec BOM`, corrompant les caractères accentués (UTF-8 sans BOM) existants.

**Solution et Pratique obligatoire :**
Pour toute lecture ou écriture de fichier, l'agent doit impérativement utiliser les classes du framework `.NET` avec l'encodage strictement forcé en `UTF-8 sans BOM`.

**Exemple de code PowerShell approuvé :**
```powershell
# Définir l'encodage UTF-8 sans BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $False

# Lecture sécurisée
$content = [System.IO.File]::ReadAllText("chemin\du\fichier.md", $utf8NoBom)

# Modification du contenu
$content = $content -replace "ancien", "nouveau"

# Écriture sécurisée (UTF-8 sans BOM préservé)
[System.IO.File]::WriteAllText("chemin\du\fichier.md", $content, $utf8NoBom)
```
