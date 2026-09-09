---
title: "Comprendre les dépendances fonctionnelles"
layout: tuto
slug: "comprendre-les-dependances-fonctionnelles"
permalink: /tutos/dependances-fonctionnelles/
tuto_id: "T.021.121"
version: "normal"
ua: "UA.021.12"
nav_order: 1
---

## 1. Objectif

Comprendre ce qu’est une dépendance fonctionnelle entre deux données.

## 2. Prérequis

* Lire un dictionnaire de données.
* Connaître la notion de donnée.

# Partie 1 — Théorie

## 1.1. Dépendance fonctionnelle

Une **dépendance fonctionnelle** indique qu’une donnée permet de déterminer une autre donnée.

**Exemple :**

```text
id_auteur → nom_auteur
```

Cela signifie que `id_auteur` permet de connaître `nom_auteur`.

## 1.2. Donnée déterminante et donnée dépendante

La donnée située à gauche est la **donnée déterminante**.

La donnée située à droite est la **donnée dépendante**.

```text
id_auteur → email_auteur
     ↑              ↑
déterminante    dépendante
```

## 1.3. À retenir

* Une donnée déterminante permet de connaître une autre donnée.
* Une donnée dépendante est déterminée par une autre donnée.
* L’identifiant est souvent une donnée déterminante.

# Partie 2 — Pratique

## 2.1. Identifier une dépendance

Observez les données suivantes :

```text
id_article
titre_article
```

Si un `id_article` correspond à un seul titre, alors :

```text
id_article → titre_article
```

**Action :**

Identifiez les données déterminantes et dépendantes dans les exemples suivants :

```text
id_auteur → nom_auteur
id_auteur → email_auteur
id_categorie → libelle_categorie
```

**Résultat attendu :**

Vous savez identifier la donnée déterminante et la donnée dépendante.

# 3. Bilan

**Vous avez réalisé :** l’identification de dépendances fonctionnelles simples.

**Vous savez maintenant :** reconnaître une donnée déterminante et une donnée dépendante.

# 4. Glossaire

* **Dépendance fonctionnelle** : relation où une donnée permet de déterminer une autre donnée.
* **Donnée déterminante** : donnée qui permet de connaître une autre donnée.
* **Donnée dépendante** : donnée déterminée par une autre donnée.
* **Identifiant** : donnée qui permet d’identifier une information de manière unique.
