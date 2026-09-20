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
* comprendre l'utilité d'une Interface en POO ;
* définir un contrat strict sans coder la logique ;
* utiliser le mot-clé `implements` pour forcer une classe à respecter ce contrat.

## 2. Prérequis

* Comprendre les classes, méthodes, et l'héritage (Tutoriels précédents).
* Savoir ce qu'est un DAO (Data Access Object - vu en conception).

## Cas d'étude

Notre application gère des Articles. Bientôt, nous devrons sauvegarder ces articles physiquement. Mais comment ? Dans un fichier `.json` ? Dans une base de données MySQL ?
Pour éviter que notre application ne soit dépendante d'une technologie précise, nous allons créer un **contrat** : peu importe la façon dont on sauvegarde, la classe responsable devra obligatoirement posséder les méthodes `readAll()`, `create()`, `update()` et `delete()`.

---

## Partie 1 — Théorie

### 1.1. L'Interface (Le Contrat)

Une **Interface** n'est pas une classe classique. C'est un contrat strict. 
Elle liste les méthodes qui **doivent** exister, mais elle ne contient **aucun code** à l'intérieur de ces méthodes.

<div class="fullscreenable" markdown="1">

```mermaid
flowchart TD
    Contrat{{"Interface : IArticleDAO<br>+ readAll()<br>+ create()"}}
    
    ClasseA[Classe : ArticleDAOJSON<br>+ readAll() { lire json }<br>+ create() { ecrire json }]
    ClasseB[Classe : ArticleDAOMySQL<br>+ readAll() { SELECT... }<br>+ create() { INSERT... }]
    
    Contrat <|.. ClasseA : "implements"
    Contrat <|.. ClasseB : "implements"
    
    style Contrat fill:#fff3e0,stroke:#ff9800,stroke-width:2px,stroke-dasharray: 5 5
    style ClasseA fill:#f0f6ff,stroke:#2673e8,stroke-width:2px
    style ClasseB fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
```

</div>

* **`interface`** : Ce mot-clé remplace `class` lors de la déclaration. À l'intérieur, les méthodes se terminent par un point-virgule (pas d'accolades `{ }`).
* **`implements`** : Utilisé par la classe concrète pour "signer" le contrat. Si la classe oublie de coder ne serait-ce qu'une méthode prévue par le contrat, PHP déclenchera une erreur fatale et plantera !

**Exemple exécutable :**
```php
<?php
// Le Contrat
interface IDireBonjour {
    public function direBonjour();
}

// L'implémentation
class Personne implements IDireBonjour {
    public function direBonjour() {
        echo "Bonjour ! Le contrat est respecté.";
    }
}

$p = new Personne();
$p->direBonjour();
?>
```

---

## Partie 2 — Pratique

### 2.1. Créer le contrat et le signer

**Travail à faire :**
1. Créez un fichier `backend/dao/interfaces/IArticleDAO.php`.
2. Déclarez l'interface `IArticleDAO` avec les 4 signatures : `readAll()`, `create()`, `update()` et `delete()`. Ajoutez les types de paramètres (`Article $article`, `int $id`) et de retour (`: array`, `: bool`).
3. Créez un fichier `backend/dao/ArticleDAOJSON.php`.
4. Créez la classe `ArticleDAOJSON` et faites-lui **implémenter** `IArticleDAO`.
5. Rédigez le corps des 4 méthodes pour satisfaire PHP (un simple `return true;` ou `return [];` suffit pour l'instant).

<button class="btn btn-primary btn-toggle-resultat">Afficher la solution</button>
<div class="auto-wrapper tuto-resultat" style="display: none; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-top: 15px;" markdown="1">

**1. Le Contrat `backend/dao/interfaces/IArticleDAO.php` :**
```php
<?php
// On utilise "interface" au lieu de "class"
interface IArticleDAO {
    // Que des signatures, pas de code !
    public function readAll(): array;
    public function create(Article $article): bool;
    public function update(Article $article): bool;
    public function delete(int $id): bool;
}
?>
```

**2. L'Implémentation `backend/dao/ArticleDAOJSON.php` :**
```php
<?php
require_once 'interfaces/IArticleDAO.php';
require_once '../models/Article.php'; // On suppose que la classe existe

// La classe signe le contrat avec "implements"
class ArticleDAOJSON implements IArticleDAO {
    
    // On est OBLIGÉ de coder ces 4 méthodes, sinon PHP renvoie une erreur.
    
    public function readAll(): array {
        echo "Lecture depuis le JSON...<br>";
        return [];
    }

    public function create(Article $article): bool {
        echo "Sauvegarde dans le JSON...<br>";
        return true;
    }

    public function update(Article $article): bool {
        return true;
    }

    public function delete(int $id): bool {
        return true;
    }
}
?>
```
</div>

---

## Bilan

**Vous avez appris :**
* à distinguer une Classe (qui contient du code exécutable) d'une Interface (qui ne contient que des règles).
* à déclarer un contrat avec `interface`.
* à forcer une classe à respecter ce contrat avec le mot-clé `implements`.

L'intérêt principal d'une interface est de garantir à votre application que certaines méthodes existent toujours, peu importe la classe qui fera le travail. Nous verrons comment en tirer parti dans le tutoriel suivant !

## Glossaire

* **Interface** : Un contrat listant des méthodes qu'une classe devra obligatoirement coder.
* **`implements`** : Mot-clé utilisé par une classe pour s'engager à respecter une interface.
* **Signature de méthode** : La déclaration de la méthode (nom, paramètres, type de retour) sans son code interne.
