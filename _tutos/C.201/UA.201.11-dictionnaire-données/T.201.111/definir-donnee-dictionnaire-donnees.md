---
title: "Définir une donnée et un dictionnaire de données"
layout: tuto
slug: "definir-donnee-dictionnaire-donnees"
permalink: /tutos/:slug/
tuto_id: "T.201.111"
version: "normal"
ua: "UA.201.11"
nav_order: 1
---


## 1. Objectif

Comprendre ce qu’est une **donnée** et un **dictionnaire de données**.

Identifier les principales informations utilisées pour décrire une donnée.

Créer une présentation simple pour expliquer ces notions.

## 2. Prérequis

* Savoir lire une information simple.
* Savoir créer et modifier une présentation.

# Partie 1 — Théorie

## 1.1. Qu’est-ce qu’une donnée ?

Une **donnée** est une information utilisée par une application.

Une donnée peut représenter une personne, un produit, une date, un prix ou une autre information utile.

**Exemple :**

```text
Nom : Madani
Âge : 20
Email : madani@example.com
```

Ici :

* `Nom` est une donnée ;
* `Âge` est une donnée ;
* `Email` est une donnée.

### À retenir

Une **donnée** représente une information utilisée par l’application.

## 1.2. Qu’est-ce qu’un dictionnaire de données ?

Un **dictionnaire de données** est un document qui décrit les données utilisées par une application.

Pour chaque donnée, il peut préciser :

* son nom ;
* sa signification ;
* son type ;
* son format ;
* sa taille ;
* si elle est obligatoire ;
* si elle est calculée.

**Exemple :**

| Nom   | Signification      | Type   | Format | Taille | Obligatoire | Calculée |
| ----- | ------------------ | ------ | ------ | ------ | ----------- | -------- |
| nom   | Nom d’une personne | Texte  | Texte  | 100    | Oui         | Non      |
| age   | Âge d’une personne | Nombre | Entier | —      | Oui         | Non      |
| email | Adresse email      | Texte  | Email  | 255    | Oui         | Non      |

### À retenir

Le dictionnaire permet de **décrire et organiser les données** avant la conception du modèle de données.

## 1.3. Donnée obligatoire et donnée facultative

Une donnée peut être **obligatoire** ou **facultative**.

* **Obligatoire** : la donnée doit être renseignée.
* **Facultative** : la donnée peut rester vide.

**Exemple :**

```text
Nom : obligatoire
Téléphone : facultatif
```

## 1.4. Donnée calculée

Une donnée **calculée** est obtenue à partir d’autres données.

**Exemple :**

```text
Prix : 100
Quantité : 2
Total : 200
```

Le `Total` est une donnée calculée.

### À retenir

Toutes les données ne sont pas calculées.

Une donnée peut être saisie directement ou être obtenue par un calcul.

# Partie 2 — Pratique

## 2.1. Préparer la présentation

### Étape 1 — Créer la présentation

Créez une nouvelle présentation.

Ajoutez le titre :

```text
Donnée et dictionnaire de données
```

### Étape 2 — Présenter la notion de donnée

Créez une slide avec :

* la définition d’une donnée ;
* un exemple simple.

**Exemple :**

```text
Donnée = information utilisée par une application.

Exemples :
Nom
Âge
Email
```

### Étape 3 — Présenter le dictionnaire de données

Créez une slide avec :

* la définition du dictionnaire de données ;
* son rôle ;
* un exemple de tableau.

Utilisez par exemple :

| Nom   | Signification      | Type   | Format |
| ----- | ------------------ | ------ | ------ |
| nom   | Nom d’une personne | Texte  | Texte  |
| age   | Âge d’une personne | Nombre | Entier |
| email | Adresse email      | Texte  | Email  |

### Étape 4 — Présenter les caractéristiques

Ajoutez une slide pour présenter les principales caractéristiques :

```text
Nom
Signification
Type
Format
Taille
Obligatoire
Calculée
```

Ajoutez un exemple pour chaque caractéristique.

### Étape 5 — Vérifier la présentation

Vérifiez que :

* les définitions sont présentes ;
* les exemples sont simples ;
* le tableau est lisible ;
* les notions sont correctement expliquées.

**Résultat attendu :**

Une présentation claire qui explique :

* ce qu’est une donnée ;
* ce qu’est un dictionnaire de données ;
* les principales caractéristiques d’une donnée ;
* un exemple de dictionnaire de données.

# 3. Bilan

**Vous avez réalisé :** une présentation sur la donnée et le dictionnaire de données.

**Vous savez maintenant :** définir une donnée, expliquer le rôle d’un dictionnaire de données et présenter les principales caractéristiques d’une donnée.

# 4. Glossaire

* **Donnée** : information utilisée par une application.
* **Dictionnaire de données** : document qui décrit les données d’une application.
* **Type** : nature d’une donnée, par exemple Texte ou Nombre.
* **Format** : manière dont une donnée est écrite.
* **Obligatoire** : donnée qui doit être renseignée.
* **Facultative** : donnée qui peut rester vide.
* **Donnée calculée** : donnée obtenue à partir d’autres données.
