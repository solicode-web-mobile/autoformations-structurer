# Intégration Statique (Backend / URL)

Cette méthode est idéale si vous générez vos pages côté serveur (PHP, Laravel, Symfony, Node.js, etc.) ou si vous utilisez des liens pour partager des exercices. L'intégration se fait au moment du chargement de la page.

## 1. Injection via Variable Globale (Recommandé)

Vous pouvez injecter les données de l'exercice directement dans une balise `<script>` située dans le `<head>` de votre page, avant le chargement de l'éditeur.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exercice CSS</title>
    
    <!-- 1. Définition des données de l'exercice -->
    <script>
        // Le backend (ex: PHP) génère cet objet JSON
        window.exerciseData = {
            html: "<h1>Titre de l'exercice</h1>\n<p>Complétez le CSS</p>",
            css: "/* Écrivez votre style ici */",
            js: "",
            php: "",
            activeTab: "css" // Optionnel : Force l'ouverture de l'onglet CSS au chargement
        };
    </script>

    <!-- 2. Chargement de l'éditeur -->
    <!-- (Inclure ici Tailwind et les scripts de l'éditeur : editor-init.js, etc.) -->
</head>
<body>
    <!-- L'éditeur lira automatiquement window.exerciseData au chargement -->
</body>
</html>
```

### Valeurs par défaut
Si l'exercice ne concerne qu'un seul langage (ex: PHP), vous pouvez laisser les autres vides :
```javascript
window.exerciseData = {
    html: "", css: "", js: "",
    php: "<?php echo 'Hello World'; ?>"
};
```

## 2. Injection via Paramètres d'URL (Query Strings)

L'éditeur est programmé pour lire en priorité les paramètres de l'URL. C'est la méthode la plus simple pour partager un exercice sans aucune ligne de code backend.

**Format de l'URL :**
```text
http://votre-site.com/editeur/index.html?html=<h1>Bonjour</h1>&css=body{background:red;}&activeTab=css
```

**Exemple de génération en PHP :**
```php
<?php
$html = urlencode('<h1>Bonjour</h1>');
$css = urlencode('h1 { color: blue; }');
$url = "http://votre-site.com/editeur/index.html?html=$html&css=$css&activeTab=css";
echo "<a href='$url'>Faire l'exercice</a>";
?>
```
Lors de l'ouverture du lien, l'éditeur extraira ces paramètres et peuplera automatiquement les bons onglets, écrasant ainsi la variable `window.exerciseData`.
