---
title: "Créer le dictionnaire de données d’un Blog"
layout: tuto
slug: "creer-dictionnaire-donnees-blog"
permalink: /tutos/:slug/detaille
tuto_id: "T.021.112"
version: "detaille"
ua: "UA.021.11"
nav_order: 2
---

---

title: "Créer le dictionnaire de données d’un Blog"
layout: tuto
slug: "creer-dictionnaire-donnees-blog"
permalink: /tutos/:slug/compact
tuto_id: "T.021.112"
version: "compact"
ua: "UA.021.11"
nav_order: 2
------------

## 1. Objectif

À partir des maquettes du **Blog personnel**, identifier les données et créer le dictionnaire de données.

## 2. Prérequis

* Comprendre ce qu’est une donnée.
* Comprendre ce qu’est un dictionnaire de données.
* Savoir lire une maquette simple.
* Savoir utiliser VS Code.

# Partie 1 — Théorie

## 1.1. Identifier les données

La maquette permet d’identifier les informations utilisées par la fonctionnalité.

Ces informations peuvent être :

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

## 1.2. Décrire les données

Pour chaque donnée, préciser :

* Nom
* Signification
* Type
* Format
* Taille
* Obligatoire
* Calculée

# Partie 2 — Pratique

## 2.1. Construire le dictionnaire

### Étape 1 — Observer les maquettes

Analysez les maquettes du **Blog personnel**.

Repérez toutes les informations affichées et saisies.

### Étape 2 — Lister les données

Notez toutes les données identifiées dans les maquettes.

### Étape 3 — Décrire les données

Pour chaque donnée, indiquez :

```text
Nom
Signification
Type
Format
Taille
Obligatoire
Calculée
```

### Étape 4 — Vérifier les données

Vérifiez que toutes les informations utiles visibles dans les maquettes sont présentes dans le dictionnaire.

## 2.2. Créer le fichier CSV

### Étape 5 — Ouvrir VS Code

Ouvrez **VS Code**.

Créez un fichier :

```text
dictionnaire_donnees.csv
```

### Étape 6 — Ajouter les colonnes

Ajoutez la première ligne :

```csv
Nom,Signification,Type,Format,Taille,Obligatoire,Calculée
```

### Étape 7 — Ajouter les données

Ajoutez une ligne pour chaque donnée identifiée dans les maquettes.

**Exemple :**

```csv
titre,Titre de l’article,Texte,Texte,255,Oui,Non
contenu,Contenu de l’article,Texte,Texte long,,Oui,Non
date_publication,Date de publication,Date,JJ/MM/AAAA,,Oui,Non
email,Adresse email de l’auteur,Texte,Email,255,Oui,Non
```

### Étape 8 — Vérifier le fichier CSV

Ouvrez le fichier avec une extension CSV dans VS Code.

Vérifiez que :

* les colonnes sont correctement séparées ;
* chaque donnée est sur une ligne ;
* les valeurs sont correctes ;
* le fichier est lisible.

**Résultat attendu :**

Un fichier **`dictionnaire_donnees.csv`** contenant le dictionnaire de données complet du **Blog personnel**, construit à partir des maquettes.

# 3. Bilan

**Vous avez réalisé :** le dictionnaire de données du Blog au format CSV.

**Vous savez maintenant :** analyser une maquette, identifier les données et les structurer dans un fichier CSV.

# 4. Glossaire

* **Maquette** : représentation visuelle d’une page ou d’une fonctionnalité.
* **CSV** : fichier qui organise les données en lignes et colonnes.
* **Donnée** : information utilisée par une application.
* **Dictionnaire de données** : document qui décrit les données d’une application.
