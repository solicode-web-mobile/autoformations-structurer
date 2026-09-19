Pour éviter les chevauchements, je conseille de ne plus présenter les 10 domaines comme 10 blocs indépendants. Ils peuvent être regroupés en **4 familles pédagogiques**, chacune ayant une question simple.

### Les 3 Sprints

| Sprint                            | Finalité                                                                                   | Résultat attendu                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| **S1 — Concevoir et construire**  | Cadrer une fonctionnalité, la traduire en objets et réaliser un premier CRUD fonctionnel   | Une fonctionnalité complète en POO, avec son interface et son suivi de réalisation      |
| **S2 — Restructurer et enrichir** | Analyser les responsabilités, découper les classes et construire une interface interactive | Un code mieux structuré, avec des responsabilités séparées et une interface interactive |
| **S3 — Architecturer et isoler**  | Organiser le backend en couches et isoler l’accès aux données                              | Une application organisée en 3-tiers, avec un accès aux données isolé et évolutif       |

# Les 4 familles et les 10 domaines

## Famille 1 — Concevoir la fonctionnalité

| Code        | Mini-code        | Nouveau titre                                 | Capacité finale                                                                                            |
| ----------- | ---------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **D.211.1** | `fonctionnalite` | **Formaliser une fonctionnalité**             | Décrire une fonctionnalité à partir de l’acteur, de son objectif, de ses interactions et de ses scénarios. |
| **D.212.1** | `objets`         | **Modéliser les objets de la fonctionnalité** | Traduire le modèle de données du N1 en classes et objets cohérents avec la fonctionnalité à réaliser.      |

**Frontière :** on définit **quoi faire** puis **quels objets utiliser**.

---

## Famille 2 — Programmer et structurer le code

| Code        | Mini-code         | Nouveau titre                            | Capacité finale                                                                                 |
| ----------- | ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **D.221.1** | `poo`             | **Programmer avec des objets**           | Réaliser une fonctionnalité en PHP avec des classes, objets, attributs et méthodes.             |
| **D.222.1** | `responsabilites` | **Répartir les responsabilités**         | Identifier les responsabilités d’une classe et les répartir entre plusieurs classes cohérentes. |
| **D.213.1** | `composants`      | **Découper l’application en composants** | Séparer les grands composants de l’application et organiser leurs échanges.                     |
| **D.223.1** | `couches`         | **Organiser le backend en couches**      | Séparer Présentation, Traitement et Data afin d’isoler les responsabilités techniques.          |

### Frontière essentielle

**D.221 POO** = comment programmer avec des objets.
**D.222 Responsabilités** = qui doit faire quoi.
**D.213 Composants** = comment découper l’application en grands blocs.
**D.223 Couches** = comment organiser le backend à l’intérieur de ces blocs.

Ainsi, **D.213 et D.223 ne se chevauchent plus**.

---

## Famille 3 — Construire l’interface

| Code        | Mini-code  | Nouveau titre                                  | Capacité finale                                                                                             |
| ----------- | ---------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **D.224.1** | `spa`      | **Construire une interface interactive**       | Construire une interface JavaScript dynamique capable de gérer son état et de communiquer avec une API.     |
| **D.225.1** | `tailwind` | **Construire une interface avec Tailwind CSS** | Transformer une maquette ou une interface existante en interface responsive et cohérente avec Tailwind CSS. |

**Frontière :**

* `spa` = **comportement et communication**
* `tailwind` = **structure visuelle et responsive**

---

## Famille 4 — Piloter le projet

| Code        | Mini-code | Nouveau titre                               | Capacité finale                                                                                               |
| ----------- | --------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **D.251.1** | `projet`  | **Organiser le travail par fonctionnalité** | Découper une fonctionnalité en tâches réalisables, ordonnées et dépendantes.                                  |
| **D.252.1** | `suivi`   | **Suivre l’avancement des fonctionnalités** | Organiser et mettre à jour les tâches dans GitHub afin de rendre visible l’état d’avancement et les blocages. |

**Frontière :**

* `projet` = **préparer le travail**
* `suivi` = **suivre le travail**

---

# Répartition dans les 3 Sprints

| Domaine                                          | S1                                                              | S2                                               | S3                                              |
| ------------------------------------------------ | --------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------- |
| **D.211 — Formaliser une fonctionnalité**        | **Résultat :** fonctionnalité cadrée et scénarios définis       | —                                                | —                                               |
| **D.212 — Modéliser les objets**                 | **Résultat :** classes de départ définies à partir du modèle N1 | —                                                | —                                               |
| **D.221 — Programmer avec des objets**           | **Résultat :** CRUD fonctionnel en POO                          | Consolidation                                    | —                                               |
| **D.222 — Répartir les responsabilités**         | —                                                               | **Résultat :** classes restructurées             | —                                               |
| **D.213 — Découper en composants**               | **Résultat :** Frontend / Backend séparés                       | Consolidation des composants                     | —                                               |
| **D.223 — Organiser en couches**                 | —                                                               | Préparation de la séparation                     | **Résultat :** Présentation / Traitement / Data |
| **D.224 — Construire une interface interactive** | Première interface fonctionnelle                                | **Résultat :** interface dynamique avec API/JSON | Consolidation                                   |
| **D.225 — Construire avec Tailwind**             | Première interface structurée                                   | **Résultat :** interface responsive et cohérente | Consolidation                                   |
| **D.251 — Organiser le travail**                 | **Résultat :** fonctionnalités découpées en tâches              | Découpage des tâches de restructuration          | Découpage des tâches d'architecture             |
| **D.252 — Suivre l'avancement**                  | **Résultat :** issues créées et suivies                         | Suivi de la restructuration                      | Suivi de l'architecture et finalisation         |

# Lecture très simple du parcours

```text
S1 — CONCEVOIR ET CONSTRUIRE
Fonctionnalité
    ↓
Objets
    ↓
POO
    ↓
Composants
    ↓
Première interface
```

```text
S2 — RESTRUCTURER ET ENRICHIR
POO existante
    ↓
Responsabilités
    ↓
Classes séparées
    ↓
Interface interactive
```

```text
S3 — ARCHITECTURER ET ISOLER
Composants
    ↓
Couches
    ↓
Présentation
    ↓
Traitement
    ↓
Data
```

### Les 10 mini-codes à retenir

**fonctionnalite → objets → poo → responsabilites → composants → couches → spa → tailwind → projet → suivi**

Cette nomenclature est plus mémorisable et surtout chaque domaine répond à une question différente :

**Quoi faire ? → Quels objets ? → Comment programmer ? → Qui fait quoi ? → Quels grands blocs ? → Quelles couches ? → Comment interagir ? → Comment présenter ? → Comment travailler ? → Comment suivre ?**
