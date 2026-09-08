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

À partir des maquettes du Blog personnel, identifier les données et créer le dictionnaire de données.

## 2. Prérequis

* Comprendre ce qu’est une donnée.
* Comprendre le rôle d’un dictionnaire de données.
* Avoir les maquettes du Blog.

# Partie 1 — Théorie

## 1.1. Identifier les données

Une maquette contient des informations **affichées** ou **saisies**.

**Exemple :**

```text
Titre : Mon article
Auteur : Madani Ali
Catégorie : Laravel
Date : 08/09/2026
```

Ces informations deviennent des données à décrire dans le dictionnaire.

## 1.2. Décrire les données

Pour chaque donnée, préciser :

* nom ;
* signification ;
* type ;
* format ;
* taille ;
* obligatoire ;
* calculée.

**Exemple :**

| Nom              | Signification       | Type  | Format     | Taille | Obligatoire | Calculée |
| ---------------- | ------------------- | ----- | ---------- | ------ | ----------- | -------- |
| titre            | Titre de l’article  | Texte | Texte      | 255    | Oui         | Non      |
| date_publication | Date de publication | Date  | JJ/MM/AAAA | —      | Oui         | Non      |

# Partie 2 — Pratique

## 2.1. Construire le dictionnaire

### Étape 1 — Observer les maquettes

Repérez toutes les informations affichées et saisies.

### Étape 2 — Regrouper les données

Organisez les données par partie du Blog :

```text
Article
Auteur
Catégorie
```

### Étape 3 — Décrire chaque donnée

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

### Étape 4 — Créer le dictionnaire

Créez le tableau du dictionnaire pour chaque partie :

| Nom | Signification | Type | Format | Taille | Obligatoire | Calculée |
| --- | ------------- | ---- | ------ | ------ | ----------- | -------- |

**Résultat attendu :**

Un dictionnaire de données complet du **Blog personnel**, avec les données de **Article, Auteur et Catégorie** et leurs principales caractéristiques.

# 3. Bilan

**Vous avez réalisé :** le dictionnaire de données du Blog.

**Vous savez maintenant :** identifier et décrire les données d’une fonctionnalité Web à partir d’une maquette.

# 4. Glossaire

* **Donnée** : information utilisée par une application.
* **Donnée affichée** : information montrée par l’application.
* **Donnée saisie** : information renseignée par l’utilisateur.
* **Donnée calculée** : information obtenue à partir d’autres données.
* **Dictionnaire de données** : document qui décrit les données d’une application.
