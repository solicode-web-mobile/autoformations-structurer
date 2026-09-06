---
title: "Rôle des données dans une application"
layout: tuto
slug: "rôle-données"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.111"
version: "detaille"
ua: "UA.112.11"
nav_order: 1
---


## 1. Objectif

Comprendre la différence entre **information** et **donnée**, et comprendre pourquoi une application utilise des données pour réaliser une fonctionnalité.

À la fin du tutoriel, vous devez pouvoir identifier les données utilisées par une fonctionnalité simple du **Blog personnel**.

## 2. Prérequis

- Connaître les principales fonctionnalités du **Blog personnel**.

- Les maquettes du **Blog personnel** sont nécessaires : <a href="https://solicode-web-mobile.github.io/maquette-blog/" target="_blank">Maquette blog</a>


## 1.1. Information

Une **information** est ce que l’on veut connaître, transmettre ou communiquer.

Une information peut être exprimée avec des mots, une image, une date ou un nombre.

**Exemple :**

```text
Le titre de l’article est « Mon premier voyage ».
```

Ici, **« Mon premier voyage »** est une information sur l’article.

![Information]({{ '/assets/images/c112/T.112.111/information.600.jpg' | relative_url }})


## 1.2. Donnée

Une **donnée** est une information représentée sous une forme que l’application peut utiliser.

L’application informatique travaille avec des données pour pouvoir les **stocker, retrouver, modifier, traiter ou afficher**.

**Exemple :**

```text
titre = "Mon premier voyage"
```

Le texte **« Mon premier voyage »** représente l’information.
`titre = "Mon premier voyage"` représente cette information sous une forme que l’application peut utiliser.

On peut donc retenir :

```text
Information
     ↓
forme exploitable par l’application
     ↓
Donnée
```

![donnée]({{ '/assets/images/c112/T.112.111/donnée.600.jpg' | relative_url }})


## 1.3. Fonctionnalité

Une **fonctionnalité** est une exécution de l’application réalisée par un **acteur** pour répondre à un besoin.

Une fonctionnalité indique donc **qui fait quoi avec l’application**.

**Exemple :**

```text
Acteur : Visiteur
Fonctionnalité : afficher le détail d’un article
```

Le **Visiteur** demande à l’application d’afficher le détail d’un article.

![fonctionnalité]({{ '/assets/images/c112/T.112.111/fonctionnalité.600.jpg' | relative_url }})


## 1.4. Données utilisées par une fonctionnalité

Pour réaliser une fonctionnalité, l’application doit utiliser les données nécessaires.

Pour afficher le détail d’un article, elle doit par exemple connaître :

```text
titre
contenu
date
auteur
```

Ces données permettent à l’application de construire l’affichage demandé par le Visiteur.

Le lien est donc :

```text
Visiteur
   ↓
Afficher le détail d’un article
   ↓
Données de l’article
   ↓
Affichage du détail
```
![Données et fonctionnalité]({{ '/assets/images/c112/T.112.111/données-fonctionnalité.600.jpg' | relative_url }})


## 1.5. Pourquoi l’application utilise des données ?

Une application ne peut pas travailler directement avec une idée générale comme :

> « Afficher les informations de l’article. »

Elle doit disposer de données précises.

Par exemple :

```text
titre
contenu
date
auteur
```

L’application peut alors utiliser ces données pour répondre à la demande du Visiteur.

Les données sont donc nécessaires pour faire fonctionner les fonctionnalités de l’application.

## 1.6. À retenir

* **Information** → ce que l’on veut connaître ou communiquer.
* **Donnée** → information représentée sous une forme exploitable par l’application.
* **Fonctionnalité** → exécution de l’application par un acteur pour répondre à un besoin.
* **Donnée** → élément utilisé par une fonctionnalité.

La relation à retenir est :

```text
Acteur
   ↓
Fonctionnalité
   ↓
Données utilisées
   ↓
Résultat
```
![Données et fonctionnalité]({{ '/assets/images/c112/T.112.111/synthèse.600.jpg' | relative_url }})

# Partie 2 — Pratique

## 2.1. Identifier les données

### Étape 1 — Choisir la fonctionnalité

Prenez la fonctionnalité suivante :

```text
Visiteur → afficher le détail d’un article
```

Le **Visiteur** demande à l’application d’afficher le détail d’un article.

### Étape 2 — Chercher les données

Cherchez les informations nécessaires pour afficher le détail de l’article.

À partir du Blog personnel, identifiez les données utiles.

**Exemple :**

```text
Article
→ titre
→ contenu
→ date
→ auteur
```

Chaque élément correspond à une donnée utilisée par l’application.

### Étape 3 — Relier les données à la fonctionnalité

Présentez le lien entre l’acteur, la fonctionnalité et les données :

```text
Visiteur
   ↓
Afficher le détail d’un article
   ↓
titre · contenu · date · auteur
```

Vérifiez que chaque donnée est utile pour réaliser la fonctionnalité.

**Résultat attendu :**

Une identification simple des données nécessaires à la fonctionnalité **« Afficher le détail d’un article »**.

# 3. Bilan

**Vous avez réalisé :** l’identification des données utilisées pour afficher le détail d’un article.

**Vous savez maintenant :** distinguer une information d’une donnée, comprendre pourquoi une application utilise des données et relier des données à une fonctionnalité.

# 4. Glossaire

* **Information** : ce que l’on veut connaître ou communiquer.
* **Donnée** : information sous une forme exploitable par une application.
* **Fonctionnalité** : exécution de l’application par un acteur pour répondre à un besoin.
* **Acteur** : personne ou système qui utilise l’application.
* **Article** : contenu publié dans le blog.
