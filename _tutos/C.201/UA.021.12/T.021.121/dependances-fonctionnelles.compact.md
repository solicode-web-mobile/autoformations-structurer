---
title: "Comprendre les dépendances fonctionnelles"
layout: tuto
slug: "comprendre-les-dependances-fonctionnelles"
permalink: /tutos/dependances-fonctionnelles/compact
tuto_id: "T.021.121"
version: "compact"
ua: "UA.021.12"
nav_order: 1
---

# 1. Objectif

Comprendre une **dépendance fonctionnelle** entre deux données et savoir l’identifier dans un ensemble de données.

# 2. Prérequis

* Lire un dictionnaire de données.
* Connaître la notion de donnée.
* Connaître la notion d’identifiant.

# 3. Partie 1 — Théorie

## 3.1. Dépendance fonctionnelle

Une **dépendance fonctionnelle** indique qu’une donnée permet de déterminer une autre donnée.

**Exemple :**

```text
id_auteur → nom_auteur
```

Cela signifie que `id_auteur` permet de connaître `nom_auteur`.

Pour un même `id_auteur`, on doit toujours avoir le même `nom_auteur`.

## 3.2. Donnée déterminante et donnée dépendante

Dans une dépendance fonctionnelle :

* la donnée à gauche est la **donnée déterminante** ;
* la donnée à droite est la **donnée dépendante**.

```text
id_auteur → email_auteur
    ↑             ↑
déterminante   dépendante
```

## 3.3. Exemple dans une application Blog

Considérons les données suivantes :

```text
id_article
titre_article
id_categorie
libelle_categorie
```

On peut avoir :

```text
id_article → titre_article
id_article → id_categorie
id_categorie → libelle_categorie
```

Par exemple :

```text
id_article = 25 → titre_article = "Introduction à Laravel"

id_categorie = 3 → libelle_categorie = "Laravel"
```

## 3.4. Attention au sens de la dépendance

Le sens est important.

Si :

```text
id_auteur → nom_auteur
```

on ne doit pas écrire automatiquement :

```text
nom_auteur → id_auteur
```

Plusieurs auteurs peuvent avoir le même nom.

La donnée déterminante doit permettre de retrouver une seule valeur pour la donnée dépendante.

## 3.5. À retenir

* Une dépendance fonctionnelle relie deux données.
* La donnée de gauche est la **donnée déterminante**.
* La donnée de droite est la **donnée dépendante**.
* Un identifiant est souvent une donnée déterminante.
* Le sens de la relation est important.

# 4. Partie 2 — Pratique

## 4.1. Identifier une dépendance fonctionnelle

Observez les données :

```text
id_article
titre_article
```

Si chaque `id_article` correspond à un seul titre, alors :

```text
id_article → titre_article
```

**Action :**

Identifiez la donnée déterminante et la donnée dépendante dans les exemples suivants :

```text
id_auteur → nom_auteur

id_auteur → email_auteur

id_categorie → libelle_categorie
```

**Résultat attendu :**

Vous savez indiquer :

* la donnée déterminante ;
* la donnée dépendante.

## 4.2. Vérifier une dépendance

Observez le tableau :

| id_auteur | nom_auteur | email_auteur                                      |
| --------- | ---------- | ------------------------------------------------- |
| 1         | Ali        | [ali@example.com](mailto:ali@example.com)         |
| 2         | Sara       | [sara@example.com](mailto:sara@example.com)       |
| 3         | Yassine    | [yassine@example.com](mailto:yassine@example.com) |

On peut écrire :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
```

Car chaque `id_auteur` permet de trouver une seule valeur de `nom_auteur` et de `email_auteur`.

## 4.3. Exercice

Pour chaque proposition, indiquez si la dépendance fonctionnelle est correcte.

### Exemple 1

```text
id_article → titre_article
```

### Exemple 2

```text
id_categorie → libelle_categorie
```

### Exemple 3

```text
nom_auteur → id_auteur
```

**Travail à faire :**

Pour chaque proposition :

1. indiquez si la dépendance est correcte ;
2. identifiez la donnée déterminante ;
3. identifiez la donnée dépendante ;
4. justifiez votre réponse avec un exemple simple.

**Résultat attendu :**

Vous savez reconnaître une dépendance fonctionnelle correcte et identifier son sens.

# 5. Bilan

**Vous avez appris à :**

* comprendre une dépendance fonctionnelle ;
* identifier une donnée déterminante ;
* identifier une donnée dépendante ;
* représenter une dépendance avec la notation `→` ;
* vérifier le sens d’une dépendance fonctionnelle.

# 6. Livrable

Fournir une liste de dépendances fonctionnelles à partir d’un dictionnaire de données.

**Livrable attendu :**

```text
id_article → titre_article
id_article → id_categorie
id_auteur → nom_auteur
id_auteur → email_auteur
id_categorie → libelle_categorie
```

Chaque dépendance doit être accompagnée de l’identification de la donnée déterminante et de la donnée dépendante.

# 7. Glossaire

* **Dépendance fonctionnelle** : relation où une donnée permet de déterminer une autre donnée.
* **Donnée déterminante** : donnée qui permet de connaître une autre donnée.
* **Donnée dépendante** : donnée déterminée par une autre donnée.
* **Identifiant** : donnée qui permet d’identifier une information de manière unique.
* **Dictionnaire de données** : document qui décrit les données utilisées dans une application.
