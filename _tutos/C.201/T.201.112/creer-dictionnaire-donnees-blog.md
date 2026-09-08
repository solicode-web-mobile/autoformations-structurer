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

À partir des maquettes du **Blog personnel**, identifier les données et créer le dictionnaire de données au format CSV.

## 2. Prérequis

* Comprendre ce qu’est une donnée.
* Comprendre ce qu’est un dictionnaire de données.
* Savoir lire une maquette.
* Savoir utiliser VS Code.

# Partie 1 — Théorie

## 1.1. Identifier les données

Observez les maquettes et repérez les informations :

* affichées ;
* saisies ;
* calculées.

**Exemple :**

```text
Titre : Mon premier article
Auteur : Madani Ali
Catégorie : Laravel
Date : 08/09/2026
```

## 1.2. Décrire une donnée

Pour chaque donnée, précisez :

* Nom ;
* Signification ;
* Type ;
* Format ;
* Taille ;
* Obligatoire ;
* Calculée.

# Partie 2 — Pratique

## 2.1. Créer le dictionnaire

### Étape 1 — Analyser les maquettes

Observez les maquettes du **Blog personnel** et listez toutes les données identifiées.

### Étape 2 — Décrire les données

Pour chaque donnée, complétez :

```text
Nom
Signification
Type
Format
Taille
Obligatoire
Calculée
```

### Étape 3 — Créer le fichier CSV

Dans **VS Code**, créez le fichier :

```text
dictionnaire_donnees.csv
```

Ajoutez les colonnes :

```csv
Nom,Signification,Type,Format,Taille,Obligatoire,Calculée
```

### Étape 4 — Saisir les données

Ajoutez une ligne pour chaque donnée identifiée dans les maquettes.

**Exemple :**

```csv
titre,Titre de l’article,Texte,Texte,255,Oui,Non
contenu,Contenu de l’article,Texte,Texte long,,Oui,Non
date_publication,Date de publication,Date,JJ/MM/AAAA,,Oui,Non
email,Adresse email de l’auteur,Texte,Email,255,Oui,Non
```

### Étape 5 — Modifier le CSV avec VS Code

Installez l’extension **Edit CSV**.

Ouvrez `dictionnaire_donnees.csv` avec l’extension.

Vérifiez et modifiez les données dans le tableau.

**Résultat attendu :**

Un fichier **`dictionnaire_donnees.csv`** complet, construit à partir des maquettes du Blog.

# 3. Bilan

**Vous avez réalisé :** le dictionnaire de données du Blog au format CSV.

**Vous savez maintenant :** identifier les données d’une maquette et les structurer dans un fichier CSV.

# 4. Glossaire

* **Maquette** : représentation visuelle d’une page ou d’une fonctionnalité.
* **CSV** : fichier qui organise les données en lignes et colonnes.
* **Donnée** : information utilisée par une application.
* **Dictionnaire de données** : document qui décrit les données d’une application.
* **Edit CSV** : extension VS Code permettant de modifier un fichier CSV sous forme de tableau.
