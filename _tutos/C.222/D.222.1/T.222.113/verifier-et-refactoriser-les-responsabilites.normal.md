---
title: "Vérifier et refactoriser les responsabilités"
layout: tuto
slug: "verifier-et-refactoriser-les-responsabilites"
permalink: /tutos/:slug/
tuto_id: "T.222.113"
type: "classique"
version: "normal"
ua: "UA.222.11"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* vérifier les responsabilités d'une classe ;
* comprendre le principe de responsabilité unique ;
* identifier une raison principale de changement ;
* repérer un code smell lié aux responsabilités ;
* vérifier la cohésion d'une classe ;
* vérifier le couplage entre plusieurs classes ;
* refactoriser une responsabilité mal placée ;
* vérifier que le comportement du CRUD reste identique.

À la fin du tutoriel, vous aurez un CRUD restructuré et vérifié.

## 2. Prérequis

Vous devez savoir :

* créer une classe ;
* encapsuler un objet ;
* faire collaborer plusieurs classes ;
* identifier les responsabilités d'une classe ;
* déplacer une responsabilité ;
* créer une classe de gestion ;
* travailler avec un fichier JSON.

Vous devez avoir réalisé :

* **T.222.111 — Identifier les responsabilités d’une classe**
* **T.222.112 — Séparer les responsabilités entre plusieurs classes**

## Données de départ

À la fin de T.222.112, les responsabilités ont été réparties entre :

```text
Categorie
    ↓
GestionCategorie
    ↓
categories.json
```

`Categorie` représente une catégorie.

`GestionCategorie` gère les opérations CRUD et l'accès au fichier JSON.

La classe `Categorie` contient notamment :

```php
<?php

class Categorie
{
    private $id;
    private $nom;
    private $couleur;
    private $icone;

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

    public function getId()
    {
        return $this->id;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function getCouleur()
    {
        return $this->couleur;
    }

    public function getIcone()
    {
        return $this->icone;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    public function setCouleur($couleur)
    {
        $this->couleur = $couleur;
    }

    public function setIcone($icone)
    {
        $this->icone = $icone;
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'nom' => $this->nom,
            'couleur' => $this->couleur,
            'icone' => $this->icone
        ];
    }
}
```

`GestionCategorie` contient les opérations de gestion :

```php
<?php

require_once __DIR__ . '/Categorie.php';

class GestionCategorie
{
    private $fichierJson;

    public function __construct()
    {
        $this->fichierJson =
            __DIR__ . '/../data/categories.json';
    }

    public function readAll()
    {
        // lecture JSON
    }

    private function saveAll($categoriesArray)
    {
        // écriture JSON
    }

    public function create(Categorie $cat)
    {
        // création
    }

    public function update(Categorie $cat)
    {
        // modification
    }

    public function delete($id)
    {
        // suppression
    }
}
```

---

## Partie 1 — Théorie

### 1.1. Pourquoi vérifier après une séparation ?

Déplacer les méthodes ne suffit pas.

Après une restructuration, il faut vérifier :

* le rôle de chaque classe ;
* les responsabilités restantes ;
* les dépendances ;
* la cohésion ;
* le couplage ;
* le comportement du programme.

Une première séparation peut encore contenir une responsabilité mal placée.

Il faut donc vérifier le résultat.

### 1.2. Principe de responsabilité unique

Le **principe de responsabilité unique**, ou **SRP**, indique qu'une classe doit avoir une responsabilité clairement définie.

Dans cette approche, on utilise une question simple :

> Quelle est la principale raison pour laquelle cette classe devrait changer ?

Une classe ne doit pas regrouper plusieurs raisons indépendantes de changer.

### 1.3. La raison principale de changement

Une raison de changement correspond à un type de modification qui concerne directement la responsabilité de la classe.

Pour `Categorie` :

```text
Modification des données d'une catégorie
        ↓
Categorie
```

Pour `GestionCategorie` :

```text
Modification de la gestion des catégories
        ↓
GestionCategorie
```

Dans notre exemple :

```text
Categorie
    ↓
représenter une catégorie
```

et :

```text
GestionCategorie
    ↓
gérer les catégories et leur stockage JSON
```

Les responsabilités sont donc mieux séparées.

### 1.4. Une classe peut avoir plusieurs méthodes

Le SRP ne signifie pas :

> une classe doit avoir une seule méthode.

Une classe peut avoir plusieurs méthodes si elles participent au même rôle.

Dans `Categorie` :

```text
getNom()
setNom()
getCouleur()
setCouleur()
getIcone()
setIcone()
toArray()
```

Ces méthodes concernent toutes l'objet `Categorie`.

Elles peuvent donc rester dans la même classe.

### 1.5. Identifier un code smell

Un **code smell** est un signe qui indique qu'un code peut avoir un problème de conception.

Dans ce domaine, nous recherchons notamment :

* une classe trop chargée ;
* plusieurs responsabilités dans une même classe ;
* une dépendance directe inutile ;
* des méthodes qui ne correspondent pas au rôle de la classe.

Exemple :

```text
Categorie
├── données de catégorie
└── lecture d'un fichier JSON
```

La présence de deux rôles différents est un signal à examiner.

### 1.6. Vérifier la cohésion

Une classe possède une bonne cohésion lorsque ses éléments participent principalement au même rôle.

Dans `Categorie` :

```text
id
nom
couleur
icone
getters
setters
toArray()
```

Tous ces éléments concernent la représentation d'une catégorie.

La cohésion est donc forte.

### 1.7. Vérifier le couplage

Une classe possède un couplage plus important lorsqu'elle dépend directement de nombreux éléments externes.

Dans la version restructurée :

```text
Categorie
```

ne contient plus :

```text
file_get_contents()
file_put_contents()
json_encode()
json_decode()
```

Elle ne dépend donc plus directement du fichier JSON.

La dépendance se trouve dans :

```text
GestionCategorie
        ↓
categories.json
```

Cette organisation est plus claire.

### 1.8. Vérifier une responsabilité mal placée

Après une première extraction, il faut regarder chaque méthode.

Exemple :

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

Cette méthode transforme l'objet en tableau représentant ses propres données.

Elle concerne directement `Categorie`.

Elle peut donc rester dans `Categorie`.

### 1.9. Exemple d'une responsabilité mal placée

Imaginons que `Categorie` contienne encore :

```php
public function sauvegarderDansJson()
{
    file_put_contents(...);
}
```

Cette méthode concerne directement le fichier JSON.

Elle ne représente pas une catégorie.

Elle doit donc être déplacée vers :

```text
GestionCategorie
```

Une méthode doit appartenir à la classe dont elle correspond au rôle.

### 1.10. Refactoring

Le **refactoring** consiste à améliorer la structure du code sans modifier son comportement fonctionnel.

Exemple :

Avant :

```text
Categorie
├── données
├── CRUD
└── JSON
```

Après :

```text
Categorie
    ↓
GestionCategorie
    ↓
JSON
```

Le programme doit toujours permettre de :

```text
Lire
Créer
Modifier
Supprimer
```

Le fonctionnement attendu ne change pas.

### 1.11. Vérifier le comportement

Après un refactoring, il faut vérifier que le programme produit toujours les mêmes résultats.

Pour le CRUD :

```text
GET    → lire
POST   → créer
PUT    → modifier
DELETE → supprimer
```

La structure interne peut changer.

Le comportement fonctionnel doit rester le même.

### 1.12. À retenir

* Le SRP aide à donner une responsabilité claire à chaque classe.
* Une classe peut avoir plusieurs méthodes si elles appartiennent au même rôle.
* La raison principale de changement permet de vérifier la responsabilité d'une classe.
* Un code smell peut signaler des responsabilités mal réparties.
* Le refactoring améliore la structure sans changer le comportement attendu.
* Après un refactoring, le fonctionnement du CRUD doit être vérifié.

---

## Partie 2 — Pratique

### 2.1. Vérifier `Categorie`

Ouvrez :

```text
backend/classes/Categorie.php
```

Observez les méthodes :

```text
getId()
getNom()
getCouleur()
getIcone()

setId()
setNom()
setCouleur()
setIcone()

toArray()
```

Posez la question :

> Ces méthodes concernent-elles toutes l'objet `Categorie` ?

Oui.

Elles manipulent ou représentent les données de l'objet.

La classe possède donc une responsabilité claire.

### 2.2. Vérifier l’absence de persistance

Dans `Categorie.php`, vérifiez qu'il n'y a plus :

```text
file_get_contents()
file_put_contents()
json_decode()
json_encode()
```

Vérifiez également qu'il n'y a plus :

```text
$dataFile
$fichierJson
```

La classe ne doit plus connaître le fichier JSON.

### 2.3. Vérifier `GestionCategorie`

Ouvrez :

```text
backend/classes/GestionCategorie.php
```

Repérez :

```text
readAll()
create()
update()
delete()
saveAll()
```

Ces méthodes travaillent toutes sur la gestion des catégories et leur stockage JSON.

Elles ont donc un rôle commun.

### 2.4. Vérifier la raison de changement de `Categorie`

Complétez :

```text
Une modification de la représentation d'une catégorie
peut demander une modification de :

____________________________
```

La réponse attendue est la classe :

```text
Categorie
```

### 2.5. Vérifier la raison de changement de `GestionCategorie`

Complétez :

```text
Une modification de la manière de lire ou d'écrire les catégories
peut demander une modification de :

____________________________
```

La réponse attendue est :

```text
GestionCategorie
```

### 2.6. Vérifier les responsabilités

Construisez le tableau :

| Classe             | Responsabilité principale                  |
| ------------------ | ------------------------------------------ |
| `Categorie`        | Représenter une catégorie                  |
| `GestionCategorie` | Gérer les catégories et leur stockage JSON |

Puis vérifiez chaque méthode.

### 2.7. Rechercher un code smell

Dans `Categorie`, vérifiez s'il existe encore une méthode qui :

* ouvre le fichier JSON ;
* lit le fichier JSON ;
* écrit le fichier JSON ;
* encode les données JSON ;
* décode les données JSON.

Si vous en trouvez une, elle doit être analysée.

Elle correspond probablement à une responsabilité de `GestionCategorie`.

### 2.8. Déplacer une responsabilité restante

Supposons que cette méthode ait été ajoutée par erreur :

```php
public function saveToJson($categories)
{
    $json = json_encode(
        $categories,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    );

    return file_put_contents(
        __DIR__ . '/data/categories.json',
        $json
    ) !== false;
}
```

Cette méthode ne correspond pas au rôle de `Categorie`.

Elle doit être déplacée dans `GestionCategorie`.

Dans `Categorie`, supprimez la méthode.

Dans `GestionCategorie`, placez :

```php
private function saveAll($categoriesArray)
{
    $json = json_encode(
        $categoriesArray,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    );

    return file_put_contents(
        $this->fichierJson,
        $json
    ) !== false;
}
```

La persistance reste donc dans `GestionCategorie`.

### 2.9. Vérifier la collaboration

Créez une catégorie :

```php
$categorie = new Categorie(
    "PHP",
    "Vert",
    "Code"
);
```

Puis :

```php
$gestionnaire = new GestionCategorie();

$gestionnaire->create($categorie);
```

La collaboration est :

```text
Categorie
    ↓
GestionCategorie
    ↓
categories.json
```

L'objet contient les données.

Le gestionnaire réalise l'opération.

### 2.10. Vérifier la lecture

Utilisez :

```php
$categories = $gestionnaire->readAll();
```

Puis :

```php
foreach ($categories as $categorie) {
    echo $categorie->getNom();
    echo "<br>";
}
```

Le programme doit afficher les catégories enregistrées.

### 2.11. Vérifier la création

Créez :

```php
$categorie = new Categorie(
    "PHP",
    "Vert",
    "Code"
);
```

Puis :

```php
$resultat = $gestionnaire->create($categorie);
```

Vérifiez ensuite que la nouvelle catégorie apparaît dans le fichier JSON.

### 2.12. Vérifier la modification

Créez :

```php
$categorie = new Categorie(
    "Laravel",
    "Rouge",
    "Code",
    3
);
```

Puis :

```php
$gestionnaire->update($categorie);
```

Vérifiez que la catégorie `3` contient maintenant :

```text
Nom     : Laravel
Couleur : Rouge
Icône   : Code
```

### 2.13. Vérifier la suppression

Utilisez :

```php
$gestionnaire->delete(3);
```

Puis relisez les catégories.

La catégorie `3` ne doit plus être présente.

### 2.14. Vérifier le CRUD complet

Testez successivement :

```text
1. Lire
2. Créer
3. Modifier
4. Supprimer
```

Le résultat doit rester fonctionnel.

Le refactoring ne doit pas changer les opérations disponibles.

### 2.15. Vérifier la cohésion de `Categorie`

Construisez cette liste :

```text
Categorie

├── propriétés
├── constructeur
├── getters
├── setters
└── toArray()
```

Pour chaque élément, posez la question :

> Est-ce lié à la représentation d'une catégorie ?

Si oui, l'élément peut rester dans la classe.

### 2.16. Vérifier la cohésion de `GestionCategorie`

Construisez :

```text
GestionCategorie

├── fichier JSON
├── readAll()
├── create()
├── update()
├── delete()
└── saveAll()
```

Posez la question :

> Ces éléments participent-ils tous à la gestion et au stockage des catégories ?

Ils sont liés au même rôle.

### 2.17. Vérifier le couplage

Complétez :

```text
Categorie dépend directement de :

____________________________
```

La réponse attendue est :

```text
Aucun fichier JSON
```

Puis :

```text
GestionCategorie dépend directement de :

____________________________
```

La réponse attendue est :

```text
categories.json
```

### 2.18. Comparer avant et après

Avant :

```text
Categorie
├── données
├── CRUD
└── JSON
```

Après :

```text
Categorie
    ↓
GestionCategorie
    ↓
categories.json
```

Expliquez la différence entre les deux organisations.

### 2.19. Exercice — Rechercher une responsabilité mal placée

Analysez chaque élément :

```text
getNom()
setNom()
toArray()
readAll()
create()
update()
delete()
saveAll()
```

Classez-les dans :

```text
Categorie
ou
GestionCategorie
```

### 2.20. Exercice — Vérifier le SRP

Pour chaque classe, complétez :

```text
Categorie

Rôle :
____________________________

Raison principale de changement :
____________________________
```

Puis :

```text
GestionCategorie

Rôle :
____________________________

Raison principale de changement :
____________________________
```

### 2.21. Exercice — Vérifier le comportement

Vérifiez le CRUD :

| Opération | Résultat attendu               |
| --------- | ------------------------------ |
| Lire      | Les catégories sont récupérées |
| Créer     | Une catégorie est ajoutée      |
| Modifier  | Une catégorie est modifiée     |
| Supprimer | Une catégorie est supprimée    |

Le comportement doit rester identique à celui du CRUD avant refactoring.

### 2.22. Travail à faire

Vérifiez et finalisez la restructuration du CRUD.

Le résultat doit contenir :

```text
Categorie
GestionCategorie
```

`Categorie` doit avoir un rôle clairement identifiable.

`GestionCategorie` doit avoir un rôle clairement identifiable.

Vérifiez ensuite :

* les responsabilités ;
* les raisons principales de changement ;
* la cohésion ;
* le couplage ;
* les dépendances ;
* le comportement du CRUD.

Lorsqu'une responsabilité reste mal placée, refactorisez-la.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le schéma avant/après ;
* le rôle de `Categorie` ;
* le rôle de `GestionCategorie` ;
* la raison principale de changement de chaque classe ;
* les code smells identifiés et corrigés ;
* une analyse simple de la cohésion ;
* une analyse simple du couplage ;
* les tests réalisés sur le CRUD.

Ajoutez les fichiers restructurés :

```text
backend/
├── Categorie.php
├── GestionCategorie.php
└── data/
    └── categories.json
```

**Résultat attendu :**

L'organisation finale est :

```text
Categorie
    ↓
GestionCategorie
    ↓
categories.json
```

Chaque classe possède une responsabilité clairement identifiable.

Le CRUD fonctionne toujours.

**Critère de réussite :**

* `Categorie` représente principalement une catégorie.
* `GestionCategorie` gère principalement les opérations sur les catégories.
* Les responsabilités ne sont plus mélangées.
* Les accès JSON sont absents de `Categorie`.
* Les dépendances sont clairement identifiées.
* La cohésion de chaque classe est satisfaisante.
* Le CRUD fonctionne après le refactoring.
* Le comportement fonctionnel n'a pas été modifié.

---

## Bilan

**Vous avez appris :**

* à vérifier la responsabilité d'une classe ;
* à utiliser le principe de responsabilité unique ;
* à identifier une raison principale de changement ;
* à repérer un code smell ;
* à vérifier la cohésion ;
* à vérifier le couplage ;
* à refactoriser une responsabilité ;
* à vérifier le comportement après refactoring.

**Vous avez validé :**

```text
Categorie
    ↓
GestionCategorie
    ↓
categories.json
```

`Categorie` représente maintenant principalement les données d'une catégorie.

`GestionCategorie` prend en charge les opérations de gestion et la persistance JSON.

Le CRUD conserve le même comportement fonctionnel.

Vous avez maintenant un premier code restructuré selon le principe de responsabilité unique.

## Glossaire

* **SRP** : principe selon lequel une classe doit avoir une responsabilité clairement définie.
* **Raison de changement** : type principal de modification qui peut demander de modifier une classe.
* **Code smell** : signe indiquant qu'une structure de code peut avoir un problème.
* **Refactoring** : amélioration de la structure du code sans modifier son comportement fonctionnel.
* **Cohésion** : niveau de lien entre les éléments d'une même classe.
* **Couplage** : niveau de dépendance entre plusieurs classes ou éléments.
* **Responsabilité unique** : organisation dans laquelle une classe possède un rôle clairement identifiable.
