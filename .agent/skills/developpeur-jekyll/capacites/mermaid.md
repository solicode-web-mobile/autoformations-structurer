# Mermaid et conteneurs masqués

Mermaid.js est une bibliothèque permettant de générer des diagrammes à partir de texte.

## Problème de rendu dans les éléments `display: none`
Lorsque Mermaid tente de calculer les dimensions (bounding box) d'un diagramme SVG qui se trouve à l'intérieur d'un élément masqué avec `display: none`, la largeur et la hauteur détectées par le navigateur sont de 0 pixel.
Cela se traduit par un diagramme écrasé, corrompu, ou complètement invisible, même si l'élément parent devient visible par la suite.

## Stratégie de rendu différé
Pour qu'un diagramme Mermaid s'affiche correctement dans un conteneur initialement masqué (comme un accordéon, une modale ou une iframe cachée), il est impératif de retarder son calcul jusqu'à ce que le conteneur soit visible.

La méthode recommandée consiste à :
1. Désactiver le rendu automatique au chargement (`mermaid.initialize({ startOnLoad: false })`).
2. Utiliser un **`IntersectionObserver`** (ou écouter un événement d'affichage spécifique) pour détecter le moment précis où l'élément devient visible.
3. Exécuter la fonction `mermaid.run()` (ou `mermaid.init()`) au moment où l'élément est affiché à l'écran, ce qui garantira un calcul correct des dimensions.
