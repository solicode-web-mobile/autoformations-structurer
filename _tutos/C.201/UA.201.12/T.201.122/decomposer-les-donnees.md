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

Comprendre pourquoi certaines données doivent être sorties de la relation et identifier les entités obtenues.

## 2. Prérequis

* Avoir réalisé le dictionnaire de données.
* Avoir identifié les dépendances fonctionnelles.
* Comprendre le rôle d’un identifiant.

# Partie 1 — Théorie

## 1.1. Une dépendance peut être correcte sans garder toutes les données dans la relation

Dans le Blog, on peut avoir :

```text
id_article → titre_article, contenu_article, date_publication
```

On peut également observer :

```text
id_article → nom_categorie
```

Cette dépendance est correcte si chaque article possède une seule catégorie.

Mais cela ne signifie pas que `nom_categorie` doit rester dans `ARTICLE`.

Il faut observer les données.

Exemple :

```text
id_article | nom_categorie
-----------|--------------
1          | PHP
2          | PHP
3          | Mobile
```

On remarque que `PHP` apparaît plusieurs fois.

## 1.2. Pourquoi sortir les données de la catégorie ?

Regardons toutes les données de la catégorie :

```text
nom_categorie
description_categorie
```

Exemple :

```text
Article   | nom_categorie | description_categorie
----------|---------------|----------------------
Laravel   | PHP           | Langage de programmation
Eloquent  | PHP           | Langage de programmation
Kotlin    | Mobile        | Développement mobile
```

Les informations de `PHP` sont enregistrées plusieurs fois.

Cela crée une répétition de données.

Imaginez maintenant que la description de `PHP` change.

Il faudrait modifier plusieurs lignes.

Une ligne pourrait contenir :

```text
PHP | Langage de programmation
```

et une autre :

```text
PHP | Langage de programmation Web
```

Les données deviennent incohérentes.

Nous devons donc éviter de stocker plusieurs fois les mêmes informations sur une catégorie.

## 1.3. Chercher un identifiant pour la catégorie

Pour séparer les données de catégorie, nous devons pouvoir identifier chaque catégorie.

Nous ajoutons :

```text
id_categorie
```

Nous pouvons alors écrire :

```text
id_categorie → nom_categorie, description_categorie
```

Nous obtenons :

```text
CATEGORIE(
    id_categorie,
    nom_categorie,
    description_categorie
)
```

Dans `ARTICLE`, nous gardons seulement :

```text
id_categorie
```

L’article peut ainsi retrouver sa catégorie sans recopier toutes les informations de la catégorie.

## 1.4. Comprendre pourquoi la sortie est nécessaire

Même si :

```text
id_article → nom_categorie
```

est vraie, nous cherchons une organisation qui évite les répétitions.

Nous obtenons :

```text
id_article → id_categorie
```

puis :

```text
id_categorie → nom_categorie, description_categorie
```

Les informations de la catégorie sont donc enregistrées une seule fois.

La même logique peut être appliquée aux données de l’auteur.

## 1.5. À retenir

* Une dépendance fonctionnelle peut être correcte sans être suffisante pour organiser les données.
* Une donnée répétée peut créer des problèmes de modification et de cohérence.
* Si plusieurs articles utilisent la même catégorie, les informations de cette catégorie ne doivent pas être répétées dans chaque article.
* On crée une relation `CATEGORIE`.
* On ajoute un identifiant pour identifier chaque catégorie.
* On vérifie alors :

```text
id_categorie → nom_categorie, description_categorie
```

* Dans `ARTICLE`, on garde `id_categorie` pour retrouver la catégorie.

# Partie 2 — Pratique

## 2.1. Observer les données

### Étape 1 — Lire la relation

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

### Étape 2 — Observer les répétitions

Observez les données fournies.

Repérez les informations qui se répètent.

Pour chaque répétition, écrivez le problème que vous observez.

## 2.2. Chercher un groupe à sortir

### Étape 3 — Chercher les données qui décrivent une même réalité

Repérez un groupe de colonnes qui représente une même réalité.

### Étape 4 — Vérifier le problème

Demandez :

> Ces informations sont-elles répétées dans plusieurs commandes ?

> Que se passe-t-il si une information change ?

### Étape 5 — Chercher un identifiant

Cherchez une donnée qui permet d’identifier chaque occurrence du groupe.

S’il n’existe pas d’identifiant adapté, ajoutez-en un.

### Étape 6 — Vérifier la dépendance fonctionnelle

Vérifiez que l’identifiant détermine une seule valeur pour chaque donnée du groupe.

Écrivez :

```text
identifiant → données dépendantes
```

### Étape 7 — Sortir le groupe

Créez une nouvelle relation avec :

```text
identifiant
+
données dépendantes
```

Dans la relation de départ, gardez uniquement l’identifiant nécessaire pour retrouver l’occurrence.

## 2.3. Continuer avec les données restantes

### Étape 8 — Reprendre la relation restante

Observez les données qui n’ont pas encore été traitées.

Cherchez un nouveau groupe.

### Étape 9 — Recommencer

Cherchez :

* les répétitions ;
* le groupe concerné ;
* l’identifiant ;
* les dépendances fonctionnelles.

Séparez le groupe puis reprenez les données restantes.

Continuez jusqu’à ce qu’il n’y ait plus de groupe à sortir.

**Résultat attendu :**

Des relations organisées avec leurs identifiants et leurs dépendances fonctionnelles, sans répétitions inutiles.

## 2.4. Identifier les entités

### Étape 10 — Interpréter les relations

Pour chaque relation obtenue, indiquez ce qu’elle représente dans le système.

### Étape 11 — Identifier les propriétés

Indiquez pour chaque entité :

* son identifiant ;
* ses propriétés.

**Résultat attendu :**

Une liste d’entités avec leurs identifiants et leurs propriétés.

# 3. Bilan

**Vous avez réalisé :** la décomposition d’une relation en supprimant les répétitions de données.

**Vous savez maintenant :** expliquer pourquoi un groupe de données doit être sorti d’une relation, créer un identifiant, identifier les dépendances fonctionnelles et construire des relations plus cohérentes.

# 4. Glossaire

* **Répétition** : même information enregistrée plusieurs fois.
* **Cohérence** : fait de conserver une information correcte et identique partout où elle est utilisée.
* **Identifiant** : donnée qui permet d’identifier une occurrence de façon unique.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Décomposition** : séparation d’une relation en plusieurs relations.
* **Entité** : élément du système représenté dans le modèle de données.
* **Propriété** : donnée qui décrit une entité.
