---
title: "Identifier et séparer les composants"
layout: tuto
slug: "identifier-separer-composants"
permalink: /tutos/:slug/
tuto_id: "T.213.111"
type: "classique"
version: "normal"
ua: "UA.213.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :
* comprendre la différence entre le Frontend et le Backend ;
* organiser physiquement les dossiers de votre projet.

## 2. Prérequis

Vous devez avoir une petite application PHP/HTML fonctionnelle (même sans base de données, avec des données en dur).

## Cas d'étude

Le système étudié est le **Blog**. 
Actuellement, tous vos fichiers (HTML, CSS, JS, PHP) sont probablement mélangés dans le même dossier. Cela pose un problème de sécurité et de maintenance. L'objectif est de les séparer proprement.

## Partie 1 — Théorie

### 1.1. L'architecture Client / Serveur

Une application Web professionnelle est divisée en deux grands "composants" :

```mermaid
flowchart LR
    A["🖥️ Navigateur (Frontend)<br>HTML / CSS / JS"]
    B["⚙️ Serveur (Backend)<br>PHP / Base de données"]
    
    A -->|Requête HTTP| B
    B -->|Réponse HTTP| A
    
    style A fill:#f0f6ff,stroke:#2673e8,stroke-width:2px,color:#0a2042
    style B fill:#fff0f0,stroke:#e82626,stroke-width:2px,color:#420a0a
```

1. **Le Frontend (Côté Client) :**
   - C'est ce que voit et manipule l'utilisateur dans son navigateur.
   - Technologies : `HTML`, `CSS`, `JavaScript`.
   - C'est la "vitrine" du magasin.

2. **Le Backend (Côté Serveur) :**
   - C'est le moteur caché qui tourne sur le serveur (Apache, Nginx...).
   - Technologies : `PHP`, `SQL`.
   - C'est "l'arrière-boutique" ou la "cuisine" du magasin. Il traite les données, vérifie la sécurité et discute avec la base de données.

### 1.2. La séparation des dossiers

Pour que le projet soit propre, on ne mélange jamais la vitrine et la cuisine.
La première étape de l'architecture est **physique** : on crée des dossiers séparés.

```text
MonProjetBlog/
├── frontend/
│   ├── index.html
│   ├── css/
│   └── js/
└── backend/
    ├── articles.php
    └── bdd.php
```

## Partie 2 — Pratique

### 2.1. Réorganiser le projet "Blog"

**Travail à faire :**
Prenez le code source de votre projet d'exercice (le Blog).
Si vous n'en avez pas sous la main, créez rapidement quelques fichiers factices (`index.html`, `style.css`, `gestion_articles.php`).

1. Créez un dossier nommé `frontend` à la racine.
2. Déplacez-y tous vos fichiers `.html`, `.css` et `.js`.
3. Créez un dossier nommé `backend` à la racine.
4. Déplacez-y tous vos scripts `.php`.

*Note : À ce stade, votre application ne fonctionne peut-être plus très bien car les chemins ont changé. C'est normal ! Nous allons reconnecter tout ça proprement dans les prochains tutoriels.*



## Bilan

**Vous avez appris :**
* à distinguer le rôle de l'interface (Frontend) de celui du moteur (Backend).
* la première règle de l'architecture : la séparation physique des fichiers.

## Glossaire
* **Frontend** : Composant gérant l'interface utilisateur (Client).
* **Backend** : Composant gérant la logique métier et les données (Serveur).
