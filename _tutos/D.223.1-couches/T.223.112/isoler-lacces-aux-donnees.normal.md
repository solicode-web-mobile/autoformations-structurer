---
title: "Isoler l'accès aux données"
layout: tuto
slug: "isoler-acces-donnees"
permalink: /tutos/:slug/
tuto_id: "T.223.112"
type: "classique"
version: "normal"
ua: "UA.223.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* identifier l'accès aux données ;
* séparer le traitement et la persistance ;
* comprendre le rôle d'un DAO ;
* définir un contrat DAO avec une interface ;
* créer une implémentation JSON ;
* créer une implémentation MySQL ;
* faire utiliser le DAO par la couche Traitement.

À la fin du tutoriel, la gestion des articles utilisera :

```text
GestionArticle
      ↓
IArticleDAO
      ↓
DAO
```

L'accès aux données sera isolé dans la couche Data.

## 2. Prérequis

Vous devez savoir :

* organiser une application en couches ;
* distinguer Présentation, Traitement et Data ;
* faire collaborer plusieurs classes ;
* utiliser une interface ;
* utiliser `implements` ;
* utiliser le polymorphisme de base.

Vous devez avoir réalisé :

* **T.223.111 — Organiser les couches de l’application**
* **T.221.131 — Définir un contrat avec une interface**
* **T.221.132 — Utiliser plusieurs implémentations**

## Données de départ

Dans le Sprint 3, la couche Traitement contient :

```text
backend/services/GestionArticle.php
```

La couche Data contient :

```text
backend/dao/interfaces/IArticleDAO.php
backend/dao/json/ArticleDAOJSON.php
backend/dao/mysql/ArticleDAOMySQL.php
```

Le modèle `Article` est dans :

```text
backend/models/Article.php
```

L'interface `IArticleDAO` définit les opérations :

```php
<?php

require_once __DIR__ . '/../../models/Article.php';

interface IArticleDAO
{
    public function readAll();

    public function create(Article $art);

    public function update(Article $art);

    public function delete($id);
}
```

Le traitement utilise déjà un DAO :

```php
<?php

require_once __DIR__ . '/../models/Article.php';
require_once __DIR__ . '/../dao/DAOFactory.php';

class GestionArticle
{
    private $dao;

    public function __construct()
    {
        $this->dao = DAOFactory::getArticleDAO();
    }

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
}
```

Dans ce tutoriel, on va comprendre comment cette séparation isole réellement la persistance.

---

## Partie 1 — Théorie

### 1.1. Accès aux données

L'**accès aux données** correspond aux opérations qui permettent de lire, créer, modifier ou supprimer des données dans un support.

Exemples :

```text
fichier JSON
base MySQL
```

Dans le projet, les opérations sont :

```text
readAll()
create()
update()
delete()
```

Ces opérations concernent directement le stockage.

### 1.2. Persistance

La **persistance** consiste à conserver les données après l'exécution du programme.

Dans notre projet, les données des articles peuvent être conservées :

```text
dans un fichier JSON
```

ou :

```text
dans MySQL
```

La persistance concerne donc la couche Data.

### 1.3. Pourquoi isoler la persistance ?

Sans séparation, le traitement pourrait contenir directement :

```php
file_get_contents(...);
file_put_contents(...);
json_decode(...);
json_encode(...);
```

ou :

```php
$pdo->query(...);
$pdo->prepare(...);
```

Le traitement connaîtrait alors les détails du stockage.

On aurait :

```text
GestionArticle
├── logique de la fonctionnalité
├── JSON
└── SQL
```

Cette organisation mélange deux rôles.

Nous voulons :

```text
GestionArticle
      ↓
accès aux données
      ↓
source de données
```

### 1.4. DAO

**DAO** signifie **Data Access Object**.

Un DAO est un objet qui prend en charge l'accès aux données.

Pour les articles :

```text
ArticleDAOJSON
ArticleDAOMySQL
```

Le DAO réalise les opérations :

```text
lire
créer
modifier
supprimer
```

Le traitement demande une opération au DAO.

Le DAO s'occupe du stockage.

### 1.5. Contrat DAO

Le DAO peut être défini par une interface.

Dans le projet :

```text
IArticleDAO
```

Cette interface définit :

```php
public function readAll();

public function create(Article $art);

public function update(Article $art);

public function delete($id);
```

Le contrat permet de préciser les opérations nécessaires.

### 1.6. Encapsulation de la persistance

Avec le DAO, les détails du stockage restent dans la couche Data.

Par exemple, `ArticleDAOJSON` contient :

```php
file_get_contents(...)
json_decode(...)
file_put_contents(...)
json_encode(...)
```

Ces opérations ne sont plus écrites dans `GestionArticle`.

On obtient :

```text
GestionArticle
      ↓
DAO
      ↓
JSON
```

ou :

```text
GestionArticle
      ↓
DAO
      ↓
MySQL
```

### 1.7. Implémentation JSON

`ArticleDAOJSON` implémente :

```php
class ArticleDAOJSON implements IArticleDAO
```

Son travail consiste à utiliser un fichier JSON.

Exemple :

```php
public function readAll()
{
    if (!file_exists($this->fichierJson)) {
        return [];
    }

    $data = json_decode(
        file_get_contents($this->fichierJson),
        true
    );

    // création des objets Article

    return $articles;
}
```

Le stockage JSON reste donc dans la couche Data.

### 1.8. Implémentation MySQL

`ArticleDAOMySQL` implémente également :

```php
class ArticleDAOMySQL implements IArticleDAO
```

Mais il utilise PDO et SQL.

Exemple :

```php
public function readAll()
{
    $stmt = $this->pdo->query(
        "SELECT * FROM Article ORDER BY date_creation DESC"
    );

    // création des objets Article

    return $articles;
}
```

Le SQL reste dans la couche Data.

### 1.9. Traitement sans détails de persistance

`GestionArticle` peut maintenant écrire :

```php
public function readAll()
{
    return $this->dao->readAll();
}
```

Le service ne contient pas :

```text
json_decode()
```

ni :

```text
PDO
```

ni :

```text
SELECT
```

Il demande simplement au DAO d'effectuer l'opération.

### 1.10. Flux des responsabilités

Le fonctionnement devient :

```text
Présentation
      ↓
GestionArticle
      ↓
IArticleDAO
      ↓
DAO
      ↓
Source de données
```

Par exemple :

```text
ArticleController
      ↓
GestionArticle
      ↓
IArticleDAO
      ↓
ArticleDAOJSON
      ↓
articles.json
```

### 1.11. Ne pas confondre modèle et DAO

Le modèle :

```text
Article
```

représente les données d'un article.

Le DAO :

```text
ArticleDAOJSON
```

gère l'accès au stockage.

Leurs rôles sont différents.

```text
Article
    ↓
représente un article

ArticleDAOJSON
    ↓
accède aux articles dans JSON
```

### 1.12. À retenir

* La persistance appartient à la couche Data.
* Un DAO encapsule l'accès aux données.
* Une interface DAO définit le contrat.
* Un DAO JSON utilise JSON.
* Un DAO MySQL utilise MySQL.
* La couche Traitement utilise le DAO sans contenir les détails du stockage.
* Le modèle représente les données.
* Le DAO représente l'accès aux données.

---

## Partie 2 — Pratique

### 2.1. Identifier la persistance dans une classe

Imaginez une ancienne classe de gestion contenant :

```php
public function readAll()
{
    $json = file_get_contents(
        '../storage/articles.json'
    );

    $data = json_decode($json, true);

    // ...
}
```

Cette méthode contient deux responsabilités :

```text
gérer la fonctionnalité
```

et :

```text
lire un fichier JSON
```

La lecture du JSON doit être isolée.

### 2.2. Créer le contrat `IArticleDAO`

Créez :

```text
backend/dao/interfaces/IArticleDAO.php
```

Ajoutez :

```php
<?php

require_once __DIR__ . '/../../models/Article.php';

interface IArticleDAO
{
    public function readAll();

    public function create(Article $art);

    public function update(Article $art);

    public function delete($id);
}
```

Le contrat décrit maintenant les opérations d'accès aux articles.

### 2.3. Créer `ArticleDAOJSON`

Créez :

```text
backend/dao/json/ArticleDAOJSON.php
```

Ajoutez :

```php
<?php

require_once __DIR__ . '/../interfaces/IArticleDAO.php';

class ArticleDAOJSON implements IArticleDAO
{
    private $fichierJson;

    public function __construct()
    {
        $this->fichierJson =
            __DIR__ . '/../../storage/articles.json';
    }
}
```

La classe représente maintenant le DAO JSON.

### 2.4. Implémenter `readAll()`

Ajoutez :

```php
public function readAll()
{
    if (!file_exists($this->fichierJson)) {
        return [];
    }

    $data = json_decode(
        file_get_contents($this->fichierJson),
        true
    );

    $articles = [];

    if (is_array($data)) {
        foreach ($data as $item) {
            $articles[] = new Article(
                $item['titre'],
                $item['contenu'],
                $item['image_couverture'],
                $item['statut'],
                $item['categorie_id'],
                $item['auteur_id'],
                $item['id'],
                $item['date_creation'],
                $item['vues']
            );
        }
    }

    return $articles;
}
```

La lecture JSON est maintenant dans le DAO.

### 2.5. Implémenter `create()`

Ajoutez :

```php
public function create(Article $art)
{
    $articles = $this->readAll();

    $maxId = 0;

    foreach ($articles as $existing) {
        if ((int) $existing->getId() > $maxId) {
            $maxId = (int) $existing->getId();
        }
    }

    $art->setId($maxId + 1);

    $articles[] = $art;

    $arrayData = array_map(
        function ($article) {
            return $article->toArray();
        },
        $articles
    );

    return $this->saveAll($arrayData);
}
```

La création dans JSON appartient maintenant au DAO.

### 2.6. Ajouter `saveAll()`

Ajoutez :

```php
private function saveAll($articlesArray)
{
    return file_put_contents(
        $this->fichierJson,
        json_encode(
            $articlesArray,
            JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
        )
    ) !== false;
}
```

Le DAO contient maintenant aussi l'écriture JSON.

### 2.7. Implémenter `update()`

Ajoutez :

```php
public function update(Article $art)
{
    $articles = $this->readAll();

    $updated = false;

    foreach ($articles as $index => $existing) {
        if ($existing->getId() == $art->getId()) {
            $art->setDateCreation(
                $existing->getDateCreation()
            );

            $art->setVues(
                $existing->getVues()
            );

            $articles[$index] = $art;
            $updated = true;
            break;
        }
    }

    if (!$updated) {
        return false;
    }

    $arrayData = array_map(
        function ($article) {
            return $article->toArray();
        },
        $articles
    );

    return $this->saveAll($arrayData);
}
```

### 2.8. Implémenter `delete()`

Ajoutez :

```php
public function delete($id)
{
    $articles = $this->readAll();

    $initialCount = count($articles);

    $articles = array_filter(
        $articles,
        function ($article) use ($id) {
            return $article->getId() != $id;
        }
    );

    if (count($articles) >= $initialCount) {
        return false;
    }

    $arrayData = array_map(
        function ($article) {
            return $article->toArray();
        },
        array_values($articles)
    );

    return $this->saveAll($arrayData);
}
```

Le DAO JSON prend maintenant en charge tout le CRUD.

### 2.9. Créer le DAO MySQL

Le projet contient déjà :

```text
backend/dao/mysql/ArticleDAOMySQL.php
```

La classe :

```php
class ArticleDAOMySQL implements IArticleDAO
```

utilise PDO.

Par exemple :

```php
public function readAll()
{
    $stmt = $this->pdo->query(
        "SELECT * FROM Article ORDER BY date_creation DESC"
    );

    // ...

    return $articles;
}
```

Le SQL reste dans le DAO MySQL.

### 2.10. Vérifier les deux DAO

Les deux classes respectent :

```text
IArticleDAO
```

On obtient :

```text
             IArticleDAO
                /    \
               /      \
              ↓        ↓
   ArticleDAOJSON   ArticleDAOMySQL
       ↓                  ↓
      JSON               MySQL
```

Le contrat est commun.

Le stockage est différent.

### 2.11. Modifier `GestionArticle`

Le traitement doit utiliser le DAO.

Une version simple peut être :

```php
<?php

require_once __DIR__ . '/../models/Article.php';
require_once __DIR__ . '/../dao/json/ArticleDAOJSON.php';

class GestionArticle
{
    private $dao;

    public function __construct()
    {
        $this->dao = new ArticleDAOJSON();
    }

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
}
```

À ce stade, le traitement utilise un DAO JSON précis.

Le choix entre plusieurs implémentations sera amélioré dans **T.223.113**.

### 2.12. Observer la séparation

Le traitement contient :

```php
$this->dao->readAll();
```

Il ne contient plus :

```text
file_get_contents()
json_decode()
file_put_contents()
json_encode()
```

Les détails JSON sont dans :

```text
ArticleDAOJSON
```

### 2.13. Vérifier la création

Dans le contrôleur :

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

Le flux devient :

```text
ArticleController
      ↓
GestionArticle
      ↓
ArticleDAOJSON
      ↓
articles.json
```

### 2.14. Vérifier la lecture

Le contrôleur appelle :

```php
$articles = $this->gestionnaire->readAll();
```

Le service appelle :

```php
return $this->dao->readAll();
```

Le DAO lit le stockage.

Le flux est :

```text
ArticleController
      ↓
GestionArticle
      ↓
ArticleDAOJSON
      ↓
JSON
```

### 2.15. Vérifier la modification

Le contrôleur construit un objet `Article` :

```php
$art = new Article(
    $input['titre'],
    $input['contenu'],
    $input['image_couverture'] ?? null,
    $input['statut'] ?? 'brouillon',
    $input['categorie_id'],
    $input['auteur_id'],
    $input['id']
);
```

Puis :

```php
$this->gestionnaire->update($art);
```

Le service délègue au DAO :

```php
$this->dao->update($art);
```

La persistance est donc isolée.

### 2.16. Vérifier la suppression

Le contrôleur transmet l'identifiant :

```php
$this->gestionnaire->delete($input['id']);
```

Le traitement appelle :

```php
$this->dao->delete($id);
```

Le DAO réalise la suppression dans le stockage.

### 2.17. Observer le résultat

L'organisation obtenue est :

```text
Présentation
      ↓
GestionArticle
      ↓
IArticleDAO
      ↓
ArticleDAOJSON
      ↓
articles.json
```

Une seconde implémentation existe :

```text
Présentation
      ↓
GestionArticle
      ↓
IArticleDAO
      ↓
ArticleDAOMySQL
      ↓
MySQL
```

Le remplacement entre ces deux implémentations sera étudié dans le prochain tutoriel.

### 2.18. Exercice — Identifier les accès aux données

Dans le code du Sprint 3, repérez :

```text
file_get_contents()
file_put_contents()
json_decode()
json_encode()
PDO
SELECT
INSERT
UPDATE
DELETE
```

Indiquez dans quelle classe chaque élément doit se trouver.

### 2.19. Exercice — Vérifier `GestionArticle`

Vérifiez que `GestionArticle` ne contient pas directement :

```text
file_get_contents()
json_decode()
PDO
SELECT
INSERT
UPDATE
DELETE
```

Le service doit utiliser le DAO.

### 2.20. Exercice — Vérifier les DAO

Vérifiez que :

```text
ArticleDAOJSON
```

contient les traitements JSON.

Et que :

```text
ArticleDAOMySQL
```

contient les traitements SQL/PDO.

### 2.21. Travail à faire

Organisez l'accès aux données des articles.

Le résultat doit respecter :

```text
GestionArticle
      ↓
IArticleDAO
      ↓
DAO
```

Créez ou vérifiez :

```text
IArticleDAO
ArticleDAOJSON
ArticleDAOMySQL
```

Le traitement `GestionArticle` ne doit plus connaître les détails du stockage.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* la définition d'un DAO ;
* le rôle de `IArticleDAO` ;
* le rôle de `ArticleDAOJSON` ;
* le rôle de `ArticleDAOMySQL` ;
* un schéma Traitement → DAO → Data ;
* un exemple de lecture ;
* un exemple de création ;
* une vérification montrant que `GestionArticle` ne contient pas de SQL ni de traitement JSON direct.

Ajoutez les fichiers concernés du Sprint 3.

**Résultat attendu :**

Le backend présente la structure :

```text
Présentation
      ↓
GestionArticle
      ↓
IArticleDAO
      ↓
┌───────────────┐
↓               ↓
JSON           MySQL
```

Les opérations CRUD sont isolées dans les DAO.

**Critère de réussite :**

* `IArticleDAO` définit les opérations d'accès aux articles.
* `ArticleDAOJSON` contient les traitements JSON.
* `ArticleDAOMySQL` contient les traitements MySQL.
* `GestionArticle` utilise un DAO.
* `GestionArticle` ne contient pas directement les détails de persistance.
* Le CRUD des articles continue de fonctionner.
* La couche Data encapsule l'accès aux données.

---

## Bilan

**Vous avez appris :**

* à identifier l'accès aux données ;
* à séparer traitement et persistance ;
* à utiliser un DAO ;
* à définir un contrat DAO ;
* à créer une implémentation JSON ;
* à utiliser une implémentation MySQL ;
* à faire utiliser le DAO par le traitement.

**Vous avez obtenu :**

```text
Présentation
      ↓
GestionArticle
      ↓
IArticleDAO
      ↓
ArticleDAOJSON
      ↓
JSON
```

et une autre implémentation :

```text
Présentation
      ↓
GestionArticle
      ↓
IArticleDAO
      ↓
ArticleDAOMySQL
      ↓
MySQL
```

L'accès aux données est maintenant isolé dans la couche Data.

Dans le prochain tutoriel, vous allez **rendre la source de données interchangeable et laisser une Factory sélectionner l'implémentation utilisée**.

## Glossaire

* **Accès aux données** : opérations permettant de lire, créer, modifier ou supprimer des données.
* **Persistance** : conservation des données dans un support.
* **DAO** : objet chargé de l'accès aux données.
* **Contrat** : ensemble des opérations attendues d'un DAO.
* **Interface DAO** : interface qui définit le contrat d'accès aux données.
* **Implémentation** : classe qui réalise concrètement le contrat.
* **DAO JSON** : DAO qui utilise un fichier JSON.
* **DAO MySQL** : DAO qui utilise une base MySQL.
* **Encapsulation de la persistance** : fait de cacher les détails du stockage derrière une classe dédiée.
