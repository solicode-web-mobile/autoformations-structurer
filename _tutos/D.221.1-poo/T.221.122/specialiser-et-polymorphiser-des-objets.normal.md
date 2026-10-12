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
simplified: true
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

<img src="{{ '/images-tutos/D.221.1-poo/T.221.122/heritage-utilisateurs.svg' | relative_url }}" alt="Héritage Utilisateurs">

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

### Mission : Spécialiser l'Utilisateur du Blog

Dans le cadre de votre projet de Blog (Sprint 2), vous allez créer la hiérarchie des utilisateurs en vous basant sur votre diagramme de classes.

**Travail à faire (dans votre dépôt GitHub) :**

1. Dans le dossier `backend/classes/`, créez l'entité `User.php`.
   - Ajoutez ses propriétés (basées sur le diagramme). *Attention : mettez-les en `protected` pour que l'enfant puisse y accéder plus tard si besoin.*
   - Ajoutez une méthode `getRoleName(): string` qui retourne simplement `"Visiteur anonyme"`.
2. Créez ensuite l'entité `Auteur.php` qui **hérite** (`extends`) de `User`.
   - Ajoutez ses propriétés spécifiques (`nom`, `prenom`, `biographie`).
   - Surchargez (redéfinissez) la méthode `getRoleName()` pour qu'elle retourne cette fois `"Auteur publié"`.
3. Dans votre fichier `api/controllers/CategorieController.php` (ou un fichier de test temporaire), créez un tableau contenant un `User` et un `Auteur`, parcourez-le et appelez `getRoleName()` pour tester la magie du polymorphisme !

<details>
<summary>Voir le résultat attendu pour les Entités</summary>
<div markdown="1">

**backend/classes/User.php**
```php
<?php
class User {
    protected int $id;
    protected string $email;
    protected string $password;
    protected string $role;

    public function getRoleName(): string {
        return "Visiteur anonyme";
    }
}
?>
```

**backend/classes/Auteur.php**
```php
<?php
require_once 'User.php';

class Auteur extends User {
    private string $nom;
    private string $prenom;
    private string $biographie;

    // Surcharge de la méthode du parent
    public function getRoleName(): string {
        return "Auteur publié";
    }
}
?>
```

**Livrable :** Le lien vers le commit GitHub contenant l'ajout de ces deux classes.

</div>
</details>

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
