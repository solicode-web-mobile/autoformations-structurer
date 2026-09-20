---
title: "Identifier le système et ses acteurs"
layout: tuto
slug: "identifier-systeme-acteurs"
permalink: /tutos/:slug/detaille
tuto_id: "T.211.111"
type: "classique"
version: "detaille"
ua: "UA.211.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez faire vos premiers pas dans la modélisation UML. Vous allez apprendre à :

* identifier avec précision le système étudié et délimiter ses frontières ;
* repérer les différents acteurs qui gravitent autour du système et comprendre leurs objectifs métiers ;
* modéliser l'ensemble sous forme d'un diagramme de contexte global.

Cette analyse est une étape préparatoire indispensable avant de pouvoir se lancer dans la construction d'un diagramme de cas d’utilisation plus détaillé.

## 2. Prérequis

Pour suivre ce tutoriel de manière optimale, vous devez savoir :

* lire et comprendre l'énoncé d'une fonctionnalité métier ;
* analyser une description textuelle simple présentant un système informatique.

## Cas d'étude

Tout au long de ce tutoriel, nous allons travailler sur un exemple très concret : un **Blog**.

L'objectif principal de ce blog est de permettre la gestion et la consultation d'articles en ligne.

Voici les différentes informations dont nous disposons concernant son fonctionnement :

* l’Administrateur a la charge de gérer les catégories ainsi que les auteurs ;
* l’Administrateur possède également le droit de valider et de publier les articles ;
* l’Auteur est chargé de la rédaction des articles ;
* l’Auteur a la possibilité de gérer son propre profil utilisateur et de modifier son mot de passe ;
* le Visiteur se rend sur la plateforme uniquement pour consulter les articles qui ont été publiés.

Ces quelques phrases décrivent très clairement les différentes personnes qui vont être amenées à utiliser le blog, ainsi que ce qu'elles cherchent à y accomplir.

## Partie 1 — Théorie

### 1.1. Le système et ses frontières

En conception logicielle, le **système** désigne tout simplement l'application ou le morceau d'application que l'on est en train d'étudier. 

Pour bien délimiter ce que l'on conçoit de ce qu'on ne conçoit pas, on dit que le système possède des **frontières**. C'est une limite purement imaginaire.
* **À l'intérieur de la frontière**, on trouve tout ce qui fait fonctionner l'application : le code source, les fonctionnalités métier, la base de données. C'est votre domaine de responsabilité technique.
* **À l'extérieur de la frontière**, on trouve tout ce qui n'est pas l'application elle-même : les êtres humains qui cliquent sur l'interface, ou d'autres logiciels partenaires qui envoient des requêtes.

Exemple d'application de ce concept :

> Dans notre cas pratique, le système que nous étudions est le Blog. Imaginez le Blog comme une boîte fermée. Les utilisateurs doivent rester à l'extérieur de cette boîte pour s'en servir.

```mermaid
usecase-beta
    Blog["Boîte du Système (Blog)"]
```

### 1.2. Les acteurs et leurs objectifs

Un **acteur** est une entité qui interagit avec le système. Il peut s'agir d'une personne physique (un client, un administrateur), d'un autre système informatique (une API de paiement bancaire) ou d'un service externe. 
**La règle la plus importante à retenir** est qu'un acteur se situe toujours à l'extérieur de la frontière du système. Il frappe à la porte du système pour lui demander de faire quelque chose.

Par conséquent, chaque acteur utilise le système dans un but bien précis : c'est ce qu'on appelle son **objectif**.

Exemple de raisonnement : 
> L'Auteur (qui est à l'extérieur) interagit avec le Blog (qui est à l'intérieur) avec une intention claire : rédiger des articles. En modélisation, on représente cette intention par un lien direct entre l'acteur et le système.

```mermaid
usecase-beta
    actor Auteur
    Blog["Boîte du Système (Blog)"]
    Auteur -- "Rédiger des articles" --- Blog
```

*Mise en garde : Il est très fréquent de confondre un acteur avec un élément de l'interface. Gardez bien en tête qu'un écran de connexion, un bouton "Valider" ou une base de données interne ne sont jamais des acteurs. Ce sont des morceaux du système.*

### 1.3. Le diagramme de contexte

Le **diagramme de contexte** est la toute première vue architecturale de votre projet. C'est une cartographie qui rassemble de manière très visuelle le système (au centre) et tous ses acteurs (autour). 

Il représente, à l'aide de flèches, les interactions majeures entre ces acteurs et le système. Ce diagramme a pour but de donner une vue "macro" et ne détaille donc pas toutes les petites fonctionnalités internes.

Exemple d'un diagramme de contexte complet :

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

Il est temps de mettre en pratique ces concepts. À partir de la description fournie dans le cas d'étude du Blog, déduisez le nom du système étudié.

**Travail à faire :**

Remplissez le tableau ci-dessous en indiquant le nom du système.

| Élément | Réponse |
| --- | --- |
| Nom du système | |

### 2.2. Identifier les acteurs et leurs objectifs

Reprenez la lecture du cas d'étude. Vous devez y repérer toutes les entités extérieures qui vont utiliser le blog. Pour chacune d'entre elles, déterminez son nom exact et expliquez l'objectif qu'elle cherche à atteindre en se connectant à la plateforme.

**Travail à faire :**

Complétez méthodiquement le tableau suivant avec vos découvertes :

| Acteur | Objectif |
| --- | --- |
| | |
| | |
| | |

*Auto-évaluation : Prenez un instant pour vérifier vos réponses. Avez-vous bien décrit des personnes ou des services externes ? Assurez-vous de n'avoir inclus aucun bouton ni aucune page web. Vérifiez également que les objectifs sont formulés du point de vue de l'acteur (par exemple : "Publier un article").*

### 2.3. Construire le diagramme de contexte

Maintenant que vous avez identifié le cœur de votre application (le système) et tous les intervenants (les acteurs), vous allez pouvoir tracer votre cartographie globale.

**Travail à faire :**

Le diagramme que vous allez construire devra impérativement faire figurer les éléments suivants :
* La boîte représentant votre système, nommée **Blog**.
* L'acteur Administrateur.
* L'acteur Auteur.
* L'acteur Visiteur.
* Des flèches représentant l'interaction générale de chacun de ces acteurs avec le système.

Le code Mermaid attendu pour générer ce diagramme ressemblera à cette structure :

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

**Félicitations ! Vous avez appris :**

* à cerner précisément un système informatique et à délimiter de manière claire ses frontières ;
* à identifier les acteurs légitimes et à formuler leurs objectifs métier ;
* à construire et lire un diagramme de contexte global.

**Au cours de ce tutoriel, vous avez produit :**

* l'identification formelle du système ;
* la liste exhaustive des acteurs et de leurs objectifs associés ;
* le diagramme de contexte illustrant ces interactions.

**Vous préparerez ensuite :**

> Dans la prochaine étape de cette formation, vous utiliserez cette base solide pour construire le diagramme de cas d'utilisation détaillé.

## Glossaire

* **Système** : désigne l'application logicielle (ou la sous-partie d'application) qui est le sujet de l'étude.
* **Frontière** : ligne de démarcation imaginaire qui sépare strictement le système de son environnement extérieur.
* **Acteur** : toute entité extérieure (une personne physique, une autre application, un service distant) qui interagit directement avec le système pour atteindre un but métier.
* **Objectif** : le résultat concret et attendu par l'acteur lorsqu'il utilise le système.
* **Diagramme de contexte** : une représentation macroscopique et visuelle du système placé au centre de ses acteurs externes, modélisant leurs grandes interactions.
