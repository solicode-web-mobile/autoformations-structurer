# D.222.1 — Répartir les responsabilités entre les classes

**Mini-code :** `responsabilites`
**Niveau :** N2 — Structurer
**Sprint :** S2

## Capacité finale

**Analyser les responsabilités d’une fonctionnalité et les répartir entre plusieurs classes cohérentes en appliquant le principe de responsabilité unique, afin d’obtenir des classes plus spécialisées et mieux structurées.**

## Livrable

**Version restructurée du CRUD de S1 avec des responsabilités séparées.**

---

# UA.222.11 — Répartir les responsabilités entre les classes

**Session :** S2

## Objectif

À partir du code POO réalisé en S1, identifier les responsabilités mélangées, les répartir entre plusieurs classes et vérifier la qualité de cette nouvelle organisation.

Progression :

**Identifier → Séparer → Vérifier**

---

## T.222.111 — Identifier les responsabilités d’une classe

### Notions

* Responsabilité
* Rôle d’une classe
* Responsabilité d’une méthode
* Classe trop chargée
* Classe « fourre-tout »
* Responsabilités mélangées
* Cohésion
* Couplage
* Dépendance

### Travail

Analyser la classe `Categorie` du S1 et identifier les différentes responsabilités qu’elle prend en charge.

```text id="9y0t8c"
Categorie
├── données
├── CRUD
├── lecture JSON
└── écriture JSON
```

### Production

**Analyse des responsabilités de la classe existante.**

---

## T.222.112 — Séparer les responsabilités entre plusieurs classes

### Notions

* Extraction de responsabilité
* Extraction de classe
* Déplacement de méthode
* Répartition des responsabilités
* Collaboration entre classes
* Objet métier
* Classe de gestion
* Dépendance entre classes
* Cohésion forte
* Couplage maîtrisé

### Travail

Transformer progressivement :

```text id="9kjf3c"
Categorie
├── données
├── CRUD
└── accès JSON
```

en une organisation où les responsabilités sont réparties :

```text id="2x9p3h"
Categorie
    ↓
GestionCategorie
    ↓
accès aux données
```

### Production

**Classes restructurées et capables de collaborer.**

---

## T.222.113 — Vérifier et refactoriser les responsabilités

### Notions

* Principe de responsabilité unique (SRP)
* Responsabilité clairement définie
* Raison principale de changement
* Code smell
* Vérification de la cohésion
* Vérification du couplage
* Refactoring
* Vérification du comportement

### Travail

Vérifier la nouvelle organisation et refactoriser les classes lorsque plusieurs responsabilités restent mélangées, sans modifier le comportement fonctionnel du CRUD.

### Production

**CRUD refactorisé et validé.**

---

# Progression de l’UA

```text id="qj9t5s"
Analyser
   ↓
Identifier les responsabilités
   ↓
Séparer
   ↓
Créer / déplacer les classes
   ↓
Faire collaborer
   ↓
Vérifier avec le SRP
   ↓
Refactoriser
```

# Application au projet

## Avant S2

```text id="d1m8vv"
Categorie
├── propriétés
├── getters / setters
├── readAll()
├── create()
├── update()
├── delete()
└── accès JSON
```

## Après S2

```text id="7nd4gz"
Categorie
      ↓
GestionCategorie
      ↓
Accès aux données
```

L’objectif est que chaque classe possède **un rôle clairement identifiable**.

La question centrale reste :

> **Quelle classe est responsable de quoi ?**

# Limites

D.222.1 ne traite pas encore :

* architecture Frontend / Backend ;
* API comme composant ;
* architecture 3-tiers ;
* Présentation / Traitement / Data ;
* DAO ;
* Repository ;
* isolation complète de la persistance ;
* interchangeabilité des sources ;
* injection de dépendances comme mécanisme architectural.

Ces notions sont traitées dans **D.213.1 — Composants** et **D.223.1 — Couches**.

## Résultat final

L’apprenant passe de :

**une classe chargée de plusieurs responsabilités**

à :

**plusieurs classes cohérentes qui collaborent en conservant le même comportement fonctionnel.**
