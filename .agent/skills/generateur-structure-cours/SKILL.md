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
En plus des Domaines et UAs, tu as la capacité de créer les fichiers de tutoriels vides (mais fonctionnels) à partir des dossiers de conception (ex: `_tutos/D.XXX.X-mini_code/_conception-tutoriels/T.XXX.XXX/fiche-tuto-T.XXX.XXX.md`).

## Règles de création des tutoriels :
1. **Organisation des dossiers :** Les tutoriels doivent être créés dans le répertoire `_tutos/`, organisés par domaine (format : `[code domaine]-[mini-code]`), puis pour chaque tuto un dossier avec son code.
   - Chemin attendu : `_tutos/D.XXX.X-mini_code/T.XXX.XXX/`
2. **Fichier de base (version normale) :** Au début, tu ne dois créer **que le fichier pour la version normale** du tutoriel.
   - Le nom du fichier doit idéalement être formaté avec le slug du tutoriel et la version (ex: `slug-du-tuto.normal.md`).
3. **Contenu du fichier généré :**
   - Le fichier **ne doit pas être entièrement rédigé**. Il doit uniquement contenir le squelette de base :
     - **Un Front Matter complet et valide** pour la version "normal", conforme aux règles du skill `rédacteur-tutos` (incluant `title`, `layout: tuto`, `slug`, `permalink: /tutos/:slug/`, `tuto_id`, `type`, `version: normal`, `ua`, `data_html`, etc.).
     - La section `## 1. Objectif` contenant l'objectif directement extrait de la fiche de conception.
     - Le reste du tutoriel sera rédigé plus tard, tu laisses donc le fichier vide après l'objectif ou avec des sections vides.

