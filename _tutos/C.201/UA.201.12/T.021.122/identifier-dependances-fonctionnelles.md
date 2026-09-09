---
title: "Identifier les dépendances fonctionnelles"
layout: tuto
slug: "identifier-les-dependances-fonctionnelles"
permalink: /tutos/identifier-dependances-fonctionnelles/
tuto_id: "T.201.122"
version: "normal"
ua: "UA.201.12"
nav_order: 2
---

## 1. Objectif

Identifier les dépendances fonctionnelles entre les données du Blog personnel.

## 2. Prérequis

* Comprendre une dépendance fonctionnelle.
* Connaître la donnée déterminante et la donnée dépendante.
* Disposer du dictionnaire de données du Blog personnel.

# Partie 1 — Théorie

## 1.1. Analyser les données

Pour trouver une dépendance fonctionnelle, posez la question :

> Quelle donnée permet de connaître une autre donnée ?

**Exemple :**

```text
id_article → titre_article
```

`id_article` permet de connaître `titre_article`.

## 1.2. À retenir

* Cherchez d’abord une donnée unique.
* Vérifiez ce que cette donnée permet de déterminer.
* Écrivez la dépendance sous la forme :

```text
Donnée déterminante → Donnée dépendante
```

# Partie 2 — Pratique

## 2.1. Analyser les données du Blog

À partir du dictionnaire de données du Blog personnel, analysez les données de :

* Article ;
* Auteur ;
* Catégorie.

### Étape 1 — Identifier les données déterminantes

Cherchez les identifiants :

```text
id_article
id_auteur
id_categorie
```

### Étape 2 — Identifier les données dépendantes

Pour chaque identifiant, cherchez les données qu’il permet de déterminer.

Exemple :

```text
id_article → titre_article
id_article → contenu_article
id_article → date_publication

id_auteur → nom_auteur
id_auteur → email_auteur

id_categorie → libelle_categorie
```

### Étape 3 — Vérifier les dépendances

Vérifiez que chaque dépendance est logique et que la donnée déterminante permet d’identifier une seule valeur de la donnée dépendante.

**Résultat attendu :**

Un tableau contenant les dépendances fonctionnelles des données du Blog.

# 3. Bilan

**Vous avez réalisé :** l’analyse des dépendances fonctionnelles du Blog personnel.

**Vous savez maintenant :** identifier les données déterminantes et les données dépendantes à partir d’un dictionnaire de données.

# 4. Glossaire

* **Dépendance fonctionnelle** : relation où une donnée permet de déterminer une autre donnée.
* **Donnée déterminante** : donnée qui permet de connaître une autre donnée.
* **Donnée dépendante** : donnée déterminée par une autre donnée.
* **Identifiant** : donnée qui identifie une information de manière unique.
