# Plan d'Action : Étape 1 - Définition du Périmètre Commun (Push/Pull)

Pour que l'architecture "Local-First avec Synchronisation" fonctionne parfaitement, la toute première étape consiste à **définir avec précision la frontière** entre ce qui appartient au socle commun (le thème partagé) et ce qui appartient en propre à un site spécifique (N1, N2, N3).

Ce travail de cartographie est essentiel car il va dicter le comportement des futurs scripts `push_theme` et `pull_theme`.

## 1. Ce qui est STRICTEMENT "Commun" (Le Core Theme)
Ces dossiers et fichiers contiennent la logique globale de l'interface, les styles généraux, et les scripts interactifs de la plateforme. **Ils seront écrasés lors d'un `pull_theme` et versionnés dans le dépôt central.**

* **`_includes/`** : L'intégralité de ce dossier. Il contient les briques d'interface réutilisables (navigation, composants Markdown spécifiques, etc.).
* **`assets/css/` (Fichiers Core)** : 
  * `base.css` (Les styles globaux).
  * Les fichiers CSS liés aux concepts généraux de la formation (ex: `mission.css`, `tuto.css`, `ua.css`, `session.css`, etc. tels que définis dans les règles de votre skill Jekyll).
* **`assets/js/` (Fichiers Core)** :
  * `formation.js`, `afficher-editor.js`, `code-to-iframe.js` (les scripts interactifs globaux).
* **`_layouts/` (Fichiers Core)** :
  * `default.html` et `page.html` (Les gabarits de base de Just the Docs).
  * Les layouts structurels communs (ex: `missions.html`, `tuto.html`, `session.html`, `ua.html`, etc.).

## 2. Ce qui est STRICTEMENT "Local" (Spécifique à N1, N2, N3)
Ces éléments représentent le contenu pédagogique propre au niveau et les affichages spécifiques à ses domaines de compétences. **Les scripts `push_theme` et `pull_theme` doivent ignorer ces fichiers.**

* **Le Contenu Markdown (Les Collections)** :
  * `_missions/`, `_tutos/`, `_projets/`, `_uas/`, `_sessions/`, etc.
  * La page d'accueil (`index.md`) et toute page Markdown à la racine.
* **Les Données (`_data/`)** :
  * La navigation (`navigation.yml`) et autres données statiques propres au site.
* **La Configuration (`_config.yml`)** :
  * Contient le nom du site, l'URL, les définitions des collections, etc.
* **`_layouts/` (Spécifiques)** :
  * Ex: `resultat-frontend.html` (N1) ou `resultat-backend.html` (N2).
* **`assets/` (Spécifiques)** :
  * Les images, logos et éventuels CSS hyper-ciblés qui ne sont pas dans le core.

## 3. L'Action : Création du fichier de Mapping (Fichier `theme-sync.json`)
Pour que les scripts sachent quoi synchroniser, la meilleure pratique est de créer un fichier de configuration à la racine de vos projets (ex: `theme-sync.json`).

**Voici la structure de configuration proposée que nous utiliserons pour l'étape 3 :**

```json
{
  "sync_directories": [
    "_includes"
  ],
  "sync_files": [
    "assets/css/base.css",
    "assets/css/mission.css",
    "assets/css/tuto.css",
    "assets/css/ua.css",
    "assets/css/session.css",
    "assets/js/formation.js",
    "assets/js/afficher-editor.js",
    "assets/js/code-to-iframe.js",
    "_layouts/default.html",
    "_layouts/page.html",
    "_layouts/missions.html",
    "_layouts/tuto.html",
    "_layouts/ua.html",
    "_layouts/session.html"
  ],
  "exclude": [
    "_layouts/resultat-*.html"
  ]
}
```

> [!IMPORTANT]
> **Validation Requise**
> Avant de passer à la création du dépôt (Étape 2) et des scripts (Étape 3), vérifiez cette liste. Manque-t-il des fichiers CSS/JS à inclure dans le socle commun ? Avez-vous des règles spécifiques d'exclusion à ajouter ?
