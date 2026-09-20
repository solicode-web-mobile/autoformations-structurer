---
title: "Construire les cas d’utilisation"
layout: tuto
slug: "construire-cas-utilisation"
permalink: /tutos/:slug/compact
tuto_id: "T.211.112"
type: "classique"
version: "compact"
ua: "UA.211.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- identifier les cas d’utilisation ;
- relier un acteur à un cas d’utilisation ;
- construire un diagramme de contexte ;
- construire un diagramme de cas d’utilisation ;
- vérifier la cohérence entre acteurs et fonctionnalités.

## 2. Prérequis

Vous devez savoir :

- identifier le système ;
- définir son périmètre ;
- identifier les acteurs ;
- préciser le rôle et l’objectif d'un acteur.

## Données de départ

Le système étudié est un **Blog**.

| Acteur         | Objectif                       |
| -------------- | ------------------------------ |
| Administrateur | Gérer le contenu du blog       |
| Auteur         | Rédiger et gérer ses articles  |
| Visiteur       | Consulter les articles publiés |

Fonctionnalités identifiées :

### Administrateur

- consulter, ajouter, modifier, supprimer une catégorie ;
- créer un auteur ;
- valider, publier un article.

### Auteur

- ajouter, modifier, supprimer un article non publié ;
- changer son profil, réinitialiser son mot de passe.

### Visiteur

- consulter les articles.

## Partie 1 — Théorie

### 1.1. Le cas d’utilisation

**Cas d’utilisation** : action réalisée par un acteur pour atteindre un objectif.

Exemple :

```mermaid
usecase-beta
    actor Administrateur
```

Le cas d'utilisation :

```mermaid
usecase-beta
    UC("Ajouter une catégorie")
```

En diagramme :

```mermaid
usecase-beta
    actor Administrateur
    UC("Ajouter une catégorie")
    Administrateur --> UC
```

### 1.2. Nommer un cas d’utilisation

Utilisez un verbe d'action (ex: *Ajouter une catégorie*).
Évitez les noms seuls (ex: *Catégorie*).

### 1.3. L’objectif du cas d’utilisation

Correspond à l'objectif de l'acteur (ex: *L'Administrateur veut gérer les catégories* → *Ajouter une catégorie*).

### 1.4. L’association acteur / cas d’utilisation

**Association** : indique l'acteur qui participe au cas d'utilisation (représentée par une flèche `-->`).

### 1.5. Le diagramme de contexte

Représente le système, les acteurs et les interactions générales (sans détailler toutes les fonctionnalités).

### 1.6. Le diagramme de cas d’utilisation

Détaille les fonctionnalités du système et les acteurs associés (Qui fait quoi ?).

Exemple :

```mermaid
usecase-beta
    actor Administrateur
    actor Auteur
    actor Visiteur

    UC1("Ajouter une catégorie")
    UC2("Ajouter un article")
    UC3("Consulter les articles")

    Administrateur --> UC1
    Auteur --> UC2
    Visiteur --> UC3
```

### 1.7. Cohérence acteur / fonctionnalité

Chaque cas d'utilisation doit être lié à l'acteur cohérent selon son rôle et objectif.

## Partie 2 — Pratique

### 2.1. Identifier les cas d’utilisation

**Travail à faire :**

Complétez le tableau.

| Acteur         | Cas d’utilisation |
| -------------- | ----------------- |
| Administrateur |                   |
| Administrateur |                   |
| Administrateur |                   |
| Administrateur |                   |
| Administrateur |                   |
| Administrateur |                   |
| Administrateur |                   |
| Auteur         |                   |
| Auteur         |                   |
| Auteur         |                   |
| Auteur         |                   |
| Auteur         |                   |
| Visiteur       |                   |

### 2.2. Vérifier les noms

Chaque cas d'utilisation doit être un verbe d'action correspondant à une fonctionnalité.

### 2.3. Construire le diagramme de contexte

**Système :** Blog.
**Acteurs :** Administrateur, Auteur, Visiteur.
Tracez les interactions générales.

```mermaid
usecase-beta
    actor Administrateur
    actor Auteur
    actor Visiteur

    Blog["Blog"]

    Administrateur -- "Gère le contenu" --> Blog
    Auteur -- "Rédige et gère ses articles" --> Blog
    Visiteur -- "Consulte les articles publiés" --> Blog
```

### 2.4. Construire le diagramme de cas d’utilisation

Représentez acteurs, cas d'utilisation et associations.

```mermaid
usecase-beta
    actor Administrateur

    Blog["Blog"]
    
    UC1("Consulter les catégories")
    UC2("Ajouter une catégorie")

    Administrateur --> UC1
    Administrateur --> UC2
```

### 2.5. Vérifier le diagramme

Contrôlez :

- Système identifié ?
- Tous les acteurs présents ?
- Cas d'utilisation basés sur les données de départ ?
- Associations correctes ?
- Noms d'action ?

### 2.6. Produire les deux diagrammes

Fichiers à créer :

- `context_diagram.mmd`
- `use_cases.mmd`

**Travail à faire :**

Construisez les deux diagrammes.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- le diagramme de contexte ;
- le diagramme de cas d'utilisation ;
- la liste des associations acteur / cas d'utilisation.

**Critère de réussite :**

Les deux diagrammes sont cohérents avec les acteurs et les fonctionnalités fournis.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/fonctionnalite/tuto-211-112-fonctionnalite.html' | relative_url }}"
    height="800"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez appris :**

- identifier, nommer et associer des cas d'utilisation ;
- construire des diagrammes de contexte et de cas d'utilisation ;
- vérifier la cohérence.

**Vous avez produit :**

- les deux diagrammes et la liste des associations.

**Vous préparerez ensuite :**

> la description détaillée d'un cas d'utilisation avec son scénario nominal.

## Glossaire

* **Cas d'utilisation** : action réalisée par un acteur.
* **Association** : lien acteur - cas d'utilisation.
* **Diagramme de contexte** : représentation générale du système et acteurs externes.
* **Diagramme de cas d'utilisation** : détail des fonctionnalités et acteurs.
* **Fonctionnalité** : service proposé.
* **Cohérence** : correspondance correcte.
