# Plan de Développement et Architecture de l'Application

Ce document détaille l'architecture et le plan de développement par sprints pour le module de Live Coding In-Browser, en respectant les principes de la pédagogie active et du "100% client-side".

## 1. Architecture de l'Application

L'architecture est pensée pour être modulaire, facile à maintenir et sans dépendance serveur, suivant la philosophie "Ligne Claire".

### Principes Architecturaux
- **100% Client-Side :** Aucune dépendance à un backend. Le code est exécuté localement dans le navigateur.
- **Séparation des Préoccupations :**
  - **Données :** Code initial injecté au chargement (via variables JS, objets JSON externes ou attributs HTML).
  - **Édition :** Gérée par `Monaco Editor`.
  - **Exécution :** Gérée par un `iframe` pour le Web (HTML/CSS/JS) et `@php-wasm/web` pour PHP.
  - **Interface et État :** Gérés par `Alpine.js` pour une réactivité simple et déclarative.
  - **Style :** Géré par `Tailwind CSS`.

### Structure des Fichiers (Déploiement Statique)
```text
/
├── index.html                  # Point d'entrée, contenant l'UI HTML
├── /assets/
│   ├── /css/
│   │   └── tailwind.css        # Styles compilés (Tailwind)
│   └── /js/
│       ├── /components/        # Logique des composants UI (Alpine.js x-data)
│       │   ├── tabs.js         # Logique du système d'onglets
│       │   └── editor-ui.js    # Logique des états de l'interface
│       ├── app.js              # Initialisation d'Alpine.js et import des modules
│       ├── editor-init.js      # Chargement et configuration de Monaco Editor
│       └── php-runner.js       # Chargement du WebAssembly PHP et logique d'exécution
└── /exercices/                 # Dossier contenant les données des exercices (fichiers JSON ou JS)
```

---

## 2. Plan de Développement par Sprints

Le développement est découpé en 5 sprints itératifs pour assurer une validation continue.

### Sprint 1 : Fondation et Interface Utilisateur (UI/UX)
**Objectif :** Mettre en place la structure de base, le style et la navigation par onglets.
- [ ] Initialiser le projet avec un fichier `index.html` basique.
- [ ] Intégrer Tailwind CSS via CDN (pour le dev) ou configuration de build locale.
- [ ] Construire le Layout principal (En-tête, Zone Éditeur 50%, Zone Rendu/Console 50%) selon le style "Ligne Claire" (thème sombre pour l'éditeur, couleurs accentuées).
- [ ] Intégrer Alpine.js.
- [ ] Créer le système d'onglets (HTML | CSS | JS | PHP) avec Alpine.js (`x-data`, `x-show`).

### Sprint 2 : Intégration du Moteur d'Édition (Monaco)
**Objectif :** Avoir un éditeur de code fonctionnel avec coloration syntaxique.
- [ ] Charger Monaco Editor via CDN (RequireJS).
- [ ] Créer le script `editor-init.js` pour instancier l'éditeur.
- [ ] Configurer l'éditeur : thème `vs-dark`, `automaticLayout: true` (pour le responsive).
- [ ] Mettre en place le changement de langage (HTML, CSS, JS, PHP) dynamique lors du changement d'onglet (via l'API Monaco).
- [ ] Ajouter la possibilité de charger du code initial dans l'éditeur.

### Sprint 3 : Flux Front-end (Live Preview Web)
**Objectif :** Permettre le rendu en temps réel du code HTML, CSS et JS.
- [ ] Ajouter un `iframe` sandboxé dans la zone de rendu (visible quand les onglets HTML/CSS/JS sont actifs).
- [ ] Écouter l'événement `onDidChangeModelContent` de Monaco.
- [ ] Récupérer et concaténer le contenu des "fichiers" virtuels HTML, CSS et JS.
- [ ] Injecter le résultat dans l'iframe via `document.write()` ou `srcdoc`.
- [ ] Vérifier la fluidité et les performances de la mise à jour en direct.

### Sprint 4 : Flux Back-end (Exécution PHP via WASM)
**Objectif :** Exécuter du code PHP dans le navigateur.
- [ ] Intégrer le module `@php-wasm/web`.
- [ ] Créer le script `php-runner.js` pour gérer l'instanciation asynchrone de `PhpWeb`.
- [ ] Gérer l'état de chargement dans l'UI avec Alpine.js (bouton "Exécuter" désactivé pendant le téléchargement du `.wasm`).
- [ ] Câbler le bouton "Exécuter" : récupérer le code PHP de l'éditeur et appeler `php.run()`.
- [ ] Intercepter la sortie standard (stdout) et les erreurs, et les afficher dans une balise `<pre>` simulant une console (visible quand l'onglet PHP est actif).

### Sprint 5 : Finalisation, Modularité et Tests
**Objectif :** Rendre le composant intégrable, robuste et finaliser l'UX.
- [ ] Refactoriser le code JS pour assurer une séparation stricte (données, édition, exécution, UI).
- [ ] Implémenter le bouton "Réinitialiser" pour remettre le code à son état initial.
- [ ] Gérer les erreurs explicites (ex: erreur de syntaxe PHP).
- [ ] Effectuer des tests de bout en bout (chargement, édition, exécution web, exécution PHP, responsive).
- [ ] Documenter les instructions d'intégration (comment l'embarquer dans un LMS ou Jekyll avec du code injecté).


### Sprint 6 : Amélioration de l'UI et Responsive Design
**Objectif :** Optimiser l'affichage pour les petits espaces et les mobiles, et maximiser l'espace d'édition.
- [x] Rendre l'interface responsive (iframe avec espace minimal, affichage mobile).
- [x] Supprimer le titre statique de l'exercice (ex: "Exercice : Découverte des Variables").
- [x] Déplacer et réduire l'affichage de la version PHP (ex: "PHP 8.2 & Web" dans une zone secondaire).
- [x] Réduire la zone des boutons ("Réinitialiser", "Exécuter PHP") à son strict minimum pour maximiser l'espace alloué au code.

### Sprint 7 : Gestion Dynamique de l'Environnement et des Onglets
**Objectif :** Adapter l'interface et les ressources chargées selon les fichiers réellement fournis.
- [x] Masquer les onglets (HTML, CSS, JS, PHP) dont le code n'a pas été fourni.
- [x] Conditionner le chargement et l'initialisation de `@php-wasm/web` à la présence de code PHP (optimisation des performances).

### Sprint 8 : Environnement de Test d'Intégration
**Objectif :** Créer une page de test simulant l'intégration de l'éditeur via URL.
- [x] Créer une page `index.iframe.html`.
- [x] Permettre le passage des arguments de test (code source, onglets actifs) directement via l'URL.
- [x] Tester le comportement dynamique de l'éditeur avec différentes combinaisons d'arguments.

### Sprint 9 : Console Javascript Virtuelle
**Objectif :** Permettre la visualisation des sorties `console.log()` du code JS directement dans l'interface.
- [x] Créer un espace "Console JS" dans la zone d'affichage (soit sous l'iframe, soit dans un onglet dédié côté rendu).
- [x] Injecter un script dans l'iframe pour intercepter les appels natifs (`console.log`, `console.warn`, `console.error`).
- [x] Relayer ces messages vers l'interface parente et les afficher proprement dans la console virtuelle.

### Sprint 10 : Support des Documents HTML Complets (Smart Wrapping)
**Objectif :** Gérer les exercices avancés (apprentissage du `<head>`, du `<doctype>`) sans casser le rendu et sans surcharger l'interface avec de nouveaux onglets.
- [x] Analyser le contenu de l'onglet HTML pour détecter la présence de balises structurelles (`<html`, `<body`, `<head`).
- [x] **Comportement intelligent (Smart Wrapping) dans `live-preview.js` :**
  - *Cas 1 (Débutant / Fragments)* : Si le code ne contient pas de `<body>`, l'éditeur l'enveloppe automatiquement dans un template standard (comme actuellement).
  - *Cas 2 (Avancé / Page complète)* : Si le code est une page complète, l'éditeur ne l'enveloppe pas. Il se contente d'injecter dynamiquement le CSS et le JS proxy juste avant la fermeture des balises `</head>` et `</body>`.
- *Avantage UX (Ligne Claire)* : On garde un seul onglet "HTML". L'éditeur s'adapte magiquement au niveau de l'exercice, évitant toute confusion pour l'apprenant.

### Sprint 11 : Extraction et Affichage du Titre de la Page
**Objectif :** Simuler le comportement d'un véritable navigateur en récupérant et affichant le titre (balise `<title>`) défini dans le code HTML de l'apprenant.
- [x] Analyser le code HTML pour extraire le contenu de la balise `<title>`, ou intercepter le titre directement depuis l'iframe de rendu.
- [x] Créer une petite barre d'adresse/titre au-dessus de l'iframe de l'Aperçu en Direct.
- [x] Mettre à jour dynamiquement cette barre avec le titre récupéré (et prévoir un titre par défaut comme "Sans titre" si la balise est absente).

### Sprint 12 : Sélection Dynamique de l'Onglet Actif
**Objectif :** Permettre au créateur de l'exercice de forcer l'ouverture d'un onglet spécifique au chargement (ex: ouvrir directement l'onglet CSS si l'exercice porte sur le style).
- [x] Ajouter le support d'un paramètre `activeTab` (dans `window.exerciseData` et/ou via l'URL).
- [x] Modifier la logique d'initialisation (`tabs.js` ou `editor-init.js`) pour basculer automatiquement sur cet onglet au démarrage.
- [x] Assurer un fallback intelligent (si l'onglet demandé est vide ou invalide, sélectionner le premier onglet disponible).

### Sprint 13 : Script de Déploiement Automatisé (PowerShell)
**Objectif :** Faciliter la mise à jour et le déploiement du code de l'éditeur vers le projet d'intégration (LMS ou backend externe) via un script automatisé.
- [x] Créer un script `deploy.ps1` (PowerShell) à la racine du projet.
- [x] Le script doit nettoyer le répertoire de destination (suppression des anciens fichiers de l'éditeur).
- [x] Le script doit copier la dernière version du code source depuis Git vers la destination.
- [x] Le script doit exclure formellement les dossiers de développement internes (comme `.git`, `.agent`, etc.) pour garder une intégration légère et propre.