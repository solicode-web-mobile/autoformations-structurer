# Plan d'Action : Étape 4 - Flux de travail et Déploiement sur N2/N3

L'étape 4 détaille comment utiliser cette nouvelle architecture au quotidien pour développer des fonctionnalités et comment configurer vos autres sites (N2 et N3) pour qu'ils bénéficient de cette infrastructure.

## 1. Flux de travail de développement (Workflow quotidien)

Une fois les scripts de l'étape 3 créés, voici comment se déroulera la création d'une nouvelle fonctionnalité :

1. **Développement (Local First)**
   - Vous travaillez sur votre site principal (ex: N1).
   - Vous ou l'agent IA modifiez le CSS (`base.css`) ou les scripts JavaScript.
   - Vous testez et validez visuellement avec `jekyll serve` en local.

2. **Synchronisation (Push)**
   - La fonctionnalité est stable. Vous souhaitez la partager.
   - Vous exécutez la commande : `.\push_theme.ps1 -Version "v1.1.0"`
   - *Action automatique :* Les fichiers sont copiés vers `autoformations-core-theme`, commités, taggés `v1.1.0`, et envoyés sur GitHub.

3. **Mise à jour des autres sites (Pull)**
   - Vous ouvrez le projet N2.
   - Vous exécutez la commande : `.\pull_theme.ps1`
   - *Action automatique :* Le socle commun de N2 est écrasé et mis à jour avec la version `v1.1.0` du thème central. Le contenu pédagogique de N2 reste intact.

---

## 2. Configuration des autres sites (N2 et N3)

Actuellement, nous configurons l'architecture sur le dépôt `autoformations-structurer` (qui agit comme N1). 
Pour que le système fonctionne sur N2 et N3, il faudra effectuer une initialisation très simple sur chacun d'eux.

**Pour configurer N2 et N3, il suffira de :**
1. Copier le fichier `theme-sync.json` à la racine de N2 et N3.
2. Copier les scripts `push_theme.ps1` et `pull_theme.ps1` à la racine de N2 et N3.
3. C'est tout ! Dès que vous lancerez `.\pull_theme.ps1` dans N2 ou N3, ils iront chercher le dépôt parent `../autoformations-core-theme` et mettront à jour leurs propres layouts et assets.

## Prochaine Action
Si ce flux de travail (Workflow) répond parfaitement à vos attentes pour le développement avec un agent IA, nous pouvons clore la phase de planification (le cahier des charges) et passer à la phase de développement effectif (l'implémentation de l'Étape 3 : écrire les scripts).
