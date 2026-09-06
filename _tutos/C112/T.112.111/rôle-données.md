---
title: "Rôle des données dans une application"
layout: tuto
slug: "rôle-données"
permalink: /tutos/:slug/
tuto_id: "T.112.111"
version: "normal"
ua: "UA.112.11"
nav_order: 1
---


## 1. Objectif

Comprendre la différence entre **information** et **donnée**, et comprendre pourquoi une application utilise des données pour réaliser une fonctionnalité.

## 2. Prérequis

- Connaître les principales fonctionnalités du **Blog personnel**.

- Les maquettes du **Blog personnel** sont nécessaires : <a href="https://solicode-web-mobile.github.io/maquette-blog/" target="_blank">Maquette blog</a>

# Partie 1 — Théorie

## 1.1. Information

Une **information** est ce que l’on veut connaître, transmettre ou communiquer.

**Exemple :**

```text
Le titre de l’article est « Mon premier voyage ».
```

![Information]({{ '/assets/images/c112/T.112.111/information.600.jpg' | relative_url }})


## 1.2. Donnée

Une **donnée** est une information représentée sous une forme que l’application peut utiliser.

L’application peut ainsi **stocker, retrouver, modifier, traiter ou afficher** cette donnée.

**Exemple :**

```text
titre = "Mon premier voyage"
```
![donnée]({{ '/assets/images/c112/T.112.111/donnée.600.jpg' | relative_url }})

## 1.3. Fonctionnalité

Une **fonctionnalité** est une exécution de l’application réalisée par un **acteur** pour répondre à un besoin.

**Exemple :**

```text
Acteur : Visiteur
Fonctionnalité : afficher le détail d’un article
```

Le Visiteur demande à l’application d’afficher le détail d’un article.

![fonctionnalité]({{ '/assets/images/c112/T.112.111/fonctionnalité.600.jpg' | relative_url }})


## 1.4. Données et fonctionnalité

Une fonctionnalité utilise les données nécessaires à son exécution.

**Exemple :**

```text
Visiteur
   ↓
Afficher le détail d’un article
   ↓
titre · contenu · date · auteur
```

L’application utilise ces données pour afficher le détail demandé.

## 1.5. À retenir

* **Information** → ce que l’on veut connaître ou communiquer.
* **Donnée** → information sous une forme exploitable par l’application.
* **Fonctionnalité** → exécution de l’application par un acteur.
* **Données** → éléments utilisés par la fonctionnalité.

![Données et fonctionnalité]({{ '/assets/images/c112/T.112.111/données-fonctionnalité.600.jpg' | relative_url }})

![Données et fonctionnalité]({{ '/assets/images/c112/T.112.111/synthèse.600.jpg' | relative_url }})


# Partie 2 — Pratique

## 2.1. Identifier les données

### Étape 1 — Choisir la fonctionnalité

Prenez la fonctionnalité :

```text
Visiteur → afficher le détail d’un article
```

### Étape 2 — Chercher les données

Identifiez les données nécessaires pour afficher le détail de l’article.

**Exemple :**

```text
Article
→ titre
→ contenu
→ date
→ auteur
```

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

**Vous savez maintenant :** distinguer une information d’une donnée et relier des données à une fonctionnalité.

# 4. Glossaire

* **Information** : ce que l’on veut connaître ou communiquer.
* **Donnée** : information sous une forme exploitable par une application.
* **Fonctionnalité** : exécution de l’application par un acteur pour répondre à un besoin.
* **Acteur** : personne ou système qui utilise l’application.
* **Article** : contenu publié dans le blog.
