# Gestion des Médias et Images (Capacité Globale)

Ce document définit la règle stricte de stockage et d'organisation des images et autres médias (SVG, PNG, JPG) générés ou utilisés pour illustrer les tutoriels.

## Règle d'or : Isolation et hiérarchisation des médias

Contrairement aux pratiques habituelles de développement web qui centralisent les ressources dans un dossier `assets/`, les illustrations spécifiques aux tutoriels obéissent à une règle de classification métier stricte :

1. **Dossier Racine** : Toutes les images illustrant les tutoriels doivent être sauvegardées à la racine du projet dans le répertoire `images-tutos/` (et non dans `assets/images/`).
2. **Hiérarchie stricte** : À l'intérieur de `images-tutos/`, l'organisation doit reproduire le code du domaine de compétence puis l'ID du tutoriel.
   
**Structure attendue :**
`/images-tutos/[Domaine]/[ID_Tuto]/[nom-image.ext]`

**Exemple :**
Pour une image illustrant les 3 zones de Git dans le tutoriel `T.151.121` (qui appartient au domaine `D.151.1-git`) :
- Le chemin physique sera : `images-tutos/D.151.1-git/T.151.121/git-zones.svg`
- Le chemin appelé dans le Markdown du tutoriel sera :
  `<img src="{{ '/images-tutos/D.151.1-git/T.151.121/git-zones.svg' | relative_url }}">`

Cette arborescence garantit que les images ne se mélangent pas et peuvent être facilement sourcées pour chaque session d'apprentissage.
