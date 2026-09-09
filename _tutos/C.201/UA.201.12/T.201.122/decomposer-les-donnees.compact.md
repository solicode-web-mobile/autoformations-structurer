---
title: "Décomposer les données"
layout: tuto
slug: "decomposer-les-donnees"
permalink: /tutos/:slug/compact
tuto_id: "T.201.122"
version: "compact"
ua: "UA.201.12"
nav_order: 2
--- 
 

## 1. Objectif

À partir des dépendances fonctionnelles, décomposer progressivement une relation contenant plusieurs groupes de données.

Comprendre pourquoi certaines données doivent être séparées de la relation et identifier les entités obtenues.

## 2. Prérequis

* Avoir réalisé le dictionnaire de données.
* Avoir identifié les dépendances fonctionnelles.
* Comprendre le rôle d’un identifiant.

# Partie 1 — Théorie

## 1.1. Utiliser les dépendances fonctionnelles

Dans le Blog, nous avons par exemple :

```text
id_auteur → nom_auteur, email_auteur
```

Cette dépendance montre que les données de l’auteur forment un groupe.

Nous pouvons créer :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Dans `ARTICLE`, nous gardons `id_auteur` pour retrouver l’auteur.

## 1.2. Identifier un autre groupe

Nous pouvons aussi observer :

```text
id_article → nom_categorie
```

Cette dépendance est correcte, mais `nom_categorie` peut être répété pour plusieurs articles.

Exemple :

| id_article | nom_categorie |
| ---------- | ------------- |
| A01        | PHP           |
| A02        | PHP           |
| A03        | Mobile        |

Les données de la catégorie peuvent donc être séparées.

Nous ajoutons :

```text
id_categorie
```

Puis :

```text
id_categorie → nom_categorie, description_categorie
```

Nous créons :

```text
CATEGORIE(
    id_categorie,
    nom_categorie,
    description_categorie
)
```

Dans `ARTICLE`, nous gardons `id_categorie`.

## 1.3. Obtenir les relations

Après la séparation, nous obtenons :

```text
ARTICLE(
    id_article,
    titre_article,
    contenu_article,
    date_publication,
    id_auteur,
    id_categorie
)
```

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

```text
CATEGORIE(
    id_categorie,
    nom_categorie,
    description_categorie
)
```

Ces relations représentent les entités :

```text
ARTICLE
AUTEUR
CATEGORIE
```

## 1.4. À retenir

* Une dépendance fonctionnelle aide à repérer un groupe de données.
* Les données répétées peuvent être séparées.
* Un identifiant permet de retrouver les données séparées.
* Après chaque séparation, on reprend les données restantes.
* Les relations obtenues permettent d’identifier les entités.

# Partie 2 — Pratique

## 2.1. Analyser les données

### Étape 1 — Observer la relation

Travaillez avec :

```text
COMMANDE(
    numero_commande,
    date_commande,
    nom_client,
    email_client,
    nom_produit,
    prix_produit,
    quantite_commandee
)
```

Observez :

| numero_commande | date_commande | nom_client  | email_client                              | nom_produit | prix_produit | quantite_commandee |
| --------------- | ------------- | ----------- | ----------------------------------------- | ----------- | -----------: | -----------------: |
| C001            | 10/09/2026    | Madani Ali  | [madani@mail.com](mailto:madani@mail.com) | Clavier     |          200 |                  2 |
| C001            | 10/09/2026    | Madani Ali  | [madani@mail.com](mailto:madani@mail.com) | Souris      |          100 |                  1 |
| C002            | 11/09/2026    | Sara Amrani | [sara@mail.com](mailto:sara@mail.com)     | Clavier     |          200 |                  3 |

### Étape 2 — Rechercher les groupes

Cherchez les données qui se répètent.

Pour chaque groupe, cherchez :

* l’identifiant ;
* les données qu’il détermine ;
* la dépendance fonctionnelle.

## 2.2. Décomposer la relation

### Étape 3 — Séparer un groupe

Choisissez un groupe de données.

Créez une nouvelle relation avec :

```text
identifiant
+
données dépendantes
```

Conservez l’identifiant dans `COMMANDE`.

### Étape 4 — Continuer

Reprenez les données restantes.

Cherchez un nouveau groupe.

Cherchez ou ajoutez son identifiant.

Écrivez sa dépendance fonctionnelle.

Séparez le groupe.

Continuez jusqu’à ce qu’il n’y ait plus de groupe à séparer.

**Résultat attendu :**

Un ensemble de relations structurées avec leurs identifiants et leurs dépendances fonctionnelles.

## 2.3. Identifier les entités

### Étape 5 — Interpréter les relations

Pour chaque relation obtenue, indiquez ce qu’elle représente dans le système.

### Étape 6 — Identifier les propriétés

Pour chaque entité, indiquez :

* son identifiant ;
* ses propriétés.

**Résultat attendu :**

La liste des entités avec leurs identifiants et leurs propriétés.

# 3. Bilan

**Vous avez réalisé :** la décomposition progressive d’une relation à partir des dépendances fonctionnelles.

**Vous savez maintenant :** identifier les groupes de données, les séparer avec leurs identifiants et obtenir les entités correspondantes.

# 4. Glossaire

* **Décomposition** : séparation d’une relation en plusieurs relations.
* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Groupe de données** : ensemble de données qui décrit une même réalité.
* **Identifiant** : donnée qui permet d’identifier une occurrence de façon unique.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
* **Entité** : élément du système représenté dans le modèle de données.
* **Propriété** : donnée qui décrit une entité.
