$files = Get-ChildItem -Path "d:\solicode-web-mobile\autoformations-structurer\_tutos\D.225.1-tailwind" -Recurse -Filter "*.md"

$scriptSnippet = @"

<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Objectif
"@

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # Remove double front matter
    $content = $content -replace "(?ms)^---.*?data_js: `"`"\r?\n---\r?\n\r?\n?(?=---)", ""
    
    # Remove backticks inside the main front matter
    if ($content -match "(?ms)^---.*?data_html: \|.*?\r?\n---") {
        $fm = $matches[0]
        $newFm = $fm -replace "``````\r?\n", ""
        $content = $content.Replace($fm, $newFm)
    }

    # Add window.pageData if missing
    if (-not ($content -match "window\.pageData")) {
        $content = $content -replace "`r?`n## 1\. Objectif", $scriptSnippet
    }

    [System.IO.File]::WriteAllText($file.FullName, $content)
    Write-Host "Fixed $($file.Name)"
}
