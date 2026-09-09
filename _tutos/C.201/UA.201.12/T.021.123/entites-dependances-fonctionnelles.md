---
title: "Identifier les entités à partir des dépendances fonctionnelles"
layout: tuto
slug: "identifier-les-entites-a-partir-des-dependances-fonctionnelles"
permalink: /entites-dependances-fonctionnelles/normal
tuto_id: "T.201.123"
version: "normal"
ua: "UA.201.12"
nav_order: 3
---

## 1. Objectif

À partir des dépendances fonctionnelles du Blog personnel, regrouper les données pour identifier les entités, leurs propriétés et leurs identifiants.

## 2. Prérequis

* Comprendre les dépendances fonctionnelles.
* Avoir identifié les dépendances du Blog personnel.

# Partie 1 — Théorie

## 1.1. Entité

Une **entité** représente un objet métier sur lequel l’application manipule des données.

**Exemple :**

```text
Article
Auteur
Catégorie
```

## 1.2. Regrouper les données

Les données qui décrivent le même objet métier sont regroupées dans une même entité.

**Exemple :**

```text
id_article → titre_article
id_article → contenu_article
id_article → date_publication
```

Ces données décrivent un même objet :

```text
Article
```

## 1.3. À retenir

* Une entité représente un objet métier.
* Ses propriétés décrivent cet objet.
* Son identifiant permet de l’identifier de manière unique.
* Les dépendances fonctionnelles aident à regrouper les données.

# Partie 2 — Pratique

## 2.1. Identifier les entités du Blog

À partir des dépendances du Tuto 2, regroupez les données par objet métier.

### Étape 1 — Regrouper les données

```text
id_article → titre_article
id_article → contenu_article
id_article → date_publication
```

donne :

```text
Article
- id_article
- titre_article
- contenu_article
- date_publication
```

### Étape 2 — Identifier les autres entités

Regroupez les données de l’auteur et de la catégorie :

```text
Auteur
- id_auteur
- nom_auteur
- email_auteur

Catégorie
- id_categorie
- libelle_categorie
```

### Étape 3 — Identifier les identifiants

Pour chaque entité, identifiez la donnée qui permet d’identifier une occurrence de manière unique.

**Résultat attendu :**

```text
Article
- id_article
- titre_article
- contenu_article
- date_publication

Auteur
- id_auteur
- nom_auteur
- email_auteur

Catégorie
- id_categorie
- libelle_categorie
```

# 3. Bilan

**Vous avez réalisé :** l’identification des entités, de leurs propriétés et de leurs identifiants.

**Vous savez maintenant :** passer des dépendances fonctionnelles à une première structure des entités du Blog.

# 4. Glossaire

* **Entité** : objet métier représenté dans les données.
* **Objet métier** : élément du besoin que l’application doit gérer.
* **Propriété** : information qui décrit une entité.
* **Attribut** : donnée qui décrit une entité.
* **Identifiant** : donnée qui permet d’identifier une entité de manière unique.
