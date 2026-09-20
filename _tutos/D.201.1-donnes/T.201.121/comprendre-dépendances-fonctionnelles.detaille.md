---
title: "Comprendre les dépendances fonctionnelles"
layout: tuto
slug: "comprendre-dépendances-fonctionnelles"
permalink: /tutos/:slug/detaille
tuto_id: "T.201.121"
version: "detaille"
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

Une première idée consiste à mettre toutes ces données dans une seule relation :

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

Toutes les données d’un article sont réunies au même endroit.

Mais une relation doit être observée avec plusieurs lignes.

| titre_article | nom_auteur | email_auteur                              | nom_categorie | description_categorie    |
| ------------- | ---------- | ----------------------------------------- | ------------- | ------------------------ |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Kotlin        | Sara       | [sara@mail.com](mailto:sara@mail.com)     | Mobile        | Développement mobile     |

On remarque que les informations d’un même auteur apparaissent dans plusieurs lignes.

Par exemple :

```text
Madani
madani@mail.com
```

apparaissent pour plusieurs articles.

Les informations d’une même catégorie peuvent aussi apparaître plusieurs fois :

```text
PHP
Langage de programmation
```

### Pourquoi cette répétition est-elle un problème ?

La répétition oblige à enregistrer plusieurs fois la même information.

Prenons l’exemple de l’email de Madani.

Avant une modification :

| titre_article | nom_auteur | email_auteur                              |
| ------------- | ---------- | ----------------------------------------- |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) |

Supposons que Madani change son email.

Nous devons modifier toutes les lignes qui contiennent son ancien email.

Si nous oublions une ligne :

| titre_article | nom_auteur | email_auteur                                    |
| ------------- | ---------- | ----------------------------------------------- |
| Laravel       | Madani     | [madani@exemple.com](mailto:madani@exemple.com) |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com)       |

nous avons deux valeurs différentes pour le même auteur.

La répétition crée donc un risque de **cohérence des données**.

Le problème n’est pas seulement que la table est grande.

Le problème est que la même information doit être enregistrée et modifiée plusieurs fois.

## 1.2. La solution : séparer les données répétées

Pour éviter cette répétition, nous cherchons les données qui décrivent une même réalité.

Les données :

```text
nom_auteur
email_auteur
```

décrivent l’auteur.

Nous pouvons donc les séparer de la relation `ARTICLE`.

Nous créons :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

Les informations d’un auteur peuvent maintenant être enregistrées une seule fois.

Mais un nouveau problème apparaît.

Dans `ARTICLE`, nous avons retiré :

```text
nom_auteur
email_auteur
```

Comment retrouver maintenant les informations de l’auteur d’un article ?

Par exemple, nous avons :

| titre_article |
| ------------- |
| Laravel       |
| Eloquent      |
| Kotlin        |

Nous devons pouvoir dire :

```text
Laravel → quel auteur ?
Eloquent → quel auteur ?
Kotlin → quel auteur ?
```

Il faut donc conserver dans `ARTICLE` une donnée qui permet de retrouver l’auteur.

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

Et dans `ARTICLE`, nous remplaçons les données répétées :

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

Pour retrouver l’auteur de `Laravel`, on utilise `A01` :

```text
Laravel
   ↓
A01
   ↓
Madani
madani@mail.com
```

Nous avons donc remplacé deux informations répétées par une seule référence :

```text
id_auteur
```

## 1.3. Découvrir la dépendance fonctionnelle

Nous avons créé `id_auteur` pour permettre de retrouver les informations de l’auteur.

Nous pouvons maintenant observer la nouvelle relation :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Nous devons vérifier ce que permet de retrouver `id_auteur`.

Posons la question :

> Pour une même valeur de `id_auteur`, peut-on avoir deux noms différents ?

Pour :

```text
id_auteur = A01
```

nous devons toujours retrouver :

```text
Madani
```

Nous pouvons écrire :

```text
id_auteur → nom_auteur
```

Posons maintenant une deuxième question :

> Pour une même valeur de `id_auteur`, peut-on avoir deux emails différents ?

Pour :

```text
id_auteur = A01
```

nous devons toujours retrouver :

```text
madani@mail.com
```

Nous pouvons donc écrire :

```text
id_auteur → email_auteur
```

Nous pouvons regrouper les deux :

```text
id_auteur → nom_auteur, email_auteur
```

Cette relation s’appelle une **dépendance fonctionnelle**.

On écrit :

```text
A → B
```

et on lit :

> A détermine B.

Dans notre exemple :

```text
id_auteur → nom_auteur
```

signifie :

> Une valeur de `id_auteur` détermine une seule valeur de `nom_auteur`.

De même :

```text
id_auteur → email_auteur
```

signifie :

> Une valeur de `id_auteur` détermine une seule valeur de `email_auteur`.

La dépendance fonctionnelle permet donc de vérifier que les informations regroupées appartiennent bien au même identifiant.

## 1.4. Comprendre le rôle de l’identifiant

L’identifiant ne sert pas seulement à donner un nom différent à chaque auteur.

Dans notre démarche, il sert surtout à permettre à `ARTICLE` de retrouver les informations de l’auteur après leur séparation.

Avant la séparation :

```text
ARTICLE
----------------------------
nom_auteur
email_auteur
```

Après la séparation :

```text
ARTICLE
----------------------------
id_auteur
```

et :

```text
AUTEUR
----------------------------
id_auteur
nom_auteur
email_auteur
```

Nous avons donc :

```text
ARTICLE
   |
   | id_auteur
   ↓
AUTEUR
```

L’identifiant permet de retrouver les informations associées.

Il permet également d’exprimer la dépendance :

```text
id_auteur → nom_auteur, email_auteur
```

Nous avons donc une chaîne simple :

```text
ARTICLE
   ↓
id_auteur
   ↓
AUTEUR
   ↓
nom_auteur
email_auteur
```

## 1.5. À retenir

* Une seule relation peut contenir des données répétées.
* Les répétitions peuvent rendre les modifications difficiles.
* Elles peuvent aussi créer des problèmes de cohérence.
* Les données qui décrivent une même réalité peuvent être séparées.
* Après la séparation, la relation de départ doit conserver une référence.
* `id_auteur` permet à `ARTICLE` de retrouver les informations de l’auteur.
* L’identifiant permet aussi d’exprimer une dépendance fonctionnelle.
* Dans notre exemple :

```text
id_auteur → nom_auteur, email_auteur
```

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

Observez ensuite les données :

| titre_article | nom_auteur | email_auteur                              | nom_categorie | description_categorie    |
| ------------- | ---------- | ----------------------------------------- | ------------- | ------------------------ |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Kotlin        | Sara       | [sara@mail.com](mailto:sara@mail.com)     | Mobile        | Développement mobile     |

Comparez les différentes lignes.

Repérez les informations identiques.

### Étape 2 — Expliquer le problème

Pour les données de l’auteur, répondez :

> Quelles informations sont répétées ?

> Pourquoi cette répétition peut-elle poser un problème ?

> Que faut-il modifier si l’email de Madani change ?

> Que peut-il se passer si une seule ligne est modifiée ?

Écrivez vos réponses.

**Résultat attendu :**

Vous avez identifié les répétitions et les problèmes possibles de cohérence.

## 2.2. Appliquer la solution

### Étape 3 — Séparer un groupe de données

Prenez les données :

```text
nom_auteur
email_auteur
```

Ces deux données décrivent une même réalité.

Séparez-les de `ARTICLE` et créez :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

L’objectif est de ne plus recopier les informations de l’auteur dans chaque article.

### Étape 4 — Ajouter un identifiant

Après avoir séparé les données, posez-vous la question :

> Comment `ARTICLE` peut-il retrouver l’auteur ?

Ajoutez :

```text
id_auteur
```

dans la relation `AUTEUR` :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Utilisez par exemple :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

### Étape 5 — Remplacer les données dans ARTICLE

Dans `ARTICLE`, retirez :

```text
nom_auteur
email_auteur
```

Conservez :

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

Utilisez par exemple :

| titre_article | id_auteur |
| ------------- | --------- |
| Laravel       | A01       |
| Eloquent      | A01       |
| Kotlin        | A02       |

Vérifiez que `id_auteur` permet toujours de retrouver l’auteur.

**Résultat attendu :**

Les données de l’auteur sont séparées et `ARTICLE` conserve une référence permettant de retrouver l’auteur.

## 2.3. Découvrir la dépendance fonctionnelle

### Étape 6 — Observer les valeurs

Observez la relation :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Pour `A01`, observez les valeurs obtenues.

Posez-vous les questions :

> `A01` peut-il correspondre à deux noms différents ?

> `A01` peut-il correspondre à deux emails différents ?

Faites la même vérification avec `A02`.

### Étape 7 — Écrire les dépendances

À partir de vos observations, écrivez :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

Puis regroupez les deux données :

```text
id_auteur → nom_auteur, email_auteur
```

**Résultat attendu :**

Vous avez séparé les données de l’auteur, utilisé `id_auteur` pour les retrouver et identifié les dépendances fonctionnelles.

# 3. Bilan

**Vous avez réalisé :** l’analyse d’une relation contenant des données répétées et la séparation des données de l’auteur.

**Vous savez maintenant :** repérer une répétition, expliquer le problème, séparer les données concernées, utiliser un identifiant comme référence et identifier les données qu’il détermine.

# 4. Glossaire

* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Répétition** : même information enregistrée plusieurs fois.
* **Cohérence** : fait de conserver des informations correctes et compatibles.
* **Identifiant** : donnée qui permet d’identifier une occurrence et de retrouver ses informations.
* **Référence** : donnée utilisée pour retrouver une occurrence dans une autre relation.
* **Occurrence** : élément enregistré dans une relation.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
* **Déterminant** : donnée qui permet de déterminer une autre donnée.
