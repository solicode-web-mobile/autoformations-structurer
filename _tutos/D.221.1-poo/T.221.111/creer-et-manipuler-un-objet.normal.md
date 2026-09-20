---
title: "Créer et manipuler un objet"
layout: tuto
slug: "creer-et-manipuler-un-objet"
permalink: /tutos/:slug/
tuto_id: "T.221.111"
type: "classique"
version: "normal"
ua: "UA.221.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* créer une classe en PHP ;
* définir les propriétés d’un objet ;
* créer une méthode ;
* utiliser `$this` ;
* créer un constructeur ;
* créer plusieurs objets à partir d’une classe.

À la fin du tutoriel, vous aurez une première classe `Categorie` et plusieurs objets `Categorie`.

## 2. Prérequis

Vous devez savoir :

* créer un fichier PHP ;
* déclarer une variable ;
* utiliser une fonction PHP ;
* afficher une valeur avec `echo` ;
* exécuter un fichier PHP.

## Données de départ

L’application travaille avec des catégories.

Voici les données utilisées dans le tutoriel :

| ID | Nom               | Couleur | Icône   |
| -: | ----------------- | ------- | ------- |
|  1 | Développement Web | Bleu    | Code    |
|  2 | Design UI/UX      | Rose    | Pinceau |
|  3 | Laravel           | Bleu    | Code    |

Une catégorie possède donc quatre données :

```text
id
nom
couleur
icone
```

Le premier objectif est de représenter ces données avec une classe `Categorie`.

---

## Partie 1 — Théorie

### 1.1. Classe

Une **classe** décrit un type d’objet.

Elle permet de regrouper :

* les données de l’objet ;
* les actions de l’objet.

Exemple :

```php
class Categorie
{
}
```

Ici, `Categorie` est une classe.

La classe ne représente pas encore une catégorie précise.

Elle décrit simplement ce qu’est une catégorie dans notre programme.

**Exemple :**

```php
class Categorie
{
    public $id;
    public $nom;
    public $couleur;
    public $icone;
}
```

La classe contient quatre propriétés.

### 1.2. Propriété

Une **propriété** représente une donnée d’un objet.

Dans notre classe :

```php
public $id;
public $nom;
public $couleur;
public $icone;
```

La catégorie possède donc :

```text
id
nom
couleur
icone
```

Chaque objet créé à partir de cette classe possède ses propres valeurs.

### 1.3. Objet

Un **objet** est une instance d’une classe.

La classe est le modèle.

L’objet est une catégorie réelle créée à partir de ce modèle.

Pour créer un objet, on utilise `new`.

```php
$categorie = new Categorie();
```

La variable `$categorie` contient maintenant un objet `Categorie`.

### 1.4. Instanciation

L'action de créer un objet à partir d'une classe s'appelle **l'instanciation**.

Exemple :

```php
$categorie = new Categorie();
```

Ici :

* `Categorie` est la classe ;
* `new` crée un objet ;
* `$categorie` contient l’objet.

On peut créer plusieurs objets à partir de la même classe :

```php
$categorie1 = new Categorie();
$categorie2 = new Categorie();
```

Les deux objets utilisent la même classe.

Mais ils peuvent contenir des données différentes.

### 1.5. Accéder à une propriété

Pour accéder à une propriété d’un objet, on utilise `->`.

Exemple :

```php
$categorie->nom = "Laravel";
```

On peut ensuite lire la valeur :

```php
echo $categorie->nom;
```

Résultat :

```text
Laravel
```

### 1.6. Méthode

Une **méthode** est une fonction définie dans une classe.

Elle représente une action réalisée par l’objet.

Exemple :

```php
public function afficher()
{
    echo $this->nom;
}
```

L’objet peut utiliser cette méthode :

```php
$categorie->afficher();
```

### 1.7. `$this`

Dans une méthode, `$this` représente l’objet courant.

Exemple :

```php
public function afficher()
{
    echo $this->nom;
}
```

`$this->nom` signifie :

> la propriété `nom` de l’objet qui utilise la méthode.

Avec :

```php
$categorie1->afficher();
```

`$this` représente `$categorie1`.

Avec :

```php
$categorie2->afficher();
```

`$this` représente `$categorie2`.

La même méthode peut donc fonctionner avec plusieurs objets.

### 1.8. Constructeur

Le **constructeur** permet d’initialiser un objet au moment de sa création.

Il porte le nom :

```php
__construct
```

Exemple :

```php
public function __construct($id, $nom, $couleur, $icone)
{
    $this->id = $id;
    $this->nom = $nom;
    $this->couleur = $couleur;
    $this->icone = $icone;
}
```

On peut alors créer un objet avec ses données :

```php
$categorie = new Categorie(
    1,
    "Développement Web",
    "Bleu",
    "Code"
);
```

Les données sont transmises au constructeur.

### 1.9. À retenir

* Une **classe** décrit un type d’objet.
* Un **objet** est créé à partir d’une classe.
* `new` permet de créer un objet.
* Une **propriété** stocke une donnée de l’objet.
* Une **méthode** représente une action de l’objet.
* `$this` représente l’objet courant.
* Le **constructeur** initialise l’objet lors de sa création.

---

## Partie 2 — Pratique

### 2.1. Créer le fichier `Categorie.php`

Créez le fichier :

```text
backend/
└── Categorie.php
```

Ajoutez la classe suivante :

```php
<?php

class Categorie
{
    public $id;
    public $nom;
    public $couleur;
    public $icone;
}
```

La classe `Categorie` contient maintenant quatre propriétés.

### 2.2. Créer un objet

Créez un fichier :

```text
backend/
└── test-categorie.php
```

Ajoutez :

```php
<?php

require_once 'Categorie.php';

$categorie = new Categorie();
```

Vous avez créé un objet `Categorie`.

### 2.3. Donner des valeurs à l’objet

Ajoutez les valeurs de la première catégorie :

```php
$categorie->id = 1;
$categorie->nom = "Développement Web";
$categorie->couleur = "Bleu";
$categorie->icone = "Code";
```

Affichez le nom :

```php
echo $categorie->nom;
```

Résultat attendu :

```text
Développement Web
```

### 2.4. Créer une méthode

Retournez dans `Categorie.php`.

Ajoutez la méthode :

```php
public function afficher()
{
    echo $this->nom;
}
```

La classe devient :

```php
<?php

class Categorie
{
    public $id;
    public $nom;
    public $couleur;
    public $icone;

    public function afficher()
    {
        echo $this->nom;
    }
}
```

Dans `test-categorie.php`, remplacez :

```php
echo $categorie->nom;
```

par :

```php
$categorie->afficher();
```

Résultat attendu :

```text
Développement Web
```

### 2.5. Utiliser plusieurs propriétés dans la méthode

Modifiez la méthode :

```php
public function afficher()
{
    echo $this->nom . " - " . $this->couleur . " - " . $this->icone;
}
```

Appelez la méthode :

```php
$categorie->afficher();
```

Résultat attendu :

```text
Développement Web - Bleu - Code
```

### 2.6. Ajouter le constructeur

Dans `Categorie.php`, modifiez la classe :

```php
<?php

class Categorie
{
    public $id;
    public $nom;
    public $couleur;
    public $icone;

    public function __construct($id, $nom, $couleur, $icone)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
    }

    public function afficher()
    {
        echo $this->nom . " - " . $this->couleur . " - " . $this->icone;
    }
}
```

Le constructeur reçoit maintenant les quatre données.

### 2.7. Créer un objet avec le constructeur

Dans `test-categorie.php`, remplacez la création précédente :

```php
$categorie = new Categorie();
```

par :

```php
$categorie = new Categorie(
    1,
    "Développement Web",
    "Bleu",
    "Code"
);
```

Il n’est plus nécessaire d’écrire séparément :

```php
$categorie->id = 1;
$categorie->nom = "Développement Web";
$categorie->couleur = "Bleu";
$categorie->icone = "Code";
```

Le constructeur initialise directement l’objet.

### 2.8. Créer un deuxième objet

Ajoutez :

```php
$categorie2 = new Categorie(
    2,
    "Design UI/UX",
    "Rose",
    "Pinceau"
);
```

Affichez les deux objets :

```php
$categorie->afficher();

echo "<br>";

$categorie2->afficher();
```

Résultat attendu :

```text
Développement Web - Bleu - Code
Design UI/UX - Rose - Pinceau
```

### 2.9. Créer un troisième objet

Ajoutez :

```php
$categorie3 = new Categorie(
    3,
    "Laravel",
    "Bleu",
    "Code"
);
```

Puis :

```php
echo "<br>";

$categorie3->afficher();
```

Résultat attendu :

```text
Développement Web - Bleu - Code
Design UI/UX - Rose - Pinceau
Laravel - Bleu - Code
```

### 2.10. Modifier une propriété d’un objet

Une propriété peut être modifiée après la création de l’objet.

Ajoutez :

```php
$categorie3->couleur = "Rouge";
```

Puis :

```php
$categorie3->afficher();
```

Résultat attendu :

```text
Laravel - Rouge - Code
```

À ce stade, les propriétés sont accessibles directement.

Le contrôle de cet accès sera étudié dans le tutoriel suivant sur **l’encapsulation**.

### 2.11. Exercice — Créer deux objets

Créez les deux objets suivants :

```text
id      : 1
nom     : Développement Web
couleur : Bleu
icone   : Code
```

et :

```text
id      : 2
nom     : Design UI/UX
couleur : Rose
icone   : Pinceau
```

Utilisez le constructeur.

Appelez ensuite `afficher()` pour chaque objet.

### 2.12. Exercice — Créer l’objet Laravel

Créez :

```text
id      : 3
nom     : Laravel
couleur : Bleu
icone   : Code
```

Puis modifiez sa couleur avec :

```text
Rouge
```

Affichez le résultat final avec `afficher()`.

### 2.13. Travail à faire

Complétez la classe `Categorie` et le fichier de test.

Votre programme doit permettre de :

* créer une catégorie avec `new` ;
* initialiser ses données avec le constructeur ;
* créer plusieurs objets `Categorie` ;
* modifier une propriété ;
* appeler la méthode `afficher()`.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le rôle de la classe `Categorie` ;
* un exemple de création d’objet ;
* un exemple d’utilisation du constructeur ;
* un exemple d’appel de la méthode `afficher()` ;
* une capture ou une copie du résultat obtenu.

Le code réalisé doit être présent dans :

```text
backend/
├── Categorie.php
└── test-categorie.php
```

**Résultat attendu :**

Le programme affiche les trois catégories :

```text
Développement Web - Bleu - Code
Design UI/UX - Rose - Pinceau
Laravel - Rouge - Code
```

**Critère de réussite :**

Les trois objets sont créés à partir de la classe `Categorie`, le constructeur initialise leurs données et la méthode `afficher()` produit le résultat attendu.

---

## Bilan

**Vous avez appris :**

* à créer une classe ;
* à créer un objet avec `new` ;
* à définir des propriétés ;
* à créer une méthode ;
* à utiliser `$this` ;
* à créer un constructeur ;
* à créer plusieurs objets à partir de la même classe.

**Vous avez réalisé :**

```text
Categorie.php
test-categorie.php
```

Vous savez maintenant transformer une donnée de l’application en objet PHP.

Dans le prochain tutoriel, vous allez contrôler l’accès aux données de l’objet avec **l’encapsulation**.

## Glossaire

* **Classe** : modèle utilisé pour créer des objets.
* **Objet** : élément créé à partir d’une classe.
* **Instanciation** : création d’un objet à partir d’une classe.
* **Propriété** : donnée stockée dans un objet.
* **Méthode** : action définie dans une classe.
* **`$this`** : objet courant dans une méthode.
* **Constructeur** : méthode appelée automatiquement lors de la création d’un objet.
* **`new`** : mot-clé utilisé pour créer un objet.
