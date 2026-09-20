# Bouton d'affichage du résultat

Cette capacité documente le fonctionnement du bouton "Afficher le résultat" que l'on retrouve dans les tutoriels.

## L'interaction entre le Bouton et l'Iframe
Dans les fichiers Markdown des tutoriels, un bouton d'affichage est souvent placé juste avant l'iframe contenant la démonstration :
```html
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe class="auto-wrapper tuto-resultat" src="..."></iframe>
```
L'iframe possède la classe `auto-wrapper` (gérée par `iframe-controls.js`, voir la capacité correspondante) et la classe `tuto-resultat`.

## Le script `tuto.js`
La logique d'affichage est gérée par le script **`assets/js/tuto.js`**. 
Ce fichier Javascript effectue le traitement suivant :
1. Il écoute les clics sur tous les éléments possédant la classe `.btn-toggle-resultat`.
2. Lors d'un clic, il cherche dans le DOM l'élément suivant (ou un élément voisin) contenant la classe `.tuto-resultat`.
3. Une fois l'iframe ciblée trouvée, il recherche le conteneur parent `.iframe-wrapper` (généré par le script `iframe-controls.js`).
4. Il bascule (toggle) la classe `.show` sur cet élément conteneur.
5. Il met à jour le texte du bouton : "Afficher le résultat" ou "Masquer le résultat" selon l'état de visibilité.

La classe CSS `.show` annule le `display: none` de l'iframe de résultat, la rendant visible à l'écran.
