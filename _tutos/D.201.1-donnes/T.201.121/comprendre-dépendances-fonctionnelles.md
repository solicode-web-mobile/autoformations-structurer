---
title: "De la répétition à la dépendance fonctionnelle"
layout: tuto
slug: "comprendre-dépendances-fonctionnelles"
permalink: /tutos/:slug/
tuto_id: "T.201.121"
version: "normal"
ua: "UA.201.12"
nav_order: 1
---
 

## 1. Objectif

Comprendre pourquoi certaines données doivent être séparées d’une relation et découvrir comment un identifiant permet de déterminer ces données.

## 2. Prérequis

* Avoir réalisé le dictionnaire de données de la fonctionnalité étudiée.

# Partie 1 — Théorie

## 1.1. Le problème d’une seule relation

À partir du dictionnaire de données du Blog, nous disposons des informations suivantes :

```text
titre_article
contenu_article
date_publication
nom_auteur
email_auteur
nom_categorie
description_categorie
```

Une première organisation consiste à mettre toutes ces données dans une seule relation :

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

Toutes les informations sont dans une seule relation.

Observons maintenant plusieurs lignes :

| titre_article | nom_auteur | email_auteur                              | nom_categorie | description_categorie    |
| ------------- | ---------- | ----------------------------------------- | ------------- | ------------------------ |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Kotlin        | Sara       | [sara@mail.com](mailto:sara@mail.com)     | Mobile        | Développement mobile     |

Nous observons des répétitions.

Les informations de Madani sont répétées :

```text
Madani
madani@mail.com
```

Les informations de la catégorie `PHP` sont aussi répétées :

```text
PHP
Langage de programmation
```

### Pourquoi cette répétition pose-t-elle un problème ?

Supposons que Madani change son adresse email.

Son email est présent dans plusieurs lignes.

Nous devons modifier toutes les lignes concernées.

Avant la modification :

| titre_article | nom_auteur | email_auteur                              |
| ------------- | ---------- | ----------------------------------------- |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) |

Si une seule ligne est modifiée :

| titre_article | nom_auteur | email_auteur                                    |
| ------------- | ---------- | ----------------------------------------------- |
| Laravel       | Madani     | [madani@exemple.com](mailto:madani@exemple.com) |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com)       |

nous avons deux emails différents pour le même auteur.

La répétition peut donc provoquer un problème de cohérence.

## 1.2. La solution : séparer les données répétées

Pour éviter ces répétitions, nous pouvons séparer les données qui décrivent une même réalité.

Les données :

```text
nom_auteur
email_auteur
```

décrivent un auteur.

Nous pouvons donc créer une nouvelle relation :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

Mais une question apparaît :

> Comment retrouver les informations de l’auteur à partir d’un article ?

Dans `ARTICLE`, nous ne voulons plus répéter :

```text
nom_auteur
email_auteur
```

Il faut donc conserver une donnée qui permet de retrouver l’auteur.

Nous ajoutons :

```text
id_auteur
```

La relation `AUTEUR` devient :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Et dans `ARTICLE`, nous remplaçons les deux données :

```text
nom_auteur
email_auteur
```

par :

```text
id_auteur
```

Nous obtenons :

```text
ARTICLE(
    titre_article,
    contenu_article,
    date_publication,
    id_auteur,
    nom_categorie,
    description_categorie
)
```

Par exemple :

| titre_article | id_auteur |
| ------------- | --------- |
| Laravel       | A01       |
| Eloquent      | A01       |
| Kotlin        | A02       |

Et dans `AUTEUR` :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Pour retrouver l’auteur de `Laravel` :

```text
Laravel
    ↓
A01
    ↓
Madani
madani@mail.com
```

`id_auteur` permet donc à `ARTICLE` de retrouver les informations de l’auteur.

## 1.3. Découvrir la dépendance fonctionnelle

Nous avons maintenant la relation :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Observons les données :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Posons une question :

> Pour un même `id_auteur`, peut-on avoir deux noms différents ?

Pour :

```text
id_auteur = A01
```

nous devons retrouver une seule valeur :

```text
Madani
```

Nous pouvons donc écrire :

```text
id_auteur → nom_auteur
```

Posons une deuxième question :

> Pour un même `id_auteur`, peut-on avoir deux emails différents ?

Pour :

```text
id_auteur = A01
```

nous devons retrouver une seule valeur :

```text
madani@mail.com
```

Nous pouvons donc écrire :

```text
id_auteur → email_auteur
```

Nous avons découvert une **dépendance fonctionnelle**.

On peut regrouper les deux dépendances :

```text
id_auteur → nom_auteur, email_auteur
```

Cela signifie :

> Une valeur de `id_auteur` permet de déterminer une seule valeur de `nom_auteur` et une seule valeur de `email_auteur`.

## 1.4. Pourquoi garder l’identifiant dans ARTICLE ?

Nous avons séparé les données :

```text
nom_auteur
email_auteur
```

de `ARTICLE`.

Mais nous avons gardé :

```text
id_auteur
```

dans `ARTICLE`.

Pourquoi ?

Parce que l’article doit pouvoir retrouver son auteur.

Nous avons donc :

```text
ARTICLE
   |
   | id_auteur
   ↓
AUTEUR
```

L’identifiant sert donc de référence pour retrouver les informations séparées.

Il permet aussi de vérifier la dépendance :

```text
id_auteur → nom_auteur, email_auteur
```

## 1.5. Si l’identifiant est déjà connu

Dans certains cas, le dictionnaire de données peut déjà contenir un identifiant.

Par exemple :

```text
id_auteur
```

est déjà présent dans le dictionnaire.

Dans ce cas, le travail est plus simple.

On peut directement rechercher les dépendances :

```text
id_auteur → nom_auteur, email_auteur
```

Puis séparer automatiquement les données déterminées :

```text
nom_auteur
email_auteur
```

tout en gardant :

```text
id_auteur
```

dans `ARTICLE`.

La connaissance des dépendances fonctionnelles permet donc de faciliter la séparation des données.

Elle permet de repérer rapidement :

* les données qui dépendent d’un même identifiant ;
* les données qui peuvent être répétées ;
* les données qui peuvent être séparées.

## 1.6. À retenir

* Une seule relation peut provoquer des répétitions de données.
* Les répétitions peuvent provoquer des problèmes de cohérence.
* Les données qui décrivent une même réalité peuvent être séparées.
* Pour retrouver les données séparées, on conserve un identifiant dans la relation de départ.
* L’identifiant peut déterminer les données du groupe.
* Cette relation entre les données est une **dépendance fonctionnelle**.
* Lorsqu’un identifiant est déjà connu, la recherche des dépendances facilite la séparation des données.

# Partie 2 — Pratique

## 2.1. Observer le problème

### Étape 1 — Lire les données

Observez la relation :

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

Observez les données :

| titre_article | nom_auteur | email_auteur                              | nom_categorie | description_categorie    |
| ------------- | ---------- | ----------------------------------------- | ------------- | ------------------------ |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Kotlin        | Sara       | [sara@mail.com](mailto:sara@mail.com)     | Mobile        | Développement mobile     |

### Étape 2 — Expliquer le problème

Repérez les données répétées.

Pour les données de l’auteur, répondez :

> Quelles informations sont répétées ?

> Que faut-il faire si l’email de Madani change ?

> Que peut-il se passer si une seule ligne est modifiée ?

**Résultat attendu :**

Vous avez identifié les données répétées et les problèmes possibles de cohérence.

## 2.2. Appliquer la solution

### Étape 3 — Séparer un groupe de données

Prenez les données :

```text
nom_auteur
email_auteur
```

Elles décrivent un même auteur.

Créez une nouvelle relation :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

### Étape 4 — Ajouter un identifiant

Pour retrouver l’auteur à partir d’un article, ajoutez :

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

Vous obtenez :

```text
ARTICLE(
    titre_article,
    contenu_article,
    date_publication,
    id_auteur,
    nom_categorie,
    description_categorie
)
```

Vérifiez que `id_auteur` permet toujours de retrouver l’auteur.

## 2.3. Découvrir la dépendance fonctionnelle

### Étape 6 — Observer les valeurs

Observez la relation :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Posez les questions :

> Pour un même `id_auteur`, peut-on avoir deux noms différents ?

> Pour un même `id_auteur`, peut-on avoir deux emails différents ?

### Étape 7 — Écrire les dépendances

Écrivez les dépendances fonctionnelles :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

Vous pouvez aussi les regrouper :

```text
id_auteur → nom_auteur, email_auteur
```

**Résultat attendu :**

Vous avez séparé les données de l’auteur, ajouté un identifiant et identifié les dépendances fonctionnelles.

# 3. Bilan

**Vous avez réalisé :** l’analyse d’une relation contenant des données répétées et la séparation des données de l’auteur.

**Vous savez maintenant :** repérer des données répétées, les séparer dans une nouvelle relation, conserver un identifiant comme référence et identifier les dépendances fonctionnelles.

# 4. Glossaire

* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Répétition** : même information enregistrée plusieurs fois.
* **Cohérence** : fait de conserver des informations correctes et compatibles.
* **Identifiant** : donnée qui permet d’identifier une occurrence et de retrouver ses informations.
* **Référence** : donnée conservée dans une relation pour retrouver une occurrence dans une autre relation.
* **Occurrence** : élément enregistré dans une relation.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
