---
title: "Identifier le contexte et les acteurs"
layout: tuto
slug: "identifier-contexte-acteurs"
permalink: /tutos/:slug/
tuto_id: "T.111.111"
version: "normal"
ua: "UA.111.11"
nav_order: 1
---


## 1. Objectif

Comprendre le contexte du **Blog personnel** à partir de ses maquettes et identifier ses acteurs et leurs actions.

## 2. Prérequis

Les maquettes du **Blog personnel** sont nécessaires.

<a href="https://solicode-web-mobile.github.io/maquette-blog/" target="_blank">Maquette blog</a>

# Partie 1 — Théorie

## 1.1. Contexte

Le **contexte** décrit la situation dans laquelle l’application est utilisée et le besoin auquel elle répond.

**Exemple :** une personne veut publier des articles sur le Web et permettre à d’autres personnes de les consulter.

Le contexte aide à comprendre l’application avant de commencer son développement.

![Le Contexte]({{ '/assets/images/c111/t.111.111/contexte.500.jpg' | relative_url }})


## 1.2. Application

L’**application** est le système créé pour répondre au besoin identifié.

**Exemple :** le **Blog personnel** permet de publier et de consulter des articles.

![application]({{ '/assets/images/c111/t.111.111/application.500.jpg' | relative_url }})


## 1.3. Acteur

Un **acteur** est une personne ou un système qui utilise l’application.

**Exemple :**

* **Administrateur** : gérer les articles.
* **Visiteur** : consulter les articles.

![acteurs]({{ '/assets/images/c111/t.111.111/acteurs.500.jpg' | relative_url }})


## 1.4. Action

Une **action** est une opération réalisée par un acteur dans l’application.

**Exemple :**

```text
Administrateur → publier et gérer des articles
Visiteur       → consulter des articles
```

![Action]({{ '/assets/images/c111/t.111.111/action.500.jpg' | relative_url }})

## 1.5. À retenir

* **Contexte** → situation et besoin.
* **Application** → système qui répond au besoin.
* **Acteur** → personne ou système qui utilise l’application.
* **Action** → ce que l’acteur fait.

La démarche est :

```text
Contexte
   ↓
Besoin
   ↓
Application
   ↓
Acteurs
   ↓
Actions
```

![À retenir]({{ '/assets/images/c111/t.111.111/acteur-contexte-application.500.jpg' | relative_url }})



# Partie 2 — Pratique

## 2.1. Déterminer le contexte

### Étape 1 — Observer les maquettes

Ouvrez la <a href="https://solicode-web-mobile.github.io/maquette-blog/" target="_blank">maquette du Blog personnel</a>.

Observez les pages et les informations visibles.

Identifiez le besoin principal et les personnes qui utilisent l’application.

### Étape 2 — Décrire l’application

Écrivez une phrase pour présenter l’application.

```text
Le Blog personnel permet de publier et de consulter des articles.
```

## 2.2. Identifier les acteurs

### Étape 3 — Identifier les acteurs

Identifiez les acteurs du Blog personnel :

```text
Administrateur
Visiteur
```

### Étape 4 — Identifier les actions

Pour chaque acteur, indiquez les actions qu’il peut réaliser.

```text
Administrateur → publier et gérer des articles
Visiteur       → consulter des articles
```

## 2.3. Réaliser l’analyse

### Étape 5 — Créer le livrable

Présentez votre analyse sous cette forme :

```text
Contexte
  ↓
Besoin
  ↓
Application
  ↓
Acteurs
  ↓
Actions
```

Ajoutez les informations identifiées dans les étapes précédentes.

**Résultat attendu :**

Une analyse claire du **Blog personnel** montrant son contexte, son besoin, son application, ses acteurs et leurs actions.

# 3. Bilan

**Vous avez réalisé :** une première analyse du contexte du **Blog personnel** à partir de ses maquettes.

**Vous savez maintenant :** décrire le contexte d’une application et identifier ses acteurs et leurs actions.

# 4. Glossaire

* **Contexte** : situation et besoin autour d’une application.
* **Application** : système créé pour répondre à un besoin.
* **Acteur** : personne ou système qui utilise l’application.
* **Action** : opération réalisée par un acteur.
* **Maquette** : représentation visuelle d’une interface.
