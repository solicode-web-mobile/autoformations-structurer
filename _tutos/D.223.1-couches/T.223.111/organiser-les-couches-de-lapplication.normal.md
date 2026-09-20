---
title: "Organiser les couches de l'application"
layout: tuto
slug: "organiser-couches-application"
permalink: /tutos/:slug/
tuto_id: "T.223.111"
type: "classique"
version: "normal"
ua: "UA.223.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---



## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* comprendre une architecture en couches ;
* identifier les couches Présentation, Traitement et Data ;
* identifier le rôle de chaque couche ;
* organiser les classes dans les bonnes couches ;
* comprendre le flux entre les couches ;
* comprendre le sens des dépendances.

À la fin du tutoriel, vous saurez représenter l'organisation du backend sous la forme :

```text
Présentation
      ↓
Traitement
      ↓
Data
```

## 2. Prérequis

Vous devez savoir :

* créer et utiliser des classes ;
* faire collaborer plusieurs classes ;
* répartir les responsabilités entre plusieurs classes ;
* utiliser des objets et des méthodes ;
* utiliser une interface ;
* comprendre le polymorphisme de base.

Ces notions ont été étudiées dans :

* **D.221.1 — Programmer une fonctionnalité avec des objets**
* **D.222.1 — Répartir les responsabilités entre les classes**

Vous devez également connaître l'organisation générale d'une API backend.

## Données de départ

Le Sprint 3 possède plusieurs classes qui participent à la gestion des articles.

La structure principale est :

```text
sprint-3/
├── api/
│   ├── controllers/
│   │   └── ArticleController.php
│   └── router.php
│
└── backend/
    ├── models/
    │   └── Article.php
    ├── services/
    │   └── GestionArticle.php
    └── dao/
        ├── interfaces/
        │   └── IArticleDAO.php
        ├── json/
        │   ├── ArticleDAOJSON.php
        │   └── CategorieDAOJSON.php
        ├── mysql/
        │   ├── ArticleDAOMySQL.php
        │   ├── CategorieDAOMySQL.php
        │   └── Database.php
        └── DAOFactory.php
```

Le routeur reçoit la requête :

```php
$route = isset($_GET['route']) ? $_GET['route'] : '';
$method = $_SERVER['REQUEST_METHOD'];
```

Puis il choisit le contrôleur :

```php
switch ($route) {
    case 'articles':
        require_once __DIR__ . '/controllers/ArticleController.php';
        $controller = new ArticleController();
        $controller->handleRequest($method);
        break;
}
```

Le contrôleur utilise le service :

```php
$this->gestionnaire = new GestionArticle();
```

Le service utilise ensuite un objet DAO :

```php
$this->dao = DAOFactory::getArticleDAO();
```

L'organisation générale est donc déjà proche d'une architecture en couches.

---

## Partie 1 — Théorie

### 1.1. Pourquoi organiser une application en couches ?

Une application contient plusieurs types de traitements.

Par exemple :

```text
recevoir une requête
        ↓
traiter la fonctionnalité
        ↓
lire ou enregistrer les données
```

Si tous ces traitements sont mélangés dans les mêmes classes, le code devient plus difficile à comprendre.

L'architecture en couches permet de regrouper les responsabilités par niveau.

On obtient :

```text
Présentation
      ↓
Traitement
      ↓
Data
```

Chaque couche possède un rôle.

### 1.2. Architecture en couches

Une **architecture en couches** organise l'application en plusieurs niveaux.

Dans ce tutoriel, nous utilisons trois couches :

```text
Présentation
Traitement
Data
```

Chaque couche réalise un type de travail.

### 1.3. Couche Présentation

La couche **Présentation** reçoit les demandes venant de l'extérieur.

Dans notre backend, elle contient notamment :

```text
router.php
controllers/
```

Exemple :

```text
ArticleController
```

Le contrôleur reçoit la requête HTTP et déclenche le traitement adapté.

Il contient par exemple :

```php
public function handleRequest($method)
{
    if ($method === 'GET') {
        $this->get();
    } elseif ($method === 'POST') {
        $this->post();
    }
}
```

Le contrôleur est donc du côté de la Présentation.

### 1.4. Couche Traitement

La couche **Traitement** réalise les opérations de la fonctionnalité.

Dans le Sprint 3 :

```text
backend/services/
```

contient :

```text
GestionArticle
```

Cette classe réalise les opérations :

```php
public function readAll()
{
    return $this->dao->readAll();
}

public function create(Article $art)
{
    return $this->dao->create($art);
}
```

Le service représente donc la logique de traitement.

### 1.5. Couche Data

La couche **Data** concerne les données et leur accès.

Dans le projet, on trouve notamment :

```text
models/
dao/
storage/
MySQL
JSON
```

Les classes DAO travaillent avec les données.

Exemple :

```text
ArticleDAOJSON
```

travaille avec un fichier JSON.

Exemple :

```text
ArticleDAOMySQL
```

travaille avec MySQL.

À ce stade, retenez simplement que la couche Data est la couche proche des données.

Le détail de l'isolation par DAO sera étudié dans le tutoriel suivant.

### 1.6. Rôle de chaque couche

| Couche       | Rôle                                      |
| ------------ | ----------------------------------------- |
| Présentation | recevoir et traiter les demandes externes |
| Traitement   | réaliser la logique de la fonctionnalité  |
| Data         | manipuler et conserver les données        |

Exemple :

```text
ArticleController
      ↓
GestionArticle
      ↓
Data
```

### 1.7. Flux entre les couches

Le flux normal est :

```text
Présentation
      ↓
Traitement
      ↓
Data
```

Pour une demande de lecture des articles :

```text
Client
  ↓
ArticleController
  ↓
GestionArticle
  ↓
Data
```

La couche Présentation demande un traitement.

La couche Traitement réalise ce traitement.

La couche Data fournit les données nécessaires.

### 1.8. Sens des dépendances

Une couche supérieure utilise une couche inférieure.

Dans notre organisation :

```text
Présentation
      ↓
Traitement
      ↓
Data
```

Le contrôleur utilise le service :

```php
$this->gestionnaire->readAll();
```

Le service utilise ensuite la partie Data.

Le flux ne doit pas devenir :

```text
Data
   ↓
Présentation
```

Dans cette organisation, la couche Data ne doit pas prendre en charge l'affichage ou la réception des requêtes HTTP.

### 1.9. Organisation physique

Une architecture en couches peut aussi être visible dans les dossiers.

Dans notre projet :

```text
api/
├── controllers/
└── router.php
```

représente principalement la Présentation.

Puis :

```text
backend/
└── services/
```

représente principalement le Traitement.

Et :

```text
backend/
├── models/
└── dao/
```

est situé du côté Data.

On peut donc représenter :

```text
api/
   ↓
backend/services/
   ↓
backend/dao/
```

### 1.10. Différence entre rôle et emplacement

Une couche n'est pas seulement un dossier.

Le dossier aide à organiser le code.

Mais ce qui définit la couche est surtout la responsabilité de la classe.

Par exemple :

```text
ArticleController
```

est en Présentation parce qu'il gère les requêtes et les réponses.

```text
GestionArticle
```

est en Traitement parce qu'il gère les opérations de la fonctionnalité.

Une classe Data travaille avec les données.

### 1.11. Architecture 3-tiers

Une architecture organisée en :

```text
Présentation
Traitement
Data
```

est souvent appelée **architecture 3-tiers**.

Les trois niveaux correspondent à :

```text
Tier Présentation
Tier Traitement
Tier Data
```

Dans ce tutoriel, on utilise les termes :

```text
Présentation
Traitement
Data
```

### 1.12. À retenir

* Une architecture en couches sépare les grands rôles de l'application.
* La Présentation reçoit les demandes.
* Le Traitement réalise la logique de la fonctionnalité.
* La Data travaille avec les données.
* Le flux principal est :

```text
Présentation
      ↓
Traitement
      ↓
Data
```

* L'organisation physique aide à rendre ces couches visibles dans le projet.

---

## Partie 2 — Pratique

### 2.1. Observer le routeur

Ouvrez :

```text
api/router.php
```

Le routeur récupère :

```php
$route = isset($_GET['route']) ? $_GET['route'] : '';
$method = $_SERVER['REQUEST_METHOD'];
```

Il choisit ensuite le contrôleur.

Pour les articles :

```php
case 'articles':
    require_once __DIR__ . '/controllers/ArticleController.php';
    $controller = new ArticleController();
    $controller->handleRequest($method);
    break;
```

Le routeur appartient donc à la couche Présentation.

### 2.2. Identifier `ArticleController`

Ouvrez :

```text
api/controllers/ArticleController.php
```

Le contrôleur contient :

```php
public function handleRequest($method)
```

et :

```php
private function get()
```

```php
private function post()
```

```php
private function put()
```

```php
private function delete()
```

Il reçoit la requête HTTP et décide quelle opération réaliser.

Placez `ArticleController` dans :

```text
Présentation
```

### 2.3. Identifier `GestionArticle`

Ouvrez :

```text
backend/services/GestionArticle.php
```

La classe contient :

```php
public function readAll()
{
    return $this->dao->readAll();
}

public function create(Article $art)
{
    return $this->dao->create($art);
}

public function update(Article $art)
{
    return $this->dao->update($art);
}

public function delete($id)
{
    return $this->dao->delete($id);
}
```

Ces méthodes réalisent les opérations de la fonctionnalité.

Placez `GestionArticle` dans :

```text
Traitement
```

### 2.4. Identifier `Article`

Ouvrez :

```text
backend/models/Article.php
```

La classe représente les données d'un article :

```text
id
titre
contenu
image_couverture
statut
date_creation
vues
categorie_id
auteur_id
```

Elle appartient au modèle de données utilisé par l'application.

Dans cette organisation, placez `Article` du côté :

```text
Data
```

### 2.5. Identifier les classes DAO

Dans :

```text
backend/dao/
```

vous trouvez :

```text
ArticleDAOJSON
ArticleDAOMySQL
```

Ces classes travaillent avec les sources de données.

Elles appartiennent donc à :

```text
Data
```

Dans ce tutoriel, ne modifiez pas encore leur contrat ni leur interchangeabilité.

Cela sera traité dans les tutoriels suivants.

### 2.6. Construire le schéma des couches

Complétez maintenant :

```text
________________
      ↓
________________
      ↓
________________
```

Avec :

```text
Présentation
      ↓
Traitement
      ↓
Data
```

Puis associez :

```text
ArticleController
GestionArticle
ArticleDAOJSON / ArticleDAOMySQL
```

aux bonnes couches.

### 2.7. Observer le flux d’une lecture

Lors d'une requête :

```text
GET /?route=articles
```

le routeur reçoit la demande.

Puis :

```text
router.php
    ↓
ArticleController
```

Le contrôleur demande la lecture :

```php
$articles = $this->gestionnaire->readAll();
```

Puis :

```text
ArticleController
      ↓
GestionArticle
```

Le service demande ensuite les données :

```php
return $this->dao->readAll();
```

Le flux général devient :

```text
router.php
      ↓
ArticleController
      ↓
GestionArticle
      ↓
Data
```

### 2.8. Observer le flux d’une création

Lors d'une création, `ArticleController` crée un objet :

```php
$art = new Article(
    $input['titre'],
    $input['contenu'],
    $input['image_couverture'] ?? null,
    $input['statut'] ?? 'brouillon',
    $input['categorie_id'],
    $input['auteur_id']
);
```

Puis :

```php
$this->gestionnaire->create($art);
```

Le flux est donc :

```text
Présentation
      ↓
Traitement
      ↓
Data
```

La Présentation reçoit la demande.

Le Traitement organise l'opération.

La Data réalise l'accès aux données.

### 2.9. Identifier ce qui ne doit pas être mélangé

Dans `ArticleController`, ne mettez pas directement :

```text
SQL
lecture directe du fichier JSON
file_put_contents()
PDO
```

Le contrôleur ne doit pas devenir une classe Data.

De même, `GestionArticle` ne doit pas gérer directement les requêtes HTTP.

Il ne doit pas contenir :

```text
$_SERVER['REQUEST_METHOD']
php://input
http_response_code()
```

Ces éléments appartiennent à la Présentation.

### 2.10. Organiser physiquement les dossiers

La structure peut être présentée ainsi :

```text
sprint-3/
├── api/
│   ├── router.php
│   └── controllers/
│       └── ArticleController.php
│
└── backend/
    ├── services/
    │   └── GestionArticle.php
    │
    ├── models/
    │   └── Article.php
    │
    └── dao/
        ├── interfaces/
        ├── json/
        └── mysql/
```

On obtient :

```text
Présentation
├── router.php
└── controllers/

Traitement
└── services/

Data
├── models/
└── dao/
```

### 2.11. Vérifier le rôle de chaque dossier

Complétez :

| Dossier             | Couche |
| ------------------- | ------ |
| `api/controllers/`  | ...    |
| `backend/services/` | ...    |
| `backend/models/`   | ...    |
| `backend/dao/`      | ...    |

Puis expliquez pourquoi.

### 2.12. Vérifier le sens des dépendances

Observez :

```text
ArticleController
      ↓
GestionArticle
```

Puis :

```text
GestionArticle
      ↓
DAO
```

Le sens général est :

```text
Présentation
      ↓
Traitement
      ↓
Data
```

Complétez les phrases :

```text
ArticleController dépend de __________________.

GestionArticle dépend de __________________.
```

### 2.13. Exercice — Organiser les classes

Classez les éléments suivants :

```text
router.php
ArticleController
GestionArticle
Article
ArticleDAOJSON
ArticleDAOMySQL
```

dans :

```text
Présentation
Traitement
Data
```

### 2.14. Exercice — Représenter le flux

Pour une requête :

```text
GET /?route=articles
```

dessinez le flux complet :

```text
Client
  ↓
?
  ↓
?
  ↓
?
```

Le résultat attendu doit faire apparaître :

```text
router.php
ArticleController
GestionArticle
Data
```

### 2.15. Exercice — Identifier une mauvaise organisation

Considérez ce code :

```php
class ArticleController
{
    public function get()
    {
        $pdo = new PDO(...);

        $stmt = $pdo->query(
            "SELECT * FROM Article"
        );

        // ...
    }
}
```

Identifiez la couche concernée par :

```text
ArticleController
PDO
requête SQL
```

Expliquez pourquoi ce code mélange plusieurs responsabilités de couches.

### 2.16. Exercice — Vérifier les dépendances

Complétez :

```text
Présentation
      ↓
________________
      ↓
________________
```

Puis :

```text
Data ne doit pas gérer :
________________
```

### 2.17. Travail à faire

À partir du projet du Sprint 3, organisez les éléments en trois couches :

```text
Présentation
Traitement
Data
```

Identifiez :

* les fichiers de Présentation ;
* les fichiers de Traitement ;
* les fichiers de Data ;
* le rôle de chaque couche ;
* le flux entre les couches ;
* le sens des dépendances.

Ne modifiez pas encore le fonctionnement des DAO.

L'objectif de ce tutoriel est d'organiser les couches.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le schéma des trois couches ;
* la liste des classes de chaque couche ;
* le rôle de chaque couche ;
* le flux d'une requête GET ;
* le flux d'une requête POST ;
* le sens des dépendances ;
* un exemple de code qui mélange plusieurs couches et son explication.

Ajoutez le schéma :

```text
Présentation
      ↓
Traitement
      ↓
Data
```

**Résultat attendu :**

L'application est organisée ainsi :

```text
Présentation
├── router.php
└── controllers/
    └── ArticleController.php

Traitement
└── services/
    └── GestionArticle.php

Data
├── models/
│   └── Article.php
└── dao/
    ├── interfaces/
    ├── json/
    └── mysql/
```

Le flux principal est :

```text
ArticleController
      ↓
GestionArticle
      ↓
Data
```

**Critère de réussite :**

* Les rôles des trois couches sont identifiés.
* `ArticleController` est placé en Présentation.
* `GestionArticle` est placé en Traitement.
* `Article` et les composants DAO sont placés en Data.
* Le flux Présentation → Traitement → Data est compris.
* Le sens des dépendances est correctement représenté.
* Les responsabilités HTTP et Data ne sont pas mélangées.
* Le comportement fonctionnel de l'application est conservé.

---

## Bilan

**Vous avez appris :**

* à comprendre une architecture en couches ;
* à distinguer Présentation, Traitement et Data ;
* à identifier le rôle d'une couche ;
* à organiser physiquement les couches ;
* à suivre le flux d'une fonctionnalité ;
* à comprendre le sens des dépendances.

**Vous avez organisé :**

```text
Présentation
      ↓
Traitement
      ↓
Data
```

Dans le projet :

```text
ArticleController
      ↓
GestionArticle
      ↓
Data
```

La couche Présentation reçoit les demandes.

La couche Traitement réalise la fonctionnalité.

La couche Data travaille avec les données.

Dans le prochain tutoriel, vous allez **isoler l'accès aux données derrière un contrat DAO**.

## Glossaire

* **Architecture en couches** : organisation d'une application en niveaux ayant des responsabilités différentes.
* **Architecture 3-tiers** : architecture organisée en Présentation, Traitement et Data.
* **Couche Présentation** : couche qui reçoit les demandes externes et prépare les réponses.
* **Couche Traitement** : couche qui réalise la logique de la fonctionnalité.
* **Couche Data** : couche qui travaille avec les données et leur stockage.
* **Flux** : chemin suivi par une demande dans l'application.
* **Dépendance** : relation dans laquelle une couche ou une classe utilise une autre.
* **Organisation physique** : organisation des fichiers et dossiers permettant de représenter les couches.
