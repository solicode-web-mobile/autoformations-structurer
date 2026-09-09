---
title: "Comprendre les dépendances fonctionnelles"
layout: tuto
slug: "comprendre-dépendances-fonctionnelles"
permalink: /tutos/:slug/compact
tuto_id: "T.201.121"
version: "compact"
ua: "UA.201.12"
nav_order: 1
---
 
## 1. Objectif

Comprendre pourquoi certaines données doivent être séparées d’une relation et découvrir comment un identifiant permet de déterminer ces données.

## 2. Prérequis

* Avoir réalisé le dictionnaire de données de la fonctionnalité étudiée.

# Partie 1 — Théorie

## 1.1. Le problème d’une seule relation

À partir du dictionnaire de données du Blog :

```text
titre_article
contenu_article
date_publication
nom_auteur
email_auteur
nom_categorie
description_categorie
```

On peut mettre toutes les données dans une seule relation :

```text
ARTICLE(
    titre_article,
    contenu_article,
    date_publication,
    nom_auteur,
    email_auteur,
    nom_categorie,
    description_categorie
)
```

Exemple :

| titre_article | nom_auteur | email_auteur                              | nom_categorie | description_categorie    |
| ------------- | ---------- | ----------------------------------------- | ------------- | ------------------------ |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Kotlin        | Sara       | [sara@mail.com](mailto:sara@mail.com)     | Mobile        | Développement mobile     |

Les informations de l’auteur et de la catégorie sont répétées.

Une modification doit donc être faite dans plusieurs lignes.

Cela peut créer un problème de cohérence.

## 1.2. La solution : séparer les données

Les données :

```text
nom_auteur
email_auteur
```

décrivent un auteur.

Nous pouvons les séparer dans une nouvelle relation :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

Mais `ARTICLE` doit pouvoir retrouver l’auteur.

Nous ajoutons :

```text
id_auteur
```

La relation devient :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Dans `ARTICLE`, nous gardons `id_auteur` à la place de :

```text
nom_auteur
email_auteur
```

## 1.3. Découvrir la dépendance fonctionnelle

Nous observons :

```text
id_auteur
nom_auteur
email_auteur
```

Pour un même `id_auteur`, nous devons avoir une seule valeur de `nom_auteur` et de `email_auteur`.

On écrit :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

ou :

```text
id_auteur → nom_auteur, email_auteur
```

C’est une **dépendance fonctionnelle**.

Elle signifie :

> Une valeur de `id_auteur` permet de déterminer une seule valeur de `nom_auteur` et de `email_auteur`.

## 1.4. À retenir

* Une relation peut contenir des données répétées.
* Les répétitions peuvent provoquer des problèmes de cohérence.
* Les données qui décrivent une même réalité peuvent être séparées.
* Un identifiant permet de retrouver les données séparées.
* L’identifiant peut déterminer les données associées.
* Cette relation est une dépendance fonctionnelle.

# Partie 2 — Pratique

## 2.1. Observer le problème

### Étape 1 — Repérer les répétitions

Observez les données de `ARTICLE`.

Repérez les informations répétées.

### Étape 2 — Expliquer le problème

Expliquez ce qui peut se passer si une information répétée est modifiée.

**Résultat attendu :**

Les problèmes liés aux répétitions sont identifiés.

## 2.2. Appliquer la solution

### Étape 3 — Séparer un groupe de données

Séparez :

```text
nom_auteur
email_auteur
```

Créez :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

### Étape 4 — Ajouter un identifiant

Ajoutez :

```text
id_auteur
```

Obtenez :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

### Étape 5 — Remplacer les données dans ARTICLE

Dans `ARTICLE`, remplacez :

```text
nom_auteur
email_auteur
```

par :

```text
id_auteur
```

**Résultat attendu :**

`ARTICLE` conserve une référence permettant de retrouver l’auteur.

## 2.3. Découvrir la dépendance fonctionnelle

### Étape 6 — Observer les valeurs

Observez :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Demandez :

> Pour un même `id_auteur`, peut-on avoir deux noms différents ?

> Pour un même `id_auteur`, peut-on avoir deux emails différents ?

### Étape 7 — Écrire la dépendance

Écrivez :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

**Résultat attendu :**

Les données de l’auteur sont séparées et la dépendance fonctionnelle est identifiée.

# 3. Bilan

**Vous avez réalisé :** la séparation des données répétées d’un auteur.

**Vous savez maintenant :** utiliser un identifiant pour retrouver des données séparées et identifier une dépendance fonctionnelle.

# 4. Glossaire

* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Répétition** : même information enregistrée plusieurs fois.
* **Identifiant** : donnée qui permet d’identifier une occurrence et de retrouver ses informations.
* **Référence** : donnée qui permet de retrouver une occurrence dans une autre relation.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
