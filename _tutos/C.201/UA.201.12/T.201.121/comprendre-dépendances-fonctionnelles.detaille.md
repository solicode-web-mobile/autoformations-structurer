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

Comprendre pourquoi une relation ne doit pas contenir toutes les données d’un besoin.

Découvrir une solution pour éviter les répétitions, puis comprendre la dépendance fonctionnelle entre un identifiant et les données qu’il détermine.

## 2. Prérequis

* Avoir réalisé le dictionnaire de données de la fonctionnalité étudiée.

# Partie 1 — Théorie

## 1.1. Le problème d’une seule relation

À partir du dictionnaire de données du Blog, nous disposons de plusieurs informations :

```text
titre_article
contenu_article
date_publication
nom_auteur
email_auteur
nom_categorie
description_categorie
```

Une première idée peut être de placer toutes ces données dans une seule relation.

On obtient :

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

Toutes les informations nécessaires sont présentes dans une seule relation.

Mais une relation doit être observée avec plusieurs exemples de données.

Par exemple :

| titre_article | nom_auteur | email_auteur                              | nom_categorie | description_categorie    |
| ------------- | ---------- | ----------------------------------------- | ------------- | ------------------------ |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) | PHP           | Langage de programmation |
| Kotlin        | Sara       | [sara@mail.com](mailto:sara@mail.com)     | Mobile        | Développement mobile     |

Nous pouvons maintenant observer le problème.

Les informations concernant Madani apparaissent dans plusieurs lignes :

```text
Madani
madani@mail.com
```

Les informations concernant la catégorie PHP apparaissent également dans plusieurs lignes :

```text
PHP
Langage de programmation
```

Les mêmes informations sont donc enregistrées plusieurs fois.

### Pourquoi cette répétition est-elle un problème ?

Imaginons que Madani change son adresse email.

Dans cette organisation, son email apparaît dans plusieurs lignes.

Nous devons modifier chaque ligne concernée.

Par exemple, nous pouvons avoir avant la modification :

| titre_article | nom_auteur | email_auteur                              |
| ------------- | ---------- | ----------------------------------------- |
| Laravel       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com) |

Après la modification, toutes les lignes doivent être mises à jour.

Si une ligne n’est pas modifiée, nous pouvons obtenir :

| titre_article | nom_auteur | email_auteur                                    |
| ------------- | ---------- | ----------------------------------------------- |
| Laravel       | Madani     | [madani@exemple.com](mailto:madani@exemple.com) |
| Eloquent      | Madani     | [madani@mail.com](mailto:madani@mail.com)       |

Nous avons maintenant deux emails différents pour le même auteur.

La relation contient donc un problème de **répétition** et un risque de **problème de cohérence**.

## 1.2. La solution : séparer les données répétées

Pour éviter ces répétitions, nous pouvons chercher les données qui décrivent une même réalité.

Par exemple :

```text
nom_auteur
email_auteur
```

Ces deux données décrivent un auteur.

Nous pouvons donc les séparer de la relation `ARTICLE` et créer une nouvelle relation :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

Cette séparation permet de conserver les informations de l’auteur une seule fois.

Mais un nouveau problème apparaît :

> Comment identifier chaque auteur ?

La relation doit pouvoir distinguer un auteur d’un autre.

Nous ajoutons donc un identifiant :

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

Par exemple :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Chaque auteur possède maintenant une valeur différente de `id_auteur`.

Dans `ARTICLE`, nous conservons `id_auteur`.

Il permet de retrouver l’auteur associé à chaque article.

Nous pouvons donc avoir :

| titre_article | id_auteur |
| ------------- | --------- |
| Laravel       | A01       |
| Eloquent      | A01       |
| Kotlin        | A02       |

Les informations détaillées de l’auteur ne sont plus répétées dans chaque article.

## 1.3. Découvrir la dépendance fonctionnelle

Nous avons maintenant une nouvelle relation :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Nous pouvons observer les valeurs.

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Posons une première question :

> Pour une même valeur de `id_auteur`, peut-on avoir deux noms différents ?

La réponse doit être non.

Pour :

```text
id_auteur = A01
```

le nom doit toujours être :

```text
Madani
```

Nous pouvons donc écrire :

```text
id_auteur → nom_auteur
```

Posons maintenant une deuxième question :

> Pour une même valeur de `id_auteur`, peut-on avoir deux emails différents ?

La réponse doit également être non.

Pour :

```text
id_auteur = A01
```

l’email doit toujours être :

```text
madani@mail.com
```

Nous écrivons :

```text
id_auteur → email_auteur
```

Nous avons découvert une **dépendance fonctionnelle**.

Elle s’écrit :

```text
A → B
```

et se lit :

> A détermine B.

Dans notre exemple :

```text
id_auteur → nom_auteur
```

signifie :

> `id_auteur` détermine `nom_auteur`.

Et :

```text
id_auteur → email_auteur
```

signifie :

> `id_auteur` détermine `email_auteur`.

Nous pouvons aussi regrouper les deux :

```text
id_auteur → nom_auteur, email_auteur
```

### Une règle importante

Une dépendance fonctionnelle signifie que, pour une valeur donnée du déterminant, une seule valeur est possible pour la donnée déterminée.

Par exemple :

```text
id_auteur = A01
```

doit toujours donner :

```text
nom_auteur = Madani
email_auteur = madani@mail.com
```

Il ne doit pas être possible d’avoir :

```text
A01 → Madani
```

dans une ligne et :

```text
A01 → Sara
```

dans une autre.

## 1.4. À retenir

* Mettre toutes les données dans une seule relation peut créer des répétitions.
* Une répétition peut rendre les modifications difficiles.
* Une répétition peut créer des valeurs différentes pour une même réalité.
* Les données qui décrivent une même réalité peuvent être séparées.
* Il faut pouvoir identifier chaque occurrence du groupe.
* L’identifiant permet d’identifier chaque occurrence.
* L’identifiant peut déterminer les autres données du groupe.
* Cette relation entre les données est une **dépendance fonctionnelle**.

# Partie 2 — Pratique

## 2.1. Observer le problème

### Étape 1 — Lire les données

Vous disposez de la relation suivante :

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

Lisez le tableau ligne par ligne.

### Étape 2 — Expliquer le problème

Repérez les informations qui apparaissent plusieurs fois.

Pour chaque répétition, répondez aux questions suivantes :

> Quelle information est répétée ?

> Pourquoi est-elle répétée ?

> Que faut-il faire si cette information change ?

> Que peut-il se passer si une ligne est modifiée et une autre ne l’est pas ?

Écrivez vos réponses.

**Résultat attendu :**

Vous avez identifié les données répétées et expliqué les problèmes possibles.

## 2.2. Appliquer la solution

### Étape 3 — Séparer un groupe de données

Prenez les données qui décrivent l’auteur :

```text
nom_auteur
email_auteur
```

Ces deux colonnes représentent une même réalité.

Créez une nouvelle relation :

```text
AUTEUR(
    nom_auteur,
    email_auteur
)
```

### Étape 4 — Ajouter un identifiant

La relation doit permettre de distinguer chaque auteur.

Ajoutez :

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

Utilisez par exemple :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

### Étape 5 — Garder la référence dans ARTICLE

Dans `ARTICLE`, gardez `id_auteur`.

Cette donnée permet de retrouver l’auteur associé à chaque article.

Par exemple :

| titre_article | id_auteur |
| ------------- | --------- |
| Laravel       | A01       |
| Eloquent      | A01       |
| Kotlin        | A02       |

Les données détaillées de l’auteur sont maintenant stockées dans `AUTEUR`.

## 2.3. Découvrir la dépendance fonctionnelle

### Étape 6 — Observer les valeurs

Observez la relation :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

et les valeurs :

| id_auteur | nom_auteur | email_auteur                              |
| --------- | ---------- | ----------------------------------------- |
| A01       | Madani     | [madani@mail.com](mailto:madani@mail.com) |
| A02       | Sara       | [sara@mail.com](mailto:sara@mail.com)     |

Posez-vous la première question :

> Pour un même `id_auteur`, peut-on avoir deux noms différents ?

Puis :

> Pour un même `id_auteur`, peut-on avoir deux emails différents ?

Utilisez les données pour justifier vos réponses.

### Étape 7 — Écrire les dépendances

Écrivez les dépendances fonctionnelles trouvées.

Utilisez la forme :

```text
A → B
```

Vous devez obtenir :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

Vous pouvez aussi écrire :

```text
id_auteur → nom_auteur, email_auteur
```

**Résultat attendu :**

Vous avez séparé les données répétées, ajouté `id_auteur` et identifié les dépendances fonctionnelles du groupe `AUTEUR`.

# 3. Bilan

**Vous avez réalisé :** l’analyse d’une relation contenant des données répétées et la séparation des données d’un auteur.

**Vous savez maintenant :** repérer un problème de répétition, expliquer le risque de cohérence, séparer un groupe de données, ajouter un identifiant et vérifier une dépendance fonctionnelle.

# 4. Glossaire

* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Répétition** : même information enregistrée plusieurs fois.
* **Cohérence** : fait de conserver des informations correctes et compatibles.
* **Identifiant** : donnée qui permet d’identifier une occurrence de façon unique.
* **Occurrence** : élément enregistré dans une relation.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
* **Déterminant** : donnée qui permet de déterminer une autre donnée.
