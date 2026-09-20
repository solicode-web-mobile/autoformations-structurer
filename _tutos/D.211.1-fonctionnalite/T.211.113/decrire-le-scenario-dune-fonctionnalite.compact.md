---
title: "Décrire le scénario d’une fonctionnalité"
layout: tuto
slug: "decrire-scenario-fonctionnalite"
permalink: /tutos/:slug/compact
tuto_id: "T.211.113"
type: "classique"
version: "compact"
ua: "UA.211.11"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à décrire le **scénario nominal** d’un cas d’utilisation :

- la précondition ;
- le déclencheur ;
- les étapes ;
- les actions de l’acteur ;
- les réponses du système ;
- le résultat attendu.

## 2. Prérequis

Vous devez savoir :

- identifier système, acteurs, cas d’utilisation et associations.

Vous devez avoir réalisé :

- le diagramme de contexte ;
- le diagramme de cas d’utilisation.

## Données de départ

**Système :** Blog
**Cas d’utilisation :** Ajouter une catégorie
**Acteur principal :** Administrateur
**Objectif :** Créer une nouvelle catégorie.

**Fonctionnement attendu :**

1. L'Administrateur accède à la gestion des catégories.
2. Le système affiche les catégories existantes.
3. L'Administrateur demande la création d'une catégorie.
4. Le système affiche le formulaire.
5. L'Administrateur saisit les informations.
6. L'Administrateur valide le formulaire.
7. Le système enregistre la catégorie.
8. Le système affiche la nouvelle catégorie.

*(Fonctionnement normal uniquement dans ce tutoriel).*

## Partie 1 — Théorie

### 1.1. Le scénario

**Scénario** : description des échanges entre l'acteur et le système. Montre *comment le cas d'utilisation se réalise*.

### 1.2. La précondition

**Précondition** : état initial requis (ex: *Administrateur connecté*).

### 1.3. Le déclencheur

**Déclencheur** : événement qui démarre le cas d'utilisation.

### 1.4. Une étape

**Étape** : action unique et simple.

### 1.5. Action de l’acteur

Ce que fait l'utilisateur (ex: *L'Administrateur saisit le titre*).

### 1.6. Réponse du système

Ce que fait le système après l'action de l'acteur (ex: *Le système enregistre la catégorie*).

### 1.7. Le scénario nominal

**Scénario nominal** : fonctionnement normal sans erreur. Les cas d'erreurs seront vus plus tard.

### 1.8. Le résultat attendu

État obtenu à la fin du scénario nominal, observable et vérifiable.

## Partie 2 — Pratique

### 2.1. Préparer le scénario

Cas d'utilisation : **Ajouter une catégorie**

Complétez :

| Élément          | Réponse |
| ---------------- | ------- |
| Acteur principal |         |
| Objectif         |         |
| Précondition     |         |
| Déclencheur      |         |
| Résultat attendu |         |

### 2.2. Séparer les actions

Identifiez qui agit (Acteur ou Système) pour chaque étape.

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

### 2.3. Décrire le scénario nominal

Rédigez le scénario :

**Précondition :**

> ...

**Déclencheur :**

> ...

**Scénario nominal :**

1. L'acteur ...
2. Le système ...
3. L'acteur ...
4. Le système ...

**Résultat attendu :**

> ...

### 2.4. Vérifier les étapes

Contrôlez l'ordre logique, l'alternance acteur/système et la simplicité de chaque étape.

### 2.5. Éviter les scénarios trop vagues

Ne regroupez pas plusieurs actions dans une seule étape.

### 2.6. Produire le livrable

**Travail à faire :**

Décrivez le scénario nominal du cas d'utilisation : **Ajouter une catégorie**

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- l'acteur principal ;
- l'objectif ;
- la précondition ;
- le déclencheur ;
- le scénario nominal ;
- le résultat attendu.

**Critère de réussite :**

Le scénario décrit dans le bon ordre les actions de l'Administrateur et les réponses du système jusqu'au résultat attendu.

## Bilan

**Vous avez appris :**

- décrire un scénario nominal avec précondition, déclencheur, étapes, actions et réponses.

**Vous avez produit :**

> le scénario nominal d'un cas d'utilisation.

**Vous préparerez ensuite :**

> les scénarios alternatifs et d'erreur.

## Glossaire

* **Scénario** : déroulement d'un cas d'utilisation.
* **Précondition** : état initial requis.
* **Déclencheur** : point de départ.
* **Étape** : action unitaire.
* **Action de l'acteur** : action utilisateur.
* **Réponse du système** : réaction logicielle.
* **Scénario nominal** : déroulement normal sans erreur.
* **Résultat attendu** : état final.
