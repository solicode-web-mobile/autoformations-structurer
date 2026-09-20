---
title: "Identifier le système et ses acteurs"
layout: tuto
slug: "identifier-systeme-acteurs"
permalink: /tutos/:slug/compact
tuto_id: "T.211.111"
type: "classique"
version: "compact"
ua: "UA.211.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :
* identifier le système étudié et ses frontières ;
* identifier les acteurs et leurs objectifs ;
* construire un diagramme de contexte.

Cette analyse servira à construire le diagramme de cas d’utilisation.

## 2. Prérequis

Vous devez savoir :
* lire une fonctionnalité déjà identifiée ;
* lire une description simple d'un système.

## Cas d'étude

**Sujet :** un Blog pour gérer et consulter des articles.

* Administrateur : gère les catégories et les auteurs, valide et publie les articles.
* Auteur : rédige des articles, gère son profil et son mot de passe.
* Visiteur : consulte les articles publiés.

## Partie 1 — Théorie

### 1.1. Le système et ses frontières

**Système** : application étudiée (ex: Blog).
**Frontière** : limite imaginaire ("boîte") entourant l'application. 
* Intérieur : code, base de données.
* Extérieur : utilisateurs, autres logiciels.

```mermaid
usecase-beta
    Blog["Boîte du Système (Blog)"]
```

### 1.2. Les acteurs et leurs objectifs

**Acteur** : entité (personne/système) à l'extérieur interagissant avec le système. *Un écran n'est pas un acteur.*
**Objectif** : but de l'acteur.

Exemple : 
> L'Auteur (extérieur) interagit avec le Blog (intérieur) pour rédiger.

```mermaid
usecase-beta
    actor Auteur
    Blog["Boîte du Système (Blog)"]
    Auteur -- "Rédiger des articles" --- Blog
```

### 1.3. Le diagramme de contexte

**Diagramme de contexte** : représente le système et les grandes interactions avec les acteurs.

Exemple complet :

```mermaid
usecase-beta
    actor Administrateur
    actor Auteur
    actor Visiteur
    Blog["Boîte du Système (Blog)"]
    Administrateur -- "Gère le contenu" --- Blog
    Auteur -- "Rédige des articles" --- Blog
    Visiteur -- "Consulte les articles" --- Blog
```

## Partie 2 — Pratique

### 2.1. Identifier le système

À partir du cas d'étude, indiquez le nom du système étudié.

**Travail à faire :**

| Élément | Réponse |
| --- | --- |
| Nom du système | |

### 2.2. Identifier les acteurs et leurs objectifs

Relisez le cas d'étude. 

**Travail à faire :**

Complétez le tableau :

| Acteur | Objectif |
| --- | --- |
| | |
| | |
| | |

*Vérification : Avez-vous décrit des personnes/services (pas de boutons) ?*

### 2.3. Construire le diagramme de contexte

Utilisez le système et les acteurs identifiés.

**Travail à faire :**
Tracez les interactions générales. Le résultat attendu est de cette forme :

```mermaid
usecase-beta
    actor Administrateur
    actor Auteur
    actor Visiteur

    Blog["Blog"]

    Administrateur -- "Gère le contenu" --- Blog
    Auteur -- "Rédige et gère ses articles" --- Blog
    Visiteur -- "Consulte les articles publiés" --- Blog
```

## Bilan

**Vous avez appris :**
* identifier un système et ses frontières ;
* identifier les acteurs et leurs objectifs ;
* construire un diagramme de contexte.

**Vous avez produit :**
* identification du système ;
* liste des acteurs et objectifs ;
* diagramme de contexte.

**Vous préparerez ensuite :**
> le diagramme de cas d'utilisation détaillé.

## Glossaire

* **Système** : application étudiée.
* **Frontière** : limite du système.
* **Acteur** : entité extérieure interagissant avec le système.
* **Objectif** : résultat attendu par l'acteur.
* **Diagramme de contexte** : représentation globale du système et acteurs externes.
