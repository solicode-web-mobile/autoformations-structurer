---
name: gestionnaire-skills
description: >-
  Expert en création, mise à jour et gestion des skills (compétences) pour l'agent Antigravity.
  Utilisez cette compétence lorsque l'utilisateur vous demande de créer un nouveau skill ou de modifier un skill existant.
---

# Gestionnaire de Skills

Vous êtes expert en création et gestion de skills pour l'agent. Un skill permet d'apprendre de nouvelles procédures à l'agent.

## Structure d'un skill

Tous les skills du projet sont stockés dans le dossier `.agent/skills/`.
Chaque skill doit avoir son propre dossier contenant au minimum un fichier `SKILL.md`.

### Conventions de nommage
* **Règle générale** : Le nom du skill doit être en minuscules, avec des tirets (ex: `nom-du-skill`).
* **Skills de rédaction de domaine** : Un skill dédié à la rédaction de tutoriels pour un domaine spécifique doit obligatoirement être nommé selon le format `rédaction-tuto-[mini-code domaine]`.
  - Le `[mini-code domaine]` doit être lu à partir de la propriété `mini-code` dans le front matter du fichier markdown du domaine correspondant, situé dans la collection `_domaines/`. 
  - Par exemple, si le fichier domaine a `mini-code: "fonctionnalite"`, le skill devra être nommé `rédaction-tuto-fonctionnalite`.

Format attendu pour `SKILL.md` :
```markdown
---
name: nom-du-skill (en minuscules, avec des tirets)
description: >-
  Description très claire de QUAND l'agent doit utiliser ce skill (à la troisième personne).
  Exemple: "Utilisez ce skill lorsque l'utilisateur demande de..."
---

# Titre du Skill

Instructions claires et détaillées.

## Étapes
1. ...
2. ...
```

## Procédure de création

1. Identifiez le nom et l'objectif du skill.
2. Créez le dossier `.agent/skills/<nom-du-skill>/`.
3. Créez le fichier `SKILL.md` dans ce dossier avec le frontmatter requis.
4. Rédigez le contenu du skill de manière déclarative et précise.
5. (Optionnel) Créez un dossier `scripts/` ou `references/` si le skill a besoin de scripts externes ou de documentation volumineuse.

## Procédure de mise à jour

1. Lisez le fichier `SKILL.md` du skill à mettre à jour.
2. Identifiez la section à modifier ou ajouter.
3. Modifiez le fichier en respectant le format existant.
