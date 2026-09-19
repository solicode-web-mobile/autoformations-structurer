# D.221.1 — Programmer une fonctionnalité avec des objets

**Mini-code :** `poo`

**Niveau :** N2 — Structurer

**Sprints :** S1, S2, S3

## Capacité finale

**Réaliser une fonctionnalité en PHP orienté objet en créant, manipulant et faisant collaborer des objets, puis en utilisant l'encapsulation, l'abstraction, les interfaces et le polymorphisme pour faire évoluer les implémentations.**

## Progression du domaine

**S1 — Construire des objets**

Classe → Objet → Encapsulation → CRUD

**S2 — Faire collaborer les objets**

Objet → Dépendance → Composition → Héritage → Polymorphisme

**S3 — Programmer avec des abstractions**

Interface → Contrat → Implémentation → Polymorphisme

---

# UA.221.11 — Construire une fonctionnalité avec des objets

**Session :** S1

## Objectif

Utiliser les fondamentaux de la POO en PHP pour transformer une fonctionnalité procédurale en fonctionnalité réalisée avec une classe et des objets.

### Notions

- Classe
- Objet
- Instanciation
- Propriété
- Méthode
- `$this`
- Constructeur
- `public`
- `private`
- `protected`
- Encapsulation
- Getter
- Setter
- Typage des propriétés
- Typage des paramètres
- Typage des retours
- Objet comme donnée
- Méthode d'une classe

### Tutoriels

#### T.221.111 — Créer et manipuler un objet

**Notions :**

- classe
- objet
- instanciation
- propriétés
- méthodes
- `$this`
- constructeur

**Production :**

Première classe `Categorie` et manipulation de ses objets.

#### T.221.112 — Encapsuler les données d’un objet

**Notions :**

- visibilité
- `private`
- `public`
- encapsulation
- getters
- setters
- typage

**Production :**

Classe `Categorie` encapsulée et utilisée dans le CRUD.

---

# UA.221.12 — Faire collaborer plusieurs objets

**Session :** S2

## Objectif

Utiliser plusieurs classes pour réaliser une même fonctionnalité et comprendre les relations entre objets.

### Notions

- Collaboration entre objets
- Dépendance entre classes
- Objet comme paramètre
- Objet comme valeur de retour
- Composition
- Association
- Héritage
- Classe parent
- Classe enfant
- `extends`
- Redéfinition de méthode
- `parent`
- Polymorphisme

### Tutoriels

#### T.221.121 — Faire collaborer plusieurs objets

**Notions :**

- dépendance
- composition
- association
- objet comme paramètre
- objet comme retour

**Production :**

Faire collaborer `Categorie`, `GestionCategorie` et `CategorieController`.

#### T.221.122 — Spécialiser et polymorphiser des objets

**Notions :**

- héritage
- classe parent / enfant
- redéfinition
- `parent`
- polymorphisme

**Production :**

Créer des classes spécialisées et utiliser un même comportement avec plusieurs objets.

> L’héritage est étudié comme **mécanisme POO**, sans encore l'utiliser pour répartir les responsabilités de l'application.

---

# UA.221.13 — Programmer avec des abstractions

**Session :** S3

## Objectif

Utiliser des contrats et plusieurs implémentations pour rendre les objets interchangeables.

### Notions

- Abstraction
- Classe abstraite
- Méthode abstraite
- Interface
- Contrat
- Implémentation
- Polymorphisme
- Interface comme type
- Implémentations multiples

### Tutoriels

#### T.221.131 — Définir un contrat avec une interface

**Notions :**

- abstraction
- interface
- contrat
- méthode d'interface
- `implements`

**Production :**

Définir `ICategorieDAO`.

#### T.221.132 — Utiliser plusieurs implémentations

**Notions :**

- implémentation
- polymorphisme
- dépendance sur une interface
- remplacement d'une implémentation

**Production :**

Faire fonctionner le même contrat avec :

- `CategorieDAOJSON`
- `CategorieDAOMySQL`

---

# Organisation PHP associée au domaine

Ces notions sont introduites progressivement lorsqu'elles deviennent nécessaires à la programmation objet :

- Une classe par fichier
- Organisation des dossiers
- Namespace
- `use`
- Composer
- Autoloading
- PSR-4
- Exceptions
- Gestion des exceptions

Elles ne constituent pas des UAs supplémentaires.

---

# Résultats par Sprint

| Sprint | Résultat |
|---|---|
| **S1** | CRUD fonctionnel réalisé avec une classe et des objets encapsulés |
| **S2** | Plusieurs objets collaborent pour réaliser la fonctionnalité |
| **S3** | Une interface permet d'utiliser plusieurs implémentations |

---

# Limites du domaine

D.221.1 ne traite pas encore :

- responsabilité d'une classe ;
- SRP ;
- cohésion ;
- couplage comme critère de conception ;
- refactoring des responsabilités ;
- architecture Frontend / Backend ;
- Présentation / Traitement / Data ;
- DAO comme choix architectural ;
- Repository ;
- architecture 3-tiers ;
- interchangeabilité comme objectif d'architecture.

Ces notions sont traitées dans **D.222.1 — Responsabilités**, **D.213.1 — Composants** et **D.223.1 — Couches**.

## Logique pédagogique

**D.221.1 répond à :**

> **Comment programmer avec des objets ?**

**D.222.1 répond à :**

> **Qui doit faire quoi ?**

**D.213.1 répond à :**

> **Quels sont les grands composants de l'application ?**

**D.223.1 répond à :**

> **Comment organiser ces composants en couches ?**