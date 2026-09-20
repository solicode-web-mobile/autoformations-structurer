---
title: "Identifier et séparer les composants"
layout: tuto
slug: "identifier-et-separer-les-composants"
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

* comprendre ce qu'est un composant ;
* identifier le Frontend ;
* identifier le Backend ;
* distinguer client et serveur ;
* identifier le rôle de chaque composant ;
* séparer les fichiers du Frontend et du Backend ;
* organiser les dossiers de l'application.

À la fin du tutoriel, l'application sera organisée en deux grands composants :

```text
Application
├── Frontend
└── Backend
```

## 2. Prérequis

Vous devez savoir :

* créer une page HTML ;
* utiliser CSS ;
* utiliser JavaScript ;
* créer un programme PHP ;
* organiser des fichiers et des dossiers ;
* comprendre le fonctionnement général d'une application Web.

Vous devez également connaître les notions de base d'une application Web.

Dans ce tutoriel, vous n'étudiez pas encore :

* les requêtes HTTP ;
* les endpoints ;
* `fetch()` ;
* le format JSON des échanges ;
* les méthodes `GET`, `POST`, `PUT` et `DELETE`.

Ces notions seront étudiées dans les tutoriels suivants.

## Données de départ

L'application permet de gérer des données à partir d'une interface Web.

Une application Web peut contenir deux grands ensembles :

```text
Application
├── interface utilisateur
└── traitement côté serveur
```

On va les organiser en :

```text
Application
├── Frontend
└── Backend
```

Le Frontend contient les fichiers utilisés par l'utilisateur.

Le Backend contient les fichiers exécutés côté serveur.

---

## Partie 1 — Théorie

### 1.1. Application

Une **application** est un ensemble de fichiers et de programmes qui travaillent ensemble pour réaliser une fonctionnalité.

Une application Web peut contenir :

```text
HTML
CSS
JavaScript
PHP
données
```

Tous ces éléments n'ont pas le même rôle.

Ils peuvent être regroupés en plusieurs composants.

### 1.2. Composant

Un **composant** est une grande partie de l'application qui possède un rôle précis.

Dans notre application, nous allons identifier deux grands composants :

```text
Frontend
Backend
```

Le Frontend s'occupe de l'interface.

Le Backend s'occupe du traitement côté serveur.

### 1.3. Frontend

Le **Frontend** correspond à la partie de l'application visible et utilisable par l'utilisateur.

Il contient notamment :

```text
HTML
CSS
JavaScript
```

Exemple :

```text
Frontend
├── index.html
├── css/
└── js/
```

Le Frontend permet notamment :

* d'afficher les informations ;
* de présenter les formulaires ;
* de créer les boutons ;
* de gérer l'interface utilisateur.

### 1.4. Interface utilisateur

L'**interface utilisateur** est la partie visible de l'application.

Par exemple :

```text
Catégories

Développement Web
Design UI/UX
Laravel

[ Ajouter ]
[ Modifier ]
[ Supprimer ]
```

Cette partie appartient au Frontend.

Le HTML décrit la structure.

Le CSS décrit la présentation.

Le JavaScript permet de gérer les comportements de l'interface.

### 1.5. Backend

Le **Backend** correspond à la partie exécutée côté serveur.

Il contient notamment les programmes PHP.

Exemple :

```text
Backend
├── api/
├── classes/
└── data/
```

Le Backend peut :

* recevoir une demande ;
* traiter une opération ;
* lire des données ;
* modifier des données ;
* produire une réponse.

Dans ce tutoriel, nous identifions simplement le Backend.

La communication avec le Frontend sera étudiée ensuite.

### 1.6. Client

Le **client** est le logiciel qui utilise l'application côté utilisateur.

Dans une application Web, le navigateur joue ce rôle.

Exemple :

```text
Navigateur
```

Le navigateur affiche le Frontend.

On peut donc représenter :

```text
Utilisateur
    ↓
Navigateur
    ↓
Frontend
```

### 1.7. Serveur

Le **serveur** exécute le Backend.

Par exemple, un serveur Web peut exécuter du PHP.

On peut donc distinguer :

```text
Client
    ↓
Frontend
```

et :

```text
Serveur
    ↓
Backend
```

Le Frontend et le Backend n'ont donc pas le même rôle.

### 1.8. Séparation Frontend / Backend

Une application peut être organisée en deux composants :

```text
Application
├── Frontend
└── Backend
```

Le Frontend contient la partie utilisateur.

Le Backend contient la partie serveur.

Cette séparation permet de mieux organiser le projet.

### 1.9. Responsabilité du Frontend

Le Frontend est responsable de l'interface utilisateur.

On y trouve notamment :

```text
HTML
CSS
JavaScript
```

Sa responsabilité principale est :

> présenter et manipuler l'interface utilisateur.

### 1.10. Responsabilité du Backend

Le Backend est responsable du traitement côté serveur.

On y trouve notamment :

```text
PHP
classes
services
données
```

Sa responsabilité principale est :

> traiter les opérations côté serveur.

### 1.11. Organisation physique

La séparation peut être visible dans les dossiers.

Par exemple :

```text
application/
├── frontend/
│   ├── index.html
│   ├── css/
│   └── js/
│
└── backend/
    ├── api/
    ├── classes/
    └── data/
```

Les fichiers du Frontend sont regroupés.

Les fichiers du Backend sont regroupés.

### 1.12. Ne pas mélanger les composants

Évitez une organisation comme :

```text
application/
├── index.html
├── Categorie.php
├── style.css
├── api.php
├── script.js
└── categories.json
```

Tous les fichiers sont au même niveau.

Il devient plus difficile d'identifier leur rôle.

Préférez :

```text
application/
├── frontend/
│   ├── index.html
│   ├── css/
│   └── js/
│
└── backend/
    ├── api/
    └── data/
```

### 1.13. À retenir

* Une application peut être organisée en plusieurs composants.
* Le **Frontend** correspond à la partie utilisateur.
* Le **Backend** correspond à la partie serveur.
* Le navigateur utilise le Frontend.
* Le serveur exécute le Backend.
* Les fichiers peuvent être séparés dans des dossiers différents.
* La séparation permet de mieux identifier les responsabilités.

---

## Partie 2 — Pratique

### 2.1. Observer les fichiers

Observez les fichiers de votre application.

Classez chaque fichier selon son rôle :

```text
HTML
CSS
JavaScript
PHP
JSON
```

Posez la question :

> Ce fichier est-il utilisé pour l'interface ou pour le traitement côté serveur ?

### 2.2. Identifier les fichiers Frontend

Les fichiers suivants appartiennent généralement au Frontend :

```text
index.html
style.css
app.js
```

Ils permettent de construire l'interface utilisateur.

Classez-les dans :

```text
Frontend
```

### 2.3. Identifier les fichiers Backend

Les fichiers PHP utilisés par le serveur appartiennent au Backend.

Exemples :

```text
api.php
Categorie.php
GestionCategorie.php
```

Ils réalisent des traitements côté serveur.

Classez-les dans :

```text
Backend
```

### 2.4. Identifier les données

Un fichier comme :

```text
categories.json
```

contient les données utilisées par le Backend.

Dans cette organisation, il appartient au composant Backend.

Par exemple :

```text
Backend
└── data/
    └── categories.json
```

### 2.5. Créer le dossier `frontend`

À la racine du projet, créez :

```text
frontend/
```

Placez dans ce dossier les fichiers d'interface.

Par exemple :

```text
frontend/
├── index.html
├── css/
└── js/
```

### 2.6. Créer le dossier `backend`

Créez :

```text
backend/
```

Placez les fichiers PHP côté serveur.

Par exemple :

```text
backend/
├── api/
├── classes/
└── data/
```

### 2.7. Déplacer les fichiers

Placez chaque fichier dans le composant correspondant.

Exemple :

```text
frontend/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

et :

```text
backend/
├── api/
├── classes/
└── data/
```

Ne modifiez pas encore le fonctionnement du programme.

L'objectif est seulement de mieux organiser les fichiers.

### 2.8. Vérifier le rôle de chaque dossier

Le Frontend doit contenir principalement :

```text
HTML
CSS
JavaScript
```

Le Backend doit contenir principalement :

```text
PHP
API
classes
services
données
```

### 2.9. Construire le schéma des composants

Représentez maintenant l'application :

```text
Application
├── Frontend
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
└── Backend
    ├── PHP
    ├── API
    └── Data
```

Ce schéma montre les deux grands composants.

### 2.10. Identifier client et serveur

Associez :

```text
Navigateur
Serveur Web
Frontend
Backend
```

Complétez :

```text
Client
  ↓
__________

Serveur
  ↓
__________
```

### 2.11. Exercice — Classer les fichiers

Classez les éléments suivants :

```text
index.html
style.css
app.js
api.php
Categorie.php
GestionCategorie.php
categories.json
```

dans :

```text
Frontend
Backend
```

### 2.12. Exercice — Identifier les responsabilités

Complétez :

```text
Frontend

Responsabilité :
____________________________
```

Puis :

```text
Backend

Responsabilité :
____________________________
```

### 2.13. Exercice — Repérer un mauvais mélange

Considérez cette organisation :

```text
application/
├── index.html
├── style.css
├── app.js
├── api.php
├── Categorie.php
└── categories.json
```

Expliquez :

* pourquoi les fichiers sont mélangés ;
* quels fichiers appartiennent au Frontend ;
* quels fichiers appartiennent au Backend ;
* comment vous organiseriez les dossiers.

### 2.14. Exercice — Construire une nouvelle organisation

À partir de l'exercice précédent, proposez :

```text
application/
├── frontend/
│   ├── ...
│   └── ...
│
└── backend/
    ├── ...
    └── ...
```

Ne créez pas encore de dossier `api/` avec des routes détaillées.

La communication entre les composants sera étudiée dans **T.213.112**.

### 2.15. Travail à faire

Séparez l'application en deux grands composants :

```text
Frontend
Backend
```

Placez les fichiers dans les dossiers adaptés.

Le Frontend doit contenir :

* HTML ;
* CSS ;
* JavaScript.

Le Backend doit contenir :

* PHP ;
* traitements serveur ;
* API ou point d'entrée serveur ;
* données.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* la définition d'un composant ;
* la définition du Frontend ;
* la définition du Backend ;
* le rôle du client ;
* le rôle du serveur ;
* la liste des fichiers Frontend ;
* la liste des fichiers Backend ;
* un schéma de l'organisation finale.

Ajoutez le schéma :

```text
Application
├── Frontend
└── Backend
```

**Résultat attendu :**

L'application est organisée en deux composants :

```text
Application
├── Frontend
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
└── Backend
    ├── PHP
    ├── API
    └── Data
```

**Critère de réussite :**

* Les fichiers Frontend sont séparés des fichiers Backend.
* Les fichiers HTML, CSS et JavaScript sont dans le Frontend.
* Les fichiers PHP et les données serveur sont dans le Backend.
* Le rôle de chaque composant est clairement identifié.
* La distinction client / serveur est comprise.
* L'organisation ne mélange plus les deux grands composants.

---

## Bilan

**Vous avez appris :**

* à identifier un composant ;
* à distinguer Frontend et Backend ;
* à distinguer client et serveur ;
* à identifier la responsabilité d'un composant ;
* à séparer les fichiers du Frontend et du Backend ;
* à organiser les dossiers de l'application.

**Vous avez obtenu :**

```text
Application
├── Frontend
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
└── Backend
    ├── PHP
    ├── API
    └── Data
```

Le Frontend correspond à la partie utilisée par l'utilisateur.

Le Backend correspond à la partie exécutée côté serveur.

Vous savez maintenant **identifier et séparer les deux grands composants d'une application Web**.

Dans le prochain tutoriel, vous allez définir **comment le Frontend et le Backend communiquent à travers des requêtes et des réponses HTTP**.

## Glossaire

* **Composant** : grande partie d'une application ayant un rôle précis.
* **Frontend** : partie de l'application utilisée pour construire l'interface utilisateur.
* **Backend** : partie de l'application exécutée côté serveur.
* **Client** : logiciel qui utilise le service, généralement le navigateur.
* **Serveur** : système qui exécute le Backend et traite les demandes.
* **Interface utilisateur** : partie visible de l'application utilisée par l'utilisateur.
* **Séparation Frontend / Backend** : organisation qui distingue l'interface utilisateur du traitement côté serveur.
* **Organisation physique** : organisation des fichiers et dossiers du projet.
