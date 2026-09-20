---
title: "Créer et manipuler un objet"
layout: tuto
slug: "creer-manipuler-objet"
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
* comprendre la différence entre une Classe et un Objet ;
* instancier un objet en PHP ;
* définir et initialiser des propriétés via un constructeur ;
* manipuler l'objet via ses méthodes et le mot-clé `$this`.

## 2. Prérequis

* Connaître les bases de PHP (variables, fonctions, `echo`).
* Savoir exécuter un script PHP.

## Cas d'étude

Nous voulons manipuler des "Catégories" d'articles pour notre Blog. Une catégorie possède un identifiant, un nom, une couleur et une icône. 
Plutôt que d'utiliser de simples tableaux pour stocker ces données, nous allons utiliser la Programmation Orientée Objet (POO) pour créer un véritable modèle de Catégorie.

---

## Partie 1 — Théorie

### 1.1. Classes et Objets (Le moule et le gâteau)

En POO, on utilise des **Classes** pour créer des **Objets** (c'est ce qu'on appelle l'**Instanciation**).

* **La Classe** : C'est le "moule" ou le plan de construction. Elle décrit les données (les **propriétés**) que l'objet possédera.
* **L'Objet** : C'est l'élément réel créé à partir de la classe (le "gâteau"). Chaque objet possède ses propres valeurs pour ses propriétés.

<div class="fullscreenable" markdown="1">

```mermaid
flowchart TD
    Classe[Classe : Categorie<br/>Propriétés : id, nom, couleur, icone]
    Classe -->|new Categorie()| Obj1(Objet 1<br>nom: Web<br>couleur: Bleu)
    Classe -->|new Categorie()| Obj2(Objet 2<br>nom: Design<br>couleur: Rose)
    
    style Classe fill:#f3f0ff,stroke:#7253ed,stroke-width:2px
    style Obj1 fill:#f0f6ff,stroke:#2673e8
    style Obj2 fill:#fff0f5,stroke:#e8268c
```

</div>

**Exemple exécutable :**
```php
<?php
// Création du moule (la Classe)
class Categorie {
    public $nom;
    public $couleur;
}

// Création d'un gâteau (Instanciation d'un Objet)
$categorie1 = new Categorie();
$categorie1->nom = "Développement Web"; // On assigne une valeur à la propriété

echo "La catégorie créée est : " . $categorie1->nom;
?>
```

### 1.2. Comportement et Initialisation

Une classe ne contient pas que des données, elle peut aussi contenir des actions appelées **méthodes** (ce sont des fonctions internes à la classe).

* **`$this`** : À l'intérieur d'une méthode, `$this` fait référence à "l'objet courant" (celui qui est en train d'exécuter la méthode).
* **Le Constructeur (`__construct`)** : C'est une méthode spéciale appelée automatiquement au moment exact où vous créez l'objet avec `new`. C'est le moment idéal pour donner les valeurs de départ aux propriétés !

**Exemple exécutable :**
```php
<?php
class Categorie {
    public $nom;

    // Le constructeur est appelé lors du "new Categorie(...)"
    public function __construct($nomInitial) {
        $this->nom = $nomInitial; // On affecte le paramètre à la propriété de l'objet courant
    }

    // Une méthode personnalisée
    public function afficher() {
        echo "Affichage via la méthode : " . $this->nom;
    }
}

$cat = new Categorie("Design UI/UX");
$cat->afficher();
?>
```

---

## Partie 2 — Pratique

### 2.1. Créer la classe et l'utiliser

**Travail à faire :**
1. Créez un fichier `backend/Categorie.php`.
2. Définissez la classe `Categorie` avec ses 4 propriétés publiques (`$id`, `$nom`, `$couleur`, `$icone`).
3. Ajoutez le constructeur `__construct` pour recevoir et assigner ces 4 valeurs aux propriétés de l'objet (en utilisant `$this`).
4. Ajoutez une méthode `afficher()` qui affiche la catégorie sous ce format : `Nom - Couleur - Icone`.
5. Créez un fichier `backend/test-categorie.php`, incluez votre classe (`require_once`), créez deux objets différents avec `new Categorie(...)` et appelez `afficher()` sur chacun d'eux.

<button class="btn btn-primary btn-toggle-resultat">Afficher la solution</button>
<div class="auto-wrapper tuto-resultat" style="display: none; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-top: 15px;" markdown="1">

**Fichier `backend/Categorie.php` :**
```php
<?php
class Categorie {
    // 1. Propriétés (les données)
    public $id;
    public $nom;
    public $couleur;
    public $icone;

    // 2. Constructeur (l'initialisation)
    public function __construct($id, $nom, $couleur, $icone) {
        $this->id = $id;
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
    }

    // 3. Méthodes (le comportement)
    public function afficher() {
        echo $this->nom . " - " . $this->couleur . " - " . $this->icone . "<br>";
    }
}
?>
```

**Fichier `backend/test-categorie.php` :**
```php
<?php
require_once 'Categorie.php';

// Instanciation de nos objets
$cat1 = new Categorie(1, "Développement Web", "Bleu", "Code");
$cat2 = new Categorie(2, "Design UI/UX", "Rose", "Pinceau");

// Utilisation de nos objets
$cat1->afficher();
$cat2->afficher();
?>
```
</div>

---

## Bilan

**Vous avez appris :**
* à distinguer le modèle (Classe) de son instance (Objet).
* à initialiser un objet dès sa création avec le constructeur `__construct()`.
* à faire agir un objet sur lui-même avec ses propres méthodes et le mot-clé `$this`.

## Glossaire

* **Classe** : Modèle ou plan de construction.
* **Objet / Instance** : L'élément réel créé à partir de la classe via le mot-clé `new`.
* **Propriété** : Variable appartenant à une classe.
* **Méthode** : Fonction appartenant à une classe.
* **Constructeur** : Méthode exécutée automatiquement à la création de l'objet pour l'initialiser.
