---
title: "Transformer les relations en associations"
layout: tuto
slug: "transformer-relations-associations"
permalink: /tutos/:slug/
tuto_id: "T.212.112"
type: "classique"
version: "normal"
ua: "UA.212.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à transformer les relations du MLD en associations entre classes.

Vous allez apprendre à :

* repérer une clé étrangère ;
* retrouver la relation entre deux tables ;
* transformer une relation en association ;
* lire une relation 1–1 ;
* lire une relation 1–N ;
* choisir les multiplicités ;
* définir le rôle des classes dans une association.

À la fin du tutoriel, vous aurez un modèle objet avec les classes et leurs associations.

## 2. Prérequis

Vous devez savoir :

* lire un MLD ;
* identifier une clé primaire ;
* identifier une clé étrangère ;
* transformer une table en classe ;
* transformer une colonne en attribut ;
* construire les classes de données.

Vous devez avoir réalisé **T.212.111** et posséder le fichier :

```text
classes_statiques.mmd
```

## Données de départ

Le MLD contient les relations suivantes :

```text
USER ||--o| AUTEUR : "possède un profil"

CATEGORIE ||--o{ ARTICLE : "contient"

AUTEUR ||--o{ ARTICLE : "rédige"
```

Les clés étrangères correspondantes sont :

```text
AUTEUR.id_user       → USER.id_user

ARTICLE.id_categorie → CATEGORIE.id_categorie

ARTICLE.id_auteur    → AUTEUR.id_auteur
```

Les classes produites dans T.212.111 sont :

```text
User
Auteur
Categorie
Article
```

Dans ce tutoriel, les clés étrangères ne sont plus considérées comme de simples attributs du modèle objet.

Elles servent à représenter les liens entre les objets.

## Partie 1 — Théorie

### 1.1. Une clé étrangère indique une relation

Dans un modèle relationnel, une clé étrangère permet de relier une table à une autre.

Exemple :

```text
AUTEUR
- id_user : int (FK)
```

La colonne `id_user` fait référence à :

```text
USER.id_user
```

Il existe donc une relation entre :

```text
User
```

et :

```text
Auteur
```

Dans le modèle objet, cette relation devient une **association**.

La transformation est donc :

```text
Clé étrangère
        ↓
Relation entre tables
        ↓
Association entre classes
```

### 1.2. Une association relie deux classes

Une **association** représente un lien entre deux classes.

Exemple :

```text
User ─── Auteur
```

Cela signifie qu'un objet `User` est lié à un objet `Auteur`.

L'association remplace ainsi le lien exprimé par la clé étrangère dans le MLD.

### 1.3. Ne pas transformer la clé étrangère en simple attribut

Dans le MLD :

```text
AUTEUR
- id_user : int (FK)
```

Dans le modèle objet, on ne conserve pas nécessairement :

```text
Auteur
- int id_user
```

comme une donnée indépendante.

Cette donnée représente surtout le lien avec `User`.

On la traduit donc par une association :

```text
User ─── Auteur
```

La clé étrangère a servi à découvrir l'association.

### 1.4. La relation 1–1

Une relation **1–1** signifie qu'un objet d'une classe est associé à au maximum un objet de l'autre classe, selon les contraintes du modèle.

Dans notre MLD :

```text
USER ||--o| AUTEUR
```

La relation signifie :

* un `Auteur` possède exactement un `User` ;
* un `User` possède zéro ou un `Auteur`.

On obtient donc :

```text
User "1" -- "0..1" Auteur
```

La multiplicité n'est donc pas nécessairement `1 -- 1`.

Elle doit être lue à partir du modèle source.

### 1.5. La relation 1–N

Une relation **1–N** signifie qu'un objet d'une classe peut être associé à plusieurs objets d'une autre classe.

Dans notre MLD :

```text
CATEGORIE ||--o{ ARTICLE
```

Une catégorie peut contenir zéro ou plusieurs articles.

Un article appartient à une seule catégorie.

La relation devient :

```text
Categorie "1" -- "0..*" Article
```

Cette association représente :

> une catégorie contient plusieurs articles.

### 1.6. Une autre relation 1–N

Le MLD contient également :

```text
AUTEUR ||--o{ ARTICLE
```

Cela signifie :

* un auteur peut rédiger zéro ou plusieurs articles ;
* un article est rédigé par un seul auteur.

L'association devient :

```text
Auteur "1" -- "0..*" Article
```

### 1.7. Les multiplicités

La **multiplicité** indique combien d'objets peuvent participer à une association.

Les principales multiplicités utilisées ici sont :

| Multiplicité | Signification     |
| ------------ | ----------------- |
| `1`          | exactement un     |
| `0..1`       | zéro ou un        |
| `0..*`       | zéro ou plusieurs |
| `1..*`       | un ou plusieurs   |

Exemple :

```text
Categorie "1" -- "0..*" Article
```

Lecture :

> Une catégorie est liée à zéro ou plusieurs articles.

Et :

> Un article est lié à une seule catégorie.

### 1.8. Lire une association dans les deux sens

Une association doit être lue dans les deux directions.

Exemple :

```text
Auteur "1" -- "0..*" Article
```

On peut lire :

> Un auteur peut rédiger zéro ou plusieurs articles.

Et :

> Un article est rédigé par un seul auteur.

Cette double lecture permet de vérifier les multiplicités.

### 1.9. Le rôle d'une association

Le **rôle** précise la signification du lien.

Exemple :

```text
Auteur "1" -- "0..*" Article : rédige
```

Le rôle de l'association est :

> rédige

Autre exemple :

```text
Categorie "1" -- "0..*" Article : contient
```

Le rôle est :

> contient

Le rôle doit être cohérent avec la relation du MLD.

### 1.10. Le sens de la relation

Le sens permet de comprendre la relation métier.

Exemple :

```text
Auteur → Article
```

peut être lu :

> Un auteur rédige des articles.

Alors que :

```text
Categorie → Article
```

peut être lu :

> Une catégorie contient des articles.

Le sens aide à choisir un rôle clair pour l'association.

## Partie 2 — Pratique

### 2.1. Retrouver les clés étrangères

À partir du MLD, complétez le tableau :

| Table   | Clé étrangère | Table référencée |
| ------- | ------------- | ---------------- |
| AUTEUR  |               |                  |
| ARTICLE |               |                  |
| ARTICLE |               |                  |

Pour chaque clé étrangère, identifiez la table qu'elle référence.

### 2.2. Transformer la relation User / Auteur

Le MLD contient :

```text
USER ||--o| AUTEUR : "possède un profil"
```

La clé étrangère est :

```text
AUTEUR.id_user → USER.id_user
```

Construisez l'association entre les classes :

```text
User "1" -- "0..1" Auteur : possède un profil
```

Vérifiez les deux lectures :

> Un `User` possède zéro ou un profil `Auteur`.

> Un `Auteur` est associé à un seul `User`.

### 2.3. Transformer la relation Categorie / Article

Le MLD contient :

```text
CATEGORIE ||--o{ ARTICLE : "contient"
```

La clé étrangère est :

```text
ARTICLE.id_categorie → CATEGORIE.id_categorie
```

Construisez l'association :

```text
Categorie "1" -- "0..*" Article : contient
```

Vérifiez :

> Une catégorie peut contenir zéro ou plusieurs articles.

> Un article appartient à une seule catégorie.

### 2.4. Transformer la relation Auteur / Article

Le MLD contient :

```text
AUTEUR ||--o{ ARTICLE : "rédige"
```

La clé étrangère est :

```text
ARTICLE.id_auteur → AUTEUR.id_auteur
```

Construisez :

```text
Auteur "1" -- "0..*" Article : rédige
```

Vérifiez :

> Un auteur peut rédiger zéro ou plusieurs articles.

> Un article est rédigé par un seul auteur.

### 2.5. Construire le diagramme complet

Modifiez le fichier :

```text
classes_statiques.mmd
```

Ajoutez les associations aux classes produites dans T.212.111.

Le diagramme attendu est :

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

    User "1" -- "0..1" Auteur : possède un profil
    Categorie "1" -- "0..*" Article : contient
    Auteur "1" -- "0..*" Article : rédige
```

Les méthodes ne doivent pas être ajoutées.

Le diagramme reste un **modèle objet statique**.

### 2.6. Vérifier les associations

Pour chaque association, vérifiez :

* les deux classes existent ;
* la relation correspond à une relation du MLD ;
* la clé étrangère a permis de retrouver la relation ;
* les multiplicités correspondent au MLD ;
* le rôle décrit correctement la relation ;
* aucune association supplémentaire n'a été inventée.

### 2.7. Vérifier les multiplicités

Complétez le tableau :

| Association         | Côté 1 | Côté 2 |
| ------------------- | ------ | ------ |
| User / Auteur       |        |        |
| Categorie / Article |        |        |
| Auteur / Article    |        |        |

Puis vérifiez chaque lecture.

Exemple :

```text
Categorie "1" -- "0..*" Article
```

Question :

> Combien d'articles peuvent être liés à une catégorie ?

Réponse :

> Zéro ou plusieurs.

Question :

> Combien de catégories sont liées à un article ?

Réponse :

> Une seule.

### 2.8. Vérifier la correspondance MLD / modèle objet

Utilisez le tableau suivant :

| Élément MLD   | Élément objet |
| ------------- | ------------- |
| Table         | Classe        |
| Colonne       | Attribut      |
| Clé primaire  | Identifiant   |
| Clé étrangère | Association   |
| Cardinalité   | Multiplicité  |
| Relation      | Association   |

Vérifiez chaque relation du MLD.

Aucune relation du MLD ne doit être oubliée.

### 2.9. Produire le livrable

**Travail à faire :**

À partir du MLD et du modèle produit dans T.212.111 :

1. repérez les clés étrangères ;
2. identifiez les relations ;
3. transformez chaque relation en association ;
4. ajoutez les multiplicités ;
5. ajoutez les rôles ;
6. vérifiez les associations.

**Livrable :**

Mettez à jour :

```text
classes_statiques.mmd
```

Le fichier doit contenir :

* les classes ;
* les attributs ;
* les identifiants ;
* les associations ;
* les multiplicités ;
* les rôles.

**Critère de réussite :**

Toutes les relations du MLD sont correctement représentées par des associations et leurs multiplicités correspondent au modèle relationnel.

## Bilan

**Vous avez appris :**

* à utiliser une clé étrangère pour retrouver une relation ;
* à transformer une relation en association ;
* à représenter une relation 1–1 ;
* à représenter une relation 1–N ;
* à utiliser les multiplicités ;
* à définir le rôle d'une association ;
* à vérifier la correspondance entre MLD et modèle objet.

**Vous avez produit :**

> le modèle objet avec classes, attributs, identifiants et associations.

Le modèle obtenu représente :

```text
User
  1 ─── 0..1 Auteur

Categorie
  1 ─── 0..* Article

Auteur
  1 ─── 0..* Article
```

**Vous préparerez ensuite :**

> la vérification et la finalisation du modèle objet statique.

## Glossaire

* **Clé étrangère** : donnée qui référence une autre table dans le modèle relationnel.
* **Association** : lien entre deux classes.
* **Multiplicité** : nombre d'objets pouvant participer à une association.
* **Relation 1–1** : relation où un objet est lié à au plus un objet de l'autre classe, selon les contraintes du modèle.
* **Relation 1–N** : relation où un objet peut être lié à plusieurs objets de l'autre classe.
* **Rôle** : nom qui précise la signification d'une association.
* **Modèle objet statique** : représentation des classes, attributs et associations sans méthodes ni comportements.
