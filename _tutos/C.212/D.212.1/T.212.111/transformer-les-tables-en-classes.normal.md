---
title: "Transformer les tables en classes"
layout: tuto
slug: "transformer-les-tables-en-classes"
permalink: /tutos/:slug/
tuto_id: "T.212.111"
type: "classique"
version: "normal"
ua: "UA.212.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

Dans ce tutoriel, vous allez apprendre à transformer les tables d'un MLD en classes objet.

Vous allez apprendre à :

* transformer une table en classe ;
* transformer une colonne en attribut ;
* transformer une clé primaire en identifiant ;
* traduire les types de données ;
* nommer correctement les classes et les attributs.

À la fin du tutoriel, vous aurez une première version du modèle objet statique.

## 2. Prérequis

Vous devez savoir :

* lire un MLD ;
* reconnaître une table ;
* reconnaître une clé primaire ;
* reconnaître une clé étrangère ;
* reconnaître les colonnes d'une table ;
* lire les types de données d'un MLD.

Les relations entre les tables seront traitées dans le tutoriel suivant.

## Données de départ

Le MLD du blog est le suivant :

```text
USER
- id_user : int (PK)
- email : string
- mot_de_passe : string
- role : string

AUTEUR
- id_auteur : int (PK)
- id_user : int (FK)
- nom : string
- prenom : string
- biographie : string
- avatar : string

CATEGORIE
- id_categorie : int (PK)
- nom : string
- couleur : string
- icone : string

ARTICLE
- id_article : int (PK)
- id_categorie : int (FK)
- id_auteur : int (FK)
- titre : string
- contenu : text
- image_couverture : string
- statut : string
- date_creation : date
- vues : int
```

Dans ce tutoriel, nous travaillons sur la structure des données.

Les clés étrangères sont repérées, mais leur transformation en associations sera réalisée dans **T.212.112**.

## Partie 1 — Théorie

### 1.1. Une table devient une classe

Dans le modèle relationnel, une table représente une structure de données.

Dans le modèle objet, cette structure est représentée par une **classe**.

La transformation de base est :

```text
TABLE → CLASSE
```

Exemple :

```text
ARTICLE → Article
```

La classe représente donc le même concept que la table.

### 1.2. Le nom de la classe

Le nom de la table est transformé en nom de classe.

On utilise généralement :

* un nom au singulier ;
* une majuscule au début ;
* un nom qui représente clairement l'objet.

Exemples :

```text
USER → User
AUTEUR → Auteur
CATEGORIE → Categorie
ARTICLE → Article
```

La classe représente une occurrence de la table.

Par exemple :

> Un `Article` représente un article du blog.

### 1.3. Une colonne devient un attribut

Une colonne de la table devient un **attribut** de la classe.

La transformation de base est :

```text
COLONNE → ATTRIBUT
```

Exemple :

```text
ARTICLE
titre
contenu
statut
```

devient :

```text
Article
- titre
- contenu
- statut
```

L'attribut représente une information portée par l'objet.

### 1.4. Adapter le nom de l’attribut

Le nom de colonne peut être simplifié pour le modèle objet.

Exemple :

```text
id_article → id
```

Dans la classe `Article`, il n'est pas nécessaire d'écrire :

```text
id_article
```

car le contexte de la classe indique déjà qu'il s'agit de l'identifiant d'un article.

On peut donc écrire :

```text
Article
- id
```

Même principe :

```text
id_user → id
id_auteur → id
id_categorie → id
```

### 1.5. La clé primaire devient un identifiant

La clé primaire permet d'identifier une ligne de manière unique.

Dans une classe, elle devient l'**identifiant** de l'objet.

Exemple :

```text
ARTICLE
id_article PK
```

devient :

```text
Article
- int id
```

L'identifiant reste présent dans la classe.

Il permet de distinguer un objet d'un autre.

### 1.6. Les types de données

Les types du MLD doivent être traduits dans le modèle objet.

Exemples :

| Type du MLD | Type de l'attribut |
| ----------- | ------------------ |
| int         | int                |
| string      | string             |
| text        | string             |
| date        | DateTime           |

Exemple :

```text
vues : int
```

devient :

```text
- int vues
```

Exemple :

```text
date_creation : date
```

devient :

```text
- DateTime date_creation
```

Le type doit conserver le sens de la donnée.

### 1.7. Les clés étrangères dans ce tutoriel

Une clé étrangère identifie une relation entre deux tables.

Exemple :

```text
ARTICLE
id_categorie : int (FK)
```

Dans ce tutoriel, nous la repérons comme une clé étrangère, mais nous ne construisons pas encore l'association objet.

La transformation complète sera faite dans le tutoriel suivant :

> **T.212.112 — Transformer les relations en associations**

L'objectif de T.212.111 est donc de construire d'abord les classes et leurs données.

### 1.8. La structure d’une classe

Une classe de données contient ici :

* le nom de la classe ;
* les attributs ;
* les types ;
* l'identifiant.

Exemple :

```text
class Article {
    -int id
    -string titre
    -string contenu
    -string statut
    -DateTime date_creation
    -int vues
}
```

Il n'y a pas encore de méthodes.

Le modèle décrit uniquement les données.

## Partie 2 — Pratique

### 2.1. Transformer les tables

Commencez par transformer les quatre tables :

```text
USER
AUTEUR
CATEGORIE
ARTICLE
```

en classes :

```text
User
Auteur
Categorie
Article
```

Vérifiez :

* le singulier ;
* la majuscule ;
* le nom du concept.

### 2.2. Transformer les colonnes

Pour chaque classe, reprenez les colonnes du MLD.

Exemple :

```text
CATEGORIE

id_categorie
nom
couleur
icone
```

devient :

```text
class Categorie {
    -int id
    -string nom
    -string couleur
    -string icone
}
```

### 2.3. Transformer la table User

À partir du MLD :

```text
USER
- id_user : int (PK)
- email : string
- mot_de_passe : string
- role : string
```

Construisez la classe :

```text
class User {
    -int id
    -string email
    -string password
    -string role
}
```

Le nom `mot_de_passe` est adapté au vocabulaire de la classe :

```text
mot_de_passe → password
```

Le sens de la donnée reste le même.

### 2.4. Transformer la table Auteur

À partir du MLD :

```text
AUTEUR
- id_auteur : int (PK)
- id_user : int (FK)
- nom : string
- prenom : string
- biographie : string
- avatar : string
```

Construisez la classe `Auteur`.

Dans cette étape, l'identifiant de la classe est conservé.

La clé étrangère `id_user` est identifiée comme relation, mais son association avec `User` sera traitée dans le tutoriel suivant.

La classe attendue pour cette étape contient donc les données propres à l'auteur :

```text
class Auteur {
    -int id
    -string nom
    -string prenom
    -string biographie
    -string avatar
}
```

### 2.5. Transformer la table Categorie

À partir du MLD :

```text
CATEGORIE
- id_categorie : int (PK)
- nom : string
- couleur : string
- icone : string
```

Construisez :

```text
class Categorie {
    -int id
    -string nom
    -string couleur
    -string icone
}
```

### 2.6. Transformer la table Article

À partir du MLD :

```text
ARTICLE
- id_article : int (PK)
- id_categorie : int (FK)
- id_auteur : int (FK)
- titre : string
- contenu : text
- image_couverture : string
- statut : string
- date_creation : date
- vues : int
```

Construisez :

```text
class Article {
    -int id
    -string titre
    -string contenu
    -string image_couverture
    -string statut
    -DateTime date_creation
    -int vues
}
```

Les clés étrangères sont conservées comme informations du MLD à traiter ensuite.

Elles ne deviennent pas encore des associations dans ce tutoriel.

### 2.7. Construire le diagramme de classes

Créez le fichier :

```text
classes_statiques.mmd
```

Commencez par les quatre classes :

```text
classDiagram

    class User {
        -int id
        -string email
        -string password
        -string role
    }

    class Auteur {
        -int id
        -string nom
        -string prenom
        -string biographie
        -string avatar
    }

    class Categorie {
        -int id
        -string nom
        -string couleur
        -string icone
    }

    class Article {
        -int id
        -string titre
        -string contenu
        -string image_couverture
        -string statut
        -DateTime date_creation
        -int vues
    }
```

Ne créez pas encore les lignes d'association.

Elles seront ajoutées dans **T.212.112**.

### 2.8. Vérifier la traduction

Comparez le MLD et les classes.

Pour chaque table, vérifiez :

| Élément      | Vérification                                      |
| ------------ | ------------------------------------------------- |
| Table        | Une classe correspondante existe                  |
| Clé primaire | Un `id` existe dans la classe                     |
| Colonne      | Un attribut correspondant existe                  |
| Type         | Le type est correctement traduit                  |
| Nom          | Le nom de l'attribut reste compréhensible         |
| Relation     | Elle n'est pas encore modélisée comme association |

### 2.9. Produire le livrable

**Travail à faire :**

Transformez entièrement les tables du MLD en classes objet.

Vous devez produire les classes :

```text
User
Auteur
Categorie
Article
```

Chaque classe doit contenir :

* son identifiant ;
* ses attributs ;
* les types des attributs.

Ne créez pas encore les associations.

**Livrable :**

Créez le fichier :

```text
classes_statiques.mmd
```

Vous pouvez également créer un document Markdown (ou un Google Doc) contenant votre tableau de correspondance :

> Table → Classe → Colonne → Attribut → Type

**Critère de réussite :**

Chaque table du MLD possède une classe correspondante, chaque donnée utile est représentée par un attribut correctement typé et chaque classe possède son identifiant.

## Bilan

**Vous avez appris :**

* à transformer une table en classe ;
* à transformer une colonne en attribut ;
* à transformer une clé primaire en identifiant ;
* à traduire les types de données ;
* à nommer les classes et les attributs.

**Vous avez produit :**

> une première version du modèle objet statique.

Cette version contient :

```text
User
Auteur
Categorie
Article
```

avec leurs attributs et leurs identifiants.

**Vous préparerez ensuite :**

> la transformation des relations et des clés étrangères en associations entre classes.

## Glossaire

* **Classe** : structure qui représente un type d'objet.
* **Attribut** : donnée portée par un objet.
* **Identifiant** : attribut qui permet d'identifier un objet de manière unique.
* **Type** : nature de la valeur stockée dans un attribut.
* **Clé primaire** : donnée qui identifie de manière unique une ligne d'une table.
* **Clé étrangère** : donnée qui référence une autre table dans un modèle relationnel.
* **Modèle objet statique** : représentation des classes, attributs et associations sans décrire les comportements.
* **Association** : lien entre deux classes. Elle sera étudiée dans le tutoriel suivant.
