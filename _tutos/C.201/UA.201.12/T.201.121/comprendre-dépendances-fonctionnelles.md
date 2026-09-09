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

À partir du dictionnaire de données du Blog, on dispose de plusieurs informations :

```text
titre_article
contenu_article
date_publication
nom_auteur
email_auteur
nom_categorie
description_categorie
```

Une première solution peut être de mettre toutes ces données dans une seule relation :

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

Cette organisation semble simple.

Mais plusieurs articles peuvent avoir le même auteur ou la même catégorie.

On obtient par exemple :

| titre_article | nom_auteur | email_auteur                              | nom_categorie | description_categorie    |
| ------------- | ---------- | ----------------------------------------- | ------------- | ------------------------ |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Kotlin        | Sara       | [sara@mail.com](mailto:sara@mail.com)     | Mobile        | Développement mobile     |

On remarque plusieurs répétitions :

```text
Madani
madani@mail.com
PHP
Langage de programmation
```

apparaissent dans plusieurs lignes.

### Pourquoi est-ce un problème ?

Supposons que Madani change d’adresse email.

Nous devons modifier toutes les lignes qui contiennent son email.

Une ligne pourrait contenir :

```text
Madani | madani@mail.com
```

et une autre :

```text
Madani | madani@exemple.com
```

Nous avons alors deux informations différentes pour le même auteur.

La relation contient donc des **répétitions de données** qui peuvent provoquer des problèmes de cohérence.

## 1.2. La solution : séparer les données répétées

Pour éviter ces répétitions, nous pouvons séparer les données qui décrivent une même réalité.

Les données :

```text
nom_auteur
email_auteur
```

décrivent un auteur.

Nous pouvons créer une nouvelle relation :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

Mais nous devons pouvoir distinguer chaque auteur.

Par exemple, deux personnes peuvent avoir des noms proches ou identiques.

Nous ajoutons donc une donnée permettant d’identifier chaque auteur :

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

Dans la relation `ARTICLE`, nous gardons `id_auteur`.

Il permet de retrouver l’auteur associé à l’article.

Nous avons donc séparé les données de l’auteur des données de l’article.

## 1.3. Découvrir la dépendance fonctionnelle

Après avoir créé `id_auteur`, nous pouvons observer les données de la relation :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Posons une question :

> Pour un même `id_auteur`, peut-on avoir deux noms différents ?

La réponse doit être non.

Un même auteur doit avoir un seul nom dans cette relation.

On peut donc écrire :

```text
id_auteur → nom_auteur
```

Posons une deuxième question :

> Pour un même `id_auteur`, peut-on avoir deux emails différents ?

La réponse doit également être non.

On écrit :

```text
id_auteur → email_auteur
```

Nous venons d’identifier une **dépendance fonctionnelle**.

Elle s’écrit :

```text
A → B
```

et signifie :

> La valeur de `A` permet de déterminer une seule valeur de `B`.

Dans notre exemple :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

`id_auteur` est le **déterminant**.

`nom_auteur` et `email_auteur` sont les données déterminées.

## 1.4. Comprendre la règle

Nous pouvons maintenant retenir la règle suivante :

> **Lorsqu’un identifiant détermine une donnée, une valeur de cet identifiant doit correspondre à une seule valeur de cette donnée.**

Exemple :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Pour :

```text
id_auteur = A01
```

nous avons :

```text
nom_auteur = Madani
email_auteur = madani@mail.com
```

Il ne doit pas exister une autre ligne avec :

```text
A01 | Sara
```

ou :

```text
A01 | autre@mail.com
```

## 1.5. À retenir

* Une seule relation peut contenir des données de plusieurs réalités.
* Certaines données peuvent alors être répétées.
* Les répétitions peuvent provoquer des problèmes de modification et de cohérence.
* On peut séparer les données qui décrivent une même réalité.
* Un identifiant permet d’identifier une occurrence.
* Un identifiant peut déterminer les autres données du groupe.
* Cette relation entre les données est une **dépendance fonctionnelle**.

# Partie 2 — Pratique

## 2.1. Observer le problème

### Étape 1 — Lire la relation

Observez la relation suivante :

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

Puis observez les données :

| titre_article | nom_auteur | email_auteur                              | nom_categorie | description_categorie    |
| ------------- | ---------- | ----------------------------------------- | ------------- | ------------------------ |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Kotlin        | Sara       | [sara@mail.com](mailto:sara@mail.com)     | Mobile        | Développement mobile     |

### Étape 2 — Repérer les répétitions

Repérez les informations qui apparaissent plusieurs fois.

Notez :

* les données répétées ;
* le nombre de répétitions ;
* les informations qui décrivent une même réalité.

### Étape 3 — Expliquer les problèmes

Pour chaque groupe de données répétées, expliquez ce qui peut arriver si une information change.

Par exemple :

> Que faut-il modifier si l’email d’un auteur change ?

> Que se passe-t-il si une ligne contient une ancienne valeur et une autre ligne une nouvelle valeur ?

**Résultat attendu :**

Vous avez identifié les répétitions et les problèmes de cohérence possibles.

## 2.2. Appliquer la solution

### Étape 4 — Choisir un groupe de données

Prenez les données qui décrivent l’auteur :

```text
nom_auteur
email_auteur
```

Ces données peuvent être séparées de la relation `ARTICLE`.

### Étape 5 — Créer une nouvelle relation

Créez :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

### Étape 6 — Ajouter un identifiant

Pour identifier chaque auteur, ajoutez :

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

### Étape 7 — Garder la référence dans ARTICLE

Dans `ARTICLE`, gardez :

```text
id_auteur
```

Cette donnée permet d’identifier l’auteur associé à l’article.

## 2.3. Découvrir la dépendance fonctionnelle

### Étape 8 — Observer les valeurs

Observez :

```text
id_auteur
nom_auteur
email_auteur
```

Posez la première question :

> Pour un même `id_auteur`, peut-on avoir deux valeurs différentes de `nom_auteur` ?

Puis la deuxième :

> Pour un même `id_auteur`, peut-on avoir deux valeurs différentes de `email_auteur` ?

### Étape 9 — Écrire les dépendances

Écrivez les dépendances fonctionnelles identifiées :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

Vous pouvez aussi les regrouper :

```text
id_auteur → nom_auteur, email_auteur
```

**Résultat attendu :**

Vous avez séparé les données répétées, ajouté un identifiant et identifié les dépendances fonctionnelles du groupe `AUTEUR`.

# 3. Bilan

**Vous avez réalisé :** l’analyse d’une relation contenant des données répétées et la séparation des données d’un auteur.

**Vous savez maintenant :** repérer les problèmes provoqués par les répétitions, séparer un groupe de données, ajouter un identifiant et identifier les dépendances fonctionnelles.

# 4. Glossaire

* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Répétition** : même information enregistrée plusieurs fois.
* **Cohérence** : fait de conserver des informations correctes et compatibles.
* **Identifiant** : donnée qui permet d’identifier une occurrence de façon unique.
* **Occurrence** : élément enregistré dans une relation.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
* **Déterminant** : donnée qui permet de déterminer une autre donnée.
