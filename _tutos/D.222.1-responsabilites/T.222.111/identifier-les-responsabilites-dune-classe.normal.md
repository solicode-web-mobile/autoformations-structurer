---
title: "Identifier les responsabilités d’une classe"
layout: tuto
slug: "identifier-les-responsabilites-dune-classe"
permalink: /tutos/:slug/
tuto_id: "T.222.111"
type: "classique"
version: "normal"
ua: "UA.222.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* identifier le rôle d'une classe ;
* identifier la responsabilité d'une méthode ;
* repérer plusieurs responsabilités dans une même classe ;
* repérer une classe trop chargée ;
* repérer des responsabilités mélangées ;
* observer la cohésion d'une classe ;
* observer le couplage et les dépendances.

À la fin du tutoriel, vous aurez analysé la classe `Categorie` du Sprint 1.

Vous ne modifierez pas encore le code.

## 2. Prérequis

Vous devez savoir :

* créer une classe ;
* créer des propriétés ;
* créer des méthodes ;
* utiliser un constructeur ;
* utiliser des getters et setters ;
* lire un fichier JSON ;
* écrire dans un fichier JSON ;
* réaliser un CRUD.

Ces notions ont été étudiées dans le domaine **D.221.1 — Programmer une fonctionnalité avec des objets**.

## Données de départ

Le Sprint 1 contient une classe `Categorie` qui représente une catégorie et qui gère aussi sa persistance dans un fichier JSON.

Fichier :

```text
sprint-1/backend/Categorie.php
```

Le fichier `categories.json` contient :

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

La classe `Categorie` contient notamment :

```php
class Categorie
{
    private $id;
    private $nom;
    private $couleur;
    private $icone;

    private static $dataFile = __DIR__ . '/data/categories.json';

    public function __construct($nom = null, $couleur = null, $icone = null, $id = null)
    {
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
        $this->id = $id;
    }

    public function getId() { return $this->id; }
    public function getNom() { return $this->nom; }
    public function getCouleur() { return $this->couleur; }
    public function getIcone() { return $this->icone; }

    public function setNom($nom) { $this->nom = $nom; }
    public function setCouleur($couleur) { $this->couleur = $couleur; }
    public function setIcone($icone) { $this->icone = $icone; }
    public function setId($id) { $this->id = $id; }

    public static function readAll()
    {
        // lecture du fichier JSON
    }

    public function create()
    {
        // création dans le JSON
    }

    public function update()
    {
        // modification dans le JSON
    }

    public function delete()
    {
        // suppression dans le JSON
    }

    private static function saveAll($categories)
    {
        // écriture dans le JSON
    }
}
```

---

## Partie 1 — Théorie

### 1.1. Responsabilité

Une **responsabilité** correspond à ce qu'une classe ou une méthode doit prendre en charge.

Exemple :

```text
Categorie
```

peut avoir comme responsabilité :

> représenter une catégorie.

Une méthode peut aussi avoir une responsabilité.

Exemple :

```php
public function getNom()
{
    return $this->nom;
}
```

La responsabilité de cette méthode est :

> fournir le nom de la catégorie.

Une responsabilité répond donc à la question :

> **Que doit faire cette classe ou cette méthode ?**

### 1.2. Rôle d’une classe

Le **rôle** décrit la fonction principale d'une classe dans l'application.

La classe `Categorie` représente une donnée de l'application.

Son rôle naturel est donc de représenter une catégorie :

```text
Categorie
├── id
├── nom
├── couleur
└── icone
```

Mais dans le Sprint 1, cette même classe réalise aussi d'autres traitements.

Elle ne fait donc pas uniquement son rôle principal.

### 1.3. Responsabilité d’une méthode

Chaque méthode réalise une action.

Exemple :

```php
public function getNom()
{
    return $this->nom;
}
```

Responsabilité :

> lire le nom.

Exemple :

```php
public function setNom($nom)
{
    $this->nom = $nom;
}
```

Responsabilité :

> modifier le nom.

Exemple :

```php
public static function readAll()
{
    // ...
}
```

Responsabilité :

> lire les catégories depuis le fichier JSON.

Chaque méthode peut donc être analysée séparément.

### 1.4. Identifier les responsabilités de `Categorie`

Regardons les méthodes de la classe.

Les getters et setters concernent les données :

```text
getId()
getNom()
getCouleur()
getIcone()

setId()
setNom()
setCouleur()
setIcone()
```

Ces méthodes sont liées à la représentation d'une catégorie.

Mais la classe contient également :

```text
readAll()
create()
update()
delete()
saveAll()
```

Ces méthodes travaillent avec le fichier JSON.

La classe `Categorie` a donc plusieurs groupes de responsabilités :

```text
Categorie

├── représenter une catégorie
│
├── accéder aux données de l'objet
│
├── lire les catégories
│
├── créer une catégorie
│
├── modifier une catégorie
│
├── supprimer une catégorie
│
└── enregistrer les données dans JSON
```

### 1.5. Responsabilité métier

La classe représente une catégorie.

Ses données sont :

```text
id
nom
couleur
icone
```

Cette responsabilité correspond à l'objet métier.

La classe connaît les données de la catégorie.

Exemple :

```php
private $nom;
```

et :

```php
public function getNom()
{
    return $this->nom;
}
```

Ces éléments sont liés à la représentation de la catégorie.

### 1.6. Responsabilité de persistance

La **persistance** consiste à conserver les données dans un support.

Dans le Sprint 1, le support est un fichier JSON :

```text
data/categories.json
```

La classe `Categorie` contient :

```php
private static $dataFile;
```

et :

```php
file_get_contents(...)
```

ainsi que :

```php
file_put_contents(...)
```

La classe sait donc :

* où se trouve le fichier ;
* comment lire le fichier ;
* comment écrire dans le fichier.

Cette responsabilité est différente de la représentation d'une catégorie.

### 1.7. Responsabilité CRUD

La classe contient aussi les opérations :

```text
Create
Read
Update
Delete
```

On retrouve :

```text
create()
readAll()
update()
delete()
```

Ces méthodes réalisent la gestion complète des données.

La classe `Categorie` ne représente donc plus seulement une catégorie.

Elle réalise aussi le CRUD.

### 1.8. Classe trop chargée

Une classe peut devenir **trop chargée** lorsqu'elle réalise plusieurs tâches différentes.

Dans notre exemple :

```text
Categorie
├── représente les données
├── lit le JSON
├── écrit le JSON
├── crée
├── modifie
└── supprime
```

La classe possède plusieurs responsabilités.

On peut donc dire qu'elle est **chargée**.

Cela ne signifie pas que le code est forcément faux.

Le problème est plutôt organisationnel :

> plusieurs raisons peuvent conduire à modifier la même classe.

### 1.9. Classe « fourre-tout »

Une classe **fourre-tout** regroupe des traitements qui n'ont pas tous le même rôle.

Dans notre exemple :

```text
Categorie
```

contient à la fois :

```text
données de la catégorie
```

et :

```text
accès au fichier JSON
```

et :

```text
CRUD
```

La classe devient un endroit où l'on ajoute plusieurs traitements parce qu'elle est déjà utilisée.

C'est un signal à analyser.

### 1.10. Responsabilités mélangées

Deux responsabilités sont dites **mélangées** lorsqu'elles concernent des tâches différentes.

Exemple :

```text
représenter une catégorie
```

et :

```text
écrire un fichier JSON
```

Ces deux tâches ne répondent pas à la même question.

La première concerne l'objet.

La deuxième concerne le stockage.

Dans `Categorie`, elles sont pourtant dans la même classe.

### 1.11. Cohésion

La **cohésion** indique si les éléments d'une classe sont fortement liés au même rôle.

Une classe a une bonne cohésion lorsque ses propriétés et ses méthodes participent principalement à une même responsabilité.

Exemple :

```text
Categorie
├── nom
├── couleur
├── icone
├── getNom()
├── getCouleur()
└── getIcone()
```

Ces éléments sont fortement liés.

Ils concernent tous la catégorie.

À l'inverse :

```text
Categorie
├── nom
├── getNom()
├── readAll()
├── saveAll()
├── file_get_contents()
└── file_put_contents()
```

on trouve des éléments liés à deux rôles différents.

La cohésion devient donc plus difficile à maintenir.

### 1.12. Couplage

Le **couplage** correspond aux dépendances entre les éléments du programme.

Dans `Categorie`, les opérations de persistance dépendent directement du fichier JSON :

```php
private static $dataFile = __DIR__ . '/data/categories.json';
```

La classe dépend donc d'un support particulier :

```text
Categorie
   ↓
fichier JSON
```

Si le stockage change, cette partie de la classe doit changer.

Le couplage permet donc d'observer :

> de quoi une classe dépend-elle pour fonctionner ?

### 1.13. Dépendance

Une **dépendance** existe lorsqu'une classe utilise directement un autre élément.

Dans notre classe :

```php
file_get_contents(self::$dataFile);
```

la classe dépend du système de fichiers et du fichier JSON.

On peut représenter :

```text
Categorie
   ↓
categories.json
```

Cette dépendance est utile à identifier avant de restructurer le code.

### 1.14. À retenir

* Une responsabilité indique ce qu'une classe ou une méthode prend en charge.
* Le rôle indique la fonction principale d'une classe.
* Une classe peut contenir plusieurs responsabilités.
* Une classe trop chargée peut avoir des responsabilités mélangées.
* La cohésion mesure le lien entre les éléments d'une classe.
* Le couplage permet d'observer les dépendances d'une classe.
* Une analyse des responsabilités doit être faite avant de déplacer le code.

---

## Partie 2 — Pratique

### 2.1. Ouvrir la classe `Categorie`

Ouvrez :

```text
sprint-1/backend/Categorie.php
```

Ne modifiez pas le fichier.

Le but est d'abord d'analyser son contenu.

### 2.2. Identifier les propriétés

Repérez :

```php
private $id;
private $nom;
private $couleur;
private $icone;
```

Ces propriétés représentent les données d'une catégorie.

Classez-les dans :

```text
Responsabilité :
représenter une catégorie
```

Ajoutez :

```text
id
nom
couleur
icone
```

### 2.3. Identifier les getters

Repérez :

```php
getId()
getNom()
getCouleur()
getIcone()
```

Ces méthodes servent à lire les données de l'objet.

Classez-les dans :

```text
Responsabilité :
accéder aux données d'une catégorie
```

### 2.4. Identifier les setters

Repérez :

```php
setId()
setNom()
setCouleur()
setIcone()
```

Ces méthodes servent à modifier les données de l'objet.

Classez-les dans :

```text
Responsabilité :
modifier les données d'une catégorie
```

### 2.5. Identifier la lecture des données

Repérez :

```php
public static function readAll()
```

Lisez son code.

Vous trouverez notamment :

```php
file_get_contents(self::$dataFile);
```

et :

```php
json_decode($json, true);
```

Cette méthode ne fait pas uniquement un travail sur l'objet `Categorie`.

Elle lit des données depuis un fichier JSON.

Classez cette méthode dans :

```text
Responsabilité :
lire les données depuis JSON
```

### 2.6. Identifier la création

Repérez :

```php
public function create()
```

Cette méthode :

* lit les catégories ;
* cherche le plus grand identifiant ;
* ajoute l'objet ;
* sauvegarde les données.

Elle participe donc au CRUD.

Classez-la dans :

```text
Responsabilité :
créer une catégorie dans le stockage
```

### 2.7. Identifier la modification

Repérez :

```php
public function update()
```

Cette méthode :

* lit les catégories ;
* recherche la catégorie ;
* remplace l'objet ;
* sauvegarde les données.

Classez-la dans :

```text
Responsabilité :
modifier une catégorie dans le stockage
```

### 2.8. Identifier la suppression

Repérez :

```php
public function delete()
```

Cette méthode :

* lit les catégories ;
* cherche la catégorie ;
* supprime l'élément ;
* sauvegarde les données.

Classez-la dans :

```text
Responsabilité :
supprimer une catégorie du stockage
```

### 2.9. Identifier l’écriture JSON

Repérez :

```php
private static function saveAll($categories)
```

Puis observez :

```php
file_put_contents(
    self::$dataFile,
    $json
);
```

Cette méthode écrit dans le fichier JSON.

Classez-la dans :

```text
Responsabilité :
écrire les données dans JSON
```

### 2.10. Regrouper les responsabilités

Construisez maintenant le tableau suivant :

| Élément                                             | Responsabilité                    |
| --------------------------------------------------- | --------------------------------- |
| `$id`, `$nom`, `$couleur`, `$icone`                 | Représenter une catégorie         |
| `getId()`, `getNom()`, `getCouleur()`, `getIcone()` | Lire les données                  |
| `setId()`, `setNom()`, `setCouleur()`, `setIcone()` | Modifier les données              |
| `readAll()`                                         | Lire les données depuis JSON      |
| `create()`                                          | Créer une catégorie dans JSON     |
| `update()`                                          | Modifier une catégorie dans JSON  |
| `delete()`                                          | Supprimer une catégorie dans JSON |
| `saveAll()`                                         | Écrire les données dans JSON      |

Observez maintenant le nombre de responsabilités.

### 2.11. Construire la carte des responsabilités

Représentez la classe ainsi :

```text
Categorie

├── Représenter une catégorie
│   ├── id
│   ├── nom
│   ├── couleur
│   └── icone
│
├── Accéder aux données
│   ├── getId()
│   ├── getNom()
│   ├── getCouleur()
│   └── getIcone()
│
├── Modifier les données
│   ├── setId()
│   ├── setNom()
│   ├── setCouleur()
│   └── setIcone()
│
├── Gérer le CRUD
│   ├── readAll()
│   ├── create()
│   ├── update()
│   └── delete()
│
└── Gérer le stockage JSON
    └── saveAll()
```

Cette carte montre que plusieurs groupes existent dans la même classe.

### 2.12. Identifier les responsabilités fortement liées

Comparez :

```text
nom
getNom()
setNom()
```

Ces éléments parlent tous de la donnée `nom`.

Même chose pour :

```text
couleur
getCouleur()
setCouleur()
```

Ces éléments sont fortement liés.

Ils ont une bonne cohésion.

### 2.13. Identifier les responsabilités différentes

Comparez :

```text
nom
getNom()
setNom()
```

avec :

```text
file_get_contents()
file_put_contents()
json_decode()
json_encode()
```

Le premier groupe représente et manipule les données d'une catégorie.

Le second groupe gère le fichier JSON.

Les deux groupes ont des objectifs différents.

Ils sont donc à analyser comme des responsabilités distinctes.

### 2.14. Identifier les dépendances

Repérez dans la classe :

```php
private static $dataFile =
    __DIR__ . '/data/categories.json';
```

Puis :

```php
file_get_contents(...)
```

et :

```php
file_put_contents(...)
```

La classe dépend directement :

```text
Categorie
   ↓
fichier categories.json
```

Notez cette dépendance dans votre analyse.

### 2.15. Identifier les raisons possibles de changement

Posez la question :

> Qu'est-ce qui peut demander une modification de cette classe ?

Exemples :

```text
Les données de Categorie changent
        ↓
Categorie doit changer
```

Mais aussi :

```text
Le format JSON change
        ↓
Categorie doit changer
```

Et :

```text
Le fichier de stockage change
        ↓
Categorie doit changer
```

Plusieurs types de changements peuvent donc concerner la même classe.

Cette observation permet de préparer la séparation des responsabilités.

### 2.16. Ne pas refactoriser maintenant

À cette étape, ne créez pas encore :

```text
GestionCategorie.php
```

Ne déplacez pas encore :

```text
readAll()
create()
update()
delete()
saveAll()
```

Le tutoriel demande uniquement :

```text
identifier
analyser
documenter
```

La séparation sera réalisée dans **T.222.112**.

### 2.17. Exercice — Identifier les responsabilités

Pour chacune des méthodes suivantes :

```text
getNom()
setNom()
readAll()
create()
update()
delete()
saveAll()
```

indiquez sa responsabilité.

Utilisez le format :

| Méthode     | Responsabilité |
| ----------- | -------------- |
| `getNom()`  | ...            |
| `setNom()`  | ...            |
| `readAll()` | ...            |
| `create()`  | ...            |
| `update()`  | ...            |
| `delete()`  | ...            |
| `saveAll()` | ...            |

### 2.18. Exercice — Regrouper les méthodes

Regroupez les méthodes dans les catégories suivantes :

```text
Objet Categorie
Accès aux données
CRUD
Persistance JSON
```

Chaque méthode doit apparaître dans une seule catégorie.

### 2.19. Exercice — Observer la cohésion

Comparez :

```text
getNom()
setNom()
```

avec :

```text
readAll()
saveAll()
```

Expliquez pourquoi les deux groupes n'ont pas le même rôle.

### 2.20. Exercice — Observer le couplage

Repérez dans `Categorie.php` les éléments qui montrent une dépendance directe vers le fichier JSON.

Notez-les.

Puis complétez :

```text
Categorie dépend de :
________________________
```

### 2.21. Travail à faire

Analysez complètement la classe `Categorie` du Sprint 1.

Votre analyse doit identifier :

* le rôle principal de la classe ;
* les responsabilités des propriétés ;
* les responsabilités des getters et setters ;
* les responsabilités du CRUD ;
* la responsabilité liée au JSON ;
* les responsabilités mélangées ;
* les dépendances vers le fichier JSON ;
* les éléments fortement liés ;
* les éléments qui pourraient être séparés.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* la carte complète des responsabilités de `Categorie` ;
* un tableau des méthodes et de leurs responsabilités ;
* les dépendances identifiées ;
* une courte analyse de la cohésion ;
* une courte analyse du couplage ;
* les groupes de responsabilités qui pourraient être séparés.

**Résultat attendu :**

L'analyse doit faire apparaître au minimum :

```text
Categorie

├── données de l'objet
├── accès aux données
├── CRUD
└── persistance JSON
```

**Critère de réussite :**

* Chaque méthode a une responsabilité identifiée.
* Les responsabilités de l'objet sont distinguées des responsabilités de persistance.
* Les responsabilités CRUD sont identifiées.
* La dépendance vers le fichier JSON est identifiée.
* Les responsabilités mélangées sont clairement repérées.
* Aucune modification du code du Sprint 1 n'est nécessaire.

---

## Bilan

**Vous avez appris :**

* à identifier le rôle d'une classe ;
* à identifier la responsabilité d'une méthode ;
* à repérer une classe trop chargée ;
* à identifier des responsabilités mélangées ;
* à observer la cohésion ;
* à observer le couplage ;
* à identifier les dépendances.

**Vous avez analysé :**

```text
Categorie

├── données
├── accès aux données
├── CRUD
└── persistance JSON
```

La classe `Categorie` du Sprint 1 regroupe plusieurs responsabilités.

Vous savez maintenant **identifier ce qu'une classe fait et repérer les responsabilités qui pourraient être séparées**.

Dans le prochain tutoriel, vous allez utiliser cette analyse pour **extraire et répartir les responsabilités entre plusieurs classes**.

## Glossaire

* **Responsabilité** : tâche prise en charge par une classe ou une méthode.
* **Rôle** : fonction principale d'une classe dans l'application.
* **Classe trop chargée** : classe qui prend en charge plusieurs responsabilités différentes.
* **Classe fourre-tout** : classe qui regroupe de nombreux traitements de nature différente.
* **Cohésion** : niveau de lien entre les éléments d'une même classe.
* **Couplage** : niveau de dépendance entre des classes ou des éléments.
* **Dépendance** : relation dans laquelle un élément utilise un autre élément.
* **Persistance** : conservation des données dans un support comme un fichier ou une base de données.
