---
title: "Identifier le système et ses acteurs"
layout: tuto
slug: "identifier-systeme-acteurs"
permalink: /tutos/:slug/
tuto_id: "T.211.111"
type: "classique"
version: "normal"
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

On travaille sur un **Blog**.

Le blog permet de gérer et de consulter des articles.

Les informations disponibles sont les suivantes :

* l’Administrateur gère les catégories et les auteurs ;
* l’Administrateur valide et publie les articles ;
* l’Auteur rédige des articles ;
* l’Auteur gère son profil et son mot de passe ;
* le Visiteur consulte les articles publiés.

Ces informations décrivent les personnes qui utilisent le blog et leurs objectifs.

## Partie 1 — Théorie

### 1.1. Le système et ses frontières

Le **système** est l'application que l'on étudie (ici, le Blog). 

La **frontière** est simplement la limite imaginaire (comme une "boîte") qui entoure cette application :
- **À l'intérieur de la frontière :** tout ce qui appartient à l'application (le code, les fonctionnalités, la base de données).
- **À l'extérieur de la frontière :** les personnes humaines ou les autres logiciels qui s'en servent.

Exemple :

> Le Blog est une boîte. Les utilisateurs restent à l'extérieur de cette boîte pour s'en servir.

```mermaid
usecase-beta
    Blog["Boîte du Système (Blog)"]
```

### 1.2. Les acteurs et leurs objectifs

Un **acteur** est une personne, un autre système ou un service externe qui interagit avec le système. Il se situe toujours à l'extérieur de la frontière.

Chaque acteur utilise le système pour atteindre un **objectif** précis.

Exemple : 
> L'Auteur (à l'extérieur) interagit avec le Blog (à l'intérieur) dans le but de rédiger des articles. On représente cet objectif par un lien.

```mermaid
usecase-beta
    actor Auteur
    Blog["Boîte du Système (Blog)"]
    Auteur -- "Rédiger des articles" --- Blog
```

*Attention : Un écran, un bouton ou une base de données interne n'est jamais un acteur.*

### 1.3. Le diagramme de contexte

Le **diagramme de contexte** rassemble le système et les acteurs. Il représente, via des flèches, les grandes interactions entre les acteurs et le système, sans détailler toutes les fonctionnalités.

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

Relisez le cas d'étude. Pour chaque entité extérieure qui utilise le blog, indiquez son nom et ce qu'elle cherche à accomplir.

**Travail à faire :**

Complétez le tableau :

| Acteur | Objectif |
| --- | --- |
| | |
| | |
| | |

*Vérification : Avez-vous bien décrit des personnes/services et non des boutons ou des pages ? Leurs objectifs sont-ils formulés de leur point de vue ?*

### 2.3. Construire le diagramme de contexte

Utilisez le système et les acteurs que vous venez d'identifier pour tracer la carte globale.

Le diagramme doit représenter :
* le système **Blog** ;
* l'Administrateur ;
* l'Auteur ;
* le Visiteur ;
* l'interaction générale de chaque acteur avec le système.

Le résultat attendu est de cette forme :

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

* à identifier un système et ses frontières ;
* à identifier les acteurs et leurs objectifs ;
* à construire un diagramme de contexte global.

**Vous avez produit :**

* l'identification du système ;
* la liste des acteurs et leurs objectifs ;
* le diagramme de contexte.

**Vous préparerez ensuite :**

> le diagramme de cas d'utilisation détaillé.

## Glossaire

* **Système** : application ou partie d'application étudiée.
* **Frontière** : limite entre le système et son environnement extérieur.
* **Acteur** : entité extérieure (personne, service) qui interagit avec le système pour atteindre un objectif.
* **Objectif** : résultat attendu par l'acteur en utilisant le système.
* **Diagramme de contexte** : représentation globale du système, de ses acteurs externes et de leurs grandes interactions.
