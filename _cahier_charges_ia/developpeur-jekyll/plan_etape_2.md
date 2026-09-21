# Plan d'Action : Étape 2 - Création du Dépôt "Theme Core"

L'étape 2 consiste à mettre en place le réceptacle central qui recevra les fichiers communs lors de vos synchronisations. Ce dépôt (`autoformations-core-theme`) n'est **pas** un site web Jekyll exécutable. C'est uniquement une "bibliothèque" de fichiers (une archive de code) qui stockera la vérité absolue de votre socle technique partagé.

Puisque votre dépôt distant existe déjà sur GitHub, la méthode la plus simple est de le cloner directement.

## 1. Clonage du dépôt

Ouvrez un terminal dans le dossier parent de vos projets (par exemple `d:\solicode-web-mobile\`) et exécutez la commande suivante :

```bash
git clone https://github.com/solicode-web-mobile/autoformations-core-theme.git
```

## 2. Vérification

Une fois la commande terminée, vérifiez que le dossier `autoformations-core-theme` a bien été créé au même niveau que `autoformations-structurer`. 
Le dossier est désormais lié automatiquement au dépôt GitHub. S'il est vide (ou s'il ne contient qu'un `README.md`), c'est tout à fait normal.

## 3. C'est tout !

Votre dépôt central est désormais prêt sur votre machine. Il sera automatiquement rempli et mis à jour par le script `push_theme` (que nous développerons à l'étape 3) lorsqu'il lira votre fichier `theme-sync.json`.
