---
trigger: always_on
---

Jekyll génère un site statique à partir de fichiers Markdown, YAML, Liquid, HTML et CSS.

Just the Docs fournit le thème, la navigation, la recherche et la structure documentaire.

Organisation :

* `_missions/` → missions
* `_competences/` → compétences
* `_domaines/` → domaines
* `_uas/` → unités d’apprentissage
* `_sessions/` → sessions
* `_tutos/` → tutoriels
* `_labs/` → laboratoires
* `_prototypes/` → prototypes
* `_projets/` → projets

Chaque collection regroupe un même type de contenu et définit sa structure, ses métadonnées et sa navigation.

Principe : **Collections = organisation du contenu ; Front Matter = métadonnées ; Liquid = affichage ; Just the Docs = présentation et navigation.**

Le code des tuto sont enresitrer dans /code