# D.224.1 — Construire une interface web interactive et asynchrone

**Mini-code :** `spa`
**Niveau :** N2 — Structurer
**Sprints :** S1 → S2 → S3

## Capacité finale

**Construire une interface web interactive et asynchrone capable de réagir aux actions de l’utilisateur, de gérer son état, de mettre à jour dynamiquement son contenu et de communiquer avec une API sans recharger complètement la page.**

---

# UA.224.11 — Construire une interface interactive

**Session :** S1

## Objectif

Utiliser JavaScript pour manipuler le DOM, gérer les événements et réaliser un premier CRUD sans rechargement de la page.

### T.224.111 — Manipuler le DOM et gérer les interactions

**Notions :**

* DOM
* `DOMContentLoaded`
* sélection d’éléments
* événements
* `click`
* `submit`
* gestionnaire d’événement
* `value`
* `innerHTML`
* `classList`
* `reset()`
* affichage / masquage
* création et insertion d’éléments

**Production :**

Interface capable d’afficher, modifier et réinitialiser dynamiquement le formulaire et la liste des catégories.

### T.224.112 — Communiquer avec une API avec Fetch

**Notions :**

* requête HTTP
* `fetch`
* `GET`
* `POST`
* `PUT`
* `DELETE`
* JSON
* `JSON.stringify()`
* `response.json()`
* `then()`
* `catch()`
* `preventDefault()`

**Production :**

CRUD fonctionnel sans rechargement complet de la page.

### Résultat S1

**Une interface CRUD interactive communiquant avec l’API.**

---

# UA.224.12 — Gérer les états et les retours de l’interface

**Session :** S2

## Objectif

Améliorer l’interface pour représenter clairement les différents états d’une opération asynchrone et informer l’utilisateur.

### T.224.121 — Gérer les états d’une opération asynchrone

**Notions :**

* état initial
* état de chargement
* état de succès
* état d’erreur
* activation / désactivation d’un contrôle
* `finally()`
* gestion d’une erreur réseau
* gestion d’une erreur retournée par l’API

**Production :**

Formulaire capable de représenter :

**Initial → Chargement → Succès / Erreur**

### T.224.122 — Donner un retour à l’utilisateur

**Notions :**

* feedback utilisateur
* message de succès
* message d’erreur
* notification
* Toast
* indicateur de chargement
* rafraîchissement des données
* synchronisation de l’interface après une opération

**Production :**

Interface avec feedback utilisateur après création, modification et suppression.

### Résultat S2

**Une interface réactive qui gère les états et informe l’utilisateur.**

---

# UA.224.13 — Connecter l’interface à une API structurée

**Session :** S3

## Objectif

Adapter l’interface à l’API structurée du backend et maintenir la cohérence entre l’interface et les données du serveur.

### T.224.131 — Consommer une API structurée

**Notions :**

* endpoint
* URL d’API
* paramètres de requête
* méthode HTTP
* JSON d’entrée
* JSON de sortie
* statut de réponse
* communication Frontend / Backend

**Production :**

Interface utilisant les endpoints du backend organisé.

### T.224.132 — Organiser le code JavaScript d’une interface dynamique

**Notions :**

* initialisation
* fonctions d’accès à l’API
* fonctions d’affichage
* fonctions d’interaction
* fonctions utilitaires
* organisation du code
* synchronisation avec les données serveur
* actualisation après création / modification / suppression

**Production :**

Interface finale connectée à l’API et organisée en fonctions clairement séparées.

### Résultat S3

**Une interface dynamique connectée à l’API structurée du backend.**

---

# Progression globale du domaine

```text
S1 — Interagir
DOM → événements → formulaire → Fetch → JSON
```

↓

```text
S2 — Réagir
Chargement → succès → erreur → feedback → état
```

↓

```text
S3 — Communiquer
Frontend → API → Backend → JSON → synchronisation
```

# Règle de séparation avec les autres domaines

**D.224.1 — SPA**

> Comment l’interface **fonctionne et communique** ?

**D.225.1 — Tailwind**

> Comment l’interface **est présentée et rendue responsive** ?

**D.213.1 — Composants**

> Comment **Frontend et Backend sont séparés et communiquent** ?

Ainsi, D.224.1 apprend à **utiliser** l’API, alors que D.213.1 apprend à **organiser** la communication Frontend / Backend.

## Résultats par Sprint

| Sprint | UA            | Résultat                                                  |
| ------ | ------------- | --------------------------------------------------------- |
| **S1** | **UA.224.11** | Interface CRUD interactive et asynchrone                  |
| **S2** | **UA.224.12** | Interface avec états, erreurs et feedback utilisateur     |
| **S3** | **UA.224.13** | Interface connectée et synchronisée avec l’API structurée |

## Limites

Le domaine ne traite pas :

* Tailwind CSS ;
* responsive design ;
* architecture backend ;
* responsabilités des classes PHP ;
* architecture 3-tiers ;
* DAO / Repository.

## Précision sur « SPA »

Dans votre parcours, **SPA** désigne ici une interface qui reste sur la même page, intercepte les actions utilisateur, communique avec l’API avec `fetch` et met à jour le DOM dynamiquement.

Il n’est pas nécessaire d’introduire un routeur frontend ou un framework SPA à ce niveau.
