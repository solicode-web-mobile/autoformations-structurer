---
title: "Comprendre les dépendances fonctionnelles"
layout: tuto
slug: "comprendre-dépendances-fonctionnelles"
permalink: /tutos/:slug/
tuto_id: "T.201.121"
version: "normal"
ua: "UA.201.12"
nav_order: 1
---

## 1. Objectif

Comprendre pourquoi une relation ne doit pas contenir toutes les données d’un besoin.

Découvrir une solution pour éviter les répétitions, puis comprendre la dépendance fonctionnelle entre un identifiant et les données qu’il détermine.

## 2. Prérequis

* Avoir réalisé le dictionnaire de données de la fonctionnalité étudiée.

# Partie 1 — Théorie

## 1.1. Le problème d’une seule relation

On peut être tenté de mettre toutes les données dans une seule relation.

Exemple :

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

On obtient alors des données comme :

```text
titre_article | nom_auteur  | email_auteur    | nom_categorie | description_categorie
--------------|-------------|-----------------|---------------|----------------------
Laravel       | Madani Ali  | madani@mail.com | PHP           | Langage de programmation
Eloquent      | Madani Ali  | madani@mail.com | PHP           | Langage de programmation
Kotlin        | Sara Amrani | sara@mail.com   | Mobile        | Développement mobile
```

Le problème est visible :

* les données d’un même auteur sont répétées ;
* les données d’une même catégorie sont répétées ;
* une modification peut devoir être faite dans plusieurs lignes.

## 1.2. La solution : séparer les données répétées

Pour supprimer les répétitions, on peut sortir les données qui décrivent la même réalité et les mettre dans une autre relation.

Par exemple :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

Mais il faut pouvoir distinguer un auteur d’un autre.

On ajoute donc un identifiant :

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

Dans `ARTICLE`, on conserve seulement la référence vers l’auteur :

```text
id_auteur
```

## 1.3. Découvrir la dépendance fonctionnelle

Nous pouvons maintenant observer une règle.

Pour un même `id_auteur`, il doit exister une seule valeur de `nom_auteur` et une seule valeur de `email_auteur`.

On écrit :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

On parle de **dépendance fonctionnelle**.

Elle signifie :

> Une valeur donnée de l’identifiant détermine une seule valeur pour la donnée concernée.

## 1.4. À retenir

* Une seule relation peut provoquer des répétitions.
* Les données répétées peuvent créer des problèmes de cohérence.
* On peut séparer les données dans une autre relation.
* Un identifiant permet d’identifier chaque occurrence.
* L’identifiant doit déterminer une seule valeur pour les données qui dépendent de lui.
* Cette relation s’appelle une **dépendance fonctionnelle**.

# Partie 2 — Pratique

## 2.1. Observer le problème

### Étape 1 — Lire les données

Observez la relation `ARTICLE` et les lignes fournies.

Repérez les informations qui se répètent.

### Étape 2 — Expliquer le problème

Pour chaque information répétée, indiquez :

* ce qui est répété ;
* pourquoi cette répétition pose un problème ;
* ce qui peut arriver si l’information change.

**Résultat attendu :**

Vous avez identifié les problèmes provoqués par les répétitions de données.

## 2.2. Appliquer la solution

### Étape 3 — Séparer un groupe de données

Prenez les données qui décrivent l’auteur.

Regroupez-les dans une nouvelle relation :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

### Étape 4 — Ajouter un identifiant

Ajoutez un identifiant pour distinguer chaque auteur.

Utilisez :

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

### Étape 5 — Garder la référence dans ARTICLE

Dans `ARTICLE`, gardez `id_auteur` pour retrouver l’auteur associé à l’article.

## 2.3. Découvrir la dépendance fonctionnelle

### Étape 6 — Observer les valeurs

Pour plusieurs auteurs, observez la relation entre :

```text
id_auteur
nom_auteur
email_auteur
```

Posez la question :

> Pour un même `id_auteur`, peut-on avoir deux noms différents ?

Puis :

> Pour un même `id_auteur`, peut-on avoir deux emails différents ?

### Étape 7 — Écrire les dépendances

Écrivez les dépendances fonctionnelles observées :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

**Résultat attendu :**

Vous avez séparé les données répétées, ajouté un identifiant et identifié les dépendances fonctionnelles.

# 3. Bilan

**Vous avez réalisé :** l’analyse du problème d’une relation contenant des données répétées et la séparation des données d’un auteur.

**Vous savez maintenant :** supprimer une répétition de données en créant une nouvelle relation, ajouter un identifiant et vérifier les dépendances fonctionnelles.

# 4. Glossaire

* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Répétition** : même information enregistrée plusieurs fois.
* **Identifiant** : donnée qui permet d’identifier une occurrence de façon unique.
* **Occurrence** : un élément enregistré dans une relation.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
* **Déterminant** : donnée située à gauche de `→`.
