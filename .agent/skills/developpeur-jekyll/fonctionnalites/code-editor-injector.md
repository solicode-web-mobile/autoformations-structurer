# Fonctionnalité : Bouton "Exécuter le code" et Injecteur d'éditeur

## Description
Le script `code-editor-injector.js` détecte les blocs de code (`<pre><code>`) dans les tutoriels et ajoute dynamiquement un bouton "Exécuter le code" juste en dessous. Lorsqu'on clique sur ce bouton, il génère une iframe pointant vers l'éditeur de code intégré au site, avec le code pré-rempli via les paramètres d'URL.

## Interaction avec `iframe-controls.js`
Lors de la création de l'iframe, le script appelle `window.initAutoIframe(iframe)` (fourni par `iframe-controls.js`). Cette fonction encapsule l'iframe dans une `div.iframe-wrapper` contenant une barre de titre et des boutons de contrôle (plein écran, supprimer, etc.).

## Gestion du clic (Toggle)
Pour éviter de générer de multiples iframes à chaque fois qu'on clique sur "Exécuter le code", le script vérifie l'élément situé immédiatement après le conteneur du bouton (`buttonWrapper.nextElementSibling`).
- Puisque `initAutoIframe` a pu encapsuler l'iframe, cet élément peut être soit une `iframe.auto-wrapper` brute (avant encapsulation complète), soit une `div.iframe-wrapper` (après encapsulation).
- Si l'élément existe, le script bascule simplement son état d'affichage (`display: block` ou `none`) en faisant un basculeur visuel, sans dupliquer l'élément dans le DOM.
