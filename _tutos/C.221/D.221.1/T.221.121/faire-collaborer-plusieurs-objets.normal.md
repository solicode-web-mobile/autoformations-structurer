---
title: "Faire collaborer plusieurs objets"
layout: tuto
slug: "faire-collaborer-plusieurs-objets"
permalink: /tutos/:slug/
tuto_id: "T.221.121"
type: "classique"
version: "normal"
ua: "UA.221.12"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---



## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* faire collaborer plusieurs classes ;
* utiliser un objet dans une autre classe ;
* passer un objet comme paramètre ;
* conserver des objets dans un tableau ;
* retourner plusieurs objets ;
* faire utiliser `Categorie` par `GestionCategorie` ;
* faire utiliser `GestionCategorie` par `CategorieController`.

À la fin du tutoriel, la fonctionnalité de gestion des catégories utilisera plusieurs objets qui travaillent ensemble.

## 2. Prérequis

Vous devez savoir :

* créer une classe ;
* créer un objet ;
* utiliser un constructeur ;
* utiliser `$this` ;
* utiliser `private` ;
* utiliser les getters et les setters ;
* utiliser les types de base en PHP ;
* manipuler un tableau.

Ces notions ont été étudiées dans :

* **T.221.111 — Créer et manipuler un objet**
* **T.221.112 — Encapsuler les données d’un objet**

## Données de départ

Dans le Sprint 1, la classe `Categorie` réalise seule la gestion des données et du fichier JSON.

Dans le Sprint 2, les objets sont séparés en plusieurs classes.

La structure utilisée est :

```text
sprint-2/
├── api/
│   ├── controllers/
│   │   └── CategorieController.php
│   └── router.php
│
└── backend/
    ├── classes/
    │   ├── Categorie.php
    │   └── GestionCategorie.php
    └── data/
        └── categories.json
```

Le fichier `categories.json` contient :

```json
[
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
    },
    {
        "id": "3",
        "nom": "Laravel",
        "couleur": "Bleu",
        "icone": "Code"
    }
]
```

Dans le Sprint 2 :

* `Categorie` représente une catégorie ;
* `GestionCategorie` lit et modifie les catégories ;
* `CategorieController` utilise `GestionCategorie` pour traiter les requêtes.

---

## Partie 1 — Théorie

### 1.1. Un objet peut utiliser un autre objet

Dans une application, un objet n'a pas besoin de tout faire seul.

Un objet peut utiliser un autre objet pour réaliser une action.

Dans notre application :

```text
CategorieController
        ↓
GestionCategorie
        ↓
Categorie
```

`CategorieController` utilise `GestionCategorie`.

`GestionCategorie` utilise des objets `Categorie`.

Les objets travaillent donc ensemble.

### 1.2. Dépendance entre classes

Une classe a une **dépendance** lorsqu'elle utilise une autre classe.

Dans `GestionCategorie`, on trouve :

```php
require_once __DIR__ . '/Categorie.php';
```

La classe `GestionCategorie` a besoin de la classe `Categorie`.

On trouve aussi :

```php
public function create(Categorie $cat)
```

La méthode `create()` attend un objet de type `Categorie`.

La dépendance est donc visible dans le code :

```text
GestionCategorie
       ↓
   Categorie
```

### 1.3. Objet comme paramètre

Une méthode peut recevoir un objet.

Exemple :

```php
public function create(Categorie $cat)
{
}
```

Le paramètre `$cat` est un objet `Categorie`.

On peut donc écrire :

```php
$categorie = new Categorie(
    "Laravel",
    "Bleu",
    "Code"
);

$gestionCategorie->create($categorie);
```

L'objet est transmis à la méthode.

### 1.4. Pourquoi transmettre un objet ?

L'objet contient déjà ses propres données.

Par exemple :

```php
$categorie = new Categorie(
    "Laravel",
    "Bleu",
    "Code"
);
```

L'objet contient :

```text
nom     : Laravel
couleur : Bleu
icone   : Code
```

La méthode `create()` peut donc travailler directement avec cet objet :

```php
public function create(Categorie $cat)
{
    $cat->setId($maxId + 1);
}
```

Le même objet peut ensuite être ajouté au tableau :

```php
$categories[] = $cat;
```

### 1.5. Une classe peut conserver plusieurs objets

`GestionCategorie` possède :

```php
private $fichierJson;
```

Elle lit ensuite plusieurs catégories :

```php
$categories = [];
```

Pour chaque ligne du fichier JSON, elle crée un objet :

```php
$categories[] = new Categorie(
    $item['nom'],
    $item['couleur'],
    $item['icone'],
    $item['id']
);
```

Le tableau `$categories` contient donc plusieurs objets `Categorie`.

On obtient :

```text
$categories
    ├── Categorie
    ├── Categorie
    └── Categorie
```

### 1.6. Objet comme élément d’un tableau

Un tableau PHP peut contenir des objets.

Exemple :

```php
$categories = [];

$categories[] = new Categorie(
    "Développement Web",
    "Bleu",
    "Code",
    1
);

$categories[] = new Categorie(
    "Design UI/UX",
    "Rose",
    "Pinceau",
    2
);
```

Le tableau contient maintenant deux objets.

On peut parcourir ce tableau :

```php
foreach ($categories as $categorie) {
    echo $categorie->getNom();
}
```

Résultat :

```text
Développement Web
Design UI/UX
```

### 1.7. Retourner plusieurs objets

Une méthode peut retourner un tableau contenant des objets.

Dans `GestionCategorie` :

```php
public function readAll()
{
    // ...
    return $categories;
}
```

`readAll()` retourne donc le tableau contenant les objets `Categorie`.

Dans le contrôleur :

```php
$categories = $this->gestionnaire->readAll();
```

La variable `$categories` contient les objets retournés.

### 1.8. Faire collaborer `CategorieController` et `GestionCategorie`

Dans le contrôleur, on trouve :

```php
require_once __DIR__ . '/../../backend/classes/GestionCategorie.php';
```

Puis :

```php
$this->gestionnaire = new GestionCategorie();
```

Le contrôleur crée un objet `GestionCategorie`.

Il peut ensuite utiliser cet objet :

```php
$categories = $this->gestionnaire->readAll();
```

La collaboration est :

```text
CategorieController
        |
        | utilise
        ↓
GestionCategorie
```

### 1.9. Faire collaborer `GestionCategorie` et `Categorie`

Lors de la lecture du JSON, `GestionCategorie` crée des objets :

```php
$categories[] = new Categorie(
    $item['nom'],
    $item['couleur'],
    $item['icone'],
    $item['id']
);
```

Lors de la création d'une catégorie, elle reçoit aussi un objet :

```php
public function create(Categorie $cat)
```

On retrouve donc deux formes de collaboration :

```text
GestionCategorie
       |
       | crée des objets
       ↓
   Categorie

GestionCategorie
       ↑
       | reçoit un objet
       |
   Categorie
```

### 1.10. À retenir

* Une classe peut utiliser une autre classe.
* Un objet peut être passé comme paramètre.
* Un tableau peut contenir plusieurs objets.
* Une méthode peut retourner plusieurs objets dans un tableau.
* `GestionCategorie` travaille avec des objets `Categorie`.
* `CategorieController` utilise un objet `GestionCategorie`.
* Plusieurs objets peuvent collaborer pour réaliser une fonctionnalité.

---

## Partie 2 — Pratique

### 2.1. Observer la classe `Categorie`

Ouvrez :

```text
backend/classes/Categorie.php
```

La classe contient les données d'une catégorie :

```php
class Categorie
{
    private $id;
    private $nom;
    private $couleur;
    private $icone;
}
```

Le constructeur permet de créer un objet :

```php
public function __construct(
    $nom = null,
    $couleur = null,
    $icone = null,
    $id = null
) {
    $this->id = $id;
    $this->nom = $nom;
    $this->couleur = $couleur;
    $this->icone = $icone;
}
```

On peut donc créer un objet :

```php
$categorie = new Categorie(
    "Laravel",
    "Bleu",
    "Code"
);
```

### 2.2. Créer l’objet `GestionCategorie`

Ouvrez :

```text
backend/classes/GestionCategorie.php
```

La classe utilise `Categorie` :

```php
require_once __DIR__ . '/Categorie.php';

class GestionCategorie
{
    private $fichierJson;
}
```

La classe a donc une dépendance vers `Categorie`.

### 2.3. Lire plusieurs objets

La méthode `readAll()` lit le fichier JSON.

Elle crée un objet `Categorie` pour chaque donnée :

```php
foreach ($data as $item) {
    $categories[] = new Categorie(
        $item['nom'],
        $item['couleur'],
        $item['icone'],
        $item['id']
    );
}
```

Puis elle retourne le tableau :

```php
return $categories;
```

Le résultat est un tableau d'objets.

### 2.4. Tester `readAll()`

Créez un fichier de test temporaire :

```text
backend/classes/test-gestion.php
```

Ajoutez :

```php
<?php

require_once 'Categorie.php';
require_once 'GestionCategorie.php';

$gestionnaire = new GestionCategorie();

$categories = $gestionnaire->readAll();

foreach ($categories as $categorie) {
    echo $categorie->getNom();
    echo "<br>";
}
```

Résultat attendu :

```text
Développement Web
Design UI/UX
Laravel
```

La méthode `readAll()` a retourné plusieurs objets `Categorie`.

### 2.5. Faire passer un objet à `create()`

Dans `GestionCategorie`, observez :

```php
public function create(Categorie $cat)
```

La méthode attend un objet.

Dans le programme de test :

```php
$categorie = new Categorie(
    "PHP",
    "Vert",
    "Code"
);
```

Passez cet objet à la méthode :

```php
$gestionnaire->create($categorie);
```

L'objet `Categorie` est maintenant utilisé par `GestionCategorie`.

### 2.6. Observer la modification de l’objet

Dans `create()` :

```php
$cat->setId($maxId + 1);
```

`GestionCategorie` utilise donc une méthode de l'objet `Categorie`.

L'objet reçu est modifié.

Puis il est ajouté au tableau :

```php
$categories[] = $cat;
```

La collaboration est :

```text
Categorie
   ↓
   objet
   ↓
create(Categorie $cat)
   ↓
GestionCategorie
```

### 2.7. Observer `CategorieController`

Ouvrez :

```text
api/controllers/CategorieController.php
```

Le contrôleur crée un objet `GestionCategorie` :

```php
$this->gestionnaire = new GestionCategorie();
```

Le contrôleur peut ensuite demander toutes les catégories :

```php
$categories = $this->gestionnaire->readAll();
```

La collaboration est donc :

```text
CategorieController
        ↓
GestionCategorie
        ↓
Categorie
```

### 2.8. Observer le traitement des objets dans le contrôleur

Après `readAll()` :

```php
$arrayData = array_map(
    function($c) {
        return $c->toArray();
    },
    $categories
);
```

Chaque élément `$c` est un objet `Categorie`.

Le contrôleur utilise sa méthode :

```php
$c->toArray();
```

Le contrôleur ne travaille donc pas directement avec les données du JSON.

Il travaille avec des objets `Categorie`.

### 2.9. Faire fonctionner la création complète

Dans `CategorieController`, la méthode `post()` crée d'abord un objet :

```php
$cat = new Categorie(
    $input['nom'],
    $input['couleur'],
    $input['icone']
);
```

Puis elle transmet cet objet à `GestionCategorie` :

```php
$this->gestionnaire->create($cat)
```

La fonctionnalité suit ce chemin :

```text
Requête HTTP
     ↓
CategorieController
     ↓
création de l'objet Categorie
     ↓
GestionCategorie::create()
     ↓
fichier JSON
```

Plusieurs objets participent donc au traitement.

### 2.10. Faire fonctionner la modification

Dans `put()` :

```php
$cat = new Categorie(
    $input['nom'],
    $input['couleur'],
    $input['icone'],
    $input['id']
);
```

Le contrôleur crée un objet `Categorie`.

Puis :

```php
$this->gestionnaire->update($cat)
```

`GestionCategorie` reçoit l'objet et cherche la catégorie correspondante.

La méthode :

```php
public function update(Categorie $cat)
```

montre clairement l'utilisation d'un objet comme paramètre.

### 2.11. Faire fonctionner la suppression

Pour la suppression, `CategorieController` envoie l'identifiant :

```php
$this->gestionnaire->delete($input['id'])
```

Puis `GestionCategorie` cherche les objets correspondants :

```php
$categories = $this->readAll();
```

Chaque élément du tableau est un objet `Categorie`.

La classe utilise ensuite :

```php
$cat->getId()
```

pour comparer l'identifiant.

### 2.12. Observer le résultat final

Le `router.php` reçoit la requête :

```text
router
   ↓
CategorieController
   ↓
GestionCategorie
   ↓
Categorie
```

Le routeur choisit le contrôleur :

```php
$controller = new CategorieController();
```

Puis :

```php
$controller->handleRequest($method);
```

La fonctionnalité est donc réalisée par plusieurs objets et plusieurs classes.

### 2.13. Exercice — Ajouter une catégorie

À partir du code fourni, ajoutez une catégorie :

```text
Nom     : PHP
Couleur : Vert
Icône   : Code
```

Utilisez :

```text
CategorieController
        ↓
GestionCategorie
        ↓
Categorie
```

La création doit passer par un objet `Categorie`.

### 2.14. Exercice — Lire les catégories

Utilisez `readAll()` pour récupérer les catégories.

Pour chaque objet `Categorie`, affichez :

```text
nom
couleur
icone
```

Le programme doit afficher les trois catégories présentes dans le fichier JSON.

### 2.15. Exercice — Modifier une catégorie

Utilisez la classe `CategorieController` pour modifier la catégorie :

```text
ID      : 3
Nom     : Laravel
Couleur : Rouge
Icône   : Code
```

Le contrôleur doit créer un objet `Categorie` puis le transmettre à `GestionCategorie`.

### 2.16. Travail à faire

À partir du code du Sprint 2, expliquez et vérifiez la collaboration entre :

```text
Categorie
GestionCategorie
CategorieController
```

Le programme doit permettre de :

* créer des objets `Categorie` ;
* transmettre un objet `Categorie` à `GestionCategorie` ;
* récupérer plusieurs objets avec `readAll()` ;
* utiliser les objets retournés ;
* utiliser `GestionCategorie` depuis `CategorieController`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* un schéma de collaboration des trois classes ;
* un exemple d'objet passé comme paramètre ;
* un exemple d'un tableau contenant des objets ;
* un exemple d'objet utilisé par une autre classe ;
* une courte explication de la dépendance entre `GestionCategorie` et `Categorie`.

Ajoutez les fichiers du Sprint 2 utilisés dans votre réalisation.

**Résultat attendu :**

La fonctionnalité de gestion des catégories fonctionne avec :

```text
CategorieController
        ↓
GestionCategorie
        ↓
Categorie
```

La lecture affiche :

```text
Développement Web
Design UI/UX
Laravel
```

La création d'une nouvelle catégorie passe par un objet `Categorie`.

**Critère de réussite :**

* `Categorie` est utilisée par `GestionCategorie`.
* `GestionCategorie` utilise des objets `Categorie`.
* `CategorieController` utilise un objet `GestionCategorie`.
* `create()` reçoit un objet `Categorie`.
* `readAll()` retourne un tableau contenant des objets `Categorie`.
* Le programme utilise les méthodes des objets pour accéder aux données.
* La fonctionnalité existante du Sprint 2 continue de fonctionner.

---

## Bilan

**Vous avez appris :**

* à faire collaborer plusieurs objets ;
* à utiliser un objet comme paramètre ;
* à stocker plusieurs objets dans un tableau ;
* à retourner plusieurs objets ;
* à faire dépendre une classe d'une autre classe ;
* à faire utiliser `GestionCategorie` par `CategorieController`.

**Vous avez réalisé :**

```text
CategorieController
        ↓
GestionCategorie
        ↓
Categorie
```

La classe `Categorie` représente une catégorie.

`GestionCategorie` travaille avec plusieurs objets `Categorie`.

`CategorieController` utilise `GestionCategorie` pour traiter les requêtes.

Vous savez maintenant faire collaborer plusieurs objets pour réaliser une fonctionnalité.

## Glossaire

* **Collaboration** : plusieurs objets travaillent ensemble pour réaliser une fonctionnalité.
* **Dépendance** : une classe utilise une autre classe.
* **Objet comme paramètre** : objet transmis à une méthode.
* **Objet comme élément de tableau** : objet stocké dans un tableau avec d'autres objets.
* **Objet retourné** : objet ou tableau d'objets fourni par une méthode.
* **Collection** : ensemble de plusieurs objets regroupés dans un tableau.
* **`Categorie`** : classe représentant une catégorie.
* **`GestionCategorie`** : classe qui travaille avec les objets `Categorie`.
* **`CategorieController`** : classe qui reçoit les requêtes et utilise `GestionCategorie`.
