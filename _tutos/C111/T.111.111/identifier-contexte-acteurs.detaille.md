---
title: "Identifier le contexte et les acteurs"
layout: tuto
slug: "identifier-contexte-acteurs"
permalink: /tutos/:slug/detaille
tuto_id: "T.111.111"
version: "detaille"
ua: "UA.111.11"
nav_order: 1
---


## 1. Objectif

Comprendre le contexte du **Blog personnel** à partir de ses maquettes et identifier ses acteurs et leurs actions.

À la fin du tutoriel, vous devez pouvoir expliquer simplement **dans quelle situation l’application est utilisée, à quel besoin elle répond, qui l’utilise et ce que chaque acteur peut faire**.

## 2. Prérequis

Les maquettes du **Blog personnel** sont nécessaires.

<a href="https://solicode-web-mobile.github.io/maquette-blog/" target="_blank">Maquette blog</a>

# Partie 1 — Théorie

## 1.1. Contexte

Le **contexte** décrit la situation dans laquelle une application est utilisée et le besoin auquel elle doit répondre.

Avant de développer une application, il faut comprendre cette situation. Cela évite de commencer directement par le code sans savoir **pourquoi l’application existe et pour qui elle est réalisée**.

**Exemple :**

Une personne veut publier des articles sur le Web. D’autres personnes veulent lire ces articles. L’application doit donc permettre de publier et de consulter des articles.

Le contexte nous aide à passer de la situation réelle à une première compréhension de l’application :

```text
Situation
    ↓
Besoin
    ↓
Application
```

![Le Contexte]({{ '/assets/images/c111/t.111.111/contexte.500.jpg' | relative_url }})

 

## 1.2. Application

L’**application** est le système créé pour répondre au besoin identifié dans le contexte.

Elle regroupe les écrans, les traitements et les fonctionnalités nécessaires pour réaliser les actions des utilisateurs.

**Exemple :**

Le **Blog personnel** est une application Web qui permet de publier et de consulter des articles.

Il ne faut pas encore chercher toutes les fonctionnalités techniques. À ce stade, on cherche surtout à comprendre **ce que fait l’application dans son ensemble**.

![application]({{ '/assets/images/c111/t.111.111/application.500.jpg' | relative_url }})


## 1.3. Acteur

Un **acteur** est une personne ou un système qui utilise l’application ou échange avec elle.

Un acteur ne représente pas encore une page ou un bouton. Il représente **qui utilise le système**.

**Exemple :**

Dans le Blog personnel, nous avons deux acteurs :

* **Administrateur** : il gère les articles.
* **Visiteur** : il consulte les articles.

Les acteurs sont identifiés à partir de la situation et des maquettes.

![acteurs]({{ '/assets/images/c111/t.111.111/acteurs.500.jpg' | relative_url }})


## 1.4. Action

Une **action** est une opération réalisée par un acteur dans l’application.

Pour identifier une action, on peut poser une question simple :

> **Que fait cet acteur dans l’application ?**

**Exemple :**

```text
Administrateur → publier et gérer des articles
Visiteur       → consulter des articles
```

Ces actions permettent ensuite de déterminer les fonctionnalités de l’application.

![Action]({{ '/assets/images/c111/t.111.111/action.500.jpg' | relative_url }})


## 1.5. À retenir

* **Contexte** → situation et besoin autour de l’application.
* **Application** → système qui répond au besoin.
* **Acteur** → personne ou système qui utilise l’application.
* **Action** → ce que l’acteur fait dans l’application.

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

# Partie 2 — Pratique

## 2.1. Déterminer le contexte

### Étape 1 — Observer les maquettes

Ouvrez la <a href="https://solicode-web-mobile.github.io/maquette-blog/" target="_blank">maquette du Blog personnel</a>.

Observez les différentes pages et les informations visibles.

Cherchez les éléments qui permettent de comprendre :

* ce que fait l’application ;
* pourquoi elle est utilisée ;
* qui peut l’utiliser.

Ne cherchez pas encore les détails techniques. Le but est de **comprendre la situation générale**.

### Étape 2 — Décrire l’application

À partir des maquettes, écrivez une phrase simple pour présenter l’application.

Vous pouvez utiliser ce modèle :

```text
Le Blog personnel permet de publier et de consulter des articles.
```

Cette phrase représente la première description de l’application.

Elle doit rester simple. Elle ne doit pas présenter une liste complète de fonctionnalités.

## 2.2. Identifier les acteurs

### Étape 3 — Identifier les acteurs

À partir de la maquette et du contexte, identifiez les personnes qui utilisent l’application.

Pour le Blog personnel :

```text
Administrateur
Visiteur
```

L’**Administrateur** utilise l’application pour gérer les articles.

Le **Visiteur** utilise l’application pour consulter les articles.

### Étape 4 — Identifier les actions

Pour chaque acteur, indiquez les actions qu’il peut réaliser.

Utilisez des verbes d’action.

```text
Administrateur → publier et gérer des articles
Visiteur       → consulter des articles
```

Cette étape permet de relier les acteurs aux usages de l’application.

## 2.3. Réaliser l’analyse

### Étape 5 — Créer le livrable

Présentez votre analyse sous une forme simple :

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

Vous pouvez compléter votre analyse avec les informations du Blog personnel :

```text
Contexte :
Une personne veut publier des articles
et les partager avec des visiteurs.

Besoin :
Publier et consulter des articles.

Application :
Blog personnel.

Acteurs :
Administrateur
Visiteur

Actions :
Administrateur → publier et gérer des articles
Visiteur → consulter des articles
```

Vérifiez que votre analyse permet de comprendre rapidement **la situation, le besoin, l’application, les acteurs et leurs actions**.

**Résultat attendu :**

Une analyse simple et claire du **Blog personnel** montrant son contexte, son besoin, son application, ses acteurs et leurs actions.

# 3. Bilan

**Vous avez réalisé :** une première analyse du contexte du **Blog personnel** à partir de ses maquettes.

**Vous savez maintenant :**

* décrire le contexte d’une application ;
* identifier le besoin principal ;
* présenter l’application ;
* identifier ses acteurs ;
* identifier les actions des acteurs.

# 4. Glossaire

* **Contexte** : situation et besoin autour d’une application.
* **Besoin** : ce que l’application doit permettre de faire pour répondre à une situation.
* **Application** : système créé pour répondre à un besoin.
* **Acteur** : personne ou système qui utilise l’application.
* **Action** : opération réalisée par un acteur.
* **Maquette** : représentation visuelle d’une interface.
