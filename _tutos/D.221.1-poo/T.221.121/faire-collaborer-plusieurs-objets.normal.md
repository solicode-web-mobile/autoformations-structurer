---
title: "Faire collaborer plusieurs objets"
layout: tuto
slug: "faire-collaborer-objets"
permalink: /tutos/:slug/
tuto_id: "T.221.121"
type: "classique"
version: "normal"
ua: "UA.221.12"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Objectif

Séparer les responsabilités de votre code en faisant collaborer plusieurs objets (Architecture 3-tiers simplifiée).

## 2. Prérequis

* Créer des classes et utiliser l'encapsulation (T.221.111 / T.221.112).

## Cas d'étude

Jusqu'à présent, notre application n'avait qu'une seule classe qui faisait tout. Dans une vraie application, les objets se partagent le travail :
1. **L'Entité (`Categorie`)** : Stocke la donnée pure.
2. **Le Gestionnaire (`GestionCategorie`)** : Gère la logique (ex: base de données, tableaux).
3. **Le Contrôleur (`CategorieController`)** : Orchestre le tout et affiche le résultat.

## Partie 1 — Théorie

### L'architecture MVC et les Tableaux d'objets

Lorsqu'une classe utilise une autre classe, on parle de **dépendance**. Le contrôleur dépend du gestionnaire, qui lui-même manipule des entités.
Très souvent, le gestionnaire retourne une **liste d'objets** sous forme de tableau (`array`) que le contrôleur va parcourir.

<img src="{{ '/images-tutos/D.221.1-poo/T.221.121/architecture-mvc.svg' | relative_url }}" alt="Architecture MVC">

**Exemple : Typage strict et Tableau**
```php
<?php
// Le gestionnaire exige de recevoir ou manipuler spécifiquement la classe "Categorie"
class GestionCategorie {
    public function getAll(): array {
        return [
            new Categorie("Web"),
            new Categorie("Design")
        ];
    }
}
?>
```

## Partie 2 — Pratique

### Mission : Débuter la refactorisation MVC de votre Blog

Vous allez créer la nouvelle structure MVC de votre Blog (Sprint 2) en faisant collaborer une Entité, un Gestionnaire et un Contrôleur. Pour valider l'architecture, nous utiliserons des données fictives pour l'instant.

**Travail à faire (dans votre dépôt GitHub) :**

1. Créez le dossier `backend/classes/`.
2. Créez-y la classe `Categorie.php` avec ses propriétés privées (`id`, `nom`, `couleur`, `icone`), son constructeur et ses Getters.
3. Créez-y la classe `GestionCategorie.php`. Ajoutez une méthode `getAll(): array` qui instancie manuellement deux objets `Categorie` fictifs et les retourne dans un tableau.
4. Créez le dossier `api/controllers/` et ajoutez-y `CategorieController.php`. Ce contrôleur doit :
   - Requérir et instancier le gestionnaire.
   - Appeler `getAll()`.
   - Parcourir le tableau avec un `foreach` pour afficher (via `echo`) le nom de chaque catégorie.

*Note : À ce stade, nous testons juste la collaboration des objets. La lecture du vrai fichier JSON sera implémentée dans les prochains tutoriels.*

<details>
<summary>Voir le résultat attendu (Code de test)</summary>
<div markdown="1">

**backend/classes/GestionCategorie.php**
```php
<?php
require_once 'Categorie.php';

class GestionCategorie {
    public function getAll(): array {
        return [
            new Categorie(1, "Développement Web", "blue", "fa-code"),
            new Categorie(2, "Design", "pink", "fa-paint-brush")
        ];
    }
}
?>
```

**api/controllers/CategorieController.php**
```php
<?php
require_once '../../backend/classes/GestionCategorie.php';

class CategorieController {
    public function listerCategories(): void {
        $gestion = new GestionCategorie();
        $categories = $gestion->getAll();
        
        foreach ($categories as $cat) {
            echo $cat->getNom() . "<br>";
        }
    }
}

// Test d'exécution
$controller = new CategorieController();
$controller->listerCategories();
?>
```

**Livrable :** Le lien vers le commit GitHub contenant la création de ces 3 fichiers.

</div>
</details>

## Bilan

**Vous avez appris :**
* à découper votre code en MVC (Entité, Gestionnaire, Contrôleur).
* à manipuler et retourner des tableaux d'objets fortement typés.

## Glossaire

* **Dépendance** : Lorsqu'une classe utilise une autre classe pour fonctionner.
* **Typage d'objet** : Exiger qu'une variable ou un retour de fonction soit une instance précise d'une classe.
