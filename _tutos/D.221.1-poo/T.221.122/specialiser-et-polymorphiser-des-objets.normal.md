---
title: "Spécialiser et polymorphiser des objets"
layout: tuto
slug: "specialiser-polymorphiser-objets"
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
* utiliser l'héritage avec le mot-clé `extends` ;
* spécialiser une classe enfant à partir d'une classe parent ;
* redéfinir (surcharger) le comportement d'une méthode héritée ;
* comprendre la puissance du polymorphisme.

## 2. Prérequis

* Maîtriser la création de classes et la visibilité (T.221.111 et T.221.112).

## Cas d'étude

Notre blog gère des "Utilisateurs". Mais nous avons deux profils spécifiques : les "Administrateurs" et les "Auteurs". Ils partagent beaucoup de choses (nom, email), mais ont aussi des particularités (l'admin a tous les droits, l'auteur peut écrire des articles). 
Plutôt que de dupliquer tout le code de l'utilisateur dans deux nouvelles classes, nous allons utiliser l'**héritage**.

---

## Partie 1 — Théorie

### 1.1. L'Héritage et la Spécialisation (`extends`)

En POO, une classe (l'**Enfant**) peut hériter de toutes les propriétés et méthodes d'une autre classe (le **Parent**). On dit que l'enfant **spécialise** le parent. En PHP, on utilise le mot-clé `extends`.

<div class="fullscreenable" markdown="1">

```mermaid
flowchart TD
    Parent[Classe Parent : Utilisateur<br>nom, email<br>seConnecter()]
    Enfant1[Classe Enfant : Admin<br>+ bannirUtilisateur()]
    Enfant2[Classe Enfant : Auteur<br>+ redigerArticle()]
    
    Parent <|-- Enfant1
    Parent <|-- Enfant2
    
    style Parent fill:#f3f0ff,stroke:#7253ed,stroke-width:2px
    style Enfant1 fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    style Enfant2 fill:#fff3e0,stroke:#ff9800,stroke-width:2px
```

</div>

Dans cet exemple, `Admin` possède automatiquement `nom`, `email` et la méthode `seConnecter()`, **plus** sa méthode spécifique `bannirUtilisateur()`.
*Remarque : Pour qu'un enfant puisse accéder directement aux propriétés de son parent, la visibilité de ces dernières doit être `protected` (et non `private`).*

### 1.2. La Surcharge (Override) et le Polymorphisme

Parfois, l'Enfant veut modifier ou enrichir le comportement d'une méthode héritée. Pour cela, il suffit de la **réécrire (la surcharger)** dans la classe enfant avec le même nom. Si l'enfant a besoin d'appeler l'ancienne version du parent pour la compléter, il utilise `parent::nomDeLaMethode()`.

**Le Polymorphisme**, c'est la "magie" qui découle de l'héritage : on peut mettre un `Admin` et un `Auteur` dans une même liste d' `Utilisateur`, appeler une même méthode sur tout le monde, et chacun réagira à sa façon s'il l'a surchargée.

**Exemple exécutable :**
```php
<?php
class Utilisateur {
    public function getRole() {
        return "Utilisateur";
    }
}

class Admin extends Utilisateur {
    // Surcharge de la méthode parent
    public function getRole() {
        return parent::getRole() . " avec tous les droits !";
    }
}

$u = new Utilisateur();
$a = new Admin();

echo $u->getRole() . "<br>";
echo $a->getRole() . "<br>";
?>
```

---

## Partie 2 — Pratique

### 2.1. Hériter et Surcharger

**Travail à faire :**
1. Créez un fichier `backend/classes/Utilisateur.php` avec une méthode `getRole()` qui retourne simplement `"Utilisateur standard"`.
2. Créez un fichier `backend/classes/Admin.php`. Cette classe doit **hériter** de `Utilisateur`. 
3. Surchargez (redéfinissez) la méthode `getRole()` dans `Admin` pour qu'elle retourne cette fois `"Administrateur suprême"`.
4. Dans un fichier `test.php`, créez un tableau contenant un objet `Utilisateur` et un objet `Admin`. Parcourez ce tableau avec un `foreach` et appelez `getRole()` sur chaque élément pour constater le polymorphisme en action.

<button class="btn btn-primary btn-toggle-resultat">Afficher la solution</button>
<div class="auto-wrapper tuto-resultat" style="display: none; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-top: 15px;" markdown="1">

**1. Fichier `backend/classes/Utilisateur.php` :**
```php
<?php
class Utilisateur {
    // protected permet aux enfants d'y accéder, contrairement à private
    protected string $nom; 

    public function __construct(string $nom) {
        $this->nom = $nom;
    }

    public function getRole(): string {
        return "Utilisateur standard";
    }
}
?>
```

**2. Fichier `backend/classes/Admin.php` :**
```php
<?php
require_once 'Utilisateur.php';

// Admin hérite de Utilisateur
class Admin extends Utilisateur {
    
    // Surcharge de la méthode du parent
    public function getRole(): string {
        return "Administrateur suprême";
    }
}
?>
```

**3. Fichier `test.php` :**
```php
<?php
require_once 'backend/classes/Utilisateur.php';
require_once 'backend/classes/Admin.php';

// Création d'un tableau polymorphe
$personnes = [
    new Utilisateur("Alice"),
    new Admin("Bob")
];

// Chaque objet réagit différemment à la même méthode (Polymorphisme) !
foreach ($personnes as $personne) {
    echo $personne->getRole() . "<br>";
}
// Résultat à l'écran :
// Utilisateur standard
// Administrateur suprême
?>
```
</div>

---

## Bilan

**Vous avez appris :**
* à étendre une classe existante grâce à l'héritage (`extends`).
* à utiliser la visibilité `protected` pour partager des propriétés avec vos enfants.
* à écraser (surcharger) le comportement d'une méthode pour la spécialiser.
* que le **polymorphisme** permet de manipuler différents enfants de manière transparente.

## Glossaire

* **Héritage (`extends`)** : Concept permettant de créer une nouvelle classe basée sur une classe existante.
* **Classe Parent / Enfant** : La classe d'origine et la classe qui en hérite.
* **`protected`** : Visibilité limitant l'accès à la classe elle-même et à ses enfants.
* **Surcharge (Override)** : Fait de redéfinir, dans l'enfant, une méthode héritée du parent.
* **Polymorphisme** : Fait qu'une même méthode produise des résultats différents selon l'objet (enfant) qui l'exécute.
