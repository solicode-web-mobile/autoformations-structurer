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

À partir des maquettes du **Blog personnel**, identifier les données affichées et saisies.

Construire ensuite un dictionnaire de données en précisant les principales caractéristiques de chaque donnée.

## 2. Prérequis

* Comprendre ce qu’est une donnée.
* Comprendre ce qu’est un dictionnaire de données.
* Savoir lire une maquette simple.
* Avoir les maquettes du Blog personnel.

# Partie 1 — Théorie

## 1.1. Lire une maquette

Une **maquette** représente l’interface d’une fonctionnalité.

Elle permet de repérer les informations présentes sur une page.

**Exemple :**

```text
Titre : Les bases de Laravel
Auteur : Madani Ali
Catégorie : Laravel
Date : 08/09/2026
```

Nous pouvons identifier les données suivantes :

```text
titre
auteur
catégorie
date_publication
```

**À retenir :**

La maquette permet d’identifier les données utilisées par une fonctionnalité.

## 1.2. Regrouper les données

Pour le Blog personnel, les données sont organisées dans les groupes suivants :

```text
Article
Auteur
Catégorie
```

**Exemple :**

```text
Article
- titre
- contenu
- date_publication

Auteur
- nom
- prenom
- email

Catégorie
- nom
- description
```

Ces regroupements permettent d’organiser le dictionnaire de données.

La notion d’**entité** sera étudiée dans l’UA suivante.

## 1.3. Décrire une donnée

Chaque donnée doit être décrite avec ses principales caractéristiques :

* **Nom** : identifie la donnée.
* **Signification** : explique ce que représente la donnée.
* **Type** : indique la nature de la donnée.
* **Format** : indique comment la donnée est écrite.
* **Taille** : indique sa longueur maximale lorsque nécessaire.
* **Obligatoire** : indique si la donnée doit être renseignée.
* **Calculée** : indique si la valeur est obtenue à partir d’autres données.

**Exemple :**

| Nom              | Signification        | Type  | Format     | Taille | Obligatoire | Calculée |
| ---------------- | -------------------- | ----- | ---------- | ------ | ----------- | -------- |
| titre            | Titre de l’article   | Texte | Texte      | 255    | Oui         | Non      |
| contenu          | Contenu de l’article | Texte | Texte long | —      | Oui         | Non      |
| date_publication | Date de publication  | Date  | JJ/MM/AAAA | —      | Oui         | Non      |

## 1.4. Donnée calculée

Une donnée est **calculée** lorsque sa valeur est obtenue à partir d’autres données.

**Exemple :**

```text
prix = 100
quantite = 2

prix_total = prix × quantite
```

`prix_total` est donc une donnée calculée.

Dans le dictionnaire :

```text
Calculée : Oui
```

Une donnée saisie directement peut être indiquée :

```text
Calculée : Non
```

## 1.5. À retenir

* La maquette permet d’identifier les données.
* Les données sont regroupées pour faciliter leur organisation.
* Chaque donnée doit être décrite.
* Une donnée peut être obligatoire ou non.
* Une donnée peut être calculée ou non.

# Partie 2 — Pratique

## 2.1. Identifier les données

### Étape 1 — Observer les maquettes

Ouvrez les maquettes du Blog personnel.

Observez chaque écran.

Repérez les informations affichées et les champs de saisie.

### Étape 2 — Lister les données

Écrivez toutes les données trouvées.

**Exemple :**

```text
titre
contenu
date_publication
nom
prenom
email
nom_categorie
description
```

### Étape 3 — Regrouper les données

Organisez les données dans les groupes :

```text
Article
Auteur
Catégorie
```

**Exemple :**

```text
Article
- titre
- contenu
- date_publication

Auteur
- nom
- prenom
- email

Catégorie
- nom_categorie
- description
```

## 2.2. Décrire les données

### Étape 4 — Ajouter la signification

Pour chaque donnée, écrivez une explication simple.

**Exemple :**

```text
titre → Titre de l’article
email → Adresse email de l’auteur
```

### Étape 5 — Ajouter le type et le format

Indiquez le type et le format de chaque donnée.

**Exemple :**

```text
titre
Type : Texte
Format : Texte
```

```text
date_publication
Type : Date
Format : JJ/MM/AAAA
```

### Étape 6 — Ajouter la taille

Indiquez la taille lorsque cela est nécessaire.

**Exemple :**

```text
titre
Taille : 255 caractères
```

### Étape 7 — Indiquer si la donnée est obligatoire

Pour chaque donnée, indiquez :

```text
Obligatoire : Oui
```

ou :

```text
Obligatoire : Non
```

### Étape 8 — Indiquer si la donnée est calculée

Vérifiez si la valeur est obtenue à partir d’autres données.

Indiquez :

```text
Calculée : Oui
```

ou :

```text
Calculée : Non
```

## 2.3. Construire le dictionnaire de données

### Étape 9 — Créer le tableau

Créez le dictionnaire avec les colonnes suivantes :

| Groupe | Nom | Signification | Type | Format | Taille | Obligatoire | Calculée |
| ------ | --- | ------------- | ---- | ------ | ------ | ----------- | -------- |

### Étape 10 — Ajouter les données

Ajoutez toutes les données identifiées dans les maquettes.

**Exemple :**

| Groupe    | Nom              | Signification               | Type  | Format     | Taille | Obligatoire | Calculée |
| --------- | ---------------- | --------------------------- | ----- | ---------- | ------ | ----------- | -------- |
| Article   | titre            | Titre de l’article          | Texte | Texte      | 255    | Oui         | Non      |
| Article   | contenu          | Contenu de l’article        | Texte | Texte long | —      | Oui         | Non      |
| Article   | date_publication | Date de publication         | Date  | JJ/MM/AAAA | —      | Oui         | Non      |
| Auteur    | nom              | Nom de l’auteur             | Texte | Texte      | 100    | Oui         | Non      |
| Auteur    | prenom           | Prénom de l’auteur          | Texte | Texte      | 100    | Oui         | Non      |
| Auteur    | email            | Adresse email de l’auteur   | Texte | Email      | 255    | Oui         | Non      |
| Catégorie | nom_categorie    | Nom de la catégorie         | Texte | Texte      | 100    | Oui         | Non      |
| Catégorie | description      | Description de la catégorie | Texte | Texte long | —      | Non         | Non      |

### Étape 11 — Vérifier le dictionnaire

Vérifiez chaque donnée :

* le nom est clair ;
* la signification est correcte ;
* le type est correct ;
* le format est correct ;
* la taille est correcte ;
* le caractère obligatoire est indiqué ;
* la donnée calculée est correctement identifiée.

**Résultat attendu :**

Un **dictionnaire de données complet du Blog personnel**, organisé avec les données de **Article, Auteur et Catégorie** et leurs principales caractéristiques.

# 3. Bilan

**Vous avez réalisé :** le dictionnaire de données du Blog personnel.

**Vous savez maintenant :** analyser une maquette, identifier les données, les regrouper et décrire leurs principales caractéristiques.

# 4. Glossaire

* **Maquette** : représentation visuelle d’une page ou d’une fonctionnalité.
* **Donnée** : information utilisée par une application.
* **Donnée affichée** : information montrée par l’application.
* **Donnée saisie** : information renseignée par l’utilisateur.
* **Donnée calculée** : donnée obtenue à partir d’autres données.
* **Dictionnaire de données** : document qui décrit les données d’une application.
* **Type** : nature d’une donnée.
* **Format** : manière dont une donnée est écrite.
* **Taille** : longueur maximale d’une donnée.
* **Obligatoire** : donnée qui doit être renseignée.
