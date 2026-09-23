# Description de l'Architecture (Format Texte)

## Vue d'Ensemble
L'application est un environnement de "Live Coding" 100% côté client (In-Browser). Elle permet d'éditer et d'exécuter du code HTML, CSS, JS et PHP sans nécessiter de backend serveur.

## Composants Principaux

1. **Interface Utilisateur (UI)** :
   - Construite avec HTML standard et **Tailwind CSS**.
   - Dynamisée avec **Alpine.js** pour la gestion de l'état (onglets, boutons d'action).
   - Structurée en deux panneaux principaux : Éditeur (gauche) et Prévisualisation (droite).

2. **Éditeur de Code** :
   - Propulsé par **Monaco Editor** (l'éditeur derrière VS Code).
   - Intégré via RequireJS.
   - Gère la coloration syntaxique et l'autocomplétion pour HTML, CSS, JS et PHP.

3. **Moteur d'Exécution Web (HTML/CSS/JS)** :
   - Utilise un `iframe` pour le rendu en temps réel du code web.
   - Intercepte les appels `console.log` du code JS pour les afficher dans une console virtuelle côté client.

4. **Moteur d'Exécution PHP** :
   - Utilise le package **@php-wasm/web** pour compiler et exécuter du code PHP directement dans le navigateur via WebAssembly.
   - Affiche les résultats et les erreurs dans un "Terminal PHP" dédié.
