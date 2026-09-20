---
title: "Rendre la source de données interchangeable"
layout: tuto
slug: "rendre-source-donnees-interchangeable"
permalink: /tutos/:slug/
tuto_id: "T.223.113"
type: "classique"
version: "normal"
ua: "UA.223.11"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---



## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* utiliser une interface comme abstraction ;
* utiliser plusieurs implémentations d'un même contrat ;
* comprendre l'interchangeabilité ;
* utiliser le polymorphisme avec une interface ;
* utiliser une configuration pour choisir une source ;
* utiliser une Factory ;
* injecter une dépendance dans une classe ;
* utiliser JSON ou MySQL sans modifier le traitement de la fonctionnalité.

À la fin du tutoriel, `GestionArticle` pourra fonctionner avec :

```text
ArticleDAOJSON
```

ou :

```text
ArticleDAOMySQL
```

sans modifier les méthodes :

```text
readAll()
create()
update()
delete()
```

## 2. Prérequis

Vous devez savoir :

* organiser une application en couches ;
* distinguer Présentation, Traitement et Data ;
* comprendre le rôle d'un DAO ;
* utiliser une interface ;
* utiliser `implements` ;
* utiliser une interface comme type ;
* comprendre le polymorphisme.

Vous devez avoir réalisé :

* **T.223.111 — Organiser les couches de l’application**
* **T.223.112 — Isoler l’accès aux données**
* **T.221.131 — Définir un contrat avec une interface**
* **T.221.132 — Utiliser plusieurs implémentations**

## Données de départ

Le Sprint 3 contient le contrat :

```text
backend/dao/interfaces/IArticleDAO.php
```

Son contenu est :

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

Deux implémentations existent :

```text
backend/dao/json/ArticleDAOJSON.php
backend/dao/mysql/ArticleDAOMySQL.php
```

Le projet contient aussi :

```text
backend/dao/DAOFactory.php
```

et :

```text
backend/services/GestionArticle.php
```

La Factory actuelle choisit déjà une implémentation :

```php
public static function getArticleDAO()
{
    $type = self::getStorageType();

    if ($type === 'mysql') {
        return new ArticleDAOMySQL();
    }

    return new ArticleDAOJSON();
}
```

La configuration contient un type de stockage :

```text
json
```

ou :

```text
mysql
```

L'organisation générale est :

```text
ArticleController
      ↓
GestionArticle
      ↓
DAOFactory
      ↓
IArticleDAO
    /       \
   ↓         ↓
 JSON       MySQL
```

---

## Partie 1 — Théorie

### 1.1. Abstraction

Une **abstraction** permet de travailler avec ce qui est commun sans dépendre des détails de l'implémentation.

Dans notre projet :

```text
IArticleDAO
```

décrit les opérations communes :

```text
readAll()
create()
update()
delete()
```

Le traitement n'a pas besoin de connaître le détail du JSON ou de MySQL.

Il utilise le contrat.

### 1.2. Contrat et implémentations

Le contrat est :

```text
IArticleDAO
```

Les implémentations sont :

```text
ArticleDAOJSON
ArticleDAOMySQL
```

On obtient :

```text
                 IArticleDAO
                /           \
               ↓             ↓
      ArticleDAOJSON   ArticleDAOMySQL
```

Les deux classes proposent les mêmes opérations.

Mais elles utilisent des sources différentes.

### 1.3. Interchangeabilité

Deux implémentations sont **interchangeables** lorsqu'elles peuvent être utilisées à la place l'une de l'autre tout en respectant le même contrat.

Par exemple :

```php
$dao = new ArticleDAOJSON();
```

peut être remplacé par :

```php
$dao = new ArticleDAOMySQL();
```

Le code qui utilise :

```php
$dao->readAll();
```

reste identique.

Le traitement ne change pas.

Seule la source de données change.

### 1.4. Polymorphisme avec l'interface

Une variable de type `IArticleDAO` peut contenir différents objets qui respectent cette interface.

Exemple :

```php
function chargerArticles(IArticleDAO $dao)
{
    return $dao->readAll();
}
```

On peut transmettre :

```php
new ArticleDAOJSON()
```

ou :

```php
new ArticleDAOMySQL()
```

La fonction utilise le même contrat.

### 1.5. Configuration

Le choix de la source peut être défini dans une configuration.

Dans le projet, `DAOFactory` lit :

```php
$env = require __DIR__ . '/../env.php';
```

Puis :

```php
return $env['storage_type'] ?? 'json';
```

La valeur peut être :

```text
json
```

ou :

```text
mysql
```

La configuration indique donc quelle source utiliser.

### 1.6. Factory

Une **Factory** est une classe ou une méthode chargée de créer un objet.

Dans notre projet :

```text
DAOFactory
```

crée le DAO adapté.

Elle réalise :

```php
if ($type === 'mysql') {
    return new ArticleDAOMySQL();
}

return new ArticleDAOJSON();
```

Le reste de l'application ne doit donc pas décider directement :

```text
JSON
```

ou :

```text
MySQL
```

### 1.7. Le rôle de la Factory

Sans Factory :

```text
GestionArticle
    ↓
new ArticleDAOJSON()
```

Le traitement dépend directement d'une implémentation.

Avec Factory :

```text
GestionArticle
    ↓
DAO
```

et :

```text
DAOFactory
   ↓
JSON ou MySQL
```

La création de l'implémentation est centralisée.

### 1.8. Injection de dépendance

Une **dépendance** est un objet dont une classe a besoin.

Dans notre cas, `GestionArticle` a besoin d'un DAO.

Une injection de dépendance consiste à donner cet objet à `GestionArticle` au lieu de le créer directement dans la classe.

Au lieu de :

```php
class GestionArticle
{
    public function __construct()
    {
        $this->dao = DAOFactory::getArticleDAO();
    }
}
```

on peut écrire :

```php
class GestionArticle
{
    private $dao;

    public function __construct(IArticleDAO $dao)
    {
        $this->dao = $dao;
    }
}
```

La dépendance est maintenant fournie à la classe.

### 1.9. Pourquoi injecter l'interface ?

Le constructeur demande :

```php
IArticleDAO $dao
```

et non :

```php
ArticleDAOJSON $dao
```

ou :

```php
ArticleDAOMySQL $dao
```

La classe dépend donc du contrat :

```text
GestionArticle
      ↓
IArticleDAO
```

Elle peut recevoir n'importe quelle implémentation compatible.

### 1.10. Factory et injection de dépendance

Les deux mécanismes peuvent être utilisés ensemble.

La Factory choisit l'objet :

```text
DAOFactory
      ↓
ArticleDAOJSON
```

Puis cet objet est injecté :

```text
GestionArticle
      ↑
      |
ArticleDAOJSON
```

Ou :

```text
DAOFactory
      ↓
ArticleDAOMySQL
      ↓
GestionArticle
```

La Factory choisit.

L'injection fournit.

Le traitement utilise le contrat.

### 1.11. PDO

Pour le DAO MySQL, le projet utilise `PDO`.

`PDO` permet à PHP de communiquer avec une base de données.

Dans :

```text
backend/dao/mysql/Database.php
```

on trouve :

```php
$this->pdo = new PDO(
    $dsn,
    $user,
    $pass,
    $options
);
```

Le DAO MySQL utilise ensuite cette connexion :

```php
$this->pdo->query(...);
```

ou :

```php
$this->pdo->prepare(...);
```

Ces détails restent dans la couche Data.

### 1.12. Source JSON et source MySQL

On obtient deux implémentations :

```text
IArticleDAO
    |
    ├── ArticleDAOJSON
    |       ↓
    |     JSON
    |
    └── ArticleDAOMySQL
            ↓
          MySQL
```

Les sources sont différentes.

Le contrat reste identique.

### 1.13. Même traitement, source différente

Le service peut toujours utiliser :

```php
public function readAll()
{
    return $this->dao->readAll();
}
```

La méthode ne change pas.

Selon l'objet injecté :

```text
ArticleDAOJSON
```

ou :

```text
ArticleDAOMySQL
```

la source utilisée est différente.

### 1.14. À retenir

* L'interface fournit une abstraction commune.
* Plusieurs classes peuvent implémenter le même contrat.
* Une Factory choisit une implémentation.
* Une configuration peut déterminer ce choix.
* L'injection de dépendance permet de fournir l'objet nécessaire à une classe.
* `GestionArticle` peut dépendre de `IArticleDAO` plutôt que d'une classe concrète.
* JSON et MySQL deviennent interchangeables pour le traitement.
* Les détails PDO restent dans la couche Data.

---

## Partie 2 — Pratique

### 2.1. Observer le choix actuel

Ouvrez :

```text
backend/dao/DAOFactory.php
```

Observez :

```php
public static function getArticleDAO()
{
    $type = self::getStorageType();

    if ($type === 'mysql') {
        return new ArticleDAOMySQL();
    }

    return new ArticleDAOJSON();
}
```

La Factory choisit donc l'implémentation.

### 2.2. Observer la configuration

Ouvrez le fichier :

```text
backend/env.php
```

Repérez :

```text
storage_type
```

Une configuration peut par exemple contenir :

```php
'storage_type' => 'json'
```

ou :

```php
'storage_type' => 'mysql'
```

Cette valeur sera utilisée par `DAOFactory`.

### 2.3. Tester le choix JSON

Configurez :

```php
'storage_type' => 'json'
```

Puis utilisez :

```php
$dao = DAOFactory::getArticleDAO();
```

Pour observer la classe créée :

```php
echo get_class($dao);
```

Résultat attendu :

```text
ArticleDAOJSON
```

### 2.4. Tester le choix MySQL

Modifiez la configuration :

```php
'storage_type' => 'mysql'
```

Puis :

```php
$dao = DAOFactory::getArticleDAO();

echo get_class($dao);
```

Résultat attendu :

```text
ArticleDAOMySQL
```

Le code de la Factory ne change pas.

La configuration change.

### 2.5. Vérifier le contrat

Ajoutez :

```php
var_dump($dao instanceof IArticleDAO);
```

Résultat attendu :

```text
bool(true)
```

Le DAO créé par la Factory respecte donc toujours le contrat.

### 2.6. Observer `GestionArticle`

Dans la version actuelle, on trouve :

```php
public function __construct()
{
    $this->dao = DAOFactory::getArticleDAO();
}
```

Cette organisation fonctionne.

Mais `GestionArticle` connaît encore `DAOFactory`.

Le traitement choisit donc indirectement sa dépendance.

Nous allons maintenant injecter le DAO.

### 2.7. Modifier le constructeur de `GestionArticle`

Ouvrez :

```text
backend/services/GestionArticle.php
```

Ajoutez :

```php
require_once __DIR__ . '/../dao/interfaces/IArticleDAO.php';
```

Puis modifiez le constructeur :

```php
public function __construct(IArticleDAO $dao)
{
    $this->dao = $dao;
}
```

La classe devient :

```php
class GestionArticle
{
    private $dao;

    public function __construct(IArticleDAO $dao)
    {
        $this->dao = $dao;
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

`GestionArticle` ne crée plus directement le DAO.

### 2.8. Créer le DAO à l'extérieur

Dans le code qui construit le service :

```php
$dao = DAOFactory::getArticleDAO();
```

Puis :

```php
$gestionnaire = new GestionArticle($dao);
```

Le DAO est maintenant injecté.

Le flux est :

```text
DAOFactory
      ↓
IArticleDAO
      ↓
GestionArticle
```

### 2.9. Modifier `ArticleController`

Ouvrez :

```text
api/controllers/ArticleController.php
```

Le constructeur actuel est :

```php
public function __construct()
{
    $this->gestionnaire = new GestionArticle();
}
```

Il faut maintenant fournir le DAO.

Ajoutez :

```php
require_once __DIR__ . '/../../backend/dao/DAOFactory.php';
```

Puis :

```php
public function __construct()
{
    $dao = DAOFactory::getArticleDAO();

    $this->gestionnaire = new GestionArticle($dao);
}
```

Le contrôleur ne choisit pas JSON ou MySQL directement.

Il demande cette décision à la Factory.

### 2.10. Observer la nouvelle organisation

Le flux devient :

```text
ArticleController
      ↓
DAOFactory
      ↓
ArticleDAOJSON ou ArticleDAOMySQL
      ↓
GestionArticle
```

Pour le traitement de la fonctionnalité :

```text
ArticleController
      ↓
GestionArticle
      ↓
IArticleDAO
      ↓
DAO
```

La création de la dépendance se fait avant son utilisation.

### 2.11. Tester avec JSON

Configurez :

```php
'storage_type' => 'json'
```

Puis envoyez une requête de lecture.

Le fonctionnement est :

```text
ArticleController
      ↓
DAOFactory
      ↓
ArticleDAOJSON
      ↓
GestionArticle
      ↓
ArticleDAOJSON
      ↓
JSON
```

Le service utilise toujours :

```php
$this->dao->readAll();
```

### 2.12. Tester avec MySQL

Configurez :

```php
'storage_type' => 'mysql'
```

Puis envoyez la même requête.

Le service utilise exactement le même code :

```php
$this->dao->readAll();
```

Cette fois :

```text
ArticleController
      ↓
DAOFactory
      ↓
ArticleDAOMySQL
      ↓
GestionArticle
      ↓
ArticleDAOMySQL
      ↓
MySQL
```

Le traitement de la fonctionnalité ne change pas.

### 2.13. Comparer les deux configurations

Avec JSON :

```text
storage_type = json
        ↓
ArticleDAOJSON
        ↓
articles.json
```

Avec MySQL :

```text
storage_type = mysql
        ↓
ArticleDAOMySQL
        ↓
MySQL
```

Dans les deux cas :

```text
GestionArticle
```

utilise le même contrat.

### 2.14. Vérifier l'injection

Ajoutez temporairement :

```php
echo get_class($this->dao);
```

dans un test ou dans un point d'observation adapté.

Avec JSON :

```text
ArticleDAOJSON
```

Avec MySQL :

```text
ArticleDAOMySQL
```

Le constructeur de `GestionArticle` reste :

```php
public function __construct(IArticleDAO $dao)
```

La classe ne dépend donc pas d'une implémentation précise.

### 2.15. Tester `create()`

Le contrôleur crée toujours l'objet `Article` :

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

Le service utilise :

```php
$this->dao->create($art);
```

Selon la configuration :

```text
ArticleDAOJSON::create()
```

ou :

```text
ArticleDAOMySQL::create()
```

est exécuté.

### 2.16. Tester `update()`

Le traitement reste :

```php
$this->gestionnaire->update($art);
```

et :

```php
return $this->dao->update($art);
```

La source peut changer sans modifier le traitement.

### 2.17. Tester `delete()`

Le traitement reste :

```php
$this->gestionnaire->delete($id);
```

Le service utilise :

```php
return $this->dao->delete($id);
```

Le DAO concret effectue ensuite la suppression.

### 2.18. Observer l'interchangeabilité

On obtient finalement :

```text
                     IArticleDAO
                    /           \
                   ↓             ↓
          ArticleDAOJSON   ArticleDAOMySQL
                 ↓               ↓
                JSON            MySQL
                   \             /
                    \           /
                     GestionArticle
                           ↑
                           |
                  ArticleController
```

La partie importante est :

```text
GestionArticle
      ↓
IArticleDAO
```

Le traitement connaît le contrat.

Il ne connaît pas directement la source.

### 2.19. Exercice — Changer la source

Testez le CRUD complet avec :

```text
storage_type = json
```

Puis :

```text
storage_type = mysql
```

Vérifiez :

```text
Lire
Créer
Modifier
Supprimer
```

Le code de `GestionArticle` ne doit pas être modifié entre les deux tests.

### 2.20. Exercice — Vérifier la Factory

Ajoutez un test permettant d'afficher :

```php
$dao = DAOFactory::getArticleDAO();

echo get_class($dao);
```

Testez :

```text
json
```

puis :

```text
mysql
```

Vérifiez que la Factory retourne la bonne implémentation.

### 2.21. Exercice — Vérifier l'injection

Créez :

```php
$dao = new ArticleDAOJSON();

$gestionnaire = new GestionArticle($dao);
```

Vérifiez que le service fonctionne.

Puis remplacez :

```php
$dao = new ArticleDAOMySQL();
```

La création de `GestionArticle` ne doit pas changer :

```php
$gestionnaire = new GestionArticle($dao);
```

### 2.22. Exercice — Vérifier le type

Ajoutez :

```php
function testerDAO(IArticleDAO $dao)
{
    return $dao->readAll();
}
```

Appelez cette fonction avec :

```php
new ArticleDAOJSON()
```

puis :

```php
new ArticleDAOMySQL()
```

La fonction doit accepter les deux objets.

### 2.23. Travail à faire

Rendez la source de données interchangeable.

Le résultat doit utiliser :

```text
IArticleDAO
ArticleDAOJSON
ArticleDAOMySQL
DAOFactory
GestionArticle
```

La configuration doit permettre de choisir :

```text
JSON
```

ou :

```text
MySQL
```

`GestionArticle` doit recevoir le DAO par injection.

Le traitement fonctionnel doit rester identique.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* une définition de l'abstraction ;
* une définition de l'interchangeabilité ;
* le rôle de `DAOFactory` ;
* le rôle de la configuration `storage_type` ;
* une explication de l'injection de dépendance ;
* un schéma JSON / MySQL ;
* un test avec JSON ;
* un test avec MySQL ;
* une vérification que `GestionArticle` dépend de `IArticleDAO`.

Ajoutez les fichiers concernés :

```text
backend/
├── dao/
│   ├── interfaces/
│   │   └── IArticleDAO.php
│   ├── json/
│   │   └── ArticleDAOJSON.php
│   ├── mysql/
│   │   ├── ArticleDAOMySQL.php
│   │   └── Database.php
│   └── DAOFactory.php
│
└── services/
    └── GestionArticle.php
```

**Résultat attendu :**

Le traitement utilise le contrat :

```text
GestionArticle
      ↓
IArticleDAO
```

La Factory choisit :

```text
ArticleDAOJSON
```

ou :

```text
ArticleDAOMySQL
```

La configuration permet de changer la source.

Le même CRUD fonctionne avec les deux sources.

**Critère de réussite :**

* `GestionArticle` dépend de `IArticleDAO`.
* Le DAO est injecté dans `GestionArticle`.
* `DAOFactory` choisit l'implémentation.
* `storage_type` permet de choisir JSON ou MySQL.
* `ArticleDAOJSON` et `ArticleDAOMySQL` respectent le même contrat.
* Le traitement de `readAll()`, `create()`, `update()` et `delete()` reste identique.
* Le changement de source ne demande pas de modifier la logique de `GestionArticle`.
* Les détails JSON restent dans `ArticleDAOJSON`.
* Les détails PDO/SQL restent dans `ArticleDAOMySQL`.

---

## Bilan

**Vous avez appris :**

* à utiliser une abstraction ;
* à rendre deux implémentations interchangeables ;
* à utiliser une interface comme contrat ;
* à utiliser le polymorphisme avec une interface ;
* à utiliser une configuration ;
* à utiliser une Factory ;
* à injecter une dépendance ;
* à sélectionner une source JSON ou MySQL.

**Vous avez obtenu :**

```text
                     IArticleDAO
                    /           \
                   ↓             ↓
          ArticleDAOJSON   ArticleDAOMySQL
                 ↓               ↓
                JSON            MySQL
```

Le traitement utilise uniquement :

```text
GestionArticle
      ↓
IArticleDAO
```

La création du DAO est réalisée par :

```text
DAOFactory
```

La source est choisie par :

```text
storage_type
```

Le même traitement fonctionnel peut donc utiliser :

```text
JSON
```

ou :

```text
MySQL
```

sans modifier la logique de `GestionArticle`.

## Glossaire

* **Abstraction** : manière de travailler avec les éléments communs sans dépendre des détails d'une implémentation.
* **Interchangeabilité** : possibilité de remplacer une implémentation par une autre respectant le même contrat.
* **Injection de dépendance** : fait de fournir à une classe l'objet dont elle a besoin.
* **Factory** : objet ou classe chargé de créer et sélectionner une implémentation.
* **Configuration** : ensemble de valeurs permettant de déterminer le fonctionnement de l'application.
* **Polymorphisme** : utilisation de plusieurs objets différents avec un même type.
* **PDO** : interface PHP permettant de communiquer avec une base de données.
* **Source de données** : support utilisé pour conserver les données, par exemple JSON ou MySQL.
