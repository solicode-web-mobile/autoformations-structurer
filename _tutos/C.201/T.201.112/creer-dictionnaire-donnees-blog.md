---
title: "Créer le dictionnaire de données d’un Blog"
layout: tuto
slug: "creer-dictionnaire-donnees-blog"
permalink: /tutos/:slug/
tuto_id: "T.021.112"
version: "normal"
ua: "UA.021.11"
nav_order: 2
---


## 1. Objectif

À partir des maquettes du **Blog personnel**, identifier les données utilisées par la fonctionnalité.

Construire ensuite le dictionnaire de données au format **CSV** avec **VS Code**.

## 2. Prérequis

* Comprendre ce qu’est une donnée.
* Comprendre ce qu’est un dictionnaire de données.
* Savoir lire une maquette.
* Savoir utiliser VS Code.
* Consulter les maquettes du Blog :
  https://solicode-web-mobile.github.io/maquette-blog/
* Installer l’extension **Edit CSV** dans VS Code.

# Partie 1 — Théorie

## 1.1. Identifier les données

Une maquette permet d’identifier les informations utilisées par une fonctionnalité.

Ces informations peuvent être :

* affichées ;
* saisies ;
* calculées.

**Exemple :**

```text id="u8r9pa"
Titre : Mon premier article
Auteur : Madani Ali
Catégorie : Laravel
Date : 08/09/2026
```

Ces informations doivent être analysées pour identifier les données.

## 1.2. Décrire une donnée

Pour chaque donnée, précisez :

* **Nom** ;
* **Signification** ;
* **Type** ;
* **Format** ;
* **Taille** ;
* **Obligatoire** ;
* **Calculée**.

**Exemple :**

| Nom              | Signification       | Type  | Format     | Taille | Obligatoire | Calculée |
| ---------------- | ------------------- | ----- | ---------- | ------ | ----------- | -------- |
| titre            | Titre de l’article  | Texte | Texte      | 255    | Oui         | Non      |
| date_publication | Date de publication | Date  | JJ/MM/AAAA | —      | Oui         | Non      |

## 1.3. À retenir

Le dictionnaire de données permet de décrire clairement chaque donnée utilisée par la fonctionnalité.

# Partie 2 — Pratique

## 2.1. Analyser les maquettes

### Étape 1 — Ouvrir les maquettes

Ouvrez :

https://solicode-web-mobile.github.io/maquette-blog/

Parcourez les différentes pages du Blog.

### Étape 2 — Repérer les données

Pour chaque page, notez les informations :

* affichées ;
* saisies ;
* calculées.

Ne cherchez pas encore à créer des entités.

### Étape 3 — Lister les données

Créez une liste de toutes les données identifiées.

**Exemple :**

```text id="q2m9d4"
titre
contenu
date_publication
nom
prenom
email
nom_categorie
description
```

## 2.2. Construire le dictionnaire

### Étape 4 — Décrire chaque donnée

Pour chaque donnée, indiquez :

```text id="a2th9z"
Nom
Signification
Type
Format
Taille
Obligatoire
Calculée
```

### Étape 5 — Vérifier les données

Pour chaque donnée, vérifiez :

* son nom est clair ;
* sa signification est précise ;
* son type est correct ;
* son format est adapté ;
* sa taille est indiquée lorsque nécessaire ;
* **Obligatoire** indique `Oui` ou `Non` ;
* **Calculée** indique `Oui` ou `Non`.

## 2.3. Créer le fichier CSV

### Étape 6 — Créer le fichier

Dans VS Code, créez le fichier :

```text id="e9qmb7"
dictionnaire_donnees.csv
```

### Étape 7 — Ajouter les colonnes

Ajoutez la première ligne :

```csv id="6fm3zx"
Nom,Signification,Type,Format,Taille,Obligatoire,Calculée
```

### Étape 8 — Ajouter les données

Ajoutez une ligne pour chaque donnée identifiée.

**Exemple :**

```csv id="ce8x8z"
titre,Titre de l’article,Texte,Texte,255,Oui,Non
contenu,Contenu de l’article,Texte,Texte long,,Oui,Non
date_publication,Date de publication,Date,JJ/MM/AAAA,,Oui,Non
email,Adresse email de l’auteur,Texte,Email,255,Oui,Non
```

## 2.4. Modifier le CSV avec VS Code

### Étape 9 — Utiliser Edit CSV

Installez l’extension **Edit CSV**.

Ouvrez `dictionnaire_donnees.csv` avec l’éditeur CSV.

Vérifiez les données sous forme de tableau.

### Étape 10 — Corriger le dictionnaire

Modifiez les valeurs nécessaires.

Vérifiez que chaque ligne correspond bien à une donnée identifiée dans les maquettes.

**Résultat attendu :**

Un fichier **`dictionnaire_donnees.csv`** complet contenant les données identifiées à partir des maquettes du **Blog personnel**, avec leurs principales caractéristiques.

# 3. Bilan

**Vous avez réalisé :** le dictionnaire de données du Blog au format CSV.

**Vous savez maintenant :** analyser une maquette, identifier les données et les structurer dans un dictionnaire de données.

# 4. Glossaire

* **Maquette** : représentation visuelle d’une page ou d’une fonctionnalité.
* **CSV** : fichier qui organise les données en lignes et colonnes.
* **Donnée** : information utilisée par une application.
* **Dictionnaire de données** : document qui décrit les données d’une application.
* **Donnée calculée** : donnée obtenue à partir d’autres données.
* **Edit CSV** : extension VS Code permettant de modifier un fichier CSV sous forme de tableau.
