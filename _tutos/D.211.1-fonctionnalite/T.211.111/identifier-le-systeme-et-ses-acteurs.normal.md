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

* identifier le système étudié ;
* définir son périmètre ;
* identifier les acteurs ;
* préciser le rôle et l’objectif de chaque acteur ;
* distinguer ce qui appartient au système et ce qui est extérieur au système ;
* construire un diagramme de contexte.

Cette analyse servira à construire le diagramme de cas d’utilisation.

## 2. Prérequis

Vous devez savoir :

* lire une fonctionnalité déjà identifiée ;
* distinguer une personne qui utilise une application d'une fonction de l'application ;
* lire une description simple d'un système.

## Données de départ

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

### 1.1. Le système

Un **système** est l'application ou la partie d'une application que l'on étudie.

Exemple :

> Blog

Ici, le système étudié est le blog.

Le système contient les fonctionnalités de l'application.

### 1.2. Le périmètre

Le **périmètre** indique ce que l'on étudie dans le système.

Pour le Blog, le périmètre comprend notamment :

* la gestion des catégories ;
* la gestion des auteurs ;
* la gestion des articles ;
* la gestion du profil ;
* la gestion du mot de passe ;
* la consultation des articles publiés.

### 1.3. La frontière du système

La **frontière** sépare :

* ce qui appartient au système ;
* ce qui est extérieur au système.

Exemple :

> Le Blog est le système.

> L'Administrateur, l'Auteur et le Visiteur sont à l'extérieur du système.

Ils utilisent le système, mais ils ne font pas partie de l'application.

### 1.4. L’acteur

Un **acteur** est une personne ou un élément extérieur qui interagit avec le système.

Un acteur peut être :

* une personne ;
* un autre système ;
* un service externe.

Dans notre exemple :

| Acteur         | Interaction avec le blog      |
| -------------- | ----------------------------- |
| Administrateur | Administre le contenu du blog |
| Auteur         | Rédige et gère ses contenus   |
| Visiteur       | Consulte les articles publiés |

Un écran, un bouton ou une page n'est pas un acteur.

Exemple :

> « Page d'administration » n'est pas un acteur.

L'acteur est :

> Administrateur

### 1.5. Le rôle

Le **rôle** indique la place occupée par l'acteur par rapport au système.

Exemple :

> Administrateur : gestion du blog.

> Auteur : création et gestion de ses articles.

> Visiteur : consultation des articles publiés.

Le rôle décrit la relation générale avec le système.

### 1.6. L’objectif de l’acteur

L'**objectif** indique ce que l'acteur cherche à obtenir avec le système.

Exemple :

> L'Administrateur veut gérer le contenu du blog.

> L'Auteur veut rédiger et gérer ses articles.

> Le Visiteur veut consulter les articles publiés.

Un objectif doit être exprimé du point de vue de l'acteur.

Éviter une formulation comme :

> « Le système affiche les articles. »

Cette phrase décrit une réaction du système.

Préférer :

> « Le Visiteur veut consulter les articles publiés. »

### 1.7. L’acteur principal

Un **acteur principal** utilise directement le système pour atteindre un objectif.

Exemple :

> L'Auteur utilise directement le Blog pour rédiger un article.

### 1.8. L’acteur secondaire

Un **acteur secondaire** intervient comme support du fonctionnement du système.

Il n'est pas nécessairement à l'origine de l'objectif principal.

Exemple générique :

> Un service externe d'envoi d'e-mails peut être utilisé par l'application pour envoyer une notification.

L'acteur secondaire reste extérieur au système.

### 1.9. Interaction

Une **interaction** est un échange entre un acteur et le système.

Exemple :

> L'Auteur demande au blog d'enregistrer un article.

L'acteur réalise une action.

Le système fournit ensuite une réponse.

### 1.10. Le diagramme de contexte

Le **diagramme de contexte** représente :

* le système ;
* les acteurs ;
* les interactions générales entre les acteurs et le système.

Il ne détaille pas encore toutes les fonctionnalités.

Pour notre exemple :

* le système est le Blog ;
* l'Administrateur gère le contenu ;
* l'Auteur rédige et gère ses articles ;
* le Visiteur consulte les articles publiés.

## Partie 2 — Pratique

### 2.1. Identifier le système

À partir des données de départ, indiquez :

* le nom du système ;
* ce que contient le système ;
* ce qui est extérieur au système.

**Travail à faire :**

Complétez le tableau.

| Élément                         | Réponse |
| ------------------------------- | ------- |
| Nom du système                  |         |
| Ce qui appartient au système    |         |
| Ce qui est extérieur au système |         |

### 2.2. Identifier les acteurs

Relisez les données de départ.

Pour chaque personne qui utilise le blog, indiquez son nom et son rôle.

**Travail à faire :**

Complétez le tableau.

| Acteur | Rôle |
| ------ | ---- |
|        |      |
|        |      |
|        |      |

### 2.3. Identifier les objectifs

Pour chaque acteur, indiquez ce qu'il cherche à faire avec le système.

Utilisez une phrase simple.

Exemple de forme :

> L'acteur veut...

**Travail à faire :**

| Acteur | Objectif |
| ------ | -------- |
|        |          |
|        |          |
|        |          |

### 2.4. Vérifier les acteurs

Utilisez les questions suivantes :

* L'acteur est-il extérieur au système ?
* L'acteur utilise-t-il le système ?
* Son rôle est-il clair ?
* Son objectif est-il exprimé du point de vue de l'acteur ?
* Ai-je décrit une personne et non une page ou un bouton ?
* Ai-je oublié un acteur présent dans les données de départ ?

### 2.5. Construire le diagramme de contexte

Utilisez le système et les acteurs identifiés.

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

    Administrateur -- "Gère le contenu" --> Blog
    Auteur -- "Rédige et gère ses articles" --> Blog
    Visiteur -- "Consulte les articles publiés" --> Blog
```

### 2.6. Préparer la suite

Les informations produites ici seront utilisées dans le tutoriel suivant.

Vous devez avoir :

* un système ;
* un périmètre ;
* des acteurs ;
* le rôle de chaque acteur ;
* l'objectif de chaque acteur ;
* le diagramme de contexte.

Ces informations serviront ensuite à construire :

> **Système → Acteurs → Cas d'utilisation**

Ne créez pas encore les cas d'utilisation.

## Bilan

**Vous avez appris :**

* à identifier un système ;
* à définir son périmètre ;
* à repérer la frontière du système ;
* à identifier les acteurs ;
* à préciser leur rôle ;
* à préciser leur objectif ;
* à construire un diagramme de contexte.

**Vous avez produit :**

* l'identification du système ;
* la liste des acteurs ;
* les rôles des acteurs ;
* les objectifs des acteurs ;
* le diagramme de contexte.

**Vous préparerez ensuite :**

> le diagramme de cas d'utilisation.

## Glossaire

* **Système** : application ou partie d'application étudiée.
* **Périmètre** : ensemble des éléments pris en compte dans l'étude.
* **Frontière** : limite entre le système et son environnement.
* **Acteur** : élément extérieur qui interagit avec le système.
* **Rôle** : place occupée par un acteur par rapport au système.
* **Acteur principal** : acteur qui utilise directement le système pour atteindre un objectif.
* **Acteur secondaire** : acteur extérieur qui apporte un support au système.
* **Objectif** : résultat recherché par un acteur.
* **Interaction** : échange entre un acteur et le système.
* **Diagramme de contexte** : représentation du système et de ses acteurs externes.

