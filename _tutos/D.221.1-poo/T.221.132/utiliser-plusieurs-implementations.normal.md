---
title: "Utiliser plusieurs implémentations"
layout: tuto
slug: "utiliser-implementations"
permalink: /tutos/:slug/
tuto_id: "T.221.132"
type: "classique"
version: "normal"
ua: "UA.221.13"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* créer plusieurs implémentations d'une même interface ;
* utiliser une interface comme type ;
* faire dépendre une classe d'une interface ;
* utiliser le polymorphisme avec une interface ;
* remplacer une implémentation par une autre ;
* utiliser `DAOFactory` pour choisir une implémentation.

À la fin du tutoriel, le même code pourra fonctionner avec :

```text
ArticleDAOJSON
ArticleDAOMySQL
```

sans modifier le code qui utilise le contrat `IArticleDAO`.

## 2. Prérequis

Vous devez savoir :

* créer une interface ;
* définir un contrat ;
* utiliser `implements` ;
* créer une classe qui respecte une interface ;
* utiliser un objet comme paramètre ;
* faire collaborer plusieurs classes ;
* comprendre le polymorphisme.

Ces notions ont été étudiées dans :

* **T.221.111 — Créer et manipuler un objet**
* **T.221.112 — Encapsuler les données d’un objet**
* **T.221.121 — Faire collaborer plusieurs objets**
* **T.221.122 — Spécialiser et polymorphiser des objets**
* **T.221.131 — Définir un contrat avec une interface**

## Données de départ

Le Sprint 3 possède une interface :

```text
backend/dao/interfaces/IArticleDAO.php
```

Elle définit le contrat :

```php
<?php

require_once __DIR__ . '/../../models/Article.php';

interface IArticleDAO {
    public function readAll();
    public function create(Article $art);
    public function update(Article $art);
    public function delete($id);
}
```

Deux classes respectent ce contrat :

```text
backend/dao/json/ArticleDAOJSON.php
backend/dao/mysql/ArticleDAOMySQL.php
```

La première travaille avec JSON.

La seconde travaille avec MySQL.

Le projet possède également :

```text
backend/dao/DAOFactory.php
```

et :

```text
backend/services/GestionArticle.php
```

La structure utilisée est :

```text
                       IArticleDAO
                      /           \
                     /             \
                    ↓               ↓
         ArticleDAOJSON      ArticleDAOMySQL
                    \             /
                     \           /
                      ↓         ↓
                       DAOFactory
                           ↓
                     GestionArticle
```

---

## Partie 1 — Théorie

### 1.1. Plusieurs classes pour un même contrat

Une interface permet à plusieurs classes de respecter le même contrat.

Dans notre projet :

```text
IArticleDAO
```

est le contrat.

Deux classes l'implémentent :

```text
ArticleDAOJSON
ArticleDAOMySQL
```

On a donc :

```text
                  IArticleDAO
                 /           \
                ↓             ↓
       ArticleDAOJSON   ArticleDAOMySQL
```

Les deux classes doivent fournir :

```text
readAll()
create()
update()
delete()
```

### 1.2. Une implémentation peut être différente

Les deux classes ne font pas le travail de la même manière.

`ArticleDAOJSON` utilise un fichier JSON :

```php
public function readAll() {
    if (!file_exists($this->fichierJson)) return [];

    $data = json_decode(
        file_get_contents($this->fichierJson),
        true
    );

    // ...
}
```

`ArticleDAOMySQL` utilise une requête SQL :

```php
public function readAll() {
    $stmt = $this->pdo->query(
        "SELECT * FROM Article ORDER BY date_creation DESC"
    );

    // ...
}
```

Le contrat est le même.

L'implémentation est différente.

### 1.3. Interface comme type

Une interface peut être utilisée comme type.

Par exemple :

```php
function chargerArticles(IArticleDAO $dao)
{
    return $dao->readAll();
}
```

Le paramètre `$dao` doit respecter `IArticleDAO`.

La fonction peut donc recevoir :

```php
$dao = new ArticleDAOJSON();
```

ou :

```php
$dao = new ArticleDAOMySQL();
```

Le type attendu reste :

```text
IArticleDAO
```

### 1.4. Dépendre d'une interface

Une classe peut utiliser une interface plutôt qu'une classe précise.

Exemple :

```php
function utiliserDAO(IArticleDAO $dao)
{
    return $dao->readAll();
}
```

Cette fonction ne demande pas :

```php
ArticleDAOJSON
```

Elle demande :

```php
IArticleDAO
```

Elle peut donc fonctionner avec plusieurs implémentations.

On obtient :

```text
Fonction
   ↓
IArticleDAO
   ↑
   ├── ArticleDAOJSON
   └── ArticleDAOMySQL
```

### 1.5. Polymorphisme avec une interface

Le polymorphisme permet d'utiliser plusieurs objets différents avec un même type.

Exemple :

```php
function lireArticles(IArticleDAO $dao)
{
    return $dao->readAll();
}
```

Avec JSON :

```php
$dao = new ArticleDAOJSON();

$articles = lireArticles($dao);
```

Avec MySQL :

```php
$dao = new ArticleDAOMySQL();

$articles = lireArticles($dao);
```

Le code de `lireArticles()` ne change pas.

L'objet utilisé change.

### 1.6. Remplacer une implémentation

Nous pouvons remplacer :

```php
$dao = new ArticleDAOJSON();
```

par :

```php
$dao = new ArticleDAOMySQL();
```

Le code qui utilise :

```php
$dao->readAll();
```

reste identique.

Le contrat ne change pas.

Seule l'implémentation change.

### 1.7. Le rôle de `DAOFactory`

Dans le projet, le choix de l'implémentation est réalisé par :

```text
DAOFactory
```

La méthode :

```php
public static function getArticleDAO()
{
    $type = self::getStorageType();

    if ($type === 'mysql') {
        return new ArticleDAOMySQL();
    } else {
        return new ArticleDAOJSON();
    }
}
```

Elle retourne donc :

```text
ArticleDAOMySQL
```

ou :

```text
ArticleDAOJSON
```

Les deux respectent :

```text
IArticleDAO
```

Le choix est effectué avant l'utilisation du DAO.

### 1.8. Le rôle de `GestionArticle`

Dans :

```text
backend/services/GestionArticle.php
```

on trouve :

```php
class GestionArticle {
    private $dao;

    public function __construct() {
        $this->dao = DAOFactory::getArticleDAO();
    }
}
```

`GestionArticle` reçoit donc une implémentation choisie par `DAOFactory`.

Ensuite :

```php
public function readAll() {
    return $this->dao->readAll();
}
```

Le service appelle toujours :

```php
$this->dao->readAll();
```

Il n'a pas besoin de connaître le stockage utilisé.

### 1.9. Même appel, comportement différent

Avec JSON :

```php
$this->dao->readAll();
```

appelle :

```text
ArticleDAOJSON::readAll()
```

Avec MySQL :

```php
$this->dao->readAll();
```

appelle :

```text
ArticleDAOMySQL::readAll()
```

Le code appelant est identique.

Le comportement dépend de l'objet réellement utilisé.

C'est le polymorphisme.

### 1.10. Plusieurs implémentations d'un même contrat

On peut représenter le fonctionnement ainsi :

```text
                       IArticleDAO
                      /           \
                     /             \
                    ↓               ↓
          ArticleDAOJSON      ArticleDAOMySQL
               ↓                    ↓
             JSON                  MySQL
```

Les implémentations sont différentes.

Le contrat reste identique.

### 1.11. À retenir

* Une interface peut avoir plusieurs implémentations.
* Une interface peut être utilisée comme type.
* Une classe peut dépendre d'une interface.
* Plusieurs objets peuvent être utilisés avec le même type d'interface.
* Le même appel peut produire un comportement différent selon l'implémentation.
* Une implémentation peut être remplacée par une autre sans modifier le code qui utilise le contrat.
* `DAOFactory` choisit l'implémentation utilisée par `GestionArticle`.

---

## Partie 2 — Pratique

### 2.1. Observer les deux implémentations

Ouvrez :

```text
backend/dao/json/ArticleDAOJSON.php
```

La classe commence par :

```php
class ArticleDAOJSON implements IArticleDAO
```

Ouvrez ensuite :

```text
backend/dao/mysql/ArticleDAOMySQL.php
```

La classe commence par :

```php
class ArticleDAOMySQL implements IArticleDAO
```

Les deux classes respectent donc le même contrat.

### 2.2. Comparer `readAll()`

Dans `ArticleDAOJSON` :

```php
public function readAll() {
    if (!file_exists($this->fichierJson)) return [];

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

Dans `ArticleDAOMySQL` :

```php
public function readAll() {
    $stmt = $this->pdo->query(
        "SELECT * FROM Article ORDER BY date_creation DESC"
    );

    $articles = [];

    while ($row = $stmt->fetch()) {
        $articles[] = new Article(
            $row['titre'],
            $row['contenu'],
            $row['image_couverture'],
            $row['statut'],
            $row['categorie_id'],
            $row['auteur_id'],
            $row['id'],
            $row['date_creation'],
            $row['vues']
        );
    }

    return $articles;
}
```

Les deux méthodes :

```text
readAll()
```

ont le même nom.

Elles retournent des articles.

Mais leur traitement est différent.

### 2.3. Créer une fonction utilisant l'interface

Créez un fichier de test.

Ajoutez :

```php
require_once 'backend/dao/interfaces/IArticleDAO.php';
require_once 'backend/dao/json/ArticleDAOJSON.php';
require_once 'backend/dao/mysql/ArticleDAOMySQL.php';

function lireArticles(IArticleDAO $dao)
{
    return $dao->readAll();
}
```

La fonction ne dépend pas de :

```text
ArticleDAOJSON
```

ou :

```text
ArticleDAOMySQL
```

Elle dépend de :

```text
IArticleDAO
```

### 2.4. Utiliser `ArticleDAOJSON`

Créez :

```php
$dao = new ArticleDAOJSON();

$articles = lireArticles($dao);
```

Le paramètre :

```php
IArticleDAO $dao
```

accepte l'objet.

Puis :

```php
$dao->readAll();
```

exécute :

```text
ArticleDAOJSON::readAll()
```

### 2.5. Utiliser `ArticleDAOMySQL`

Vous pouvez utiliser :

```php
$dao = new ArticleDAOMySQL();

$articles = lireArticles($dao);
```

La fonction ne change pas :

```php
function lireArticles(IArticleDAO $dao)
{
    return $dao->readAll();
}
```

Cette fois, l'appel utilise :

```text
ArticleDAOMySQL::readAll()
```

### 2.6. Comparer les deux utilisations

Avec JSON :

```php
$dao = new ArticleDAOJSON();

$articles = lireArticles($dao);
```

Avec MySQL :

```php
$dao = new ArticleDAOMySQL();

$articles = lireArticles($dao);
```

La fonction reste identique :

```php
lireArticles($dao);
```

C'est le même contrat.

L'objet réel change.

### 2.7. Observer `DAOFactory`

Ouvrez :

```text
backend/dao/DAOFactory.php
```

La méthode :

```php
public static function getArticleDAO()
{
    $type = self::getStorageType();

    if ($type === 'mysql') {
        return new ArticleDAOMySQL();
    } else {
        return new ArticleDAOJSON();
    }
}
```

Elle choisit automatiquement une implémentation.

La configuration peut donc déterminer le DAO utilisé.

### 2.8. Comprendre le résultat de la Factory

Lorsque le stockage vaut :

```text
mysql
```

la méthode retourne :

```php
new ArticleDAOMySQL();
```

Sinon, elle retourne :

```php
new ArticleDAOJSON();
```

Dans les deux cas, l'objet retourné respecte :

```text
IArticleDAO
```

On peut représenter le fonctionnement ainsi :

```text
               DAOFactory
                   ↓
          getArticleDAO()
                   ↓
          ┌────────┴────────┐
          ↓                 ↓
 ArticleDAOJSON      ArticleDAOMySQL
       JSON                MySQL
```

### 2.9. Observer `GestionArticle`

Ouvrez :

```text
backend/services/GestionArticle.php
```

Le constructeur contient :

```php
public function __construct() {
    $this->dao = DAOFactory::getArticleDAO();
}
```

`GestionArticle` ne crée pas directement :

```text
ArticleDAOJSON
```

ou :

```text
ArticleDAOMySQL
```

Il demande un DAO à `DAOFactory`.

### 2.10. Utiliser le DAO sans connaître son implémentation

Dans `GestionArticle` :

```php
public function readAll() {
    return $this->dao->readAll();
}
```

Puis :

```php
public function create(Article $art) {
    return $this->dao->create($art);
}
```

Même principe pour :

```php
public function update(Article $art) {
    return $this->dao->update($art);
}
```

et :

```php
public function delete($id) {
    return $this->dao->delete($id);
}
```

`GestionArticle` utilise les méthodes du contrat.

Il n'a pas besoin d'appeler :

```text
ArticleDAOJSON
```

ou :

```text
ArticleDAOMySQL
```

directement.

### 2.11. Remplacer l’implémentation

Pour observer le polymorphisme, imaginez d'abord :

```php
$this->dao = new ArticleDAOJSON();
```

Le service utilise alors JSON.

Remplacez par :

```php
$this->dao = new ArticleDAOMySQL();
```

Le reste du code peut rester :

```php
public function readAll() {
    return $this->dao->readAll();
}
```

Le code du service n'est pas modifié.

Seul l'objet utilisé change.

### 2.12. Utiliser une méthode commune

Prenez :

```php
public function readAll() {
    return $this->dao->readAll();
}
```

Le service utilise une seule écriture :

```php
$this->dao->readAll();
```

Mais cette instruction peut exécuter :

```text
ArticleDAOJSON::readAll()
```

ou :

```text
ArticleDAOMySQL::readAll()
```

selon l'objet stocké dans `$this->dao`.

### 2.13. Vérifier le polymorphisme

Ajoutez dans un fichier de test :

```php
$dao1 = new ArticleDAOJSON();
$dao2 = new ArticleDAOMySQL();

var_dump($dao1 instanceof IArticleDAO);
var_dump($dao2 instanceof IArticleDAO);
```

Résultat attendu :

```text
bool(true)
bool(true)
```

Les deux objets sont donc compatibles avec le type :

```text
IArticleDAO
```

### 2.14. Vérifier le type réel de l'objet

Vous pouvez utiliser :

```php
echo get_class($dao1);
```

Résultat :

```text
ArticleDAOJSON
```

Pour le second objet :

```php
echo get_class($dao2);
```

Résultat :

```text
ArticleDAOMySQL
```

Les classes sont différentes.

Mais les deux respectent le même contrat.

### 2.15. Utiliser plusieurs objets dans une même fonction

Vous pouvez créer :

```php
function testerDAO(IArticleDAO $dao)
{
    echo get_class($dao);
    echo "<br>";

    $articles = $dao->readAll();

    return count($articles);
}
```

Puis :

```php
$daoJSON = new ArticleDAOJSON();

echo testerDAO($daoJSON);
```

Et :

```php
$daoMySQL = new ArticleDAOMySQL();

echo testerDAO($daoMySQL);
```

La fonction reste identique.

### 2.16. Observer le lien avec `ArticleController`

Dans :

```text
api/controllers/ArticleController.php
```

le contrôleur crée :

```php
$this->gestionnaire = new GestionArticle();
```

Le contrôleur appelle ensuite :

```php
$this->gestionnaire->readAll();
```

La chaîne complète est :

```text
ArticleController
        ↓
GestionArticle
        ↓
DAOFactory
        ↓
IArticleDAO
       / \
      /   \
     ↓     ↓
 JSON    MySQL
```

Le contrôleur n'a pas besoin de choisir directement le DAO.

### 2.17. Exercice — Choisir une implémentation

Modifiez temporairement `DAOFactory::getArticleDAO()` pour retourner :

```php
return new ArticleDAOJSON();
```

Testez la lecture des articles.

Puis remplacez par :

```php
return new ArticleDAOMySQL();
```

Testez à nouveau.

Observez que le service `GestionArticle` conserve les mêmes appels :

```php
$this->dao->readAll();
$this->dao->create($art);
$this->dao->update($art);
$this->dao->delete($id);
```

### 2.18. Exercice — Utiliser l’interface comme type

Créez :

```php
function compterArticles(IArticleDAO $dao)
{
    $articles = $dao->readAll();

    return count($articles);
}
```

Testez la fonction avec :

```php
new ArticleDAOJSON()
```

Puis avec :

```php
new ArticleDAOMySQL()
```

Le code de la fonction ne doit pas changer.

### 2.19. Travail à faire

À partir du code du Sprint 3, réalisez une démonstration montrant qu'un même contrat peut être utilisé avec deux implémentations :

```text
IArticleDAO
```

et :

```text
ArticleDAOJSON
ArticleDAOMySQL
```

La démonstration doit montrer :

* l'interface comme type ;
* la dépendance à l'interface ;
* l'utilisation de deux implémentations ;
* le même appel avec deux objets différents ;
* le remplacement d'une implémentation par une autre ;
* le rôle de `DAOFactory`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* un schéma des deux implémentations ;
* un exemple de paramètre de type `IArticleDAO` ;
* un exemple avec `ArticleDAOJSON` ;
* un exemple avec `ArticleDAOMySQL` ;
* une explication du rôle de `DAOFactory` ;
* une explication simple du polymorphisme utilisé.

Ajoutez les fichiers concernés du Sprint 3.

**Résultat attendu :**

Le même code :

```php
$dao->readAll();
```

peut utiliser :

```text
ArticleDAOJSON
```

ou :

```text
ArticleDAOMySQL
```

La chaîne finale est :

```text
ArticleController
        ↓
GestionArticle
        ↓
DAOFactory
        ↓
IArticleDAO
       / \
      /   \
     ↓     ↓
 JSON    MySQL
```

**Critère de réussite :**

* `IArticleDAO` est utilisé comme type.
* `ArticleDAOJSON` et `ArticleDAOMySQL` respectent `IArticleDAO`.
* Une même fonction peut recevoir les deux implémentations.
* Le même appel peut utiliser les deux implémentations.
* Le remplacement d'une implémentation ne demande pas de modifier le code qui utilise le contrat.
* `DAOFactory` peut choisir l'implémentation.
* `GestionArticle` utilise le DAO choisi sans dépendre directement d'une implémentation précise.

---

## Bilan

**Vous avez appris :**

* à utiliser plusieurs implémentations d'une même interface ;
* à utiliser une interface comme type ;
* à faire dépendre une classe d'un contrat ;
* à utiliser le polymorphisme avec une interface ;
* à remplacer une implémentation ;
* à utiliser `DAOFactory` pour choisir une implémentation.

**Vous avez réalisé :**

```text
                 IArticleDAO
                /           \
               /             \
              ↓               ↓
   ArticleDAOJSON      ArticleDAOMySQL
              \               /
               \             /
                ↓           ↓
                  DAOFactory
                       ↓
                 GestionArticle
                       ↓
                ArticleController
```

Le contrat reste le même.

L'implémentation peut changer.

Le code qui utilise le contrat peut rester identique.

Vous savez maintenant utiliser **plusieurs implémentations d'une même interface**.

## Glossaire

* **Implémentation** : code concret qui réalise un contrat.
* **Interface comme type** : utilisation d'une interface pour définir le type attendu d'un objet.
* **Polymorphisme** : possibilité d'utiliser plusieurs implémentations avec le même type.
* **Remplacement d'implémentation** : utilisation d'une autre classe qui respecte le même contrat.
* **`IArticleDAO`** : contrat commun des DAO d'articles.
* **`ArticleDAOJSON`** : implémentation du contrat avec JSON.
* **`ArticleDAOMySQL`** : implémentation du contrat avec MySQL.
* **`DAOFactory`** : classe qui choisit l'implémentation du DAO.
* **`GestionArticle`** : service qui utilise le DAO choisi pour gérer les articles.
