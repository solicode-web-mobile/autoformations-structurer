# Synchronisation du Socle Commun (Core Theme)

Cette documentation explique comment fonctionne l'architecture multi-sites (Local-First) entre vos projets (N1, N2, N3) et le dépôt central `autoformations-core-theme`.

## Le Principe

L'approche choisie abandonne l'utilisation classique du `remote_theme` Jekyll au profit du **Local-First**.
Les fichiers communs (CSS globaux, JS globaux, Layouts génériques et Includes) existent physiquement dans le dossier de votre projet. Cela permet à l'agent IA de les lire et de les modifier directement, avec un retour visuel immédiat en local.

Pour partager ces fichiers avec les autres sites de l'écosystème, nous utilisons un dépôt central (`autoformations-core-theme`) situé dans le **dossier parent** de votre projet. 
La liste stricte des fichiers et dossiers synchronisés est définie dans `theme-sync.json`.

---

## 1. Diffuser une nouveauté vers le Socle Commun (Le "Push")

Si vous développez une fonctionnalité sur le projet actuel et modifiez des éléments de design ou de structure qui doivent être partagés à l'ensemble des sites :

1. Assurez-vous d'avoir testé et validé vos changements en local.
2. Exécutez le script : `.\push_theme.ps1`
3. **Que fait ce script ?**
   - Il lit la liste définie dans `theme-sync.json`.
   - Il **copie** les fichiers autorisés depuis votre projet vers le dossier parent `../autoformations-core-theme`.
   - Il **sauvegarde (commit)** et **publie (push)** automatiquement ces modifications sur le dépôt GitHub central `autoformations-core-theme`.

*Optionnel :* Vous pouvez marquer une version spécifique avec un tag Git en utilisant la commande `.\push_theme.ps1 -Version "v1.2.0"`.

---

## 2. Mettre à jour un Projet Local (Le "Pull")

Si vous ouvrez un autre de vos projets (par exemple N2 ou N3) et souhaitez qu'il bénéficie des dernières nouveautés du socle technique :

1. Ouvrez un terminal à la racine du projet que vous souhaitez mettre à jour.
2. Exécutez le script : `.\pull_theme.ps1`
3. **Que fait ce script ?**
   - Il se place temporairement dans `../autoformations-core-theme` et télécharge les dernières mises à jour de GitHub (`git pull`).
   - Il lit la liste définie dans `theme-sync.json`.
   - Il **importe** ces fichiers depuis le dépôt parent vers votre projet local (en remplaçant les anciens).

Votre site local est alors instantanément à jour avec le dernier socle, tout en préservant intact son contenu pédagogique spécifique (vos collections `_tutos`, `_missions`, etc.) !
