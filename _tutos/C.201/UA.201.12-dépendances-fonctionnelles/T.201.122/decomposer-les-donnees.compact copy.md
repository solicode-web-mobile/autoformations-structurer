---
title: "Décomposer les données"
layout: tuto
slug: "decomposer-les-donnees"
permalink: /tutos/:slug/detaille
tuto_id: "T.201.122"
version: "detaille"
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

Dans le tutoriel précédent, nous avons découvert qu’une dépendance fonctionnelle permet d’indiquer qu’un identifiant détermine les données qui lui sont associées.

Pour l’auteur, nous avons :

```text
id_auteur → nom_auteur, email_auteur
```

Cette dépendance nous donne une information importante.

Les données :

```text
id_auteur
nom_auteur
email_auteur
```

forment un groupe cohérent.

Nous pouvons donc les regrouper dans une relation :

```text
AUTEUR(
    id_auteur,
    nom_auteur,
    email_auteur
)
```

Dans `ARTICLE`, nous conservons `id_auteur`.

Il permet de retrouver les informations de l’auteur.

Nous obtenons par exemple :

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

Pour `Laravel`, nous trouvons :

```text
Laravel
   ↓
A01
   ↓
Madani
madani@mail.com
```

La dépendance fonctionnelle nous aide donc à savoir quelles données peuvent être regroupées.

## 1.2. Identifier un autre groupe

Nous devons maintenant continuer l’analyse.

Dans `ARTICLE`, nous avons aussi des données de catégorie :

```text
nom_categorie
description_categorie
```

Nous pouvons observer plusieurs articles :

| id_article | nom_categorie |
| ---------- | ------------- |
| A01        | PHP           |
| A02        | PHP           |
| A03        | Mobile        |

La catégorie `PHP` apparaît plusieurs fois.

Nous avons donc un nouveau groupe de données répétées :

```text
nom_categorie
description_categorie
```

Nous devons chercher une donnée permettant d’identifier chaque catégorie.

Nous ajoutons :

```text
id_categorie
```

Nous pouvons alors écrire :

```text
id_categorie → nom_categorie, description_categorie
```

Nous avons identifié une nouvelle dépendance fonctionnelle.

## 1.3. Séparer les données de la catégorie

Nous pouvons maintenant séparer le groupe :

```text
nom_categorie
description_categorie
```

de la relation `ARTICLE`.

Nous créons :

```text
CATEGORIE(
    id_categorie,
    nom_categorie,
    description_categorie
)
```

Dans `ARTICLE`, nous ne gardons plus directement :

```text
nom_categorie
description_categorie
```

Nous gardons :

```text
id_categorie
```

La relation `ARTICLE` devient :

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

Le fonctionnement est maintenant similaire à celui de l’auteur.

Pour retrouver la catégorie d’un article :

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
A01
 ↓
C01
 ↓
PHP
Langage de programmation
```

Les informations de la catégorie ne sont donc plus répétées dans chaque article.

## 1.4. Comprendre la différence entre les dépendances

Nous pouvons avoir une dépendance comme :

```text
id_article → nom_categorie
```

Cette dépendance peut être correcte.

Un article peut avoir une seule catégorie.

Mais elle ne nous indique pas encore que `nom_categorie` doit rester dans `ARTICLE`.

Nous observons que plusieurs articles peuvent utiliser la même catégorie.

Nous cherchons donc le déterminant propre aux informations de la catégorie :

```text
id_categorie → nom_categorie, description_categorie
```

Nous avons alors deux relations utiles :

```text
id_article → id_categorie
```

et :

```text
id_categorie → nom_categorie, description_categorie
```

Nous pouvons suivre les données :

```text
id_article
   ↓
id_categorie
   ↓
nom_categorie
description_categorie
```

Cela permet d’enregistrer les informations d’une catégorie une seule fois.

## 1.5. Reprendre les données restantes

La décomposition doit continuer jusqu’à ce que toutes les données soient correctement organisées.

Après avoir séparé les données de l’auteur et de la catégorie, nous avons :

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

Chaque relation contient maintenant un groupe de données cohérent.

La relation `ARTICLE` conserve les identifiants nécessaires pour retrouver les autres groupes.

## 1.6. Passer des relations aux entités

Nous pouvons maintenant donner un sens métier aux relations.

```text
AUTEUR
```

représente les auteurs.

```text
ARTICLE
```

représente les articles.

```text
CATEGORIE
```

représente les catégories.

Nous pouvons donc identifier les entités :

```text
AUTEUR
ARTICLE
CATEGORIE
```

Les colonnes deviennent leurs propriétés.

Les identifiants permettent d’identifier leurs occurrences.

Nous passons ainsi de :

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

Pour décomposer une relation, nous suivons toujours le même raisonnement :

```text
Dépendances fonctionnelles
        ↓
Groupes de données
        ↓
Données répétées
        ↓
Identifiant
        ↓
Séparation du groupe
        ↓
Conservation de la référence
        ↓
Données restantes
        ↓
Nouvelle analyse
```

On répète cette démarche jusqu’à traiter toutes les données.

## 1.8. À retenir

* Une dépendance fonctionnelle permet de repérer les données déterminées par un identifiant.
* Plusieurs données déterminées par le même identifiant peuvent former un groupe.
* Un groupe de données répétées peut être séparé de la relation.
* L’identifiant est conservé dans la relation de départ pour retrouver le groupe séparé.
* Après chaque séparation, il faut analyser les données restantes.
* Une nouvelle dépendance fonctionnelle peut apparaître.
* Les relations obtenues peuvent ensuite être interprétées comme des entités.

# Partie 2 — Pratique

## 2.1. Analyser les données

### Étape 1 — Observer la relation

Pour un système de gestion des commandes, utilisez :

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

Comparez les lignes.

Repérez les données qui se répètent.

## 2.2. Identifier les groupes

### Étape 3 — Chercher les dépendances fonctionnelles

Pour les identifiants que vous pouvez identifier, recherchez les données qu’ils déterminent.

Écrivez les dépendances sous la forme :

```text
identifiant → données déterminées
```

Regroupez les données déterminées par le même identifiant.

### Étape 4 — Identifier un groupe

Choisissez un groupe de données répétées.

Vérifiez qu’il décrit une même réalité.

### Étape 5 — Chercher ou créer un identifiant

Cherchez une donnée qui permet d’identifier chaque occurrence du groupe.

S’il n’existe pas d’identifiant adapté, ajoutez-en un.

### Étape 6 — Vérifier la dépendance

Vérifiez que l’identifiant détermine une seule valeur pour chacune des données du groupe.

Écrivez :

```text
identifiant → données dépendantes
```

**Résultat attendu :**

Un groupe de données est identifié avec son identifiant et ses dépendances fonctionnelles.

## 2.3. Séparer les données

### Étape 7 — Créer une nouvelle relation

Créez une relation contenant :

```text
identifiant
+
données dépendantes
```

Utilisez les noms réels des données de la gestion des commandes.

### Étape 8 — Conserver l’identifiant

Dans la relation `COMMANDE`, retirez les données séparées.

Gardez l’identifiant.

Il doit permettre à `COMMANDE` de retrouver les informations du groupe.

**Résultat attendu :**

Un premier groupe est séparé de `COMMANDE`.

## 2.4. Continuer avec les données restantes

### Étape 9 — Reprendre la relation restante

Analysez uniquement les données qui n’ont pas encore été traitées.

Cherchez de nouveau :

* les données répétées ;
* les groupes ;
* les identifiants ;
* les dépendances fonctionnelles.

### Étape 10 — Recommencer

Pour chaque nouveau groupe :

1. cherchez ou créez l’identifiant ;
2. vérifiez les dépendances fonctionnelles ;
3. séparez les données ;
4. conservez l’identifiant dans la relation restante.

Continuez jusqu’à ce qu’il n’y ait plus de groupe à séparer.

**Résultat attendu :**

Les données de la gestion des commandes sont réparties dans des relations cohérentes, sans répétitions inutiles.

## 2.5. Identifier les entités

### Étape 11 — Interpréter les relations

Pour chaque relation obtenue, posez la question :

> Que représente cette relation dans le système de commandes ?

Donnez un nom métier à l’entité.

### Étape 12 — Identifier les propriétés

Pour chaque entité, indiquez :

* son identifiant ;
* ses propriétés.

**Résultat attendu :**

Une liste d’entités avec leurs identifiants et leurs propriétés.

# 3. Bilan

**Vous avez réalisé :** la décomposition progressive d’une relation à partir des dépendances fonctionnelles et des répétitions de données.

**Vous savez maintenant :** utiliser les dépendances fonctionnelles pour identifier les groupes de données, séparer ces groupes dans de nouvelles relations, conserver les références nécessaires et identifier les entités obtenues.

# 4. Glossaire

* **Décomposition** : séparation d’une relation en plusieurs relations.
* **Relation** : ensemble de données organisé en lignes et en colonnes.
* **Groupe de données** : ensemble de données qui décrit une même réalité.
* **Identifiant** : donnée qui permet d’identifier une occurrence de façon unique.
* **Référence** : donnée conservée dans une relation pour retrouver une occurrence dans une autre relation.
* **Occurrence** : élément enregistré dans une relation.
* **Dépendance fonctionnelle** : relation dans laquelle une donnée détermine une seule valeur d’une autre donnée.
* **Entité** : élément du système représenté dans le modèle de données.
* **Propriété** : donnée qui décrit une entité.
