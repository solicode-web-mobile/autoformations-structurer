# D.223.1 — Organiser les couches d'une application

**Mini-code :** `couches`
**Niveau :** N2 — Structurer
**Sprint :** S3

## Capacité finale

**Organiser une application en couches Présentation, Traitement et Data, isoler l'accès aux données derrière un contrat et permettre le remplacement de sa source sans modifier le traitement de la fonctionnalité.**

## Livrable

**Application organisée en 3 couches avec un accès aux données isolé et interchangeable entre JSON et MySQL.**

---

# UA.223.11 — Organiser l'application en couches

**Session :** S3

## Objectif

Transformer l'organisation obtenue en S2 en une architecture claire :

**Présentation → Traitement → Data**

---

## T.223.111 — Organiser les couches de l'application

### Notions

* Architecture en couches
* Architecture 3-tiers
* Couche Présentation
* Couche Traitement
* Couche Data
* Rôle d'une couche
* Responsabilité d'une couche
* Flux entre les couches
* Sens des dépendances
* Organisation physique des couches

### Application

```text id="7f3c1m"
Présentation
      ↓
Traitement
      ↓
Data
```

Dans le projet :

```text id="v8m4sq"
CategorieController
       ↓
GestionCategorie
       ↓
Data
```

### Production

**Backend organisé selon Présentation → Traitement → Data.**

---

# T.223.112 — Isoler l'accès aux données

### Notions

* Accès aux données
* Persistance
* DAO
* Opérations CRUD
* Encapsulation de la persistance
* DAO JSON
* DAO MySQL
* Interface
* Contrat
* Implémentation

### Application

L'accès aux données est extrait du traitement :

```text id="f9r5zq"
GestionCategorie
       ↓
ICategorieDAO
       ↓
CategorieDAOJSON
```

Puis une autre implémentation :

```text id="0oy4fp"
GestionCategorie
       ↓
ICategorieDAO
       ↓
CategorieDAOMySQL
```

### Production

**Accès aux données isolé dans des composants Data.**

---

# T.223.113 — Rendre la source de données interchangeable

### Notions

* Abstraction
* Contrat / implémentation
* Polymorphisme
* Injection de dépendance
* Interchangeabilité
* Configuration
* Factory
* Sélection d'une implémentation
* PDO
* Source JSON
* Source MySQL

### Application

Le traitement utilise le contrat :

```text id="q9m6cv"
GestionCategorie
       ↓
ICategorieDAO
       ↓
 ┌─────┴─────┐
 ↓           ↓
JSON        MySQL
```

La `DAOFactory` peut ensuite sélectionner l'implémentation appropriée.

### Production

**Même traitement fonctionnel avec plusieurs sources de données.**

---

# Progression de l'UA

```text id="x4m1kt"
Organiser
Présentation → Traitement → Data
        ↓
Isoler
Traitement → DAO
        ↓
Abstraire
DAO → Interface
        ↓
Interchanger
JSON ↔ MySQL
```

# Limites

D.223.1 ne réenseigne pas :

* classe ;
* objet ;
* encapsulation ;
* héritage ;
* polymorphisme de base ;
* interface comme notion générale de POO.

Ces notions sont acquises dans **D.221.1 — POO**.

Il ne revient pas non plus sur :

* SRP ;
* cohésion ;
* couplage ;
* refactoring des classes.

Ces notions sont acquises dans **D.222.1 — Responsabilités**.

Il ne traite pas davantage :

* séparation Frontend / Backend ;
* API comme grand composant.

Ces notions sont acquises dans **D.213.1 — Composants**.

## Résultat final

L'apprenant passe de :

**classes séparées**

→ **couches organisées**

→ **accès aux données isolé**

→ **contrat commun**

→ **source JSON ou MySQL interchangeable**.
