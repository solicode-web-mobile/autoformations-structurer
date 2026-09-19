---
title: "Construire les cas d’utilisation"
layout: tuto
slug: "construire-les-cas-dutilisation"
permalink: /tutos/:slug/
tuto_id: "T.211.112"
type: "classique"
version: "normal"
ua: "UA.211.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* identifier les cas d’utilisation ;
* relier un acteur à un cas d’utilisation ;
* construire un diagramme de contexte ;
* construire un diagramme de cas d’utilisation ;
* vérifier la cohérence entre les acteurs et les fonctionnalités.

Vous utiliserez les acteurs identifiés dans le tutoriel précédent.

## 2. Prérequis

Vous devez savoir :

* identifier le système ;
* définir son périmètre ;
* identifier les acteurs ;
* préciser le rôle et l’objectif d'un acteur.

## Données de départ

Le système étudié est un **Blog**.

Les acteurs identifiés sont :

| Acteur         | Objectif                       |
| -------------- | ------------------------------ |
| Administrateur | Gérer le contenu du blog       |
| Auteur         | Rédiger et gérer ses articles  |
| Visiteur       | Consulter les articles publiés |

Les fonctionnalités déjà identifiées sont :

### Administrateur

* consulter les catégories ;
* ajouter une catégorie ;
* modifier une catégorie ;
* supprimer une catégorie ;
* créer un auteur ;
* valider un article ;
* publier un article.

### Auteur

* ajouter un article ;
* modifier un article non publié ;
* supprimer un article non publié ;
* changer son profil ;
* réinitialiser son mot de passe.

### Visiteur

* consulter les articles.

## Partie 1 — Théorie

### 1.1. Le cas d’utilisation

Un **cas d’utilisation** représente une action réalisée par un acteur pour atteindre un objectif avec le système.

Exemple :

> Ajouter une catégorie

L'acteur :

```mermaid
usecase-beta
    actor Administrateur
```

Le cas d'utilisation :

```mermaid
usecase-beta
    UC("Ajouter une catégorie")
```

En diagramme, cela se représente ainsi :






```mermaid
usecase-beta
    actor Administrateur
    UC("Ajouter une catégorie")
    Administrateur --> UC
```
 

Le cas d'utilisation doit représenter une action utile pour l'acteur.

### 1.2. Nommer un cas d’utilisation

Un cas d'utilisation doit utiliser un verbe d'action.

Exemples :

* Ajouter une catégorie
* Modifier une catégorie
* Publier un article
* Consulter les articles
* Changer son profil

Éviter un nom qui représente seulement un objet :

```mermaid
usecase-beta
    UC("Catégorie")
```

Préférer :

```mermaid
usecase-beta
    UC("Consulter les catégories")
```

### 1.3. L’objectif du cas d’utilisation

Le cas d’utilisation doit correspondre à un objectif de l'acteur.

Exemple :

> L'Administrateur veut gérer les catégories.

Les cas d'utilisation associés peuvent être :

* Consulter les catégories
* Ajouter une catégorie
* Modifier une catégorie
* Supprimer une catégorie

Le cas d’utilisation précise donc une action attendue par l'acteur.

### 1.4. L’association acteur / cas d’utilisation

Une **association** indique qu'un acteur participe à un cas d'utilisation.

Exemple :

```mermaid
usecase-beta
    actor Administrateur
    UC("Ajouter une catégorie")
    Administrateur --> UC
```

Cela signifie que l'Administrateur utilise le système pour ajouter une catégorie.

Une association ne décrit pas encore les étapes de l'action.

Elle indique seulement :

> **Quel acteur utilise quel cas d'utilisation ?**

### 1.5. Le diagramme de contexte

Le **diagramme de contexte** représente :

* le système ;
* les acteurs ;
* les interactions générales entre les acteurs et le système.

Il ne détaille pas encore toutes les fonctionnalités.

Pour notre exemple :

* le système est le Blog ;
* l'Administrateur gère le contenu ;
* l'Auteur rédige et gère ses articles ;
* le Visiteur consulte les articles publiés.

### 1.6. Le diagramme de cas d’utilisation

Le **diagramme de cas d’utilisation** détaille les fonctionnalités du système et les acteurs qui les utilisent.

Il permet de répondre à deux questions :

> Qui utilise le système ?

> Pour faire quoi ?

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

Chaque cas d'utilisation doit être lié à un acteur cohérent.

Exemple :

```mermaid
usecase-beta
    actor Administrateur
    UC("Ajouter une catégorie")
    Administrateur --> UC
```

Le Visiteur ne doit pas être relié à cette fonctionnalité si les données de départ ne le prévoient pas.

De même :

```mermaid
usecase-beta
    actor Visiteur
    UC("Consulter les articles")
    Visiteur --> UC
```

L'association doit correspondre au rôle et à l'objectif de l'acteur.

## Partie 2 — Pratique

### 2.1. Identifier les cas d’utilisation

À partir des données de départ, associez chaque acteur à ses cas d'utilisation.

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

Vérifiez chaque cas d'utilisation.

Chaque nom doit :

* représenter une action ;
* commencer par un verbe ;
* correspondre à une fonctionnalité identifiée ;
* être compréhensible par l'acteur.

Exemple :

```mermaid
usecase-beta
    UC("Publier un article")
```

est correct.

```mermaid
usecase-beta
    UC("Article")
```

n'est pas un cas d'utilisation.

### 2.3. Construire le diagramme de contexte

Utilisez le système et les acteurs identifiés dans T.211.111.

Le diagramme doit représenter :

* le système **Blog** ;
* l'Administrateur ;
* l'Auteur ;
* le Visiteur ;
* l'interaction générale de chaque acteur avec le système.

Le résultat attendu est de cette forme :

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

À partir du tableau précédent, représentez :

* les acteurs ;
* les cas d'utilisation ;
* les associations entre acteurs et cas d'utilisation.

Le diagramme doit contenir uniquement les fonctionnalités identifiées dans les données de départ.

Exemple de syntaxe pour une partie du diagramme :

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

Utilisez les questions suivantes :

* Le système est-il clairement identifié ?
* Tous les acteurs sont-ils présents ?
* Tous les cas d'utilisation viennent-ils des fonctionnalités fournies ?
* Chaque cas d'utilisation est-il lié au bon acteur ?
* Chaque cas d'utilisation représente-t-il une action ?
* Un acteur est-il relié à une fonctionnalité qu'il ne réalise pas ?
* Une fonctionnalité a-t-elle été oubliée ?

### 2.6. Produire les deux diagrammes

Créez les deux fichiers :

```text
context_diagram.mmd
use_cases.mmd
```

Dans `context_diagram.mmd`, représentez le système et les interactions générales avec les acteurs.

Dans `use_cases.mmd`, représentez les acteurs, les cas d'utilisation et leurs associations.

**Travail à faire :**

Construisez les deux diagrammes à partir des données de départ.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le diagramme de contexte ;
* le diagramme de cas d'utilisation ;
* la liste des associations acteur / cas d'utilisation.

**Critère de réussite :**

Les deux diagrammes sont cohérents avec les acteurs et les fonctionnalités fournis dans les données de départ.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/fonctionnalite/tuto-211-112-fonctionnalite.html' | relative_url }}"
    height="800"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez appris :**

* à identifier un cas d'utilisation ;
* à nommer un cas d'utilisation ;
* à associer un acteur à un cas d'utilisation ;
* à construire un diagramme de contexte ;
* à construire un diagramme de cas d'utilisation ;
* à vérifier la cohérence entre acteurs et fonctionnalités.

**Vous avez produit :**

* un diagramme de contexte ;
* un diagramme de cas d'utilisation ;
* les associations entre acteurs et cas d'utilisation.

**Vous préparerez ensuite :**

> la description détaillée d'un cas d'utilisation avec son scénario nominal.

## Glossaire

* **Cas d'utilisation** : action réalisée par un acteur pour atteindre un objectif avec le système.
* **Association** : lien entre un acteur et un cas d'utilisation.
* **Diagramme de contexte** : représentation du système et de ses acteurs externes.
* **Diagramme de cas d'utilisation** : représentation des acteurs, des fonctionnalités et de leurs associations.
* **Fonctionnalité** : service proposé par le système à un utilisateur.
* **Cohérence** : correspondance correcte entre les acteurs et les fonctionnalités.
