---
layout: objets
title: "Résultat T.212.111"
nav_exclude: true
---

**Code Mermaid :**
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
        -date date_creation
        -int vues
    }
```

**Rendu visuel :**
```mermaid
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
        -date date_creation
        -int vues
    }
```
