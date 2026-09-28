Voici une proposition complète de cahier des charges technique et fonctionnel. Il est structuré pour répondre aux exigences d'une architecture orientée pédagogie active, permettant des évaluations de live coding sans nécessiter de serveur backend complexe.

Ce document est prêt à être intégré dans un dépôt de documentation projet.

---

# Cahier des Charges : Module de Live Coding In-Browser (Front-end & PHP)

## 1. Contexte et Objectifs du Projet

Le projet consiste à développer un éditeur de code embarqué, 100% côté client, destiné à des apprenants en développement web. L'outil doit permettre la pratique et l'évaluation sur des unités d'apprentissage atomiques.

**Objectifs principaux :**

* Fournir un environnement de type "bac à sable" autonome pour le HTML, CSS, JavaScript et PHP 8.2.
* S'affranchir d'une infrastructure serveur (conteneurs Docker, machines virtuelles) pour l'exécution du code PHP.
* Standardiser l'expérience de développement en offrant les mêmes raccourcis et la même auto-complétion que Visual Studio Code.
* S'intégrer facilement dans des plateformes existantes, qu'il s'agisse d'un LMS (type Soli-LMS) ou d'une documentation statique hébergée (ex: GitHub Pages avec Jekyll).
* Supporter des formats d'évaluation stricts (ex: sessions de live coding de 40 minutes) grâce à une grande fluidité et zéro temps d'installation.

## 2. Périmètre Fonctionnel (User Stories)

* **En tant qu'apprenant :**
* Je peux écrire du code HTML, CSS et JS dans trois onglets ou panneaux distincts et voir le résultat visuel s'actualiser en temps réel dans une zone d'aperçu.
* Je peux basculer sur un mode "Backend", écrire du code PHP, et cliquer sur un bouton "Exécuter" pour voir le résultat texte/console de mon script.
* Je bénéficie de la coloration syntaxique, de l'indentation automatique et de l'IntelliSense (détection d'erreurs) pendant la frappe.


* **En tant que concepteur pédagogique (formateur) :**
* Je peux initialiser l'éditeur avec du code de démarrage pré-rempli (injected via des fichiers statiques, du front-matter Markdown ou des props de composants).



## 3. Spécifications Techniques

### 3.1. Stack Technologique (Côté Client)

* **Moteur d'Édition :** `Monaco Editor` (version CDN via RequireJS). Choisi pour sa robustesse et sa fidélité à l'environnement VS Code natif.
* **Moteur d'Exécution PHP :** `@php-wasm/web`. Module WebAssembly permettant de compiler et d'exécuter l'interpréteur PHP 8.2 directement dans le thread du navigateur.
* **Framework CSS :** `Tailwind CSS` (couplé éventuellement à des composants Preline UI) pour construire une interface utilitaire, rapide et responsive.
* **Réactivité & Logique UI :** Vanilla JavaScript ou `Alpine.js`. Alpine.js est recommandé pour gérer facilement les états de l'interface (onglets actifs, état de chargement du bouton d'exécution WASM) avec une syntaxe légère directement dans le HTML.

### 3.2. Architecture de l'Application

L'application fonctionnera selon deux flux de traitement distincts :

1. **Flux Front-end (HTML/CSS/JS) :**
* Écoute de l'événement `onDidChangeModelContent` de Monaco Editor.
* Concaténation des chaînes de caractères.
* Injection via `document.write()` dans un élément `<iframe>` (sandboxé) servant d'aperçu en direct.


2. **Flux Back-end (PHP) :**
* Instanciation asynchrone du module `PhpWeb` au chargement de la page.
* Récupération du code via `phpEditor.getValue()`.
* Exécution via `php.run()`.
* Interception de la sortie standard (`output` event) pour affichage dans une balise `<pre>` simulant un terminal.



## 4. Interface Utilisateur (UI / UX)

Le design de l'interface doit adopter une approche "Ligne Claire" (flat design, contours nets, lisibilité maximale) pour minimiser la surcharge cognitive pendant l'apprentissage.

* **Palette de couleurs suggérée :** Un fond sombre pour l'éditeur (thème `vs-dark`), contrastant avec des boutons d'action ou des bordures utilisant des teintes de marque bien définies (ex: accents en Orange Spartel ou Bleu Méditerranée pour les boutons d'exécution).
* **Disposition (Layout) :**
* **En-tête :** Titre de l'exercice, chronomètre (optionnel pour les évaluations), et boutons d'action ("Exécuter le PHP", "Réinitialiser").
* **Corps (Split 50/50) :**
* *Zone Gauche :* Conteneur de l'éditeur Monaco, avec un système d'onglets (HTML | CSS | JS | PHP) piloté par Alpine.js.
* *Zone Droite :* Bascule automatique selon l'onglet actif. Si HTML/CSS/JS -> Affichage de l'iframe de rendu visuel. Si PHP -> Affichage de la console d'exécution sur fond noir textuelle.





## 5. Contraintes et Points de Vigilance

* **Limitations de WebAssembly :** L'exécution de `php-wasm` est isolée. Il n'y a pas d'accès direct à une véritable base de données MySQL distante. Pour les exercices nécessitant une base de données, il faudra configurer une base SQLite embarquée (en mémoire) prise en charge par l'extension PDO de la version WASM.
* **Gestion du Redimensionnement :** L'option `automaticLayout: true` de Monaco Editor doit être strictement activée pour éviter que le canevas de l'éditeur ne déborde lors des ajustements de fenêtres.
* **Chargement Asynchrone :** Le bouton "Exécuter" pour le PHP doit être désactivé (état *disabled* avec indicateur visuel de chargement) tant que le binaire `.wasm` (quelques mégaoctets) n'a pas fini d'être téléchargé et mis en cache par le navigateur.

## 6. Structure de Fichiers (Déploiement Statique)

Si le projet est intégré dans une documentation Jekyll (ex: thème Just the Docs) ou un portail statique :

```text
/assets/
  ├── css/
  │   └── tailwind-compiled.css   # Fichier de styles généré
  ├── js/
  │   ├── editor-init.js          # Logique de chargement de Monaco
  │   └── php-runner.js           # Importation du module WebAssembly
/_includes/
  └── live-editor.html            # Composant réutilisable (Snippet)
/_exercices/
  └── sprint-1/
      └── decouverte-variables.md # Fichier Markdown contenant le Front-Matter (code initial)

```