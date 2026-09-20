---
title: "Spécialiser et polymorphiser des objets"
layout: tuto
slug: "specialiser-et-polymorphiser-des-objets"
permalink: /tutos/:slug/
tuto_id: "T.221.122"
type: "classique"
version: "normal"
ua: "UA.221.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* créer une classe enfant ;
* utiliser l'héritage avec `extends` ;
* réutiliser une classe parent ;
* redéfinir une méthode ;
* utiliser `parent` ;
* utiliser plusieurs objets avec le même type parent ;
* comprendre le polymorphisme.

À la fin du tutoriel, plusieurs types de catégories pourront être utilisés par le même code.

## 2. Prérequis

Vous devez savoir :

* créer une classe ;
* créer un objet ;
* utiliser un constructeur ;
* utiliser `private` ;
* utiliser des getters et des setters ;
* faire collaborer plusieurs objets ;
* utiliser un objet comme paramètre ;
* utiliser un tableau d'objets.

Ces notions ont été étudiées dans :

* **T.221.111 — Créer et manipuler un objet**
* **T.221.112 — Encapsuler les données d’un objet**
* **T.221.121 — Faire collaborer plusieurs objets**

## Données de départ

Le Sprint 2 contient déjà la classe `Categorie`.

Fichier :

```text
backend/classes/Categorie.php
```

La classe possède notamment la méthode :

```php
public function toArray()
{
    return [
        'id' => $this->id,
        'nom' => $this->nom,
        'couleur' => $this->couleur,
        'icone' => $this->icone
    ];
}
```

Elle est utilisée par `GestionCategorie`.

```text
GestionCategorie
       ↓
Categorie
```

Dans ce tutoriel, nous allons créer deux classes spécialisées :

```text
Categorie
   ↑        ↑
   |        |
CategorieWeb   CategorieDesign
```

Les deux classes vont réutiliser `Categorie` et modifier une méthode.

---

## Partie 1 — Théorie

### 1.1. Classe parent

Une classe peut servir de base à d'autres classes.

Cette classe est appelée **classe parent**.

Dans notre exemple :

```php
class Categorie
{
}
```

`Categorie` sera la classe parent.

Elle contient les éléments communs aux catégories.

### 1.2. Classe enfant

Une classe peut hériter d'une autre classe.

La nouvelle classe est appelée **classe enfant**.

Exemple :

```php
class CategorieWeb extends Categorie
{
}
```

`CategorieWeb` est une classe enfant de `Categorie`.

Elle récupère les éléments accessibles de la classe parent.

La relation est :

```text
Categorie
    ↑
    |
CategorieWeb
```

### 1.3. Le mot-clé `extends`

Le mot-clé `extends` indique qu'une classe hérite d'une autre classe.

Exemple :

```php
class CategorieWeb extends Categorie
{
}
```

Cela signifie :

> `CategorieWeb` est une spécialisation de `Categorie`.

La classe enfant peut utiliser les méthodes héritées de la classe parent.

Par exemple, `Categorie` possède :

```php
public function getNom()
{
    return $this->nom;
}
```

Un objet `CategorieWeb` peut donc utiliser :

```php
$categorie->getNom();
```

sans recréer cette méthode.

### 1.4. Réutiliser le constructeur parent

Une classe enfant peut définir son propre constructeur.

Exemple :

```php
class CategorieWeb extends Categorie
{
    public function __construct(
        string $nom,
        string $couleur,
        string $icone
    ) {
        parent::__construct(
            0,
            $nom,
            $couleur,
            $icone
        );
    }
}
```

`parent` représente la classe parent.

```php
parent::__construct(...)
```

appelle le constructeur de `Categorie`.

La classe enfant peut donc réutiliser le travail déjà réalisé dans la classe parent.

### 1.5. Redéfinir une méthode

Une classe enfant peut redéfinir une méthode héritée.

On appelle cela la **redéfinition**.

Dans `Categorie` :

```php
public function toArray()
{
    return [
        'id' => $this->id,
        'nom' => $this->nom,
        'couleur' => $this->couleur,
        'icone' => $this->icone
    ];
}
```

Une classe enfant peut définir une nouvelle version :

```php
public function toArray()
{
    return [
        'id' => $this->getId(),
        'nom' => $this->getNom(),
        'couleur' => $this->getCouleur(),
        'icone' => $this->getIcone(),
        'type' => 'Web'
    ];
}
```

La méthode porte le même nom.

Mais son comportement est différent.

### 1.6. Utiliser `parent`

Une méthode redéfinie peut utiliser la version de la classe parent.

Exemple :

```php
public function toArray()
{
    $data = parent::toArray();

    $data['type'] = 'Web';

    return $data;
}
```

`parent::toArray()` appelle la méthode de la classe parent.

On peut ensuite ajouter une information.

Cette technique évite de réécrire tout le code de la classe parent.

### 1.7. Spécialiser une classe

Une classe enfant peut ajouter un comportement particulier.

Exemple :

```php
class CategorieWeb extends Categorie
{
    public function toArray()
    {
        $data = parent::toArray();

        $data['type'] = 'Web';

        return $data;
    }
}
```

`CategorieWeb` reste une `Categorie`.

Mais elle ajoute une information spécifique :

```text
type : Web
```

Une autre classe peut faire la même chose :

```php
class CategorieDesign extends Categorie
{
    public function toArray()
    {
        $data = parent::toArray();

        $data['type'] = 'Design';

        return $data;
    }
}
```

### 1.8. Même type parent, comportements différents

Les deux objets suivants sont de classes différentes :

```php
$categorieWeb = new CategorieWeb(
    "Laravel",
    "Bleu",
    "Code"
);

$categorieDesign = new CategorieDesign(
    "Design UI/UX",
    "Rose",
    "Pinceau"
);
```

Mais les deux sont aussi des objets `Categorie`.

On peut donc les utiliser dans un même tableau :

```php
$categories = [
    $categorieWeb,
    $categorieDesign
];
```

Le tableau contient des objets de classes différentes.

### 1.9. Polymorphisme

Le **polymorphisme** permet d'utiliser des objets de classes différentes à travers un même type parent.

Exemple :

```php
function afficherCategorie(Categorie $categorie)
{
    return $categorie->toArray();
}
```

La fonction attend une `Categorie`.

On peut lui transmettre :

```php
afficherCategorie($categorieWeb);
```

ou :

```php
afficherCategorie($categorieDesign);
```

Les deux objets sont acceptés.

Mais chacun utilise sa propre version de `toArray()`.

Avec `CategorieWeb` :

```text
type : Web
```

Avec `CategorieDesign` :

```text
type : Design
```

C'est le polymorphisme.

### 1.10. À retenir

* Une **classe parent** contient les éléments communs.
* Une **classe enfant** hérite d'une classe parent.
* `extends` permet de créer un héritage.
* Une classe enfant peut redéfinir une méthode.
* `parent` permet d'utiliser une méthode de la classe parent.
* Deux classes enfants peuvent avoir des comportements différents.
* Le polymorphisme permet de manipuler ces objets avec le même type parent.

---

## Partie 2 — Pratique

### 2.1. Créer `CategorieWeb`

Dans :

```text
backend/classes/
```

créez :

```text
CategorieWeb.php
```

Ajoutez :

```php
<?php

require_once __DIR__ . '/Categorie.php';

class CategorieWeb extends Categorie
{
}
```

La classe `CategorieWeb` hérite maintenant de `Categorie`.

### 2.2. Créer un objet `CategorieWeb`

Créez un objet :

```php
$categorieWeb = new CategorieWeb(
    "Laravel",
    "Bleu",
    "Code"
);
```

L'objet utilise le constructeur hérité de `Categorie`.

Vous pouvez utiliser les méthodes héritées :

```php
echo $categorieWeb->getNom();
```

Résultat attendu :

```text
Laravel
```

### 2.3. Créer `CategorieDesign`

Créez :

```text
backend/classes/CategorieDesign.php
```

Ajoutez :

```php
<?php

require_once __DIR__ . '/Categorie.php';

class CategorieDesign extends Categorie
{
}
```

Créez un objet :

```php
$categorieDesign = new CategorieDesign(
    "Design UI/UX",
    "Rose",
    "Pinceau"
);
```

La classe enfant réutilise les méthodes de `Categorie`.

### 2.4. Ajouter un comportement spécifique

Dans `CategorieWeb`, redéfinissez `toArray()` :

```php
public function toArray()
{
    $data = parent::toArray();

    $data['type'] = 'Web';

    return $data;
}
```

La méthode `parent::toArray()` récupère d'abord les données de `Categorie`.

Puis la classe ajoute :

```php
$data['type'] = 'Web';
```

### 2.5. Redéfinir `toArray()` dans `CategorieDesign`

Dans `CategorieDesign` :

```php
public function toArray()
{
    $data = parent::toArray();

    $data['type'] = 'Design';

    return $data;
}
```

Les deux classes ont maintenant leur propre version de `toArray()`.

### 2.6. Tester les deux comportements

Créez :

```php
$categorieWeb = new CategorieWeb(
    "Laravel",
    "Bleu",
    "Code"
);

$categorieDesign = new CategorieDesign(
    "Design UI/UX",
    "Rose",
    "Pinceau"
);

print_r($categorieWeb->toArray());

print_r($categorieDesign->toArray());
```

Résultat attendu :

```text
Array
(
    [id] =>
    [nom] => Laravel
    [couleur] => Bleu
    [icone] => Code
    [type] => Web
)

Array
(
    [id] =>
    [nom] => Design UI/UX
    [couleur] => Rose
    [icone] => Pinceau
    [type] => Design
)
```

Chaque objet utilise la version adaptée de `toArray()`.

### 2.7. Utiliser un même type parent

Créez un tableau :

```php
$categories = [
    new CategorieWeb(
        "Laravel",
        "Bleu",
        "Code"
    ),
    new CategorieDesign(
        "Design UI/UX",
        "Rose",
        "Pinceau"
    )
];
```

Le tableau contient deux classes différentes.

Mais les deux objets sont des `Categorie`.

### 2.8. Utiliser le polymorphisme dans une boucle

Ajoutez :

```php
foreach ($categories as $categorie) {
    print_r($categorie->toArray());
}
```

Le programme utilise le même appel :

```php
$categorie->toArray();
```

Mais le comportement dépend de l'objet réel.

Pour `CategorieWeb` :

```text
type : Web
```

Pour `CategorieDesign` :

```text
type : Design
```

### 2.9. Utiliser un paramètre de type parent

Créez une fonction :

```php
function convertirCategorie(Categorie $categorie): array
{
    return $categorie->toArray();
}
```

La fonction attend une `Categorie`.

Vous pouvez lui envoyer un `CategorieWeb` :

```php
$dataWeb = convertirCategorie($categorieWeb);
```

Ou un `CategorieDesign` :

```php
$dataDesign = convertirCategorie($categorieDesign);
```

Le même paramètre accepte les deux classes.

### 2.10. Utiliser `GestionCategorie`

Dans le Sprint 2, `GestionCategorie` contient :

```php
public function create(Categorie $cat)
{
    $categories = $this->readAll();

    // ...

    $categories[] = $cat;

    // ...
}
```

Le paramètre est :

```php
Categorie $cat
```

On peut donc lui transmettre un objet `CategorieWeb` :

```php
$categorieWeb = new CategorieWeb(
    "Laravel",
    "Bleu",
    "Code"
);

$gestionnaire->create($categorieWeb);
```

On peut également transmettre un objet `CategorieDesign` :

```php
$categorieDesign = new CategorieDesign(
    "Design UI/UX",
    "Rose",
    "Pinceau"
);

$gestionnaire->create($categorieDesign);
```

Le même code accepte donc plusieurs classes enfants.

C'est une utilisation du polymorphisme.

### 2.11. Vérifier le comportement dans `GestionCategorie`

Dans `create()`, observez :

```php
$arrayData = array_map(
    function($c) {
        return $c->toArray();
    },
    $categories
);
```

La méthode appelle :

```php
$c->toArray()
```

Le programme n'a pas besoin de vérifier :

```text
CategorieWeb ?
CategorieDesign ?
Categorie ?
```

Chaque objet utilise sa propre méthode `toArray()`.

### 2.12. Ajouter un constructeur spécifique

Une classe enfant peut aussi avoir son propre constructeur.

Dans `CategorieWeb` :

```php
public function __construct(
    string $nom
) {
    parent::__construct(
        $nom,
        "Bleu",
        "Code"
    );
}
```

La classe fixe maintenant les valeurs communes au type Web.

On peut créer l'objet avec seulement :

```php
$categorieWeb = new CategorieWeb(
    "Laravel"
);
```

Le constructeur enfant appelle celui du parent :

```php
parent::__construct(
    $nom,
    "Bleu",
    "Code"
);
```

### 2.13. Utiliser le même principe pour `CategorieDesign`

Dans `CategorieDesign` :

```php
public function __construct(
    string $nom
) {
    parent::__construct(
        $nom,
        "Rose",
        "Pinceau"
    );
}
```

On peut maintenant créer :

```php
$categorieDesign = new CategorieDesign(
    "Design UI/UX"
);
```

La classe enfant réutilise le constructeur parent.

### 2.14. Tester les deux classes spécialisées

Utilisez :

```php
$categories = [
    new CategorieWeb("Laravel"),
    new CategorieDesign("Design UI/UX")
];

foreach ($categories as $categorie) {
    print_r($categorie->toArray());
}
```

Résultat attendu :

```text
Array
(
    [id] =>
    [nom] => Laravel
    [couleur] => Bleu
    [icone] => Code
    [type] => Web
)

Array
(
    [id] =>
    [nom] => Design UI/UX
    [couleur] => Rose
    [icone] => Pinceau
    [type] => Design
)
```

### 2.15. Observer la relation parent / enfant

La relation entre les classes est maintenant :

```text
              Categorie
                 ↑
        ┌────────┴────────┐
        │                 │
 CategorieWeb      CategorieDesign
```

Les classes enfants réutilisent `Categorie`.

Mais chacune peut avoir son propre comportement.

### 2.16. Exercice — Créer une catégorie Web

Créez une classe :

```text
CategorieWeb
```

Elle doit :

* hériter de `Categorie` ;
* utiliser `extends` ;
* avoir un constructeur ;
* appeler `parent::__construct()` ;
* redéfinir `toArray()` ;
* ajouter :

```text
type : Web
```

Créez ensuite :

```php
$categorie = new CategorieWeb("Laravel");
```

### 2.17. Exercice — Créer une catégorie Design

Créez :

```text
CategorieDesign
```

Elle doit :

* hériter de `Categorie` ;
* appeler le constructeur parent ;
* redéfinir `toArray()` ;
* ajouter :

```text
type : Design
```

Créez ensuite :

```php
$categorie = new CategorieDesign("Design UI/UX");
```

### 2.18. Exercice — Utiliser le polymorphisme

Créez un tableau contenant :

```text
CategorieWeb
CategorieDesign
CategorieWeb
```

Puis utilisez une seule boucle :

```php
foreach ($categories as $categorie) {
    // utiliser toArray()
}
```

Le code de la boucle ne doit pas tester la classe réelle de l'objet.

### 2.19. Travail à faire

À partir de la classe `Categorie` du Sprint 2, créez deux classes spécialisées :

```text
CategorieWeb
CategorieDesign
```

Elles doivent :

* hériter de `Categorie` ;
* utiliser `extends` ;
* utiliser `parent::__construct()` ;
* redéfinir `toArray()` ;
* produire un type différent ;
* être utilisables comme des objets `Categorie`.

Utilisez ensuite ces objets avec `GestionCategorie`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* un schéma parent / enfants ;
* une explication simple de `extends` ;
* un exemple de `parent::__construct()` ;
* un exemple de redéfinition de `toArray()` ;
* un exemple de polymorphisme avec un tableau contenant plusieurs classes enfants.

Ajoutez les fichiers :

```text
backend/classes/
├── Categorie.php
├── CategorieWeb.php
├── CategorieDesign.php
└── GestionCategorie.php
```

**Résultat attendu :**

Le programme peut manipuler ensemble :

```text
CategorieWeb
CategorieDesign
CategorieWeb
```

avec le même code :

```php
foreach ($categories as $categorie) {
    print_r($categorie->toArray());
}
```

Chaque objet utilise son propre comportement.

**Critère de réussite :**

* `CategorieWeb` hérite de `Categorie`.
* `CategorieDesign` hérite de `Categorie`.
* `extends` est utilisé correctement.
* `parent::__construct()` est utilisé dans les classes enfants.
* `toArray()` est redéfinie.
* `parent::toArray()` est utilisé.
* Les objets enfants peuvent être passés à une méthode qui attend `Categorie`.
* Le même code peut fonctionner avec plusieurs classes enfants.
* Aucun `interface` ou classe abstraite n'est utilisé.

---

## Bilan

**Vous avez appris :**

* à créer une classe enfant ;
* à utiliser l'héritage ;
* à utiliser `extends` ;
* à réutiliser une classe parent ;
* à utiliser `parent` ;
* à redéfinir une méthode ;
* à spécialiser un objet ;
* à utiliser le polymorphisme.

**Vous avez réalisé :**

```text
              Categorie
                 ↑
        ┌────────┴────────┐
        │                 │
 CategorieWeb      CategorieDesign
```

Les deux classes peuvent être manipulées avec le même type parent :

```php
Categorie $categorie
```

mais elles peuvent avoir des comportements différents.

Vous savez maintenant utiliser l'héritage comme mécanisme de spécialisation et le polymorphisme pour manipuler plusieurs types d'objets avec un même code.

Les interfaces, les contrats et les implémentations multiples seront étudiés dans **T.221.131**.

## Glossaire

* **Classe parent** : classe de base utilisée pour créer des classes enfants.
* **Classe enfant** : classe qui hérite d'une autre classe.
* **Héritage** : mécanisme permettant à une classe de réutiliser une autre classe.
* **`extends`** : mot-clé utilisé pour créer une classe enfant.
* **Spécialisation** : création d'une classe plus précise à partir d'une classe générale.
* **Redéfinition** : nouvelle version d'une méthode héritée.
* **`parent`** : référence utilisée pour appeler un élément de la classe parent.
* **Polymorphisme** : possibilité d'utiliser plusieurs classes enfants avec un même type parent.
* **Comportement** : action réalisée par un objet, souvent définie par une méthode.
