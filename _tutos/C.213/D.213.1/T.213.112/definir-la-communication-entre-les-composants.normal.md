---
title: "Définir la communication entre les composants"
layout: tuto
slug: "definir-la-communication-entre-les-composants"
permalink: /tutos/:slug/
tuto_id: "T.213.112"
type: "classique"
version: "normal"
ua: "UA.213.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* comprendre la communication client / serveur ;
* comprendre une requête HTTP ;
* comprendre une réponse HTTP ;
* utiliser les méthodes HTTP ;
* identifier une ressource ;
* comprendre une API ;
* identifier un endpoint ;
* identifier une URL d'API ;
* distinguer les données envoyées et reçues.

À la fin du tutoriel, vous saurez représenter la communication :

```text
Frontend
    ↓ requête HTTP
API / Backend
    ↓ traitement
API / Backend
    ↓ réponse HTTP
Frontend
```

## 2. Prérequis

Vous devez savoir :

* distinguer Frontend et Backend ;
* distinguer client et serveur ;
* organiser les fichiers d'une application ;
* comprendre le rôle d'une interface utilisateur ;
* comprendre le rôle général du Backend.

Vous devez avoir réalisé :

**T.213.111 — Identifier et séparer les composants**

Dans ce tutoriel, vous n'apprenez pas encore :

* `fetch()` ;
* les événements JavaScript ;
* la gestion du DOM ;
* l'asynchronisme JavaScript.

Ces notions sont traitées dans **D.224.1 — SPA**.

## Données de départ

L'application contient :

```text
Frontend
    ↓
Backend
```

Dans le Backend, un fichier PHP peut recevoir les demandes :

```text
backend/
└── api.php
```

Dans le Sprint 1, `api.php` analyse la méthode HTTP :

```php
$method = $_SERVER['REQUEST_METHOD'];
```

Puis il traite notamment :

```text
GET
POST
PUT
DELETE
```

L'API retourne des données au format JSON.

Exemple de réponse :

```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "nom": "Développement Web",
            "couleur": "Bleu",
            "icone": "Code"
        }
    ]
}
```

Le Frontend et le Backend ont donc besoin d'un mécanisme pour communiquer.

Ce mécanisme utilise HTTP.

---

## Partie 1 — Théorie

### 1.1. Communication client / serveur

Le Frontend s'exécute côté client.

Le Backend s'exécute côté serveur.

Pour travailler ensemble, ils échangent des messages.

Le client envoie une demande :

```text
Client
    ↓
demande
```

Le serveur traite cette demande puis répond :

```text
Client
    ↑
réponse
```

La communication complète est :

```text
Frontend
    ↓
requête
    ↓
Backend
    ↓
traitement
    ↓
réponse
    ↓
Frontend
```

### 1.2. Requête HTTP

Une **requête HTTP** est un message envoyé par le client au serveur.

Elle demande une opération.

Exemple :

```text
GET /backend/api.php
```

Cette requête signifie que le client demande une ressource au serveur.

Une requête contient notamment :

* une méthode HTTP ;
* une URL ;
* éventuellement des données.

### 1.3. Réponse HTTP

Une **réponse HTTP** est le message envoyé par le serveur après le traitement de la requête.

Elle peut contenir :

* un statut ;
* des données ;
* un message.

Exemple :

```json
{
    "status": "success",
    "data": []
}
```

Le Frontend reçoit cette réponse.

### 1.4. Méthode HTTP

La **méthode HTTP** indique l'opération demandée.

Dans notre CRUD, les principales méthodes sont :

| Méthode  | Intention |
| -------- | --------- |
| `GET`    | consulter |
| `POST`   | créer     |
| `PUT`    | modifier  |
| `DELETE` | supprimer |

Dans ce tutoriel, nous identifions leur rôle.

Le détail complet des endpoints CRUD sera étudié dans **T.213.113**.

### 1.5. Ressource

Une **ressource** représente une donnée ou un ensemble de données géré par l'application.

Dans notre exemple :

```text
categories
```

représente la ressource des catégories.

Une autre ressource peut être :

```text
articles
```

On peut donc avoir :

```text
Ressource
├── categories
└── articles
```

### 1.6. API

Une **API** est un point de communication qui permet à un programme d'utiliser les fonctionnalités d'un autre programme.

Dans notre application :

```text
Frontend
    ↓
API
    ↓
Backend
```

Le Frontend ne travaille pas directement avec le fichier JSON.

Il utilise l'API pour demander une opération au Backend.

### 1.7. Endpoint

Un **endpoint** est un point d'accès précis de l'API.

Il permet d'accéder à une ressource.

Par exemple :

```text
/backend/api.php
```

peut être le point d'entrée de l'API du Sprint 1.

Dans une organisation plus détaillée, plusieurs ressources peuvent avoir des endpoints différents.

Exemple :

```text
/api/categories
/api/articles
```

L'endpoint permet donc d'identifier où envoyer la requête.

### 1.8. URL d’API

Une **URL d'API** permet au client d'indiquer le point où envoyer la requête.

Exemple :

```text
http://localhost/projet/backend/api.php
```

L'URL dépend de l'environnement.

Dans un projet local, elle peut utiliser :

```text
localhost
```

Dans un serveur distant, le domaine peut être différent.

### 1.9. Données envoyées

Certaines opérations nécessitent des données envoyées par le Frontend.

Par exemple, pour créer une catégorie :

```json
{
    "nom": "PHP",
    "couleur": "Vert",
    "icone": "Code"
}
```

Ces données sont envoyées au Backend.

Le Backend peut ensuite créer l'objet correspondant.

### 1.10. Données reçues

Après le traitement, le Backend retourne une réponse.

Exemple :

```json
{
    "status": "success",
    "message": "Catégorie ajoutée avec succès !"
}
```

Pour une lecture, la réponse peut contenir une liste :

```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "nom": "Développement Web",
            "couleur": "Bleu",
            "icone": "Code"
        },
        {
            "id": 2,
            "nom": "Design UI/UX",
            "couleur": "Rose",
            "icone": "Pinceau"
        }
    ]
}
```

### 1.11. Format JSON

**JSON** est un format de données utilisé pour échanger des informations.

Exemple :

```json
{
    "nom": "Laravel",
    "couleur": "Bleu",
    "icone": "Code"
}
```

Dans notre application, JSON est utilisé pour transporter les données entre les composants.

Il est différent du fichier JSON utilisé pour stocker les données.

Il peut y avoir :

```text
JSON d'échange
```

et :

```text
JSON de stockage
```

Le premier sert à communiquer.

Le second sert à conserver les données.

### 1.12. Flux complet

Pour consulter les catégories :

```text
Frontend
    ↓
GET /backend/api.php
    ↓
API / Backend
    ↓
lecture des catégories
    ↓
réponse JSON
    ↓
Frontend
```

Pour créer une catégorie :

```text
Frontend
    ↓
POST /backend/api.php
    ↓
données JSON
    ↓
API / Backend
    ↓
création
    ↓
réponse JSON
    ↓
Frontend
```

### 1.13. À retenir

* Le Frontend et le Backend communiquent avec HTTP.
* Le client envoie une requête.
* Le serveur traite la requête.
* Le serveur renvoie une réponse.
* Une méthode HTTP indique l'opération demandée.
* Une ressource représente les données manipulées.
* Une API permet la communication entre les composants.
* Un endpoint est un point d'accès de l'API.
* JSON peut être utilisé pour échanger les données.

---

## Partie 2 — Pratique

### 2.1. Identifier le point d’entrée de l’API

Dans le Sprint 1, ouvrez :

```text
backend/api.php
```

Le fichier commence par :

```php
<?php

require_once 'Categorie.php';

header(
    'Content-Type: application/json; charset=utf-8'
);
```

Ce fichier prépare une réponse JSON.

Il constitue donc le point d'entrée de l'API du Sprint 1.

### 2.2. Identifier la méthode HTTP

Dans `api.php`, repérez :

```php
$method = $_SERVER['REQUEST_METHOD'];
```

Cette instruction permet de connaître la méthode utilisée par le client.

Le programme teste ensuite :

```php
if ($method === 'GET') {
    // ...
}
```

puis :

```php
elseif ($method === 'POST') {
    // ...
}
```

puis :

```php
elseif ($method === 'PUT') {
    // ...
}
```

et :

```php
elseif ($method === 'DELETE') {
    // ...
}
```

L'API peut donc distinguer plusieurs opérations.

### 2.3. Décrire une requête GET

Pour consulter les catégories, on utilise :

```text
GET /backend/api.php
```

Le Frontend demande au serveur :

> Donne-moi les catégories.

Le flux est :

```text
Frontend
    ↓
GET /backend/api.php
    ↓
Backend
    ↓
Categorie::readAll()
    ↓
réponse JSON
```

### 2.4. Observer la réponse GET

Dans `api.php`, après la lecture :

```php
echo json_encode([
    'status' => 'success',
    'data' => $response
]);
```

Le serveur retourne donc du JSON.

Exemple :

```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "nom": "Développement Web",
            "couleur": "Bleu",
            "icone": "Code"
        },
        {
            "id": 2,
            "nom": "Design UI/UX",
            "couleur": "Rose",
            "icone": "Pinceau"
        }
    ]
}
```

### 2.5. Décrire une requête POST

Pour créer une catégorie :

```text
POST /backend/api.php
```

Le Frontend doit envoyer les données :

```json
{
    "nom": "PHP",
    "couleur": "Vert",
    "icone": "Code"
}
```

Le Backend récupère le contenu :

```php
$inputJSON = file_get_contents('php://input');
```

Puis le transforme en tableau :

```php
$input = json_decode($inputJSON, true);
```

Le Backend possède maintenant les données envoyées.

### 2.6. Observer le traitement POST

L'API vérifie :

```php
if (
    isset($input['nom']) &&
    isset($input['couleur']) &&
    isset($input['icone'])
) {
    // ...
}
```

Puis elle crée un objet :

```php
$newCat = new Categorie(
    $input['nom'],
    $input['couleur'],
    $input['icone']
);
```

Le Backend traite donc les données reçues.

### 2.7. Observer la réponse POST

Après la création, le serveur retourne :

```php
echo json_encode([
    'status' => 'success',
    'message' => 'Catégorie ajoutée avec succès !'
]);
```

Le Frontend reçoit :

```json
{
    "status": "success",
    "message": "Catégorie ajoutée avec succès !"
}
```

Le serveur ne renvoie donc pas seulement les données demandées.

Il peut également renvoyer un statut et un message.

### 2.8. Décrire une requête PUT

La modification utilise :

```text
PUT /backend/api.php
```

Le Frontend envoie par exemple :

```json
{
    "id": 3,
    "nom": "Laravel",
    "couleur": "Rouge",
    "icone": "Code"
}
```

Le Backend reçoit les données :

```php
$inputJSON = file_get_contents('php://input');

$input = json_decode($inputJSON, true);
```

Puis crée l'objet à modifier.

### 2.9. Décrire une requête DELETE

La suppression utilise :

```text
DELETE /backend/api.php
```

Les données peuvent contenir :

```json
{
    "id": 3
}
```

Le Backend lit :

```php
$inputJSON = file_get_contents('php://input');

$input = json_decode($inputJSON, true);
```

Puis utilise l'identifiant :

```php
$input['id']
```

pour réaliser la suppression.

### 2.10. Construire la carte des échanges

Complétez :

```text
Frontend
    ↓
________________
    ↓
Backend
    ↓
________________
    ↓
Frontend
```

Avec :

```text
requête HTTP
réponse HTTP
```

Le schéma devient :

```text
Frontend
    ↓ requête HTTP
API / Backend
    ↓ réponse HTTP
Frontend
```

### 2.11. Associer méthode et intention

Complétez :

| Méthode  | Intention |
| -------- | --------- |
| `GET`    | ...       |
| `POST`   | ...       |
| `PUT`    | ...       |
| `DELETE` | ...       |

Utilisez :

```text
consulter
créer
modifier
supprimer
```

### 2.12. Identifier la ressource

Dans notre application, la ressource principale du tutoriel est :

```text
categories
```

Elle représente les catégories gérées par l'application.

Une autre ressource peut être :

```text
articles
```

Chaque ressource peut être gérée par l'API.

### 2.13. Identifier l’endpoint

Pour le Sprint 1 :

```text
/backend/api.php
```

est le point d'entrée utilisé par les demandes.

Complétez :

```text
Ressource :
________________

Endpoint :
________________
```

### 2.14. Construire un exemple GET

Écrivez :

```text
Requête :
GET /backend/api.php
```

Puis indiquez :

```text
Ressource :
categories
```

Puis :

```text
Réponse :
JSON
```

### 2.15. Construire un exemple POST

Écrivez :

```text
Requête :
POST /backend/api.php
```

Données envoyées :

```json
{
    "nom": "PHP",
    "couleur": "Vert",
    "icone": "Code"
}
```

Puis indiquez :

```text
Réponse :
JSON
```

### 2.16. Exercice — Décrire une communication

Pour chaque opération, complétez :

| Opération | Méthode | Endpoint | Données envoyées | Données reçues |
| --------- | ------- | -------- | ---------------- | -------------- |
| Consulter |         |          |                  |                |
| Créer     |         |          |                  |                |
| Modifier  |         |          |                  |                |
| Supprimer |         |          |                  |                |

Utilisez uniquement les informations étudiées dans ce tutoriel.

### 2.17. Exercice — Tracer le flux

Tracez le flux d'une consultation :

```text
Utilisateur
    ↓
Navigateur
    ↓
Frontend
    ↓
?
    ↓
API / Backend
    ↓
?
    ↓
Frontend
```

Vous devez compléter avec :

```text
requête HTTP
réponse HTTP
```

### 2.18. Exercice — Identifier les données

Pour la création d'une catégorie, indiquez :

```text
Données envoyées :
________________________
________________________
________________________
```

Puis :

```text
Données reçues :
________________________
________________________
```

### 2.19. Exercice — Observer la réponse du serveur

À partir de :

```json
{
    "status": "success",
    "message": "Catégorie ajoutée avec succès !"
}
```

identifiez :

```text
Statut :
________________

Message :
________________
```

### 2.20. Travail à faire

Définissez la communication entre le Frontend et le Backend pour la ressource `categories`.

Pour chaque opération :

```text
GET
POST
PUT
DELETE
```

indiquez :

* la méthode HTTP ;
* la ressource ;
* l'endpoint ;
* les données envoyées ;
* les données reçues.

Construisez ensuite le flux :

```text
Frontend
    ↓
API / Backend
    ↓
Frontend
```

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* une définition d'une requête HTTP ;
* une définition d'une réponse HTTP ;
* une définition d'une API ;
* une définition d'un endpoint ;
* le rôle des méthodes `GET`, `POST`, `PUT` et `DELETE` ;
* un tableau des échanges CRUD ;
* un exemple complet d'échange GET ;
* un exemple complet d'échange POST ;
* le schéma de communication Frontend ↔ API / Backend.

**Résultat attendu :**

Le document présente clairement :

```text
Frontend
    ↓ requête HTTP
API / Backend
    ↓ traitement
API / Backend
    ↓ réponse HTTP
Frontend
```

Pour `categories` :

```text
GET    → consulter
POST   → créer
PUT    → modifier
DELETE → supprimer
```

Les données échangées utilisent JSON.

**Critère de réussite :**

* La différence entre requête et réponse HTTP est comprise.
* Le rôle du client et du serveur est compris.
* Une ressource est correctement identifiée.
* Un endpoint est correctement identifié.
* Les quatre méthodes HTTP sont associées à leur intention.
* Les données envoyées et reçues sont distinguées.
* Le flux Frontend → API / Backend → Frontend est correctement représenté.

---

## Bilan

**Vous avez appris :**

* à comprendre la communication client / serveur ;
* à identifier une requête HTTP ;
* à identifier une réponse HTTP ;
* à utiliser les notions de méthode HTTP et de ressource ;
* à comprendre une API ;
* à identifier un endpoint ;
* à définir une URL d'API ;
* à distinguer les données envoyées et reçues ;
* à représenter un échange Frontend ↔ Backend.

**Vous avez défini :**

```text
Frontend
    ↓ requête HTTP
API / Backend
    ↓ traitement
API / Backend
    ↓ réponse HTTP
Frontend
```

Pour la ressource `categories` :

```text
GET    → consulter
POST   → créer
PUT    → modifier
DELETE → supprimer
```

Les données peuvent être échangées au format JSON.

Vous savez maintenant **définir la communication entre deux composants d'une application Web**.

Dans le prochain tutoriel, vous allez **structurer les endpoints CRUD de l'API et vérifier les échanges avec le Backend**.

## Glossaire

* **Requête HTTP** : message envoyé par le client au serveur pour demander une opération.
* **Réponse HTTP** : message envoyé par le serveur après le traitement d'une requête.
* **Méthode HTTP** : indique l'opération demandée, par exemple `GET` ou `POST`.
* **Ressource** : donnée ou ensemble de données géré par l'API.
* **API** : interface permettant à des programmes de communiquer.
* **Endpoint** : point d'accès précis d'une API.
* **URL d'API** : adresse utilisée pour accéder à un endpoint.
* **JSON** : format utilisé pour représenter et échanger des données.
* **Client** : programme qui envoie une requête, généralement le navigateur.
* **Serveur** : système qui reçoit la requête et réalise le traitement.
