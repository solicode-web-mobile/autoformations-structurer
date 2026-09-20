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
* faire dépendre une classe métier d'une Interface plutôt que d'une classe concrète ;
* utiliser le polymorphisme pour intervertir des systèmes sans casser votre code ;
* utiliser le Design Pattern "Factory" (Usine) pour instancier la bonne classe dynamiquement.

## 2. Prérequis

* Avoir défini l'Interface `IArticleDAO` et l'implémentation `ArticleDAOJSON` (T.221.131).

## Cas d'étude

L'objectif final d'une architecture découplée est que notre gestionnaire métier (`GestionArticle`) puisse lire et sauvegarder des articles sans **jamais** savoir comment c'est fait techniquement (en JSON ou en BDD MySQL). Si l'on décide de changer de base de données demain, on ne veut modifier aucune ligne de notre code métier !

---

## Partie 1 — Théorie

### 1.1. L'Inversion de Dépendance (Le Polymorphisme ultime)

Dans un code mal conçu, un gestionnaire est lié "en dur" à une technologie précise :
```php
// Mauvais : Si on passe à MySQL, on doit réécrire cette classe
public function __construct(ArticleDAOJSON $dao) { ... }
```

Grâce à notre Interface, on peut appliquer le principe d'Inversion de Dépendance. Le gestionnaire dépend **uniquement du contrat**.
```php
// Parfait : GestionArticle accepte n'importe quelle classe, tant qu'elle respecte le contrat !
public function __construct(IArticleDAO $dao) { ... }
```

### 1.2. La Factory (L'Usine à objets)

Pour choisir quelle implémentation utiliser au démarrage de l'application (en fonction d'un fichier de configuration par exemple), on utilise un motif de conception très courant : la **Factory** (L'Usine). C'est une classe dont le seul rôle est de fabriquer et renvoyer le bon objet.

**Exemple exécutable :**
```php
<?php
// On simule nos classes DAO
class ArticleDAOJSON { public function read() { echo "JSON lu"; } }
class ArticleDAOMySQL { public function read() { echo "MySQL lu"; } }

// L'usine qui fabrique le bon objet
class DAOFactory {
    public static function getDAO(string $type) {
        if ($type === 'mysql') return new ArticleDAOMySQL();
        return new ArticleDAOJSON();
    }
}

// On demande à l'usine de fabriquer le DAO souhaité
$monDAO = DAOFactory::getDAO('mysql');
$monDAO->read();
?>
```

<div class="fullscreenable" markdown="1">

```mermaid
flowchart TD
    Config(Configuration<br>ex: type='mysql')
    Factory[DAOFactory<br>+ getArticleDAO(type): IArticleDAO]
    JSON[ArticleDAOJSON]
    MySQL[ArticleDAOMySQL]
    Gestion[GestionArticle]

    Config -.-> Factory
    Factory -->|Si 'json' crée| JSON
    Factory -->|Si 'mysql' crée| MySQL
    
    JSON -.->|Est injecté dans| Gestion
    MySQL -.->|Est injecté dans| Gestion
    
    style Factory fill:#e3f2fd,stroke:#2196f3,stroke-width:2px
    style Gestion fill:#fff3e0,stroke:#ff9800,stroke-width:2px
```

</div>

---

## Partie 2 — Pratique

### 2.1. Dépendre du contrat et utiliser la Factory

**Travail à faire :**
1. Créez une seconde classe `ArticleDAOMySQL.php` qui implémente `IArticleDAO` (mettez de faux `echo "MySQL...";` à l'intérieur pour simuler le comportement).
2. Créez un fichier `backend/services/GestionArticle.php`. Son constructeur doit exiger un paramètre de type `IArticleDAO`.
3. Créez un fichier `backend/dao/DAOFactory.php`. Ajoutez-y une méthode statique `getArticleDAO($type)` qui renvoie une instance JSON ou MySQL selon la chaîne passée.
4. Créez un fichier de test (`index.php`) et amusez-vous à changer la chaîne passée à la Factory pour voir la magie opérer !

<button class="btn btn-primary btn-toggle-resultat">Afficher la solution</button>
<div class="auto-wrapper tuto-resultat" style="display: none; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-top: 15px;" markdown="1">

**1. Le Gestionnaire Métier `backend/services/GestionArticle.php` :**
```php
<?php
class GestionArticle {
    private IArticleDAO $dao;

    // Magie : on exige le contrat, peu importe la technologie derrière !
    public function __construct(IArticleDAO $dao) {
        $this->dao = $dao;
    }

    public function lister() {
        // On sait que readAll() existe de toute façon, le contrat l'oblige
        return $this->dao->readAll(); 
    }
}
?>
```

**2. L'Usine `backend/dao/DAOFactory.php` :**
```php
<?php
require_once 'ArticleDAOJSON.php';
require_once 'ArticleDAOMySQL.php';

class DAOFactory {
    public static function getArticleDAO(string $type): IArticleDAO {
        if ($type === 'json') {
            return new ArticleDAOJSON();
        } else {
            return new ArticleDAOMySQL();
        }
    }
}
?>
```

**3. Le Test `index.php` :**
```php
<?php
require_once 'backend/dao/DAOFactory.php';
require_once 'backend/services/GestionArticle.php';

// Changez 'mysql' par 'json' et regardez ce qui se passe !
$dao = DAOFactory::getArticleDAO('mysql');

// Le gestionnaire fait son travail sans se soucier du reste
$gestion = new GestionArticle($dao);
$gestion->lister(); 
?>
```
</div>

---

## Bilan

**Vous avez appris :**
* à injecter une interface (le contrat) dans le constructeur d'une classe métier au lieu d'une classe concrète.
* à utiliser le Design Pattern "Factory" pour centraliser la création d'objets.
* l'intérêt absolu de l'architecture découplée : votre code métier (`GestionArticle`) est désormais **totalement indépendant** de la technologie de base de données ! 

## Glossaire

* **Inversion de Dépendance** : Fait de faire dépendre une classe d'une interface (abstraction) plutôt que d'une autre classe concrète.
* **Factory (Usine)** : Design Pattern (Modèle de conception) dont le rôle exclusif est d'instancier et de retourner des objets.
* **Méthode statique** : Méthode (`public static function`) pouvant être appelée directement sur la classe sans avoir besoin de faire un `new` (ex: `DAOFactory::get(...)`).
