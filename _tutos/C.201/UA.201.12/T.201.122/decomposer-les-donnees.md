---
title: "Décomposer les données"
layout: tuto
slug: "decomposer-les-donnees"
permalink: /tutos/:slug/
tuto_id: "T.201.122"
version: "normal"
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

## 1.1. Utiliser les dépendances fonctionnelles pour organiser les données

Dans le tutoriel précédent, nous avons vu qu’une dépendance fonctionnelle permet de savoir quelles données sont déterminées par un identifiant.

Par exemple :

```text
id_auteur → nom_auteur, email_auteur
```

Cette information nous aide à organiser les données.

Nous savons que :

```text
id_auteur
nom_auteur
email_auteur
```

forment un groupe.

Nous pouvons donc créer :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Dans `ARTICLE`, nous conservons `id_auteur`.

La relation peut alors contenir :

```text
ARTICLE(
    id_article,
    titre_article,
    contenu_article,
    date_publication,
    id_auteur,
    nom_categorie,
    description_categorie
)
```

La dépendance fonctionnelle nous aide donc à repérer rapidement les données qui peuvent être séparées.

## 1.2. Une dépendance peut être correcte sans que les données restent dans la relation

Nous pouvons aussi avoir :

```text
id_article → nom_categorie
```

Cette dépendance peut être correcte.

Un article peut avoir une seule catégorie.

Mais regardons plusieurs articles :

| id_article | nom_categorie |
| ---------- | ------------- |
| A01        | PHP           |
| A02        | PHP           |
| A03        | Mobile        |

La dépendance :

```text
id_article → nom_categorie
```

est correcte.

Pourtant, `PHP` est enregistré plusieurs fois.

Nous devons donc nous demander :

> Pourquoi enregistrer plusieurs fois les mêmes informations sur une catégorie ?

La dépendance fonctionnelle nous donne une information.

L’observation des données nous donne une autre information :

> Les données de la catégorie sont répétées.

Nous devons utiliser les deux informations pour mieux organiser la relation.

## 1.3. Séparer les données de la catégorie

Les données :

```text
nom_categorie
description_categorie
```

décrivent une même réalité : une catégorie.

Exemple :

| id_article | nom_categorie | description_categorie    |
| ---------- | ------------- | ------------------------ |
| A01        | PHP           | Langage de programmation |
| A02        | PHP           | Langage de programmation |
| A03        | Mobile        | Développement mobile     |

Les informations de `PHP` apparaissent plusieurs fois.

Nous voulons les enregistrer une seule fois.

Nous devons donc séparer :

```text
nom_categorie
description_categorie
```

de `ARTICLE`.

Mais `ARTICLE` doit toujours pouvoir retrouver la catégorie.

Nous avons besoin d’un identifiant pour la catégorie.

Nous ajoutons :

```text
id_categorie
```

Nous pouvons maintenant écrire :

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

Dans `ARTICLE`, nous conservons `id_categorie`.

Nous obtenons :

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

## 1.4. Comprendre la différence entre les deux dépendances

Avant la séparation, nous pouvions observer :

```text
id_article → nom_categorie
```

Cette dépendance reste vraie.

Un article possède toujours une catégorie.

Mais après la séparation, nous avons une dépendance plus utile pour organiser les données :

```text
id_categorie → nom_categorie, description_categorie
```

Nous avons également :

```text
id_article → id_categorie
```

Nous pouvons alors suivre :

```text
id_article
    ↓
id_categorie
    ↓
nom_categorie
description_categorie
```

Par exemple :

```text
id_article = A01
        ↓
id_categorie = C01
        ↓
PHP
Langage de programmation
```

L’article ne contient donc plus directement toutes les informations de la catégorie.

Il conserve seulement `id_categorie` pour retrouver ces informations.

## 1.5. Recommencer avec les données restantes

La décomposition est progressive.

Après avoir séparé les données de l’auteur puis celles de la catégorie, nous conservons les données propres à l’article :

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

Nous avons donc trois relations :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

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
CATEGORIE(
    id_categorie,
    nom_categorie,
    description_categorie
)
```

## 1.6. Passer des relations aux entités

Nous pouvons maintenant donner un sens métier aux relations.

`AUTEUR` représente les auteurs.

`ARTICLE` représente les articles.

`CATEGORIE` représente les catégories.

Nous obtenons donc les entités :

```text
AUTEUR
ARTICLE
CATEGORIE
```

Les colonnes deviennent leurs propriétés.

Les identifiants permettent d’identifier les occurrences.

La décomposition nous a donc permis de passer progressivement :

```text
Données
   ↓
Dépendances fonctionnelles
   ↓
Groupes de données
   ↓
Relations
   ↓
Entités
```

## 1.7. La méthode à retenir

Pour décomposer une relation :

```text
1. Rechercher les dépendances fonctionnelles.
2. Repérer les groupes de données.
3. Observer les données qui se répètent.
4. Chercher ou créer un identifiant pour le groupe.
5. Séparer les données du groupe.
6. Conserver l’identifiant dans la relation de départ.
7. Reprendre les données restantes.
8. Recommencer.
9. Interpréter les relations obtenues comme des entités.
```

On continue jusqu’à ce que toutes les données soient correctement organisées.

## 1.8. À retenir

* Une dépendance fonctionnelle aide à repérer les groupes de données.
* Une dépendance peut être correcte sans que toutes les données restent dans la même relation.
* Les données répétées doivent être analysées.
* Les données qui décrivent une même réalité peuvent être séparées.
* Un identifiant permet de retrouver les données séparées.
* La relation de départ conserve la référence vers les données séparées.
* La décomposition permet d’obtenir des relations structurées.
* Ces relations peuvent ensuite être interprétées comme des entités.

# Partie 2 — Pratique

## 2.1. Observer les données

### Étape 1 — Lire la relation

Pour un système de gestion des commandes, utilisez la relation :

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

### Étape 2 — Observer les données

Observez les exemples :

| numero_commande | date_commande | nom_client  | email_client                              | nom_produit | prix_produit | quantite_commandee |
| --------------- | ------------- | ----------- | ----------------------------------------- | ----------- | -----------: | -----------------: |
| C001            | 10/09/2026    | Madani Ali  | [madani@mail.com](mailto:madani@mail.com) | Clavier     |          200 |                  2 |
| C001            | 10/09/2026    | Madani Ali  | [madani@mail.com](mailto:madani@mail.com) | Souris      |          100 |                  1 |
| C002            | 11/09/2026    | Sara Amrani | [sara@mail.com](mailto:sara@mail.com)     | Clavier     |          200 |                  3 |

Comparez les différentes lignes.

Repérez les informations qui se répètent.

## 2.2. Identifier les groupes

### Étape 3 — Chercher les dépendances fonctionnelles

Commencez par les identifiants que vous pouvez identifier dans les données.

Pour chaque identifiant, recherchez les données qu’il détermine.

Écrivez les dépendances sous la forme :

```text
identifiant → données déterminées
```

Regroupez ensuite les données déterminées par chaque identifiant.

### Étape 4 — Identifier un groupe

Parmi les dépendances trouvées, choisissez un groupe qui :

* décrit une même réalité ;
* contient des données répétées ;
* peut être identifié.

### Étape 5 — Chercher ou créer un identifiant

Cherchez une donnée qui permet d’identifier chaque occurrence du groupe.

S’il n’existe pas d’identifiant adapté, ajoutez-en un.

### Étape 6 — Vérifier la dépendance

Vérifiez que l’identifiant détermine une seule valeur pour chaque donnée du groupe.

Écrivez :

```text
identifiant → données dépendantes
```

## 2.3. Séparer les données

### Étape 7 — Créer une nouvelle relation

Créez une relation contenant :

```text
identifiant
+
données dépendantes
```

Par exemple :

```text
GROUPE(
    identifiant,
    donnée_1,
    donnée_2
)
```

Utilisez les vrais noms des données dans votre travail.

### Étape 8 — Conserver l’identifiant

Dans la relation `COMMANDE`, retirez les données séparées.

Conservez l’identifiant afin que `COMMANDE` puisse retrouver les informations du groupe.

**Résultat attendu :**

Un premier groupe de données est séparé de `COMMANDE`.

## 2.4. Continuer avec les données restantes

### Étape 9 — Reprendre la relation restante

Observez uniquement les données qui n’ont pas encore été traitées.

Cherchez :

* les répétitions ;
* les groupes de données ;
* les identifiants possibles ;
* les dépendances fonctionnelles.

### Étape 10 — Recommencer

Pour chaque nouveau groupe :

1. cherchez un identifiant ;
2. vérifiez les dépendances fonctionnelles ;
3. séparez les données ;
4. conservez l’identifiant dans la relation de départ.

Continuez jusqu’à ce qu’il n’y ait plus de groupe à séparer.

**Résultat attendu :**

Les données de la gestion des commandes sont réparties dans des relations cohérentes, avec leurs identifiants et leurs dépendances fonctionnelles.

## 2.5. Identifier les entités

### Étape 11 — Interpréter les relations

Pour chaque relation obtenue, demandez :

> Que représente cette relation dans le système de commandes ?

Donnez un nom métier à chaque entité.

### Étape 12 — Identifier les propriétés

Pour chaque entité, indiquez :

* son identifiant ;
* ses propriétés.

**Résultat attendu :**

Une liste d’entités avec leurs identifiants et leurs propriétés.

# 3. Bilan

**Vous avez réalisé :** la décomposition progressive d’une relation à partir des dépendances fonctionnelles et des répétitions de données.

**Vous savez maintenant :** identifier les groupes de données, chercher ou créer un identifiant, séparer les données d’une relation et identifier les entités obtenues.

# 4. Glossaire

* **Décomposition** : séparation d’une relation en plusieurs relations.
* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Groupe de données** : ensemble de données qui décrit une même réalité.
* **Identifiant** : donnée qui permet d’identifier une occurrence de façon unique.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
* **Occurrence** : élément enregistré dans une relation.
* **Entité** : élément du système représenté dans le modèle de données.
* **Propriété** : donnée qui décrit une entité.
