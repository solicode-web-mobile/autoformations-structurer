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
simplified: true
---

## 1. Objectif

Transformer les relations d'un MLD (Clés étrangères) en associations entre classes (UML), avec leurs multiplicités et leurs rôles.

## 2. Prérequis

* Lire un Modèle Logique de Données (MLD).
* Avoir modélisé les classes simples (Tutoriel T.212.111).

## Données de départ

Le MLD de notre blog se présente ainsi :

```mermaid
erDiagram
    USER ||--o| AUTEUR : "possède un profil"
    CATEGORIE ||--o{ ARTICLE : "contient"
    AUTEUR ||--o{ ARTICLE : "rédige"

    USER {
        int id_user PK
    }
    AUTEUR {
        int id_auteur PK
        int id_user FK
    }
    CATEGORIE {
        int id_categorie PK
    }
    ARTICLE {
        int id_article PK
        int id_categorie FK
        int id_auteur FK
    }
```

**Attention :** Dans le modèle objet UML, les clés étrangères (`id_user`, `id_categorie`...) **disparaissent** des attributs et sont remplacées visuellement par des lignes appelées **Associations**.

## Partie 1 — Théorie

### De la clé étrangère à l'Association UML

Dans une base de données, on relie deux tables avec une **Clé étrangère**. En POO et modélisation UML, on relie deux classes par une **Association**.

**Règles de traduction :**

| Élément MLD | Modèle Objet (UML) |
| --- | --- |
| Clé étrangère (FK) | Association (Ligne entre deux classes) |
| Cardinalité (1,N) | Multiplicité (`1`, `0..1`, `0..*`) |
| Nom de la relation | Rôle de l'association |

### Syntaxe Mermaid (Associations et Multiplicités)

La syntaxe pour lier deux classes dans un diagramme de classes Mermaid est :
`ClasseA "multiplicité A" -- "multiplicité B" ClasseB : rôle`

**Exemple de relation 1..N (Un à plusieurs) :**

*Code :*
```text
classDiagram
    class Categorie {
        -int id
    }
    class Article {
        -int id
    }
    Categorie "1" -- "0..*" Article : contient
```

*Rendu visuel :*
```mermaid
classDiagram
    class Categorie {
        -int id
    }
    class Article {
        -int id
    }
    Categorie "1" -- "0..*" Article : contient
```

*Explication des multiplicités :*
- `1` : Exactement 1
- `0..1` : Zéro ou un (Optionnel, relation 1-1)
- `0..*` : Zéro ou plusieurs (Relation 1-N)
- `1..*` : Un ou plusieurs

Ici, on lit dans les deux sens : 
1. "Une Categorie contient zéro ou plusieurs (`0..*`) Articles".
2. "Un Article appartient à exactement une (`1`) Categorie".

## Partie 2 — Pratique

### Mission : Finaliser le diagramme de classes de votre Blog

**Travail à faire (dans votre dépôt GitHub) :**

1. Ouvrez votre fichier `conception/classes.mmd` qui contient vos 4 classes.
2. En vous basant sur le diagramme de données (section "Données de départ" plus haut), ajoutez les associations entre les classes avec la syntaxe Mermaid en bas de votre fichier.
3. Les liens à créer sont :
   - Un `User` possède zéro ou un `Auteur`.
   - Un `Auteur` rédige zéro ou plusieurs `Article`.
   - Une `Categorie` contient zéro ou plusieurs `Article`.

### Étape de vérification (Audit du Modèle)

Avant de *commit* et de valider définitivement votre modèle sur GitHub, passez-le toujours à la loupe avec cette "Checklist du Concepteur" :

- [ ] **Classes** : Chaque table du MLD a-t-elle sa classe (au singulier) ?
- [ ] **Identifiants** : Chaque classe possède-t-elle son attribut `id` ?
- [ ] **Attributs** : Tous les champs (hors clés étrangères) sont-ils présents et correctement typés ?
- [ ] **Associations** : Les clés étrangères ont-elles bien disparu des attributs pour devenir des lignes d'association ?
- [ ] **Multiplicités** : Le sens de chaque association a-t-il été testé avec une phrase ? *(ex: "Un Auteur rédige 0 ou plusieurs Articles")*.

<details>
<summary>Voir le résultat attendu dans `classes.mmd`</summary>
<div markdown="1">

```text
classDiagram
    class Categorie {
        -int id
        -string nom
        -string couleur
        -string icone
    }
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
    class Article {
        -int id
        -string titre
        -string contenu
        -string statut
        -DateTime date_creation
    }

    User "1" -- "0..1" Auteur : a pour profil
    Auteur "1" -- "0..*" Article : rédige
    Categorie "1" -- "0..*" Article : contient
```

**Livrable :** Le lien GitHub vers votre fichier `conception/classes.mmd` finalisé et validé.

</div>
</details>

## Bilan

**Vous avez appris :**
* qu'une clé étrangère en base de données devient une association en POO.
* à utiliser la syntaxe Mermaid pour lier deux classes.
* à définir et lire des multiplicités (`1`, `0..*`, etc.) et des rôles d'association.

Votre modèle objet statique est désormais complet et cohérent !

## Glossaire

* **Association** : Lien structurel entre deux classes dans un modèle objet.
* **Multiplicité** : Indique combien d'objets peuvent être liés de part et d'autre d'une association.
* **Rôle** : Verbe ou expression qui donne un sens à l'association (ex: "rédige", "contient").
