---
title: "Séparer les responsabilités entre plusieurs classes"
layout: tuto
slug: "separer-responsabilites-classes"
permalink: /tutos/:slug/
tuto_id: "T.222.112"
type: "classique"
version: "normal"
ua: "UA.222.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* séparer les responsabilités d'une classe ;
* extraire une responsabilité vers une autre classe ;
* créer une classe de gestion ;
* déplacer des méthodes ;
* faire collaborer plusieurs classes ;
* maintenir un objet `Categorie` centré sur ses données ;
* faire gérer le CRUD et le fichier JSON par `GestionCategorie`.

À la fin du tutoriel, le code passera de :

```text
Categorie
├── données
├── CRUD
└── JSON
```

à :

```text
Categorie
    ↓
GestionCategorie
    ↓
fichier JSON
```

Le comportement fonctionnel du CRUD doit rester le même.

## 2. Prérequis

Vous devez savoir :

* créer une classe ;
* créer un objet ;
* utiliser un constructeur ;
* utiliser des propriétés privées ;
* utiliser des getters et setters ;
* utiliser des méthodes ;
* lire et écrire un fichier JSON ;
* analyser les responsabilités d'une classe.

Vous devez avoir réalisé **T.222.111 — Identifier les responsabilités d’une classe**.

## Données de départ

Le Sprint 1 contient actuellement une classe `Categorie` qui prend en charge plusieurs responsabilités.

Fichier :

```text
sprint-1/backend/Categorie.php
```

La classe contient notamment :

```php
<?php

class Categorie
{
    private $id;
    private $nom;
    private $couleur;
    private $icone;

    private static $dataFile = __DIR__ . '/data/categories.json';

    public function __construct(
        $nom = null,
        $couleur = null,
        $icone = null,
        $id = null
    ) {
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
        $this->id = $id;
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

    public function setId($id)
    {
        $this->id = $id;
    }

    public static function readAll()
    {
        // lecture JSON
    }

    public function create()
    {
        // création JSON
    }

    public function update()
    {
        // modification JSON
    }

    public function delete()
    {
        // suppression JSON
    }

    private static function saveAll($categories)
    {
        // écriture JSON
    }
}
```

Le fichier de données contient :

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

---

## Partie 1 — Théorie

### 1.1. Pourquoi séparer les responsabilités ?

Dans T.222.111, nous avons identifié plusieurs responsabilités dans `Categorie` :

```text
Categorie

├── représenter une catégorie
├── accéder aux données
├── modifier les données
├── gérer le CRUD
└── gérer le fichier JSON
```

Toutes ces responsabilités sont actuellement dans une seule classe.

Nous allons maintenant les séparer.

L'objectif n'est pas de créer beaucoup de classes.

L'objectif est de donner à chaque classe un rôle clairement identifiable.

### 1.2. Conserver la responsabilité de l’objet

`Categorie` représente une catégorie.

Elle doit donc conserver :

```text
id
nom
couleur
icone
```

Elle doit aussi conserver les méthodes directement liées à cet objet :

```text
constructeur
getters
setters
toArray()
```

On obtient :

```text
Categorie

├── données
├── getters
├── setters
└── représentation de l'objet
```

### 1.3. Extraire une responsabilité

L'**extraction de responsabilité** consiste à déplacer une tâche d'une classe vers une autre classe.

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
```

`Categorie` garde les données.

`GestionCategorie` prend en charge la gestion des catégories et le fichier JSON.

### 1.4. Extraction de classe

L'**extraction de classe** consiste à créer une nouvelle classe pour recevoir une responsabilité qui était dans une autre classe.

Nous allons créer :

```text
GestionCategorie
```

Cette classe prendra en charge :

```text
readAll()
create()
update()
delete()
saveAll()
```

Elle connaîtra le fichier JSON.

### 1.5. Déplacement de méthode

Une méthode peut être déplacée vers une autre classe lorsque sa responsabilité correspond mieux au rôle de cette classe.

Les méthodes :

```text
readAll()
create()
update()
delete()
saveAll()
```

travaillent avec le stockage JSON.

Elles seront donc déplacées vers :

```text
GestionCategorie
```

### 1.6. Classe de gestion

Une **classe de gestion** prend en charge les opérations liées à un objet ou à une fonctionnalité.

Dans notre exemple :

```text
GestionCategorie
```

gère les opérations sur les catégories :

```text
lire
créer
modifier
supprimer
enregistrer
```

Elle travaille avec des objets `Categorie`.

### 1.7. Objet métier

`Categorie` représente l'objet manipulé par l'application.

On peut donc le considérer comme l'objet métier de cette fonctionnalité.

Il contient les données :

```text
id
nom
couleur
icone
```

La classe ne doit pas aussi gérer directement le fichier JSON.

### 1.8. Collaboration entre les classes

Après la séparation, les deux classes collaborent :

```text
Categorie
    ↑
    |
GestionCategorie
    |
    ↓
categories.json
```

`GestionCategorie` crée et manipule des objets `Categorie`.

Par exemple :

```php
$categorie = new Categorie(
    "Laravel",
    "Bleu",
    "Code"
);
```

Puis :

```php
$gestionnaire->create($categorie);
```

La classe `GestionCategorie` travaille donc avec l'objet `Categorie`.

### 1.9. Dépendance entre classes

`GestionCategorie` doit connaître la classe `Categorie`.

Elle aura donc :

```php
require_once __DIR__ . '/Categorie.php';
```

Elle pourra ensuite utiliser :

```php
new Categorie(...)
```

et :

```php
Categorie $cat
```

La relation devient :

```text
GestionCategorie
        ↓
    Categorie
```

Cette dépendance est nécessaire pour faire collaborer les deux classes.

### 1.10. Cohésion plus forte

Après la séparation, `Categorie` contient principalement des éléments liés à l'objet :

```text
Categorie

├── id
├── nom
├── couleur
├── icone
├── getters
├── setters
└── toArray()
```

Ces éléments concernent tous la catégorie.

La cohésion de la classe est donc plus forte.

### 1.11. Couplage maîtrisé

`Categorie` ne connaît plus :

```text
categories.json
file_get_contents()
file_put_contents()
json_encode()
json_decode()
```

Elle n'a donc plus de dépendance directe vers le fichier JSON.

La dépendance est déplacée vers :

```text
GestionCategorie
        ↓
categories.json
```

Le couplage est mieux maîtrisé.

### 1.12. Ne pas créer une couche supplémentaire

Dans ce tutoriel, nous créons :

```text
Categorie
GestionCategorie
```

Nous ne créons pas encore :

```text
CategorieDAO
Repository
Database
```

La séparation porte uniquement sur les responsabilités identifiées dans `Categorie`.

La question est :

> Quelle classe est responsable de quoi ?

### 1.13. À retenir

* Une responsabilité peut être extraite d'une classe.
* Une nouvelle classe peut recevoir cette responsabilité.
* `Categorie` représente l'objet.
* `GestionCategorie` gère les opérations sur les catégories.
* Les méthodes CRUD et JSON sont déplacées vers `GestionCategorie`.
* Les deux classes collaborent.
* La séparation permet d'obtenir des classes plus cohérentes.

---

## Partie 2 — Pratique

### 2.1. Créer `GestionCategorie.php`

Créez :

```text
sprint-2/backend/classes/GestionCategorie.php
```

Commencez par :

```php
<?php

require_once __DIR__ . '/Categorie.php';

class GestionCategorie
{
}
```

La classe `GestionCategorie` peut maintenant utiliser `Categorie`.

### 2.2. Déplacer le chemin du fichier JSON

Dans l'ancienne classe `Categorie`, nous avions :

```php
private static $dataFile =
    __DIR__ . '/data/categories.json';
```

Cette responsabilité appartient maintenant à `GestionCategorie`.

Ajoutez :

```php
private $fichierJson;

public function __construct()
{
    $this->fichierJson =
        __DIR__ . '/../data/categories.json';
}
```

La classe de gestion connaît maintenant le fichier JSON.

### 2.3. Déplacer `readAll()`

Retirez `readAll()` de `Categorie`.

Ajoutez la méthode dans `GestionCategorie` :

```php
public function readAll()
{
    if (!file_exists($this->fichierJson)) {
        return [];
    }

    $contenu = file_get_contents($this->fichierJson);

    $data = json_decode($contenu, true);

    $categories = [];

    if (is_array($data)) {
        foreach ($data as $item) {
            $categories[] = new Categorie(
                $item['nom'],
                $item['couleur'],
                $item['icone'],
                $item['id']
            );
        }
    }

    return $categories;
}
```

La lecture du JSON est maintenant réalisée par `GestionCategorie`.

### 2.4. Observer le nouveau rôle de `Categorie`

Après le déplacement, `Categorie` ne contient plus :

```text
readAll()
```

Elle représente uniquement l'objet.

La structure devient :

```text
Categorie
├── id
├── nom
├── couleur
├── icone
├── getters
└── setters
```

### 2.5. Déplacer `saveAll()`

Dans `GestionCategorie`, ajoutez :

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

Cette méthode appartient maintenant à la classe qui gère le fichier JSON.

### 2.6. Convertir les objets avant l’écriture

Le fichier JSON attend des tableaux.

Les données sont donc converties avant l'écriture.

Ajoutez dans `Categorie` :

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

Cette méthode reste dans `Categorie`.

Elle décrit comment un objet `Categorie` représente ses propres données.

Dans `GestionCategorie`, utilisez :

```php
$arrayData = array_map(
    function ($categorie) {
        return $categorie->toArray();
    },
    $categories
);
```

La classe `GestionCategorie` utilise donc les objets `Categorie` sans connaître directement leurs propriétés privées.

### 2.7. Déplacer `create()`

Retirez `create()` de `Categorie`.

Dans `GestionCategorie`, ajoutez :

```php
public function create(Categorie $cat)
{
    $categories = $this->readAll();

    $maxId = 0;

    foreach ($categories as $existingCat) {
        if ((int) $existingCat->getId() > $maxId) {
            $maxId = (int) $existingCat->getId();
        }
    }

    $cat->setId($maxId + 1);

    $categories[] = $cat;

    $arrayData = array_map(
        function ($categorie) {
            return $categorie->toArray();
        },
        $categories
    );

    return $this->saveAll($arrayData);
}
```

La responsabilité de création est maintenant dans `GestionCategorie`.

### 2.8. Observer l’objet comme paramètre

La méthode :

```php
public function create(Categorie $cat)
```

reçoit un objet `Categorie`.

On peut créer l'objet :

```php
$categorie = new Categorie(
    "PHP",
    "Vert",
    "Code"
);
```

Puis le transmettre :

```php
$gestionnaire->create($categorie);
```

La collaboration est :

```text
Categorie
    ↓
GestionCategorie::create()
    ↓
categories.json
```

### 2.9. Déplacer `update()`

Ajoutez dans `GestionCategorie` :

```php
public function update(Categorie $cat)
{
    $categories = $this->readAll();

    $updated = false;

    foreach ($categories as $index => $existingCat) {
        if ($existingCat->getId() == $cat->getId()) {
            $categories[$index] = $cat;
            $updated = true;
            break;
        }
    }

    if (!$updated) {
        return false;
    }

    $arrayData = array_map(
        function ($categorie) {
            return $categorie->toArray();
        },
        $categories
    );

    return $this->saveAll($arrayData);
}
```

La modification est maintenant gérée par `GestionCategorie`.

### 2.10. Déplacer `delete()`

Ajoutez :

```php
public function delete($id)
{
    $categories = $this->readAll();

    $initialCount = count($categories);

    $categories = array_filter(
        $categories,
        function ($categorie) use ($id) {
            return $categorie->getId() != $id;
        }
    );

    if (count($categories) >= $initialCount) {
        return false;
    }

    $arrayData = array_map(
        function ($categorie) {
            return $categorie->toArray();
        },
        array_values($categories)
    );

    return $this->saveAll($arrayData);
}
```

La suppression est maintenant gérée par `GestionCategorie`.

### 2.11. Compléter `Categorie.php`

La classe `Categorie` peut maintenant être réduite à son rôle :

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

La classe ne connaît maintenant plus le fichier JSON.

### 2.12. Compléter `GestionCategorie.php`

La classe peut maintenant contenir :

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
        if (!file_exists($this->fichierJson)) {
            return [];
        }

        $contenu = file_get_contents($this->fichierJson);
        $data = json_decode($contenu, true);

        $categories = [];

        if (is_array($data)) {
            foreach ($data as $item) {
                $categories[] = new Categorie(
                    $item['nom'],
                    $item['couleur'],
                    $item['icone'],
                    $item['id']
                );
            }
        }

        return $categories;
    }

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

    public function create(Categorie $cat)
    {
        $categories = $this->readAll();

        $maxId = 0;

        foreach ($categories as $existingCat) {
            if ((int) $existingCat->getId() > $maxId) {
                $maxId = (int) $existingCat->getId();
            }
        }

        $cat->setId($maxId + 1);
        $categories[] = $cat;

        $arrayData = array_map(
            function ($categorie) {
                return $categorie->toArray();
            },
            $categories
        );

        return $this->saveAll($arrayData);
    }

    public function update(Categorie $cat)
    {
        $categories = $this->readAll();
        $updated = false;

        foreach ($categories as $index => $existingCat) {
            if ($existingCat->getId() == $cat->getId()) {
                $categories[$index] = $cat;
                $updated = true;
                break;
            }
        }

        if (!$updated) {
            return false;
        }

        $arrayData = array_map(
            function ($categorie) {
                return $categorie->toArray();
            },
            $categories
        );

        return $this->saveAll($arrayData);
    }

    public function delete($id)
    {
        $categories = $this->readAll();

        $initialCount = count($categories);

        $categories = array_filter(
            $categories,
            function ($categorie) use ($id) {
                return $categorie->getId() != $id;
            }
        );

        if (count($categories) >= $initialCount) {
            return false;
        }

        $arrayData = array_map(
            function ($categorie) {
                return $categorie->toArray();
            },
            array_values($categories)
        );

        return $this->saveAll($arrayData);
    }
}
```

### 2.13. Tester la lecture

Créez :

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

La lecture fonctionne sans que `Categorie` lise directement le JSON.

### 2.14. Tester la création

Ajoutez :

```php
$categorie = new Categorie(
    "PHP",
    "Vert",
    "Code"
);

$gestionnaire->create($categorie);
```

Puis relisez les catégories :

```php
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
PHP
```

### 2.15. Tester la modification

Créez :

```php
$categorie = new Categorie(
    "Laravel",
    "Rouge",
    "Code",
    3
);

$gestionnaire->update($categorie);
```

Relisez ensuite les données.

Résultat attendu pour la catégorie `3` :

```text
Laravel
Rouge
Code
```

### 2.16. Tester la suppression

Supprimez la catégorie `4` :

```php
$gestionnaire->delete(4);
```

Puis relisez les données.

La catégorie `PHP` ne doit plus apparaître.

### 2.17. Vérifier les responsabilités après séparation

La nouvelle organisation est :

```text
Categorie

├── données
├── constructeur
├── getters
├── setters
└── toArray()
```

et :

```text
GestionCategorie

├── lecture JSON
├── création
├── modification
├── suppression
└── écriture JSON
```

Chaque classe possède maintenant un rôle plus clair.

### 2.18. Vérifier la collaboration

Le fonctionnement est maintenant :

```text
Programme
    ↓
GestionCategorie
    ↓
Categorie
    ↓
données de la catégorie
```

Lors d'une création :

```text
Programme
    ↓
création d'un objet Categorie
    ↓
GestionCategorie::create()
    ↓
categories.json
```

Les deux classes collaborent.

### 2.19. Exercice — Extraire les responsabilités

À partir de la classe `Categorie` du Sprint 1 :

1. Identifiez les méthodes liées au stockage.
2. Déplacez-les dans `GestionCategorie`.
3. Gardez dans `Categorie` uniquement les éléments liés à l'objet.
4. Faites collaborer les deux classes.
5. Vérifiez que le CRUD fonctionne encore.

### 2.20. Exercice — Vérifier le résultat

Vérifiez les quatre opérations :

```text
Lire
Créer
Modifier
Supprimer
```

Pour chaque opération, indiquez la classe responsable :

| Opération                 | Classe responsable |
| ------------------------- | ------------------ |
| Représenter une catégorie | ...                |
| Lire les catégories       | ...                |
| Créer une catégorie       | ...                |
| Modifier une catégorie    | ...                |
| Supprimer une catégorie   | ...                |
| Écrire dans JSON          | ...                |

### 2.21. Exercice — Observer la collaboration

Complétez :

```text
________________
      ↓
________________
      ↓
categories.json
```

Puis expliquez en une phrase le rôle de chaque classe.

### 2.22. Travail à faire

Restructurez le CRUD de S1.

Le résultat doit contenir :

```text
Categorie
GestionCategorie
```

`Categorie` doit gérer principalement les données de la catégorie.

`GestionCategorie` doit gérer :

* la lecture JSON ;
* la création ;
* la modification ;
* la suppression ;
* l'écriture JSON.

Les deux classes doivent collaborer.

Le comportement du CRUD doit rester identique.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le schéma avant/après ;
* les responsabilités de `Categorie` ;
* les responsabilités de `GestionCategorie` ;
* la liste des méthodes déplacées ;
* un exemple de collaboration entre les deux classes ;
* une courte explication de la cohésion obtenue ;
* une courte explication du couplage obtenu.

Ajoutez :

```text
backend/
├── Categorie.php
├── GestionCategorie.php
└── test-gestion.php
```

**Résultat attendu :**

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

Le CRUD doit toujours permettre de :

```text
Lire
Créer
Modifier
Supprimer
```

**Critère de réussite :**

* `Categorie` ne lit plus directement le fichier JSON.
* `Categorie` ne contient plus `readAll()`, `create()`, `update()` et `delete()`.
* `GestionCategorie` prend en charge le CRUD.
* `GestionCategorie` prend en charge la lecture et l'écriture JSON.
* `GestionCategorie` utilise des objets `Categorie`.
* Le CRUD conserve le même comportement fonctionnel.
* Les deux classes collaborent correctement.

---

## Bilan

**Vous avez appris :**

* à extraire une responsabilité ;
* à créer une classe de gestion ;
* à déplacer des méthodes ;
* à répartir les responsabilités ;
* à faire collaborer un objet métier et une classe de gestion ;
* à améliorer la cohésion ;
* à maîtriser les dépendances entre classes.

**Vous avez réalisé :**

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

`Categorie` représente maintenant principalement une catégorie.

`GestionCategorie` gère les opérations sur les catégories et le stockage JSON.

Vous avez maintenant une première séparation des responsabilités.

Dans le prochain tutoriel, vous allez **vérifier cette organisation avec le principe de responsabilité unique et refactoriser les responsabilités qui restent mélangées**.

## Glossaire

* **Extraction de responsabilité** : déplacement d'une tâche vers une classe adaptée.
* **Extraction de classe** : création d'une nouvelle classe pour recevoir une responsabilité.
* **Déplacement de méthode** : transfert d'une méthode vers une autre classe.
* **Classe de gestion** : classe qui prend en charge les opérations sur un objet ou une fonctionnalité.
* **Objet métier** : objet qui représente une donnée ou un concept manipulé par l'application.
* **Collaboration** : plusieurs objets travaillent ensemble pour réaliser une fonctionnalité.
* **Cohésion** : niveau de lien entre les responsabilités d'une même classe.
* **Couplage** : dépendance entre plusieurs classes ou éléments.
* **Persistance** : conservation des données dans un fichier ou une base de données.
