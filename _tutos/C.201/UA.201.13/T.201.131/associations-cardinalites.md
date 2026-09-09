---
title: "Identifier les associations et les cardinalités"
layout: tuto
slug: "associations-cardinalites"
permalink: /tutos/:slug/
tuto_id: "T.201.131"
version: "normal"
ua: "UA.201.13"
nav_order: 1
---

## 1. Objectif

À partir des entités et des règles de gestion, identifier les associations et déterminer leurs cardinalités.

Construire ensuite le MCD complet du besoin.

## 2. Prérequis

* Avoir identifié les entités, leurs propriétés et leurs identifiants.
* Comprendre le rôle d’une règle de gestion.
* Savoir lire un diagramme Mermaid `erDiagram`.

# Partie 1 — Théorie

## 1.1. Une règle de gestion

Une **règle de gestion** décrit une règle du fonctionnement du système.

Elle permet de décrire comment les éléments du système sont liés.

Une règle de gestion peut indiquer :

* quels éléments sont liés ;
* combien d’éléments peuvent être liés ;
* si une relation est obligatoire ou facultative.

**Exemple :**

> Un auteur peut rédiger plusieurs articles.

Cette règle décrit une relation entre :

```text
AUTEUR
ARTICLE
```

Les règles de gestion viennent du besoin fonctionnel.

## 1.2. Une association

Une **association** représente une relation entre des entités.

Dans le Blog, nous avons les entités :

```text
AUTEUR
ARTICLE
CATEGORIE
```

La règle :

> Un auteur peut rédiger plusieurs articles.

montre une relation entre `AUTEUR` et `ARTICLE`.

Nous pouvons donner un nom à cette relation :

```text
RÉDIGER
```

L’association est donc :

```text
AUTEUR ───── RÉDIGER ───── ARTICLE
```

Une association doit avoir un nom qui décrit clairement la relation.

## 1.3. Identifier les associations

Nous utilisons les règles de gestion du Blog.

### Règles concernant l’auteur

> Un auteur peut rédiger plusieurs articles.

> Un article est rédigé par un seul auteur.

Nous identifions l’association :

```text
AUTEUR ───── RÉDIGER ───── ARTICLE
```

### Règles concernant la catégorie

> Un article appartient à une catégorie.

> Une catégorie peut contenir plusieurs articles.

Nous identifions l’association :

```text
ARTICLE ───── APPARTENIR ───── CATEGORIE
```

Nous avons donc deux associations :

```text
RÉDIGER
APPARTENIR
```

## 1.4. Une cardinalité

Une **cardinalité** indique combien d’occurrences d’une entité peuvent être liées à une occurrence de l’autre entité.

Une cardinalité possède deux valeurs :

```text
(minimum, maximum)
```

Exemple :

```text
(0,N)
```

signifie :

* minimum : 0 ;
* maximum : plusieurs.

Exemple :

```text
(1,1)
```

signifie :

* minimum : 1 ;
* maximum : 1.

## 1.5. Déterminer le minimum

Pour déterminer le minimum, on lit la règle de gestion.

Prenons :

> Un auteur peut rédiger plusieurs articles.

Un auteur peut ne rédiger aucun article.

Le minimum est donc :

```text
0
```

Prenons :

> Un article est rédigé par un seul auteur.

Un article doit avoir un auteur.

Le minimum est donc :

```text
1
```

## 1.6. Déterminer le maximum

On cherche ensuite le nombre maximum.

Pour un auteur :

> Un auteur peut rédiger plusieurs articles.

Le maximum est :

```text
N
```

Pour un article :

> Un article est rédigé par un seul auteur.

Le maximum est :

```text
1
```

Nous obtenons donc :

```text
AUTEUR ─── (0,N) ─── RÉDIGER ─── (1,1) ─── ARTICLE
```

## 1.7. Déterminer les cardinalités de l’association RÉDIGER

Les deux règles sont :

> Un auteur peut rédiger plusieurs articles.

> Un article est rédigé par un seul auteur.

Nous obtenons :

```text
AUTEUR ─── (0,N) ─── RÉDIGER ─── (1,1) ─── ARTICLE
```

Pour un auteur :

```text
(0,N)
```

Pour un article :

```text
(1,1)
```

## 1.8. Déterminer les cardinalités de l’association APPARTENIR

Les règles sont :

> Un article appartient à une catégorie.

> Une catégorie peut contenir plusieurs articles.

Pour un article :

```text
(1,1)
```

Pour une catégorie :

```text
(0,N)
```

Nous obtenons :

```text
ARTICLE ─── (1,1) ─── APPARTENIR ─── (0,N) ─── CATEGORIE
```

## 1.9. La méthode complète

Pour chaque règle de gestion :

```text
Règle de gestion
       ↓
Entités concernées
       ↓
Association
       ↓
Minimum
       ↓
Maximum
       ↓
Cardinalités
```

Il faut donc :

1. lire la règle ;
2. identifier les entités concernées ;
3. nommer l’association ;
4. déterminer le minimum ;
5. déterminer le maximum ;
6. placer les cardinalités.

## 1.10. Représenter le MCD avec Mermaid

Mermaid permet de représenter simplement les entités et leurs relations.

Pour le Blog :

```mermaid
erDiagram
    AUTEUR ||--o{ ARTICLE : rediger
    CATEGORIE ||--o{ ARTICLE : appartenir

    AUTEUR {
        int id_auteur PK
        string nom_auteur
        string email_auteur
    }

    ARTICLE {
        int id_article PK
        string titre_article
        string contenu_article
        date date_publication
        int id_auteur
        int id_categorie
    }

    CATEGORIE {
        int id_categorie PK
        string nom_categorie
        string description_categorie
    }
```

Dans cette représentation :

```text
||  = exactement 1
o{  = 0 à plusieurs
```

Pour `AUTEUR` et `ARTICLE` :

```text
AUTEUR ||--o{ ARTICLE
```

cela représente :

```text
AUTEUR (0,N) ─── ARTICLE (1,1)
```

Pour `CATEGORIE` et `ARTICLE` :

```text
CATEGORIE ||--o{ ARTICLE
```

cela représente :

```text
CATEGORIE (0,N) ─── ARTICLE (1,1)
```

## 1.11. Le MCD complet du Blog

Nous avons maintenant :

### Entités

```text
AUTEUR
ARTICLE
CATEGORIE
```

### Associations

```text
RÉDIGER
APPARTENIR
```

### Cardinalités

```text
AUTEUR ─── (0,N) ─── RÉDIGER ─── (1,1) ─── ARTICLE

ARTICLE ─── (1,1) ─── APPARTENIR ─── (0,N) ─── CATEGORIE
```

Le MCD complet peut être représenté avec Mermaid :

```mermaid
erDiagram
    AUTEUR ||--o{ ARTICLE : rediger
    CATEGORIE ||--o{ ARTICLE : appartenir

    AUTEUR {
        int id_auteur PK
        string nom_auteur
        string email_auteur
    }

    ARTICLE {
        int id_article PK
        string titre_article
        string contenu_article
        date date_publication
        int id_auteur
        int id_categorie
    }

    CATEGORIE {
        int id_categorie PK
        string nom_categorie
        string description_categorie
    }
```

Le modèle représente maintenant :

```text
Données
   ↓
Entités
   ↓
Règles de gestion
   ↓
Associations
   ↓
Cardinalités
   ↓
MCD
```

## 1.12. À retenir

* Une règle de gestion décrit le fonctionnement du système.
* Une règle permet d’identifier une relation entre des entités.
* Cette relation devient une association.
* La même règle permet de déterminer les cardinalités.
* La cardinalité possède un minimum et un maximum.
* Le MCD rassemble les entités, les propriétés, les identifiants, les associations et les cardinalités.

# Partie 2 — Pratique

## 2.1. Préparer le travail

### Étape 1 — Reprendre les entités

Pour le système de gestion des commandes, utilisez les entités obtenues dans l’analyse précédente :

```text
CLIENT
COMMANDE
PRODUIT
```

Vous devez également prendre en compte :

```text
quantite_commandee
```

pour représenter la quantité d’un produit dans une commande.

### Étape 2 — Lire les règles de gestion

Utilisez les règles suivantes :

> Un client peut passer plusieurs commandes.

> Une commande est passée par un seul client.

> Une commande contient plusieurs produits.

> Un produit peut être présent dans plusieurs commandes.

Observez attentivement les quatre règles.

## 2.2. Identifier les associations

### Étape 3 — Chercher les entités concernées

Pour chaque règle, indiquez les entités concernées.

### Étape 4 — Nommer les associations

Donnez un nom clair à chaque relation entre les entités.

### Étape 5 — Représenter les associations

Représentez les associations entre :

```text
CLIENT
COMMANDE
PRODUIT
```

**Résultat attendu :**

Les associations nécessaires entre les entités de la gestion des commandes.

## 2.3. Déterminer les cardinalités

### Étape 6 — Déterminer le minimum

Pour chaque côté d’une association, demandez :

> Une occurrence peut-elle exister sans être liée à l’autre entité ?

Déterminez le minimum :

```text
0
```

ou :

```text
1
```

### Étape 7 — Déterminer le maximum

Posez ensuite :

> Une occurrence peut-elle être liée à plusieurs occurrences de l’autre entité ?

Déterminez le maximum :

```text
1
```

ou :

```text
N
```

### Étape 8 — Écrire les cardinalités

Écrivez les cardinalités sous la forme :

```text
(minimum, maximum)
```

Puis placez-les sur chaque côté des associations.

### Étape 9 — Vérifier les règles

Relisez chaque règle de gestion.

Vérifiez que les cardinalités correspondent bien aux règles.

## 2.4. Construire le MCD

### Étape 10 — Reprendre les entités

Représentez :

* les entités ;
* les propriétés ;
* les identifiants.

### Étape 11 — Ajouter les associations

Ajoutez les associations trouvées précédemment.

### Étape 12 — Ajouter les cardinalités

Ajoutez les cardinalités sur chaque association.

### Étape 13 — Ajouter les données de l’association si nécessaire

Analysez `quantite_commandee`.

Déterminez où cette donnée doit apparaître dans votre modèle.

### Étape 14 — Représenter le MCD avec Mermaid

Écrivez votre MCD avec un diagramme Mermaid :

```text
erDiagram
    ...
```

Ne copiez pas le MCD du Blog.

Construisez votre propre représentation à partir des règles de gestion.

**Résultat attendu :**

Un MCD complet de la gestion des commandes avec :

* les entités ;
* les propriétés ;
* les identifiants ;
* les associations ;
* les cardinalités ;
* la quantité commandée au bon endroit.

# 3. Bilan

**Vous avez réalisé :** l’identification des associations et des cardinalités à partir des règles de gestion, puis la construction d’un MCD complet.

**Vous savez maintenant :** partir d’une règle de gestion, identifier une association, déterminer ses cardinalités et représenter un MCD avec Mermaid.

# 4. Glossaire

* **Règle de gestion** : règle qui décrit le fonctionnement du système.
* **Association** : relation entre des entités.
* **Cardinalité** : nombre minimum et maximum d’occurrences liées.
* **Minimum** : nombre minimum de relations possibles.
* **Maximum** : nombre maximum de relations possibles.
* **Entité** : élément du système représenté dans le modèle de données.
* **Propriété** : donnée qui décrit une entité.
* **Occurrence** : un élément d’une entité.
* **Mermaid** : langage qui permet de créer des diagrammes à partir de texte.
