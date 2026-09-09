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

Mais plusieurs articles peuvent être écrits par le même auteur.

On peut alors obtenir :

| titre_article | nom_auteur | email_auteur                              | nom_categorie | description_categorie    |
| ------------- | ---------- | ----------------------------------------- | ------------- | ------------------------ |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Kotlin        | Sara       | [sara@mail.com](mailto:sara@mail.com)     | Mobile        | Développement mobile     |

On remarque que les informations de Madani sont répétées :

```text
Madani
madani@mail.com
```

Les informations de la catégorie `PHP` sont également répétées.

### Pourquoi cette répétition pose-t-elle un problème ?

Imaginons que l’adresse email de Madani change.

Dans cette organisation, son email apparaît dans plusieurs lignes.

Avant la modification :

| titre_article | nom_auteur | email_auteur                              |
| ------------- | ---------- | ----------------------------------------- |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) |

Nous devons modifier les deux lignes.

Si une seule ligne est modifiée :

| titre_article | nom_auteur | email_auteur                                    |
| ------------- | ---------- | ----------------------------------------------- |
| Laravel       | Madani     | [madani@exemple.com](mailto:madani@exemple.com) |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com)       |

les deux lignes ne contiennent plus la même information pour Madani.

La répétition peut donc provoquer un problème de cohérence.

## 1.2. La solution : sortir les données de l’auteur

Nous voulons éviter de répéter les informations de l’auteur dans chaque article.

Les colonnes :

```text
nom_auteur
email_auteur
```

peuvent être placées dans une autre relation :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

Mais un nouveau problème apparaît.

Dans `ARTICLE`, nous avons supprimé :

```text
nom_auteur
email_auteur
```

Comment retrouver maintenant les informations de l’auteur d’un article ?

Il faut conserver une donnée dans `ARTICLE` qui permet de retrouver l’auteur.

Nous ajoutons :

```text
id_auteur
```

La relation `ARTICLE` devient :

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

Et la relation `AUTEUR` devient :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Nous pouvons maintenant faire le lien :

```text
ARTICLE
   |
   | id_auteur
   ↓
AUTEUR
```

Par exemple :

| titre_article | id_auteur |
| ------------- | --------- |
| Laravel       | A01       |
| Eloquent      | A01       |
| Kotlin        | A02       |

Et :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Pour l’article `Laravel`, on trouve `A01`.

Avec `A01`, on retrouve :

```text
Madani
madani@mail.com
```

L’identifiant sert donc ici de **référence** vers les informations de l’auteur.

## 1.3. Découvrir la dépendance fonctionnelle

Nous avons maintenant :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Regardons les données :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Posons une question :

> Pour un même `id_auteur`, peut-on avoir deux valeurs différentes de `nom_auteur` ?

Par exemple, pour :

```text
id_auteur = A01
```

nous devons retrouver une seule valeur :

```text
nom_auteur = Madani
```

Nous pouvons donc écrire :

```text
id_auteur → nom_auteur
```

Posons la même question pour l’email :

> Pour un même `id_auteur`, peut-on avoir deux valeurs différentes de `email_auteur` ?

Pour :

```text
id_auteur = A01
```

nous devons retrouver :

```text
email_auteur = madani@mail.com
```

Nous pouvons donc écrire :

```text
id_auteur → email_auteur
```

Nous avons découvert une **dépendance fonctionnelle**.

On peut regrouper les deux :

```text
id_auteur → nom_auteur, email_auteur
```

Cela signifie :

> Une valeur de `id_auteur` permet de retrouver une seule valeur de `nom_auteur` et une seule valeur de `email_auteur`.

## 1.4. Comprendre le rôle de l’identifiant

L’identifiant a ici deux rôles importants.

### Dans `ARTICLE`

`id_auteur` permet de retrouver l’auteur associé à un article.

```text
ARTICLE
   ↓
id_auteur
   ↓
AUTEUR
```

### Dans `AUTEUR`

`id_auteur` permet de retrouver de façon unique les informations de l’auteur :

```text
id_auteur
    ↓
nom_auteur
email_auteur
```

La dépendance fonctionnelle est donc :

```text
id_auteur → nom_auteur, email_auteur
```

L’identifiant permet ainsi de remplacer dans `ARTICLE` les informations répétées de l’auteur par une seule donnée : `id_auteur`.

## 1.5. À retenir

* Une relation peut contenir des données qui se répètent.
* Les répétitions peuvent provoquer des problèmes de cohérence.
* Les données répétées d’un même auteur peuvent être sorties de `ARTICLE`.
* `ARTICLE` doit garder une donnée permettant de retrouver l’auteur.
* `id_auteur` joue ce rôle de référence.
* Dans `AUTEUR`, `id_auteur` permet de retrouver les informations de l’auteur.
* On peut écrire :

```text
id_auteur → nom_auteur, email_auteur
```

* Cette relation est une **dépendance fonctionnelle**.

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

Repérez les informations qui se répètent.

### Étape 2 — Expliquer le problème

Pour les données de l’auteur, répondez :

> Quelles informations sont répétées ?

> Que faut-il faire si l’email de Madani change ?

> Que peut-il se passer si une seule ligne est modifiée ?

Écrivez vos réponses.

**Résultat attendu :**

Vous avez identifié les problèmes provoqués par la répétition des informations de l’auteur.

## 2.2. Appliquer la solution

### Étape 3 — Sortir les données de l’auteur

Les données :

```text
nom_auteur
email_auteur
```

décrivent l’auteur.

Placez-les dans une nouvelle relation :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

### Étape 4 — Ajouter une référence dans ARTICLE

Les données de l’auteur ne sont plus dans `ARTICLE`.

Il faut cependant pouvoir retrouver l’auteur à partir d’un article.

Ajoutez :

```text
id_auteur
```

dans `ARTICLE`.

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

Puis ajoutez le même identifiant dans la relation `AUTEUR` :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

### Étape 5 — Vérifier la référence

Utilisez des exemples :

| titre_article | id_auteur |
| ------------- | --------- |
| Laravel       | A01       |
| Eloquent      | A01       |
| Kotlin        | A02       |

Puis :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Vérifiez que `id_auteur` permet de retrouver les informations de l’auteur de chaque article.

**Résultat attendu :**

Les informations de l’auteur sont stockées dans une seule relation et `ARTICLE` contient `id_auteur` pour retrouver l’auteur.

## 2.3. Découvrir la dépendance fonctionnelle

### Étape 6 — Observer les valeurs

Observez :

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

Vous avez séparé les données de l’auteur, ajouté une référence `id_auteur` dans `ARTICLE` et identifié les dépendances fonctionnelles.

# 3. Bilan

**Vous avez réalisé :** l’analyse d’une relation contenant des données répétées et la séparation des données de l’auteur.

**Vous savez maintenant :** expliquer pourquoi des données répétées doivent être sorties d’une relation, utiliser un identifiant pour retrouver les données séparées et identifier une dépendance fonctionnelle.

# 4. Glossaire

* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Répétition** : même information enregistrée plusieurs fois.
* **Cohérence** : fait de conserver des informations correctes et compatibles.
* **Identifiant** : donnée utilisée pour identifier une occurrence et retrouver ses informations.
* **Référence** : donnée qui permet de retrouver une occurrence dans une autre relation.
* **Occurrence** : élément enregistré dans une relation.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
* **Déterminant** : donnée qui permet de déterminer une autre donnée.
