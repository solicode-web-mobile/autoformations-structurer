---
title: "Définir un contrat avec une interface"
layout: tuto
slug: "definir-contrat-interface"
permalink: /tutos/:slug/
tuto_id: "T.221.131"
type: "classique"
version: "normal"
ua: "UA.221.13"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---



## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* comprendre une interface ;
* définir un contrat ;
* déclarer des méthodes dans une interface ;
* utiliser `implements` ;
* créer une classe qui respecte une interface ;
* vérifier qu'une classe respecte le contrat demandé.

À la fin du tutoriel, vous aurez une interface `IArticleDAO` définissant les opérations nécessaires pour gérer les articles.

## 2. Prérequis

Vous devez savoir :

* créer une classe ;
* créer un objet ;
* utiliser une méthode ;
* utiliser le typage d'un paramètre ;
* utiliser le retour d'une méthode ;
* faire collaborer plusieurs classes ;
* utiliser l'héritage et `extends`.

Ces notions ont été étudiées dans :

* **T.221.111 — Créer et manipuler un objet**
* **T.221.112 — Encapsuler les données d’un objet**
* **T.221.121 — Faire collaborer plusieurs objets**
* **T.221.122 — Spécialiser et polymorphiser des objets**

## Données de départ

Dans le Sprint 3, les articles sont représentés par la classe `Article`.

Fichier :

```text
backend/models/Article.php
```

Un article possède notamment :

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

La classe `Article` permet par exemple de lire ses données :

```php
$article->getTitre();
$article->getContenu();
$article->getStatut();
```

Dans le Sprint 3, les articles peuvent être enregistrés dans plusieurs types de stockage.

Deux classes existent :

```text
ArticleDAOJSON
ArticleDAOMySQL
```

Elles doivent réaliser les mêmes opérations :

```text
readAll
create
update
delete
```

Le projet utilise donc une interface :

```text
IArticleDAO
```

Fichier :

```text
backend/dao/interfaces/IArticleDAO.php
```

---

## Partie 1 — Théorie

### 1.1. Le problème à résoudre

Deux classes différentes peuvent réaliser les mêmes opérations.

Dans notre projet :

```text
ArticleDAOJSON
ArticleDAOMySQL
```

Les deux classes doivent pouvoir :

* lire les articles ;
* créer un article ;
* modifier un article ;
* supprimer un article.

Nous avons donc besoin de définir les méthodes attendues.

### 1.2. Définir un contrat

Un **contrat** indique ce qu'une classe doit fournir.

Le contrat ne décrit pas comment le travail est réalisé.

Il indique les méthodes qui doivent exister.

Exemple :

```php
interface IArticleDAO
{
    public function readAll();

    public function create(Article $art);

    public function update(Article $art);

    public function delete($id);
}
```

Cette interface définit le contrat de `IArticleDAO`.

Elle dit :

> Une classe qui utilise ce contrat doit fournir ces quatre méthodes.

### 1.3. Interface

Une **interface** permet de définir un contrat.

Elle se déclare avec le mot-clé :

```php
interface
```

Exemple :

```php
interface IArticleDAO
{
}
```

On ajoute ensuite les méthodes attendues :

```php
interface IArticleDAO
{
    public function readAll();

    public function create(Article $art);

    public function update(Article $art);

    public function delete($id);
}
```

L'interface indique donc les méthodes disponibles dans le contrat.

### 1.4. Méthode d'une interface

Une méthode déclarée dans une interface décrit une opération attendue.

Exemple :

```php
public function readAll();
```

La méthode est déclarée sans code entre `{ }`.

L'interface indique seulement :

```text
le nom de la méthode
les paramètres
le contrat de la méthode
```

La classe qui implémente l'interface fournit ensuite le code.

### 1.5. `implements`

Pour respecter une interface, une classe utilise :

```php
implements
```

Exemple :

```php
class ArticleDAOJSON implements IArticleDAO
{
}
```

Cela signifie :

> `ArticleDAOJSON` respecte le contrat `IArticleDAO`.

La classe doit donc fournir toutes les méthodes demandées par l'interface.

### 1.6. Implémentation

Une **implémentation** est le code réel qui réalise le contrat.

L'interface définit :

```php
public function readAll();
```

Une classe fournit l'implémentation :

```php
public function readAll()
{
    // lecture des articles
}
```

On distingue donc :

```text
Interface
    ↓
contrat
    ↓
Classe
    ↓
implémentation
```

### 1.7. Exemple avec `ArticleDAOJSON`

Dans le projet, on trouve :

```php
class ArticleDAOJSON implements IArticleDAO
{
}
```

La classe respecte donc le contrat.

Elle fournit :

```php
public function readAll()
{
    // lecture du JSON
}
```

```php
public function create(Article $art)
{
    // création dans le JSON
}
```

```php
public function update(Article $art)
{
    // modification dans le JSON
}
```

```php
public function delete($id)
{
    // suppression dans le JSON
}
```

### 1.8. Exemple avec `ArticleDAOMySQL`

Le même contrat est utilisé par :

```php
class ArticleDAOMySQL implements IArticleDAO
{
}
```

Cette classe fournit les mêmes méthodes :

```php
public function readAll()
{
    // lecture de MySQL
}
```

```php
public function create(Article $art)
{
    // création dans MySQL
}
```

```php
public function update(Article $art)
{
    // modification dans MySQL
}
```

```php
public function delete($id)
{
    // suppression dans MySQL
}
```

Les deux classes respectent donc le même contrat.

### 1.9. Contrat et implémentation

Le rôle de l'interface et celui de la classe sont différents.

| Élément           | Rôle                             |
| ----------------- | -------------------------------- |
| `IArticleDAO`     | définit le contrat               |
| `ArticleDAOJSON`  | implémente le contrat avec JSON  |
| `ArticleDAOMySQL` | implémente le contrat avec MySQL |

Le contrat définit les opérations.

Chaque classe fournit son propre code.

### 1.10. Vérifier le contrat

Si une classe utilise :

```php
class ArticleDAOJSON implements IArticleDAO
{
}
```

mais qu'elle oublie une méthode obligatoire, la classe ne respecte pas le contrat.

Par exemple, si `delete()` manque :

```php
class ArticleDAOJSON implements IArticleDAO
{
    public function readAll()
    {
    }

    public function create(Article $art)
    {
    }

    public function update(Article $art)
    {
    }
}
```

La classe ne fournit pas toutes les méthodes prévues par `IArticleDAO`.

Le contrat n'est donc pas respecté.

### 1.11. À retenir

* Une **interface** définit un contrat.
* Un contrat définit les méthodes attendues.
* Une classe utilise `implements` pour respecter une interface.
* La classe fournit ensuite le code des méthodes.
* L'interface décrit **ce qui doit être fait**.
* La classe décrit **comment le faire**.

---

## Partie 2 — Pratique

### 2.1. Créer le dossier de l'interface

Vérifiez la structure :

```text
backend/
└── dao/
    └── interfaces/
        └── IArticleDAO.php
```

Le fichier est :

```text
backend/dao/interfaces/IArticleDAO.php
```

### 2.2. Déclarer l’interface

Ajoutez :

```php
<?php

require_once __DIR__ . '/../../models/Article.php';

interface IArticleDAO
{
}
```

L'interface est maintenant créée.

### 2.3. Définir la méthode `readAll()`

Ajoutez :

```php
public function readAll();
```

L'interface devient :

```php
<?php

require_once __DIR__ . '/../../models/Article.php';

interface IArticleDAO
{
    public function readAll();
}
```

Le contrat demande maintenant une méthode `readAll()`.

### 2.4. Ajouter `create()`

Ajoutez :

```php
public function create(Article $art);
```

Le paramètre doit être un objet `Article`.

L'interface devient :

```php
<?php

require_once __DIR__ . '/../../models/Article.php';

interface IArticleDAO
{
    public function readAll();

    public function create(Article $art);
}
```

### 2.5. Ajouter `update()`

Ajoutez :

```php
public function update(Article $art);
```

Le contrat contient maintenant trois opérations.

### 2.6. Ajouter `delete()`

Ajoutez :

```php
public function delete($id);
```

L'interface complète est :

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

### 2.7. Faire respecter le contrat par `ArticleDAOJSON`

Ouvrez :

```text
backend/dao/json/ArticleDAOJSON.php
```

La classe doit déclarer :

```php
class ArticleDAOJSON implements IArticleDAO
```

Elle utilise déjà :

```php
require_once __DIR__ . '/../interfaces/IArticleDAO.php';
```

Elle respecte donc le contrat.

### 2.8. Vérifier `readAll()`

Dans `ArticleDAOJSON` :

```php
public function readAll()
{
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

Cette méthode fournit l'implémentation du contrat :

```php
public function readAll();
```

### 2.9. Vérifier `create()`

La méthode :

```php
public function create(Article $art)
```

correspond à :

```php
public function create(Article $art);
```

dans l'interface.

Elle reçoit un objet `Article`.

Elle réalise ensuite les opérations nécessaires pour l'enregistrement.

### 2.10. Vérifier `update()`

La classe contient :

```php
public function update(Article $art)
```

Cette méthode respecte :

```php
public function update(Article $art);
```

Le nom et le paramètre correspondent au contrat.

### 2.11. Vérifier `delete()`

La classe contient :

```php
public function delete($id)
```

Cette méthode respecte :

```php
public function delete($id);
```

La classe `ArticleDAOJSON` respecte donc le contrat complet.

### 2.12. Faire respecter le même contrat par MySQL

Ouvrez :

```text
backend/dao/mysql/ArticleDAOMySQL.php
```

La déclaration est :

```php
class ArticleDAOMySQL implements IArticleDAO
```

La classe fournit également :

```php
public function readAll()
```

```php
public function create(Article $art)
```

```php
public function update(Article $art)
```

```php
public function delete($id)
```

Les deux classes respectent donc :

```text
IArticleDAO
```

### 2.13. Observer les deux implémentations

On obtient :

```text
                 IArticleDAO
                /           \
               /             \
              ↓               ↓
   ArticleDAOJSON      ArticleDAOMySQL
         |                     |
         | JSON                | MySQL
         ↓                     ↓
      articles             articles
```

L'interface ne contient pas le code JSON.

Elle ne contient pas non plus le code SQL.

Elle définit uniquement le contrat commun.

### 2.14. Vérifier le type d'une implémentation

Dans un fichier de test, vous pouvez créer :

```php
$dao = new ArticleDAOJSON();
```

Puis vérifier que l'objet respecte l'interface :

```php
var_dump($dao instanceof IArticleDAO);
```

Résultat attendu :

```text
bool(true)
```

Cela signifie que l'objet `ArticleDAOJSON` respecte `IArticleDAO`.

### 2.15. Vérifier l’autre implémentation

Vous pouvez également créer :

```php
$dao = new ArticleDAOMySQL();
```

Puis :

```php
var_dump($dao instanceof IArticleDAO);
```

Résultat attendu :

```text
bool(true)
```

Les deux classes respectent le même contrat.

### 2.16. Observer le rôle de `GestionArticle`

Dans :

```text
backend/services/GestionArticle.php
```

on trouve :

```php
private $dao;
```

Puis :

```php
$this->dao = DAOFactory::getArticleDAO();
```

La classe utilise un objet DAO.

Les méthodes de `GestionArticle` délèguent ensuite les opérations :

```php
public function readAll()
{
    return $this->dao->readAll();
}
```

```php
public function create(Article $art)
{
    return $this->dao->create($art);
}
```

```php
public function update(Article $art)
{
    return $this->dao->update($art);
}
```

```php
public function delete($id)
{
    return $this->dao->delete($id);
}
```

Dans ce tutoriel, retenez surtout que les opérations attendues sont définies par l'interface `IArticleDAO`.

Le choix et le remplacement de l'implémentation seront étudiés dans le tutoriel suivant.

### 2.17. Exercice — Compléter une interface

Créez une interface :

```text
IArticleDAO
```

Elle doit déclarer :

```text
readAll()
create(Article $art)
update(Article $art)
delete($id)
```

Ne mettez aucun code de traitement dans l'interface.

### 2.18. Exercice — Implémenter le contrat

Créez une classe :

```text
ArticleDAOTest
```

Faites-la implémenter :

```text
IArticleDAO
```

Ajoutez les quatre méthodes demandées.

Pour cet exercice, les méthodes peuvent simplement retourner une valeur simple ou afficher un message.

Le but est de vérifier que la classe respecte le contrat.

### 2.19. Exercice — Vérifier le contrat

Créez un objet :

```php
$dao = new ArticleDAOTest();
```

Vérifiez :

```php
var_dump($dao instanceof IArticleDAO);
```

Résultat attendu :

```text
bool(true)
```

### 2.20. Travail à faire

À partir du code du Sprint 3, vérifiez et expliquez le rôle de :

```text
IArticleDAO
ArticleDAOJSON
ArticleDAOMySQL
```

Le programme doit montrer que :

* `IArticleDAO` définit le contrat ;
* `ArticleDAOJSON` implémente le contrat ;
* `ArticleDAOMySQL` implémente le contrat ;
* les trois classes utilisent les mêmes opérations DAO.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* une définition simple d'une interface ;
* une définition simple d'un contrat ;
* une explication de `implements` ;
* la liste des méthodes de `IArticleDAO` ;
* un schéma `IArticleDAO → ArticleDAOJSON / ArticleDAOMySQL` ;
* un exemple montrant qu'une classe implémente l'interface.

Ajoutez les fichiers concernés du Sprint 3.

**Résultat attendu :**

Le schéma obtenu est :

```text
                 IArticleDAO
                /           \
               /             \
              ↓               ↓
   ArticleDAOJSON      ArticleDAOMySQL
```

Les deux classes respectent les méthodes :

```text
readAll
create
update
delete
```

**Critère de réussite :**

* `IArticleDAO` est une interface.
* Les quatre méthodes sont déclarées dans l'interface.
* `ArticleDAOJSON` utilise `implements IArticleDAO`.
* `ArticleDAOMySQL` utilise `implements IArticleDAO`.
* Les deux classes fournissent les quatre méthodes du contrat.
* L'interface ne contient pas le traitement JSON ou SQL.
* Le programme peut vérifier qu'une implémentation est une `IArticleDAO`.

---

## Bilan

**Vous avez appris :**

* à créer une interface ;
* à définir un contrat ;
* à déclarer des méthodes dans une interface ;
* à utiliser `implements` ;
* à créer une implémentation ;
* à vérifier qu'une classe respecte un contrat.

**Vous avez réalisé :**

```text
                 IArticleDAO
                /           \
               /             \
              ↓               ↓
   ArticleDAOJSON      ArticleDAOMySQL
```

`IArticleDAO` définit les opérations attendues.

`ArticleDAOJSON` fournit une implémentation avec JSON.

`ArticleDAOMySQL` fournit une implémentation avec MySQL.

Vous savez maintenant définir un **contrat commun** pour plusieurs classes.

Dans le prochain tutoriel, vous allez utiliser ce contrat avec **plusieurs implémentations**.

## Glossaire

* **Interface** : structure qui définit un contrat pour des classes.
* **Contrat** : ensemble des méthodes qu'une classe doit fournir.
* **Implémentation** : code qui réalise les méthodes du contrat.
* **`implements`** : mot-clé utilisé pour faire respecter une interface par une classe.
* **Méthode d'interface** : méthode déclarée dans le contrat.
* **`IArticleDAO`** : interface qui définit les opérations de gestion des articles.
* **`ArticleDAOJSON`** : implémentation du contrat avec un fichier JSON.
* **`ArticleDAOMySQL`** : implémentation du contrat avec MySQL.
