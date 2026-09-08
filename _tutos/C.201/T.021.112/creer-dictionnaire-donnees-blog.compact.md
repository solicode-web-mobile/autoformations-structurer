---
title: "Créer le dictionnaire de données d’un Blog"
layout: tuto
slug: "creer-dictionnaire-donnees-blog"
permalink: /tutos/:slug/compact
tuto_id: "T.021.112"
version: "compact"
ua: "UA.021.11"
nav_order: 2
---


title: "Créer le dictionnaire de données d’un Blog"
layout: tuto
slug: "creer-dictionnaire-donnees-blog"
permalink: /tutos/:slug/compact
tuto_id: "T.021.11.2"
version: "compact"
ua: "UA.021.11"
nav_order: 2
------------

## 1. Objectif

Créer le dictionnaire de données du **Blog personnel** à partir des maquettes.

## 2. Prérequis

* Comprendre ce qu’est une donnée.
* Comprendre ce qu’est un dictionnaire de données.
* Avoir les maquettes du Blog.

# Partie 1 — Théorie

## 1.1. Identifier les objets métier

Dans le Blog, les principaux objets métier sont :

```text
Article
Auteur
Catégorie
```

Chaque objet métier possède des données.

**Exemple :**

```text
Article → titre, contenu, date_publication
Auteur → nom, prenom, email
Catégorie → nom, description
```

## 1.2. Identifier les caractéristiques d’une donnée

Pour chaque donnée, préciser :

* son nom ;
* sa signification ;
* son type ;
* son format ;
* sa taille ;
* si elle est obligatoire ;
* si elle est calculée.

Une donnée peut être **calculée** lorsque sa valeur est obtenue à partir d’autres données.

**Exemple :**

```text
nombre_vues = nombre de consultations de l’article
Calculée : Oui
```

# Partie 2 — Pratique

## 2.1. Analyser les maquettes

### Étape 1 — Observer les maquettes

Repérez les informations **affichées** et **saisies**.

### Étape 2 — Regrouper les données

Classez les données dans les objets métier :

```text
Article
Auteur
Catégorie
```

### Étape 3 — Identifier les données calculées

Pour chaque donnée, vérifiez si sa valeur est saisie ou obtenue par un calcul.

Exemple :

```text
prix_total = prix × quantité
Calculée : Oui
```

### Étape 4 — Construire le dictionnaire

Créez un tableau avec les colonnes suivantes :

| Objet métier | Nom | Signification | Type | Format | Taille | Obligatoire | Calculée |
| ------------ | --- | ------------- | ---- | ------ | ------ | ----------- | -------- |

Ajoutez toutes les données identifiées dans les maquettes.

**Résultat attendu :**

Un **dictionnaire de données complet du Blog**, organisé par **Article, Auteur et Catégorie**, avec les principales caractéristiques de chaque donnée.

# 3. Bilan

**Vous avez réalisé :** le dictionnaire de données du Blog.

**Vous savez maintenant :** identifier, regrouper et décrire les données d’une fonctionnalité Web à partir d’une maquette.

# 4. Glossaire

* **Objet métier** : élément important de l’application.
* **Attribut** : donnée qui décrit un objet métier.
* **Donnée calculée** : donnée dont la valeur est obtenue à partir d’autres données.
* **Dictionnaire de données** : document qui décrit les données de l’application.
* **Type** : nature d’une donnée.
* **Format** : manière dont une donnée est écrite.
