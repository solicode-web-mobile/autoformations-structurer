# Iframe Auto-Wrapper et Tuto-Resultat

Cette fonctionnalité documente le fonctionnement des iframes enrichies sur le site Jekyll.

## La classe `auto-wrapper`
La classe `auto-wrapper` est utilisée sur les balises `<iframe>` pour indiquer qu'elles doivent être enrichies dynamiquement.
Le fichier Javascript **`assets/js/iframe-controls.js`** détecte ces iframes et :
1. Englobe l'iframe dans un conteneur `<div class="iframe-wrapper">`.
2. Ajoute une barre d'en-tête (au-dessus de l'iframe) contenant le titre de l'iframe et un panneau d'actions avec des boutons :
   - Mettre en plein écran.
   - Ouvrir la source dans un nouvel onglet.
   - Supprimer/Fermer l'iframe (uniquement si l'iframe n'a pas la classe `tuto-resultat`).

Cela standardise la présentation des iframes de démonstration sur l'ensemble de la plateforme.

## La classe `tuto-resultat`
Les iframes utilisées pour afficher spécifiquement le résultat attendu d'un tutoriel combinent la classe `auto-wrapper` avec la classe `tuto-resultat` :
```html
<iframe class="auto-wrapper tuto-resultat" src="..."></iframe>
```
Cette classe `tuto-resultat` indique que l'iframe est masquée par défaut via CSS (`display: none`). Elle n'apparaîtra à l'écran que lorsque l'utilisateur interagira avec le bouton d'affichage du résultat (voir la fonctionnalité correspondante), ce qui ajoute la classe `.show` au wrapper de l'iframe pour la rendre visible.
