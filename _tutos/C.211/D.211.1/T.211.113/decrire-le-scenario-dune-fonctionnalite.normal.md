---
title: "Décrire le scénario d’une fonctionnalité"
layout: tuto
slug: "decrire-le-scenario-dune-fonctionnalite"
permalink: /tutos/:slug/
tuto_id: "T.211.113"
type: "classique"
version: "normal"
ua: "UA.211.11"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à décrire le **scénario nominal** d’un cas d’utilisation.

Vous allez préciser :

* la précondition ;
* le déclencheur ;
* les étapes ;
* les actions de l’acteur ;
* les réponses du système ;
* le résultat attendu.

## 2. Prérequis

Vous devez savoir :

* identifier un système ;
* identifier les acteurs ;
* identifier les cas d’utilisation ;
* associer un acteur à un cas d’utilisation.

Vous devez avoir réalisé :

* le diagramme de contexte ;
* le diagramme de cas d’utilisation.

## Données de départ

Le système étudié est un **Blog**.

Le cas d’utilisation choisi est :

> **Ajouter une catégorie**

L’acteur principal est :

> **Administrateur**

L’objectif est :

> Créer une nouvelle catégorie pour classer les articles.

Le fonctionnement attendu est le suivant :

1. L'Administrateur accède à la gestion des catégories.
2. Le système affiche les catégories existantes.
3. L'Administrateur demande la création d'une catégorie.
4. Le système affiche le formulaire.
5. L'Administrateur saisit les informations de la catégorie.
6. L'Administrateur valide le formulaire.
7. Le système enregistre la catégorie.
8. Le système affiche la nouvelle catégorie.

Dans ce tutoriel, on décrit uniquement le **fonctionnement normal**.

Les erreurs et les autres chemins seront étudiés dans le tutoriel suivant.

## Partie 1 — Théorie

### 1.1. Le scénario

Un **scénario** décrit le déroulement d'un cas d'utilisation.

Il montre les échanges entre :

* l'acteur ;
* le système.

Exemple :

> L'Administrateur demande la création d'une catégorie.

Puis :

> Le système affiche le formulaire.

Le scénario permet donc de décrire **comment le cas d'utilisation se réalise**.

### 1.2. La précondition

La **précondition** indique ce qui doit être vrai avant le début du scénario.

Exemple :

> L'Administrateur est connecté.

La précondition ne décrit pas une étape du scénario.

Elle indique simplement la situation de départ.

### 1.3. Le déclencheur

Le **déclencheur** indique l'action qui commence le cas d'utilisation.

Exemple :

> L'Administrateur demande l'ajout d'une catégorie.

Le déclencheur explique pourquoi le scénario commence.

### 1.4. Une étape

Une **étape** décrit une action réalisée pendant le scénario.

Une étape doit rester simple.

Exemple :

> L'Administrateur clique sur « Nouvelle catégorie ».

Puis :

> Le système affiche le formulaire.

Une étape décrit donc une action précise.

### 1.5. Action de l’acteur

Une action de l'acteur décrit ce que fait l'utilisateur.

Exemples :

> L'Administrateur ouvre la page des catégories.

> L'Administrateur saisit « Technologie ».

> L'Administrateur valide le formulaire.

L'action commence généralement par le nom de l'acteur.

### 1.6. Réponse du système

La réponse du système décrit ce que l'application fait après l'action de l'acteur.

Exemples :

> Le système affiche la liste des catégories.

> Le système affiche le formulaire.

> Le système enregistre la catégorie.

> Le système affiche un message de succès.

Il faut distinguer :

> **Action de l'acteur**

et

> **Réponse du système**

### 1.7. Le scénario nominal

Le **scénario nominal** décrit le fonctionnement normal du cas d'utilisation.

Toutes les conditions prévues sont respectées.

Exemple :

> L'Administrateur saisit une catégorie valide.

Le système peut alors continuer normalement.

Le scénario nominal ne décrit pas :

* un champ vide ;
* une donnée incorrecte ;
* une erreur du système ;
* une autre possibilité de traitement.

Ces situations seront décrites dans le tutoriel suivant.

### 1.8. Le résultat attendu

Le **résultat attendu** indique l'état obtenu lorsque le scénario nominal est terminé.

Exemple :

> La catégorie est enregistrée et apparaît dans la liste des catégories.

Le résultat doit être observable et vérifiable.

## Partie 2 — Pratique

### 2.1. Préparer le scénario

Travaillez avec le cas d'utilisation :

> **Ajouter une catégorie**

Complétez les informations suivantes :

| Élément          | Réponse |
| ---------------- | ------- |
| Acteur principal |         |
| Objectif         |         |
| Précondition     |         |
| Déclencheur      |         |
| Résultat attendu |         |

### 2.2. Séparer les actions

Pour chaque étape, indiquez qui agit.

Utilisez le tableau suivant :

| N° | Acteur / Système | Action |
| -- | ---------------- | ------ |
| 1  |                  |        |
| 2  |                  |        |
| 3  |                  |        |
| 4  |                  |        |
| 5  |                  |        |
| 6  |                  |        |
| 7  |                  |        |
| 8  |                  |        |

Utilisez uniquement :

> **Acteur**

ou

> **Système**

### 2.3. Décrire le scénario nominal

À partir du tableau précédent, rédigez le scénario.

Respectez cette forme :

**Précondition :**

> ...

**Déclencheur :**

> ...

**Scénario nominal :**

1. L'acteur ...
2. Le système ...
3. L'acteur ...
4. Le système ...
5. L'acteur ...
6. Le système ...
7. Le système ...

**Résultat attendu :**

> ...

Chaque étape doit décrire une seule action principale.

### 2.4. Vérifier les étapes

Vérifiez chaque étape avec les questions suivantes :

* L'acteur est-il clairement identifié ?
* La réponse du système est-elle clairement identifiée ?
* Chaque étape décrit-elle une action ?
* Les étapes suivent-elles un ordre logique ?
* Une réponse du système apparaît-elle après une action de l'acteur lorsque cela est nécessaire ?
* Le scénario correspond-il bien au cas d'utilisation ?
* Le scénario décrit-il uniquement le fonctionnement normal ?

### 2.5. Éviter les scénarios trop vagues

Évitez :

> L'Administrateur gère les catégories.

Cette phrase ne décrit pas le déroulement.

Préférez :

> L'Administrateur ouvre la page des catégories.

Puis :

> Le système affiche la liste des catégories.

Évitez également une étape qui contient plusieurs actions :

> L'Administrateur ouvre la page, saisit le titre et enregistre la catégorie.

Préférez plusieurs étapes :

1. L'Administrateur ouvre la page des catégories.
2. Le système affiche la liste.
3. L'Administrateur saisit le titre.
4. L'Administrateur valide le formulaire.

### 2.6. Produire le livrable

**Travail à faire :**

Décrivez le scénario nominal du cas d'utilisation :

> **Ajouter une catégorie**

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* l'acteur principal ;
* l'objectif ;
* la précondition ;
* le déclencheur ;
* le scénario nominal ;
* le résultat attendu.

**Critère de réussite :**

Le scénario décrit, dans le bon ordre, les actions de l'Administrateur et les réponses du système jusqu'à l'obtention du résultat attendu.

## Bilan

**Vous avez appris :**

* à décrire un scénario ;
* à définir une précondition ;
* à identifier un déclencheur ;
* à décrire les actions de l'acteur ;
* à décrire les réponses du système ;
* à construire un scénario nominal ;
* à définir le résultat attendu.

**Vous avez produit :**

> le scénario nominal d'un cas d'utilisation.

**Vous préparerez ensuite :**

> les scénarios alternatifs et les scénarios d'erreur.

## Glossaire

* **Scénario** : description du déroulement d'un cas d'utilisation.
* **Précondition** : condition vraie avant le début du scénario.
* **Déclencheur** : action qui démarre le cas d'utilisation.
* **Étape** : action réalisée pendant le scénario.
* **Action de l'acteur** : action réalisée par l'utilisateur.
* **Réponse du système** : réaction du système après une action.
* **Scénario nominal** : déroulement normal du cas d'utilisation.
* **Résultat attendu** : état obtenu à la fin du scénario.
