# D.213.1 — Structurer l’application en composants

**Mini-code :** `composants`
**Niveau :** N2 — Structurer
**Sprint :** S1

## Capacité finale

**Structurer une application en composants distincts en séparant le Frontend et le Backend et en définissant leur communication à travers une API.**

## Livrable

Une application organisée en :

**Frontend → API / Backend**

---

# UA.213.11 — Structurer l’application en composants

**Session :** S1

### Objectif

Passer d'une application qui mélange interface et serveur à une organisation composée de deux grands composants :

**Frontend ↔ Backend**

puis définir leur mode de communication.

---

## T.213.111 — Identifier et séparer les composants

### Notions

* Application
* Composant
* Frontend
* Backend
* Client
* Serveur
* Interface utilisateur
* Responsabilité d'un composant
* Séparation Frontend / Backend
* Organisation des fichiers et dossiers

### Production

Identifier puis séparer :

```text id="8i3p9d"
Application
├── Frontend
└── Backend
```

---

## T.213.112 — Définir la communication entre les composants

### Notions

* Communication client / serveur
* Requête HTTP
* Réponse HTTP
* Méthode HTTP
* Ressource
* API
* Endpoint
* Point d’entrée
* URL d’API
* Données envoyées
* Données reçues

### Production

Définir le flux :

```text id="4wpe9a"
Frontend
    ↓ requête HTTP
API / Backend
    ↓
Traitement
    ↓ réponse HTTP
Frontend
```

---

## T.213.113 — Structurer et vérifier l’API

### Notions

* Endpoint CRUD
* GET
* POST
* PUT
* DELETE
* JSON comme format d’échange
* Structure d'une réponse
* Statut d'une opération
* Organisation des routes
* Point d'entrée unique
* Vérification de la communication

### Production

Organiser les opérations de la fonctionnalité autour de l'API :

```text id="60r9ls"
GET    → consulter
POST   → créer
PUT    → modifier
DELETE → supprimer
```

et vérifier les échanges :

```text id="j1p4pv"
Frontend
   ↕
API
   ↕
Backend
```

---

# Progression de l’UA

```text id="f2wwiu"
Identifier les composants
        ↓
Séparer Frontend / Backend
        ↓
Définir la communication
        ↓
Définir l’API
        ↓
Échanger des données
        ↓
Vérifier le fonctionnement
```

# Répartition avec les autres domaines

### D.213.1 — Composants

Répond à :

> **Quels sont les grands composants de l’application et comment communiquent-ils ?**

### D.224.1 — SPA

Répond à :

> **Comment JavaScript fait-il fonctionner l’interface et communique-t-il avec l’API ?**

Ainsi, `fetch`, gestion du DOM, événements, état de l'interface et asynchronisme restent principalement dans **D.224.1**.

### D.223.1 — Couches

Répond à :

> **Comment organiser le Backend en Présentation → Traitement → Data ?**

---

## Livrable final de l’UA

```text id="akx8cp"
Application
│
├── Frontend
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
└── Backend
    └── API
```

avec une communication :

```text id="3uy4r7"
Frontend
    ↕
HTTP / JSON
    ↕
API / Backend
```

## Capacité finale de l’UA

**Identifier, séparer et organiser les composants Frontend et Backend d’une application, puis définir et vérifier leur communication à travers une API.**
