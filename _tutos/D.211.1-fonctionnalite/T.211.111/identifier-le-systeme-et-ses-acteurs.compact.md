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

* identifier le système étudié ;
* définir son périmètre ;
* identifier les acteurs ;
* préciser le rôle et l’objectif de chaque acteur ;
* distinguer ce qui appartient au système et ce qui est extérieur ;
* construire un diagramme de contexte.

## 2. Prérequis

Vous devez savoir :

* lire une fonctionnalité identifiée ;
* distinguer un utilisateur d'une fonction ;
* lire la description d'un système.

## Données de départ

**Sujet :** un Blog pour gérer et consulter des articles.

* Administrateur : gère les catégories et auteurs, valide et publie les articles.
* Auteur : rédige les articles, gère son profil et son mot de passe.
* Visiteur : consulte les articles publiés.

## Partie 1 — Théorie

### 1.1. Le système

**Système** : application (ou partie) étudiée.
Exemple : Le Blog.

### 1.2. Le périmètre

**Périmètre** : ce qui est étudié dans le système.
Exemple : gestion (catégories, auteurs, articles, profil, mot de passe), consultation.

### 1.3. La frontière du système

**Frontière** : sépare le système de l'extérieur.
Exemple : le Blog (système) vs Administrateur, Auteur, Visiteur (extérieur).

### 1.4. L’acteur

**Acteur** : élément extérieur (personne, système, service) interagissant avec le système. 
*Une page ou un bouton n'est pas un acteur.*

| Acteur         | Interaction avec le blog      |
| -------------- | ----------------------------- |
| Administrateur | Administre le contenu du blog |
| Auteur         | Rédige et gère ses contenus   |
| Visiteur       | Consulte les articles publiés |

### 1.5. Le rôle

**Rôle** : place occupée par l'acteur.
Exemples : gestion du blog (Administrateur), création (Auteur), consultation (Visiteur).

### 1.6. L’objectif de l’acteur

**Objectif** : but recherché par l'acteur. 
Formulation depuis le point de vue de l'acteur (ex : *Le Visiteur veut consulter les articles*).

### 1.7. L’acteur principal

**Acteur principal** : utilise directement le système (ex : Auteur).

### 1.8. L’acteur secondaire

**Acteur secondaire** : support du système (ex : service d'envoi d'e-mails).

### 1.9. Interaction

**Interaction** : échange acteur-système (action → réponse).

### 1.10. Le diagramme de contexte

**Diagramme de contexte** : représente le système, les acteurs et les interactions générales. Ne détaille pas les fonctionnalités.
Exemple : le Blog (système), Administrateur (gère contenu), Auteur (rédige), Visiteur (consulte).

## Partie 2 — Pratique

### 2.1. Identifier le système

**Travail à faire :**

Complétez le tableau.

| Élément                         | Réponse |
| ------------------------------- | ------- |
| Nom du système                  |         |
| Ce qui appartient au système    |         |
| Ce qui est extérieur au système |         |

### 2.2. Identifier les acteurs

**Travail à faire :**

Complétez le tableau.

| Acteur | Rôle |
| ------ | ---- |
|        |      |
|        |      |
|        |      |

### 2.3. Identifier les objectifs

**Travail à faire :**

| Acteur | Objectif |
| ------ | -------- |
|        |          |
|        |          |
|        |          |

### 2.4. Vérifier les acteurs

Questions de contrôle :

* Acteur extérieur ?
* Utilise-t-il le système ?
* Rôle clair ?
* Objectif exprimé par l'acteur ?
* Est-ce une personne/système (et non un composant) ?
* Acteurs manquants ?

### 2.5. Construire le diagramme de contexte

**Travail à faire :**
Tracez les interactions générales (Système : Blog. Acteurs : Administrateur, Auteur, Visiteur).

```mermaid
usecase-beta
    actor Administrateur
    actor Auteur
    actor Visiteur

    Blog["Blog"]

    Administrateur -- "Gère le contenu" --> Blog
    Auteur -- "Rédige et gère ses articles" --> Blog
    Visiteur -- "Consulte les articles publiés" --> Blog
```

### 2.6. Préparer la suite

**Éléments nécessaires pour la suite :**

* système ;
* périmètre ;
* acteurs ;
* rôles ;
* objectifs ;
* diagramme de contexte.

Ne pas créer les cas d'utilisation à ce stade.

## Bilan

**Vous avez appris :**

* identifier le système, son périmètre et sa frontière ;
* identifier les acteurs, leurs rôles et objectifs ;
* construire un diagramme de contexte.

**Vous avez produit :**

* l'identification du système ;
* la liste des acteurs, leurs rôles et objectifs ;
* le diagramme de contexte.

**Vous préparerez ensuite :**

> le diagramme de cas d'utilisation.

## Glossaire

* **Système** : application ou partie étudiée.
* **Périmètre** : éléments pris en compte dans l'étude.
* **Frontière** : limite entre système et environnement.
* **Acteur** : élément extérieur interagissant avec le système.
* **Rôle** : place occupée par un acteur.
* **Acteur principal** : utilisateur direct du système.
* **Acteur secondaire** : acteur extérieur de support.
* **Objectif** : résultat recherché par un acteur.
* **Interaction** : échange acteur-système.
* **Diagramme de contexte** : représentation générale du système et acteurs externes.
