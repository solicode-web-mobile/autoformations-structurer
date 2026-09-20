---
title: "Encapsuler les données d’un objet"
layout: tuto
slug: "encapsuler-donnees-objet"
permalink: /tutos/:slug/
tuto_id: "T.221.112"
type: "classique"
version: "normal"
ua: "UA.221.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* protéger les données d’un objet ;
* utiliser `private`, `public` et `protected` ;
* comprendre l’encapsulation ;
* créer des getters ;
* créer des setters ;
* typer les propriétés ;
* typer les paramètres ;
* typer les valeurs de retour.

À la fin du tutoriel, la classe `Categorie` sera encapsulée et typée.

## 2. Prérequis

Vous devez savoir :

* créer une classe ;
* créer un objet avec `new` ;
* définir des propriétés ;
* créer une méthode ;
* utiliser `$this` ;
* utiliser un constructeur.

Ces notions ont été étudiées dans **T.221.111 — Créer et manipuler un objet**.

## Données de départ

La classe `Categorie` créée dans le tutoriel précédent contient quatre propriétés :

```text
id
nom
couleur
icone
```

La version actuelle permet un accès direct :

```php
$categorie->nom = "Laravel";
```

L'objectif est maintenant de contrôler cet accès.

---

## Partie 1 — Théorie

### 1.1. Pourquoi contrôler l’accès aux données ?

Dans la première version de `Categorie`, les propriétés sont publiques :

```php
class Categorie
{
    public $id;
    public $nom;
    public $couleur;
    public $icone;
}
```

Le programme extérieur peut donc modifier directement les données :

```php
$categorie->nom = "Laravel";
$categorie->couleur = "Bleu";
```

La classe ne contrôle pas ces modifications.

Nous voulons que l'objet contrôle l'accès à ses propres données.

C'est le principe de **l'encapsulation**.

### 1.2. Visibilité `public`

`public` signifie que le membre est accessible depuis l'extérieur de la classe.

Exemple :

```php
class Categorie
{
    public $nom;
}
```

On peut alors écrire :

```php
$categorie->nom = "Laravel";
```

La propriété est directement accessible.

### 1.3. Visibilité `private`

`private` signifie que le membre appartient uniquement à la classe.

Exemple :

```php
class Categorie
{
    private $nom;
}
```

Cette écriture n'est plus autorisée :

```php
$categorie->nom = "Laravel";
```

Le programme extérieur doit passer par une méthode de la classe.

### 1.4. Visibilité `protected`

`protected` permet l'accès :

* dans la classe ;
* dans une classe qui hérite de cette classe.

La propriété n'est pas accessible directement depuis l'extérieur.

Exemple :

```php
class Categorie
{
    protected $nom;
}
```

Dans ce tutoriel, nous allons surtout utiliser `private` pour les données de `Categorie`.

### 1.5. Encapsulation

L'**encapsulation** consiste à protéger les données internes d'un objet et à contrôler leur accès.

Au lieu de :

```php
$categorie->nom = "Laravel";
```

on utilise une méthode :

```php
$categorie->setNom("Laravel");
```

Pour lire la donnée :

```php
$categorie->getNom();
```

La propriété reste cachée dans l'objet.

### 1.6. Getter

Un **getter** est une méthode qui permet de lire une propriété privée.

Exemple :

```php
private $nom;

public function getNom()
{
    return $this->nom;
}
```

Depuis l'extérieur :

```php
echo $categorie->getNom();
```

Le programme ne lit plus directement la propriété.

### 1.7. Setter

Un **setter** est une méthode qui permet de modifier une propriété privée.

Exemple :

```php
private $nom;

public function setNom($nom)
{
    $this->nom = $nom;
}
```

Depuis l'extérieur :

```php
$categorie->setNom("Laravel");
```

La modification passe donc par une méthode de la classe.

### 1.8. Typage d’une propriété

PHP permet de préciser le type d'une propriété.

Exemple :

```php
private string $nom;
```

La propriété `nom` doit contenir une chaîne de caractères.

Pour un identifiant entier :

```php
private int $id;
```

Une propriété peut aussi accepter `null` :

```php
private ?int $id;
```

Ici, `id` peut contenir :

```text
un entier
ou
null
```

### 1.9. Typage d’un paramètre

Un paramètre peut également être typé.

Exemple :

```php
public function setNom(string $nom)
{
    $this->nom = $nom;
}
```

Le paramètre `$nom` est une chaîne.

Pour un identifiant :

```php
public function setId(?int $id)
{
    $this->id = $id;
}
```

Le paramètre peut contenir un entier ou `null`.

### 1.10. Typage de la valeur de retour

On peut préciser le type retourné par une méthode.

Exemple :

```php
public function getNom(): string
{
    return $this->nom;
}
```

La méthode retourne une chaîne.

Pour une méthode qui ne retourne aucune valeur :

```php
public function setNom(string $nom): void
{
    $this->nom = $nom;
}
```

`void` signifie que la méthode ne retourne aucune valeur.

### 1.11. À retenir

* `public` : accessible depuis l'extérieur.
* `private` : accessible uniquement dans la classe.
* `protected` : accessible dans la classe et les classes dérivées.
* L'encapsulation protège les données de l'objet.
* Un getter permet de lire une donnée.
* Un setter permet de modifier une donnée.
* Le typage précise les données acceptées et retournées.

---

## Partie 2 — Pratique

### 2.1. Ouvrir la classe `Categorie`

Ouvrez :

```text
backend/Categorie.php
```

La version du tutoriel précédent contient :

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

### 2.2. Rendre les propriétés privées

Remplacez :

```php
public $id;
public $nom;
public $couleur;
public $icone;
```

par :

```php
private $id;
private $nom;
private $couleur;
private $icone;
```

Les données sont maintenant privées.

La classe devient :

```php
<?php

class Categorie
{
    private $id;
    private $nom;
    private $couleur;
    private $icone;

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

### 2.3. Tester l’encapsulation

Ouvrez :

```text
backend/test-categorie.php
```

Créez une catégorie :

```php
$categorie = new Categorie(
    1,
    "Développement Web",
    "Bleu",
    "Code"
);
```

Essayez ensuite :

```php
echo $categorie->nom;
```

Cette écriture ne fonctionne plus.

La propriété `nom` est privée.

L'accès doit maintenant être réalisé avec une méthode.

### 2.4. Créer le getter `getNom()`

Dans `Categorie.php`, ajoutez :

```php
public function getNom(): string
{
    return $this->nom;
}
```

Vous pouvez maintenant lire le nom :

```php
echo $categorie->getNom();
```

Résultat attendu :

```text
Développement Web
```

### 2.5. Créer les autres getters

Ajoutez les getters pour les autres propriétés :

```php
public function getId(): int
{
    return $this->id;
}

public function getNom(): string
{
    return $this->nom;
}

public function getCouleur(): string
{
    return $this->couleur;
}

public function getIcone(): string
{
    return $this->icone;
}
```

Le programme peut maintenant lire les données sans accès direct aux propriétés.

Exemple :

```php
echo $categorie->getId();
echo "<br>";
echo $categorie->getNom();
echo "<br>";
echo $categorie->getCouleur();
echo "<br>";
echo $categorie->getIcone();
```

### 2.6. Créer le setter `setNom()`

Dans `Categorie.php`, ajoutez :

```php
public function setNom(string $nom): void
{
    $this->nom = $nom;
}
```

Dans `test-categorie.php`, modifiez le nom :

```php
$categorie->setNom("Laravel");
```

Puis affichez-le :

```php
echo $categorie->getNom();
```

Résultat attendu :

```text
Laravel
```

### 2.7. Créer les autres setters

Ajoutez les setters :

```php
public function setId(int $id): void
{
    $this->id = $id;
}

public function setNom(string $nom): void
{
    $this->nom = $nom;
}

public function setCouleur(string $couleur): void
{
    $this->couleur = $couleur;
}

public function setIcone(string $icone): void
{
    $this->icone = $icone;
}
```

Les données peuvent maintenant être modifiées avec les setters.

Exemple :

```php
$categorie->setNom("Laravel");
$categorie->setCouleur("Rouge");
$categorie->setIcone("Framework");
```

### 2.8. Typer les propriétés

Modifiez les propriétés :

```php
private int $id;
private string $nom;
private string $couleur;
private string $icone;
```

La classe utilise maintenant des propriétés typées.

Le programme indique clairement le type attendu pour chaque donnée.

### 2.9. Adapter le constructeur

Modifiez le constructeur :

```php
public function __construct(
    int $id,
    string $nom,
    string $couleur,
    string $icone
) {
    $this->id = $id;
    $this->nom = $nom;
    $this->couleur = $couleur;
    $this->icone = $icone;
}
```

Le constructeur attend maintenant :

```text
id      → entier
nom     → chaîne
couleur → chaîne
icone   → chaîne
```

### 2.10. Typer la méthode `afficher()`

La méthode `afficher()` affiche une chaîne.

Il est donc possible de lui donner le retour `string` seulement si elle retourne une valeur.

Modifiez-la ainsi :

```php
public function afficher(): string
{
    return $this->nom . " - " . $this->couleur . " - " . $this->icone;
}
```

Le programme l'utilise maintenant :

```php
echo $categorie->afficher();
```

Résultat attendu :

```text
Laravel - Rouge - Framework
```

### 2.11. Compléter la classe `Categorie`

La classe doit maintenant être :

```php
<?php

class Categorie
{
    private int $id;
    private string $nom;
    private string $couleur;
    private string $icone;

    public function __construct(
        int $id,
        string $nom,
        string $couleur,
        string $icone
    ) {
        $this->id = $id;
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getNom(): string
    {
        return $this->nom;
    }

    public function getCouleur(): string
    {
        return $this->couleur;
    }

    public function getIcone(): string
    {
        return $this->icone;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function setNom(string $nom): void
    {
        $this->nom = $nom;
    }

    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }

    public function setIcone(string $icone): void
    {
        $this->icone = $icone;
    }

    public function afficher(): string
    {
        return $this->nom . " - " . $this->couleur . " - " . $this->icone;
    }
}
```

### 2.12. Utiliser la classe encapsulée

Dans `test-categorie.php` :

```php
<?php

require_once 'Categorie.php';

$categorie = new Categorie(
    3,
    "Laravel",
    "Bleu",
    "Code"
);

echo $categorie->afficher();
```

Résultat attendu :

```text
Laravel - Bleu - Code
```

### 2.13. Modifier l’objet avec les setters

Ajoutez :

```php
$categorie->setCouleur("Rouge");
$categorie->setIcone("Framework");
```

Puis :

```php
echo $categorie->afficher();
```

Résultat attendu :

```text
Laravel - Rouge - Framework
```

La propriété n'est jamais modifiée directement.

Le programme utilise :

```php
$categorie->setCouleur("Rouge");
```

et non :

```php
$categorie->couleur = "Rouge";
```

### 2.14. Utiliser les getters

Ajoutez :

```php
echo $categorie->getNom();
echo "<br>";
echo $categorie->getCouleur();
echo "<br>";
echo $categorie->getIcone();
```

Résultat attendu :

```text
Laravel
Rouge
Framework
```

### 2.15. Exercice — Encapsuler `Categorie`

Transformez la classe `Categorie` pour :

* rendre les quatre propriétés `private` ;
* créer quatre getters ;
* créer quatre setters ;
* ajouter le typage des propriétés ;
* ajouter le typage des paramètres ;
* ajouter le typage des retours.

Testez la classe avec trois catégories.

### 2.16. Exercice — Modifier une catégorie

Créez :

```php
$categorie = new Categorie(
    3,
    "Laravel",
    "Bleu",
    "Code"
);
```

Modifiez ensuite la catégorie avec les setters :

```text
nom     → Laravel Avancé
couleur → Rouge
icone   → Framework
```

Affichez le résultat avec `afficher()`.

Résultat attendu :

```text
Laravel Avancé - Rouge - Framework
```

### 2.17. Travail à faire

Reprenez la classe `Categorie` du tutoriel précédent.

Transformez-la en classe encapsulée et typée.

Le programme doit permettre de :

* protéger les propriétés avec `private` ;
* lire les données avec des getters ;
* modifier les données avec des setters ;
* utiliser des propriétés typées ;
* utiliser des paramètres typés ;
* utiliser des retours typés ;
* conserver la création d'objets avec le constructeur.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* une courte définition de l'encapsulation ;
* la différence entre une propriété `public` et `private` ;
* un exemple de getter ;
* un exemple de setter ;
* un exemple de propriété typée.

Ajoutez les fichiers :

```text
backend/
├── Categorie.php
└── test-categorie.php
```

**Résultat attendu :**

Le programme crée une catégorie et affiche :

```text
Laravel - Rouge - Framework
```

Les données sont manipulées avec les méthodes de la classe.

**Critère de réussite :**

* Les propriétés sont `private`.
* Les données sont lues avec les getters.
* Les données sont modifiées avec les setters.
* Les propriétés sont typées.
* Les paramètres sont typés.
* Les retours sont typés.
* Le programme fonctionne sans accès direct aux propriétés privées.

---

## Bilan

**Vous avez appris :**

* à protéger les données d'un objet ;
* à utiliser `private` ;
* à comprendre `public` et `protected` ;
* à appliquer l'encapsulation ;
* à créer des getters ;
* à créer des setters ;
* à typer les propriétés ;
* à typer les paramètres ;
* à typer les valeurs de retour.

**Vous avez réalisé :**

```text
backend/
├── Categorie.php
└── test-categorie.php
```

La classe `Categorie` est maintenant encapsulée et typée.

Vous savez maintenant créer des objets dont les données sont contrôlées par la classe.

## Glossaire

* **Encapsulation** : protection des données internes d'un objet.
* **`public`** : membre accessible depuis l'extérieur de la classe.
* **`private`** : membre accessible uniquement dans la classe.
* **`protected`** : membre accessible dans la classe et dans les classes dérivées.
* **Getter** : méthode utilisée pour lire une donnée.
* **Setter** : méthode utilisée pour modifier une donnée.
* **Typage** : indication du type attendu pour une donnée.
* **`string`** : type utilisé pour une chaîne de caractères.
* **`int`** : type utilisé pour un nombre entier.
* **`void`** : indique qu'une méthode ne retourne aucune valeur.
