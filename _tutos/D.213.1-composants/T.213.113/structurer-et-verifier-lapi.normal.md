---
title: "Structurer et vérifier l’API"
layout: tuto
slug: "structurer-et-verifier-lapi"
permalink: /tutos/:slug/
tuto_id: "T.213.113"
type: "classique"
version: "normal"
ua: "UA.213.11"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* organiser les opérations CRUD d'une API ;
* associer `GET`, `POST`, `PUT` et `DELETE` aux opérations ;
* définir un endpoint CRUD ;
* utiliser JSON comme format d'échange ;
* structurer une réponse API ;
* indiquer le statut d'une opération ;
* organiser les routes d'une API ;
* utiliser un point d'entrée unique ;
* vérifier la communication entre le Frontend et le Backend.

À la fin du tutoriel, l'API de la ressource `categories` sera organisée autour de :

```text
GET    → consulter
POST   → créer
PUT    → modifier
DELETE → supprimer
```

## 2. Prérequis

Vous devez savoir :

* distinguer Frontend et Backend ;
* comprendre la communication client / serveur ;
* comprendre une requête HTTP ;
* comprendre une réponse HTTP ;
* identifier une ressource ;
* identifier un endpoint ;
* utiliser les méthodes `GET`, `POST`, `PUT` et `DELETE` ;
* distinguer les données envoyées et reçues.

Vous devez avoir réalisé :

* **T.213.111 — Identifier et séparer les composants**
* **T.213.112 — Définir la communication entre les composants**

Dans ce tutoriel, vous n'étudiez pas encore :

* `fetch()` ;
* la gestion du DOM ;
* les événements JavaScript ;
* l'asynchronisme.

Ces notions appartiennent à **D.224.1 — SPA**.

## Données de départ

L'application utilise la ressource :

```text
categories
```

Dans le Sprint 1, le point d'entrée de l'API est :

```text
backend/api.php
```

Le fichier contient notamment :

```php
<?php

require_once 'Categorie.php';

header('Content-Type: application/json; charset=utf-8');

try {
    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'GET') {
        // lecture
    } elseif ($method === 'POST') {
        // création
    } elseif ($method === 'PUT') {
        // modification
    } elseif ($method === 'DELETE') {
        // suppression
    } else {
        throw new Exception("Méthode HTTP non supportée.");
    }
} catch (Exception $e) {
    http_response_code(400);

    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
```

L'API utilise donc un point d'entrée unique :

```text
backend/api.php
```

et distingue les opérations avec la méthode HTTP.

---

## Partie 1 — Théorie

### 1.1. API CRUD

Une API CRUD permet de réaliser les opérations principales sur une ressource :

```text
Create
Read
Update
Delete
```

Pour une API Web, on peut les associer aux méthodes HTTP :

| Opération | Méthode  |
| --------- | -------- |
| Read      | `GET`    |
| Create    | `POST`   |
| Update    | `PUT`    |
| Delete    | `DELETE` |

Pour la ressource `categories` :

```text
GET    → consulter les catégories
POST   → créer une catégorie
PUT    → modifier une catégorie
DELETE → supprimer une catégorie
```

### 1.2. Endpoint CRUD

Un **endpoint CRUD** est un point d'accès de l'API utilisé pour réaliser une opération sur une ressource.

Exemple :

```text
/backend/api.php
```

Le même endpoint peut recevoir plusieurs méthodes :

```text
GET    /backend/api.php
POST   /backend/api.php
PUT    /backend/api.php
DELETE /backend/api.php
```

La méthode permet de déterminer l'opération.

### 1.3. Point d’entrée unique

Un **point d'entrée unique** permet d'utiliser un même fichier comme entrée de l'API.

Dans notre exemple :

```text
backend/api.php
```

est le point d'entrée.

Il reçoit la requête et analyse :

```php
$method = $_SERVER['REQUEST_METHOD'];
```

Puis il choisit le traitement :

```php
if ($method === 'GET') {
    // ...
} elseif ($method === 'POST') {
    // ...
}
```

Cela permet de centraliser l'entrée de l'API.

### 1.4. GET pour consulter

`GET` est utilisé pour consulter une ressource.

Exemple :

```text
GET /backend/api.php
```

Le Backend peut alors :

1. lire les catégories ;
2. préparer les données ;
3. retourner une réponse JSON.

Le résultat peut être :

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

### 1.5. POST pour créer

`POST` est utilisé pour créer une ressource.

Exemple :

```text
POST /backend/api.php
```

Le client envoie :

```json
{
    "nom": "PHP",
    "couleur": "Vert",
    "icone": "Code"
}
```

Le Backend crée ensuite la catégorie.

La réponse peut être :

```json
{
    "status": "success",
    "message": "Catégorie ajoutée avec succès !"
}
```

### 1.6. PUT pour modifier

`PUT` est utilisé pour modifier une ressource existante.

Exemple :

```text
PUT /backend/api.php
```

Le client envoie :

```json
{
    "id": 3,
    "nom": "Laravel",
    "couleur": "Rouge",
    "icone": "Code"
}
```

Le Backend recherche la catégorie `3`.

Puis il la modifie.

### 1.7. DELETE pour supprimer

`DELETE` est utilisé pour supprimer une ressource.

Exemple :

```text
DELETE /backend/api.php
```

Le client envoie par exemple :

```json
{
    "id": 3
}
```

Le Backend utilise l'identifiant pour supprimer la catégorie.

### 1.8. Structure d’une réponse

Une réponse API doit être facile à comprendre.

Dans notre projet, une réponse contient généralement :

```text
status
message
data
```

Par exemple :

```json
{
    "status": "success",
    "message": "Opération réussie !",
    "data": []
}
```

Les trois éléments n'ont pas toujours besoin d'être présents.

### 1.9. Statut d’une opération

Le champ `status` indique le résultat de l'opération.

Exemple :

```json
{
    "status": "success"
}
```

indique que l'opération a réussi.

En cas d'erreur :

```json
{
    "status": "error",
    "message": "ID manquant pour la suppression."
}
```

Le client peut donc identifier le résultat de l'opération.

### 1.10. Données de réponse

Le champ `data` peut contenir les données demandées.

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
        }
    ]
}
```

Pour une opération qui ne retourne pas de liste, `data` peut être absent.

### 1.11. Erreur API

Une API doit également gérer les erreurs.

Exemple :

```php
throw new Exception("ID manquant pour la suppression.");
```

L'API peut retourner :

```json
{
    "status": "error",
    "message": "ID manquant pour la suppression."
}
```

Le code HTTP peut également être modifié :

```php
http_response_code(400);
```

La réponse contient alors un statut d'erreur.

### 1.12. Organisation des routes

Lorsque l'application contient plusieurs ressources, les routes doivent être organisées.

Par exemple :

```text
/api/categories
/api/articles
```

Chaque ressource possède son point d'accès.

Dans le Sprint 3, le routeur utilise :

```text
?route=categories
```

ou :

```text
?route=articles
```

Le point d'entrée reste :

```text
api/router.php
```

Le routeur choisit ensuite le contrôleur correspondant.

### 1.13. Routeur

Un **routeur** reçoit la requête et détermine quelle partie de l'application doit la traiter.

Dans le Sprint 3 :

```php
$route = isset($_GET['route']) ? $_GET['route'] : '';
```

Puis :

```php
switch ($route) {
    case 'categories':
        // ...
        break;

    case 'articles':
        // ...
        break;
}
```

Le routeur permet donc d'organiser plusieurs ressources autour d'un point d'entrée.

### 1.14. Point d’entrée unique avec un routeur

Dans le Sprint 3, l'organisation est :

```text
Frontend
    ↓
api/router.php
    ↓
route
    ↓
Controller
```

Par exemple :

```text
/api/router.php?route=categories
```

ou :

```text
/api/router.php?route=articles
```

Le routeur choisit le contrôleur.

### 1.15. À retenir

* Une API CRUD utilise principalement `GET`, `POST`, `PUT` et `DELETE`.
* `GET` consulte.
* `POST` crée.
* `PUT` modifie.
* `DELETE` supprime.
* Une réponse API peut contenir `status`, `message` et `data`.
* Une API doit aussi retourner des erreurs compréhensibles.
* Un routeur peut organiser plusieurs ressources.
* Un point d'entrée unique simplifie l'organisation de l'API.

---

## Partie 2 — Pratique

### 2.1. Ouvrir l’API

Ouvrez :

```text
backend/api.php
```

Repérez :

```php
$method = $_SERVER['REQUEST_METHOD'];
```

Cette ligne permet de connaître la méthode HTTP utilisée.

### 2.2. Vérifier GET

Repérez :

```php
if ($method === 'GET') {
    $categories = Categorie::readAll();

    // ...
}
```

Le rôle de cette partie est :

```text
GET
 ↓
consulter les catégories
```

### 2.3. Vérifier la réponse GET

Repérez :

```php
echo json_encode([
    'status' => 'success',
    'data' => $response
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
```

La réponse possède :

```text
status
data
```

Le format est JSON.

### 2.4. Vérifier POST

Repérez :

```php
elseif ($method === 'POST') {
```

Puis :

```php
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);
```

Le Backend lit donc les données envoyées par le client.

Il vérifie ensuite :

```php
if (
    isset($input['nom']) &&
    isset($input['couleur']) &&
    isset($input['icone'])
) {
    // ...
}
```

Puis il crée un objet :

```php
$newCat = new Categorie(
    $input['nom'],
    $input['couleur'],
    $input['icone']
);
```

### 2.5. Vérifier la réponse POST

Après création :

```php
echo json_encode([
    'status' => 'success',
    'message' => 'Catégorie ajoutée avec succès !'
]);
```

L'opération retourne donc un statut et un message.

### 2.6. Vérifier PUT

Repérez :

```php
elseif ($method === 'PUT') {
```

Puis :

```php
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);
```

Le Backend vérifie :

```php
if (
    isset($input['id']) &&
    isset($input['nom']) &&
    isset($input['couleur']) &&
    isset($input['icone'])
) {
    // ...
}
```

Puis :

```php
$cat = new Categorie(
    $input['nom'],
    $input['couleur'],
    $input['icone'],
    $input['id']
);
```

Le Backend dispose maintenant de l'objet à modifier.

### 2.7. Vérifier DELETE

Repérez :

```php
elseif ($method === 'DELETE') {
```

Puis :

```php
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);
```

L'API vérifie :

```php
if (isset($input['id'])) {
    // ...
}
```

Puis supprime la catégorie correspondante.

### 2.8. Vérifier les erreurs

L'API utilise :

```php
try {
    // traitement
} catch (Exception $e) {
    http_response_code(400);

    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
```

Cette structure permet de retourner une réponse JSON en cas d'erreur.

Exemple :

```json
{
    "status": "error",
    "message": "ID manquant pour la suppression."
}
```

### 2.9. Tester GET

Lancez l'API avec :

```text
GET /backend/api.php
```

La réponse doit être au format JSON.

Elle doit contenir :

```json
{
    "status": "success",
    "data": []
}
```

La liste réelle des catégories doit apparaître dans `data`.

### 2.10. Tester POST

Envoyez :

```text
POST /backend/api.php
```

avec :

```json
{
    "nom": "PHP",
    "couleur": "Vert",
    "icone": "Code"
}
```

La réponse attendue est de la forme :

```json
{
    "status": "success",
    "message": "Catégorie ajoutée avec succès !"
}
```

### 2.11. Tester PUT

Envoyez :

```text
PUT /backend/api.php
```

avec :

```json
{
    "id": 3,
    "nom": "Laravel",
    "couleur": "Rouge",
    "icone": "Code"
}
```

La réponse attendue est de la forme :

```json
{
    "status": "success",
    "message": "Catégorie modifiée avec succès !"
}
```

### 2.12. Tester DELETE

Envoyez :

```text
DELETE /backend/api.php
```

avec :

```json
{
    "id": 3
}
```

La réponse attendue est de la forme :

```json
{
    "status": "success",
    "message": "Catégorie supprimée avec succès !"
}
```

### 2.13. Tester une erreur

Envoyez une suppression sans identifiant :

```text
DELETE /backend/api.php
```

avec :

```json
{}
```

La réponse doit indiquer une erreur :

```json
{
    "status": "error",
    "message": "ID manquant pour la suppression."
}
```

### 2.14. Organiser plusieurs ressources

Dans le Sprint 3, le routeur contient :

```php
switch ($route) {
    case 'categories':
        require_once __DIR__ . '/controllers/CategorieController.php';
        $controller = new CategorieController();
        $controller->handleRequest($method);
        break;

    case 'articles':
        require_once __DIR__ . '/controllers/ArticleController.php';
        $controller = new ArticleController();
        $controller->handleRequest($method);
        break;
}
```

L'API peut donc gérer :

```text
categories
articles
```

avec un même point d'entrée :

```text
api/router.php
```

### 2.15. Observer les routes

Les accès peuvent prendre la forme :

```text
/api/router.php?route=categories
```

et :

```text
/api/router.php?route=articles
```

Le paramètre `route` permet au routeur de choisir la ressource.

### 2.16. Construire la carte de l’API

L'organisation devient :

```text
Frontend
    ↓
api/router.php
    ↓
route
    ├── categories
    │      ↓
    │  CategorieController
    │
    └── articles
           ↓
       ArticleController
```

Chaque contrôleur traite ensuite les méthodes HTTP :

```text
GET
POST
PUT
DELETE
```

### 2.17. Vérifier une ressource

Pour `categories`, complétez :

```text
Ressource :
categories

Point d'entrée :
________________________

Route :
________________________
```

Pour `articles` :

```text
Ressource :
articles

Point d'entrée :
________________________

Route :
________________________
```

### 2.18. Vérifier les opérations CRUD

Construisez le tableau :

| Méthode  | Ressource    | Action    |
| -------- | ------------ | --------- |
| `GET`    | `categories` | consulter |
| `POST`   | `categories` | créer     |
| `PUT`    | `categories` | modifier  |
| `DELETE` | `categories` | supprimer |

Puis faites le même travail pour `articles`.

### 2.19. Vérifier la structure d'une réponse

Analysez :

```json
{
    "status": "success",
    "message": "Catégorie ajoutée avec succès !"
}
```

Identifiez :

```text
status
message
```

Puis analysez :

```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "nom": "Développement Web"
        }
    ]
}
```

Identifiez :

```text
status
data
```

### 2.20. Exercice — Vérifier les quatre opérations

Testez successivement :

```text
GET
POST
PUT
DELETE
```

Pour chaque opération, notez :

* la méthode ;
* la route ;
* les données envoyées ;
* la réponse reçue ;
* le statut de l'opération.

### 2.21. Exercice — Vérifier une erreur

Testez :

```text
POST /api/router.php?route=categories
```

avec :

```json
{
    "nom": "PHP"
}
```

La requête est incomplète.

Observez la réponse.

Elle doit signaler que certaines données sont manquantes.

### 2.22. Exercice — Vérifier le point d’entrée unique

Représentez :

```text
/api/router.php
```

comme point d'entrée.

Puis montrez :

```text
route=categories
```

et :

```text
route=articles
```

Le schéma doit être :

```text
                 router.php
                /          \
               ↓            ↓
         categories       articles
             ↓               ↓
     CategorieController  ArticleController
```

### 2.23. Travail à faire

Organisez et vérifiez l'API du projet.

L'API doit fournir les opérations :

```text
GET
POST
PUT
DELETE
```

pour les ressources concernées.

Elle doit utiliser JSON pour les échanges.

Elle doit utiliser une structure de réponse cohérente :

```json
{
    "status": "success",
    "message": "...",
    "data": []
}
```

Les erreurs doivent également retourner une réponse JSON.

Utilisez un point d'entrée unique lorsque plusieurs ressources sont gérées.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* la liste des ressources ;
* les endpoints ;
* les méthodes CRUD ;
* les exemples de données envoyées ;
* les exemples de réponses JSON ;
* un exemple de réponse de succès ;
* un exemple de réponse d'erreur ;
* le schéma du routeur ;
* les résultats des tests GET, POST, PUT et DELETE.

Ajoutez les fichiers de l'API concernés.

**Résultat attendu :**

L'API est organisée autour de :

```text
GET    → consulter
POST   → créer
PUT    → modifier
DELETE → supprimer
```

Le point d'entrée est :

```text
api/router.php
```

Le routeur choisit la ressource :

```text
categories
articles
```

Les réponses utilisent JSON.

Le résultat général est :

```text
Frontend
    ↕
HTTP / JSON
    ↕
API
    ↓
Controller
    ↓
Backend
```

**Critère de réussite :**

* Les quatre méthodes CRUD sont correctement utilisées.
* Les ressources sont clairement identifiées.
* Les routes sont organisées.
* Le point d'entrée de l'API est identifié.
* Les données sont échangées en JSON.
* Les réponses contiennent un statut cohérent.
* Les erreurs retournent également une réponse structurée.
* Les opérations GET, POST, PUT et DELETE sont vérifiées.
* La communication Frontend ↔ API ↔ Backend fonctionne.

---

## Bilan

**Vous avez appris :**

* à organiser une API CRUD ;
* à utiliser `GET`, `POST`, `PUT` et `DELETE` ;
* à définir des endpoints ;
* à structurer des réponses JSON ;
* à indiquer le statut d'une opération ;
* à organiser plusieurs routes ;
* à utiliser un point d'entrée unique ;
* à vérifier les échanges entre le Frontend et le Backend.

**Vous avez obtenu :**

```text
Frontend
    ↕
HTTP / JSON
    ↕
API
    ↓
Router
    ↓
Controller
    ↓
Backend
```

Pour une ressource CRUD :

```text
GET    → consulter
POST   → créer
PUT    → modifier
DELETE → supprimer
```

L'API dispose maintenant d'une organisation claire et vérifiable.

Vous savez maintenant **structurer et vérifier une API CRUD entre le Frontend et le Backend**.

## Glossaire

* **API CRUD** : API permettant de consulter, créer, modifier et supprimer des ressources.
* **Endpoint CRUD** : point d'accès utilisé pour réaliser une opération CRUD.
* **Route** : indication permettant de choisir une ressource ou une fonctionnalité.
* **Routeur** : composant qui reçoit une route et choisit le traitement correspondant.
* **Point d'entrée** : emplacement principal utilisé pour accéder à l'API.
* **Réponse structurée** : réponse organisée avec des champs comme `status`, `message` et `data`.
* **Statut d'opération** : information indiquant si l'opération a réussi ou échoué.
* **JSON** : format utilisé pour échanger des données entre les composants.
