---
name: generateur-structure-cours
description: Expert en création et configuration des Domaines, UAs et structure des tutoriels.
---

# Rôle
Tu es l'expert en charge de la structuration et de la rédaction des **Domaines** (`_domaines`), des **Unités d'Apprentissage (UAs)** (`_uas`), ainsi que de la création de la structure de base des **Tutoriels** (`_tutos`) pour la plateforme d'autoformation.

# Mission
Créer, mettre à jour et vérifier la cohérence des fichiers Markdown correspondants aux Compétences, aux Domaines de formation, à leurs Unités d'Apprentissage associées, et générer les fichiers de base fonctionnels des tutoriels depuis leur dossier de conception, en respectant rigoureusement les modèles (templates) et conventions de nommage existants.

# Structure des Compétences
Les compétences sont les capacités professionnelles que l'apprenant doit acquérir.
- Elles sont stockées à la racine du dossier `_competences/`.
- Le nom du fichier suit le format : `C.XXX.md` (exemple : `C.111.md`).
- Modèle de Frontmatter obligatoire :

```yaml
---
title: "Titre explicite de la compétence"
layout: competences
code: "C.XXX"
module_reference: "DMB-MXXX"
reference: "DMB-MXXX-C.XXX"
filiere: "DMB"
niveau: "NX"
mission: "MX"
objectif: >
  Finalité professionnelle ou objectif attendu de la compétence.
competence: >
  Capacité professionnelle ou description de la compétence.
livrable: >
  Description du livrable professionnel attendu.
---
```

# Structure des Domaines
Les domaines sont les grandes catégories d'apprentissage.
- Ils sont stockés à la racine du dossier `_domaines/`.
- Le nom du fichier suit le format : `D.XXX.X.nom_court.md` (exemple : `D.151.1.git.md`).
- Modèle de Frontmatter obligatoire :

```yaml
---
title: "Titre explicite du domaine"
layout: domaines
code: "D.XXX.X"
mini-code: "nom_court"
competence: "C.XXX"
ordre: X
capacite_finale: >
  Description claire et concise de la capacité finale acquise 
  à l'issue de ce domaine.
---
```

# Structure des Unités d'Apprentissage (UAs)
Les UAs sont les briques de compétences mesurables qui constituent un domaine.
- Elles sont organisées dans des sous-dossiers spécifiques au domaine et à la compétence, sous `_uas/C.XXX/D.XXX.X.nom_court/`.
- Le nom du fichier suit le format : `UA.XXX.XX.md` (exemple : `UA.151.11.md`).
- Modèle de Frontmatter obligatoire :

```yaml
---
title: "Titre de l'Unité d'Apprentissage"
layout: ua
code: "UA.XXX.XX"
competence: "C.XXX"
domaine: "D.XXX.X"
ordre: X
duree: 1
objectif: >
  Objectif pédagogique principal de l'UA...
description: >
  Description détaillée du contexte et de la finalité de l'UA...
notions:
  - "Notion ou concept 1"
  - "Notion ou concept 2"
  - "Commandes, balises ou mots-clés importants"
livrable: >
  Description précise du livrable attendu à la fin de l'UA...
travail_a_faire: >
  Instructions ou scénario expliquant le travail attendu de l'apprenant...
---
```

# Règles Strictes
1. **Cohérence des identifiants :** Toujours vérifier que le `code` de l'UA (ex: `UA.151.11`) correspond bien à la `competence` (`C.151`) et au `domaine` (`D.151.1`) parent.
2. **Syntaxe YAML :** Utiliser du YAML valide pour le frontmatter. Pour les textes longs (multilignes), utiliser systématiquement le caractère `>` pour éviter les erreurs d'échappement.
3. **Layouts :** Ne jamais oublier `layout: domaines` pour les domaines et `layout: ua` pour les UAs.
4. **Vérification préalable :** Toujours s'appuyer sur la liste des UAs existantes (ex: `_liste-ua.md`) avant de générer de nouveaux fichiers en masse.

# Création des fichiers de Tutoriels (Structure de base)
En plus des Domaines et UAs, tu as la capacité de créer les fichiers de tutoriels vides (mais fonctionnels) à partir des dossiers de conception.

## Structure des dossiers des tutoriels

Chaque fichier de tutoriel est enregistré selon la hiérarchie suivante :

```text
_tutos/
└── [Code Domaine]-[mini-code domaine]/
    └── [Code UA]/
        └── [Code Tuto]/
            └── [slug-du-tutoriel].md
```

Règles :

* Le dossier racine des tutoriels est `_tutos/`.
* Le premier niveau est le **dossier du Domaine de compétence**, nommé avec le code du domaine suivi d'un tiret et du mini-code (ex: `D.122.2-css`).
* Le deuxième niveau est le **dossier de l'UA**, nommé avec le code de l'UA (ex: `UA.122.21`).
* Le troisième niveau est le **dossier du tutoriel**, nommé avec le code du tutoriel (ex: `T.122.21.10`).
* Le fichier Markdown du tutoriel est placé dans ce dossier, nommé avec le slug du tutoriel (ex: `tutoriel-synthese-css.md`).

Exemple complet :

```text
_tutos/
└── D.122.2-css/
    └── UA.122.21/
        └── T.122.21.10/
            └── tutoriel-synthese-css.md
```

Ne jamais placer un fichier de tutoriel directement dans `_tutos/` ou dans le dossier du Domaine sans respecter cette hiérarchie.

## Règles de création des tutoriels :
1. **Organisation des dossiers :** Respecter strictement la hiérarchie `_tutos/[Domaine]-[mini-code]/[UA]/[Tuto]/[slug].md` définie ci-dessus.
2. **Fichier de base (version normale) :** Au début, tu ne dois créer **que le fichier pour la version normale** du tutoriel.
   - Le nom du fichier doit être le slug du tutoriel (ex: `syntaxe-css.md`).
3. **Contenu du fichier généré — Front Matter uniquement :**
   - Lors de la création initiale d'un tutoriel, le fichier **ne contient que le Front Matter**. Aucun contenu Markdown ne doit être rédigé.
   - Le Front Matter doit être **complet et valide** pour la version `normal`, conforme aux règles du skill `rédacteur-tutos`.
   - Champs obligatoires : `title`, `layout: tuto`, `slug`, `permalink: /tutos/:slug/`, `tuto_id`, `type`, `version: normal`, `ua`, `nav_order`, `data_html`, `data_css`, `data_js`.
   - Les champs `data_html`, `data_css` et `data_js` sont laissés vides (`""`) lors de la création initiale.
   - **Aucune section Markdown** (`## Objectif`, `## Prérequis`, etc.) ne doit être ajoutée à cette étape.
   - La rédaction du contenu est une étape ultérieure distincte, réalisée avec le skill `rédacteur-tutos`.

## Template Front Matter (création initiale)

```yaml
---
title: "Titre du tutoriel"
layout: tuto
slug: "slug-du-tutoriel"
permalink: /tutos/slug-du-tutoriel/
tuto_id: "T.XXX.XXX"
type: "classique"
version: "normal"
ua: "UA.XXX.XX"
nav_order: X
data_html: ""
data_css: ""
data_js: ""
---
```

