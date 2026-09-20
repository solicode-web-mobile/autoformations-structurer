---
title: "Décomposer une fonctionnalité en tâches"
layout: tuto
slug: "decomposer-fonctionnalite-taches"
permalink: /tutos/:slug/
tuto_id: "T.251.111"
type: "classique"
version: "normal"
ua: "UA.251.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à transformer une fonctionnalité en un ensemble de tâches réalisables.

Vous allez apprendre à :

* distinguer une fonctionnalité et une tâche ;
* identifier le livrable ;
* découper le travail en étapes ;
* créer des tâches ;
* créer des sous-tâches lorsque cela est nécessaire ;
* identifier les prérequis ;
* identifier les dépendances ;
* définir l'ordre de réalisation ;
* repérer une tâche bloquante.

À la fin du tutoriel, vous pourrez passer de :

```text
Fonctionnalité
      ↓
Tâches
      ↓
Dépendances
      ↓
Ordre de réalisation
```

## 2. Prérequis

Vous devez connaître :

* la notion de projet ;
* la notion de fonctionnalité ;
* les grandes étapes d'un développement logiciel ;
* les notions de livrable et de validation.

Vous devez être capable de lire une description simple d'une fonctionnalité.

## Données de départ

### Contexte du projet

Vous travaillez sur une application de blog.

Une fonctionnalité à réaliser est :

> **Gérer les catégories**

L'utilisateur administrateur doit pouvoir :

* consulter les catégories ;
* ajouter une catégorie ;
* modifier une catégorie ;
* supprimer une catégorie.

### Livrable

Le livrable attendu est :

> **Une fonctionnalité de gestion des catégories disponible dans l'application.**

Le travail doit être organisé avant sa réalisation.

## Partie 1 — Théorie

### 1.1. Le projet

Un projet regroupe plusieurs travaux réalisés pour obtenir un résultat final.

Exemple :

```text
Projet Blog
   ↓
Fonctionnalités
```

Une fonctionnalité fait donc partie d'un projet.

### 1.2. La fonctionnalité

Une fonctionnalité décrit un service que l'application doit fournir à l'utilisateur.

Exemple :

> Gérer les catégories.

Cette formulation représente un objectif fonctionnel.

Une fonctionnalité est généralement trop grande pour être réalisée en une seule action.

Il faut donc la décomposer.

### 1.3. Le livrable

Le livrable est le résultat attendu du travail.

Exemple :

> Une gestion des catégories fonctionnelle et vérifiée.

Le livrable répond à la question :

> **Qu'est-ce qui doit être obtenu à la fin ?**

### 1.4. L'étape

Une étape représente une partie du processus de réalisation.

Exemple :

```text
Cadrer
Concevoir
Développer
Tester
Valider
```

Dans ce tutoriel, nous nous concentrons sur la décomposition du travail.

La notion d'ordre complet du processus sera approfondie dans le tutoriel suivant.

### 1.5. La tâche

Une tâche est un travail précis que l'on peut réaliser et suivre.

Exemple :

> Créer la table `categories`.

Cette tâche est plus précise que :

> Réaliser la gestion des catégories.

Une tâche doit être suffisamment claire pour qu'une personne sache ce qu'elle doit faire.

### 1.6. Une tâche doit être réalisable

Une bonne tâche décrit une action concrète.

Exemple :

> Créer le formulaire d'ajout d'une catégorie.

Cette tâche est plus facile à suivre que :

> Travailler sur les catégories.

La deuxième formulation ne précise pas le travail attendu.

### 1.7. La sous-tâche

Une sous-tâche est une partie d'une tâche.

Exemple :

```text
Tâche : Créer le formulaire d'ajout

Sous-tâches :
- ajouter le champ Nom ;
- ajouter le champ Couleur ;
- ajouter le champ Icône ;
- ajouter le bouton Enregistrer.
```

Une sous-tâche est utile lorsque la tâche contient plusieurs actions clairement séparables.

Il ne faut pas créer des sous-tâches pour chaque petite action.

### 1.8. Le prérequis

Un prérequis est une condition nécessaire avant de commencer une tâche.

Exemple :

> Le modèle de données des catégories doit être défini avant de créer le formulaire correspondant.

On peut écrire :

```text
Modèle de données
      ↓
Formulaire
```

Le formulaire dépend donc d'un travail préalable.

### 1.9. La dépendance

Une dépendance indique qu'une tâche attend le résultat d'une autre tâche.

Exemple :

```text
Tâche A : créer la table categories
                 ↓
Tâche B : créer l'accès aux catégories
```

La tâche B dépend de la tâche A.

Une dépendance concerne donc l'ordre entre les tâches.

### 1.10. Dépendance et ordre

Une dépendance permet de déterminer un ordre logique.

Exemple :

```text
Créer la table categories
           ↓
Créer l'accès aux données
           ↓
Créer l'interface
```

Il n'est pas logique de réaliser une tâche qui utilise un élément qui n'existe pas encore.

### 1.11. La tâche bloquante

Une tâche est bloquante lorsqu'elle empêche une autre tâche de continuer.

Exemple :

```text
Tâche A
Créer la structure des catégories
       ↓
       ├── bloque la Tâche B
       └── bloque la Tâche C
```

Si la tâche A n'est pas terminée, les tâches B et C ne peuvent pas continuer.

### 1.12. Identifier une tâche bloquante

Posez la question :

> **Quelles autres tâches ne peuvent pas commencer sans cette tâche ?**

Exemple :

```text
Créer la structure des données
        ↓
        ├── formulaire
        ├── liste
        └── modification
```

La première tâche est donc une tâche bloquante pour les autres.

### 1.13. L'ordre de réalisation

L'ordre de réalisation indique dans quel ordre les tâches doivent être effectuées.

Exemple :

```text
1. Préparer les données
2. Préparer le fonctionnement
3. Construire l'interface
4. Tester
```

L'ordre doit tenir compte des dépendances.

### 1.14. Décomposer sans trop détailler

Une fonctionnalité ne doit pas être découpée en centaines de petites tâches.

Exemple trop détaillé :

```text
Ouvrir le fichier
Cliquer dans l'éditeur
Écrire "class"
Écrire le nom
Enregistrer le fichier
Fermer le fichier
```

Ces actions sont trop petites.

Une tâche doit représenter un travail identifiable.

Exemple :

> Créer la classe `Categorie`.

### 1.15. Une décomposition utile

Une bonne décomposition permet de répondre à quatre questions :

```text
Quoi ?
→ tâche à réaliser

Avec quoi ?
→ prérequis

Après quoi ?
→ dépendance

Dans quel ordre ?
→ ordre de réalisation
```

### 1.16. À retenir

* Une fonctionnalité représente un service à réaliser.
* Une tâche représente un travail précis.
* Une sous-tâche détaille une tâche lorsque c'est nécessaire.
* Le livrable représente le résultat attendu.
* Un prérequis doit être disponible avant une tâche.
* Une dépendance relie deux tâches.
* Une tâche bloquante empêche d'autres tâches d'avancer.
* L'ordre de réalisation doit respecter les dépendances.
* Une tâche doit rester suffisamment grande pour représenter un vrai travail.

## Partie 2 — Pratique

### 2.1. Analyser la fonctionnalité

Reprenez la fonctionnalité :

> **Gérer les catégories**

Écrivez d'abord les actions principales nécessaires.

Utilisez ce tableau :

| Fonctionnalité       | Action à réaliser |
| -------------------- | ----------------- |
| Gérer les catégories |                   |
| Gérer les catégories |                   |
| Gérer les catégories |                   |
| Gérer les catégories |                   |

Complétez le tableau avec les grandes actions nécessaires.

### 2.2. Transformer les actions en tâches

Chaque action doit devenir une tâche claire.

Utilisez ce modèle :

| N° | Tâche | Résultat attendu |
| -- | ----- | ---------------- |
| 1  |       |                  |
| 2  |       |                  |
| 3  |       |                  |
| 4  |       |                  |
| 5  |       |                  |
| 6  |       |                  |

Écrivez des tâches qui commencent par un verbe d'action.

Exemples de verbes :

```text
Créer
Définir
Préparer
Ajouter
Modifier
Tester
Vérifier
```

Évitez :

```text
Catégories
Gestion
Interface
Base de données
```

Ces mots ne décrivent pas une action.

### 2.3. Identifier les prérequis

Pour chaque tâche, posez la question :

> **De quoi ai-je besoin avant de commencer cette tâche ?**

Complétez :

| Tâche   | Prérequis |
| ------- | --------- |
| Tâche 1 |           |
| Tâche 2 |           |
| Tâche 3 |           |
| Tâche 4 |           |
| Tâche 5 |           |
| Tâche 6 |           |

Un prérequis peut être :

* une information ;
* un modèle ;
* une autre tâche terminée ;
* un livrable précédent.

### 2.4. Identifier les dépendances

Comparez maintenant les tâches entre elles.

Utilisez :

| Tâche   | Dépend de |
| ------- | --------- |
| Tâche 1 |           |
| Tâche 2 |           |
| Tâche 3 |           |
| Tâche 4 |           |
| Tâche 5 |           |
| Tâche 6 |           |

Exemple de relation :

```text
Tâche 1
   ↓
Tâche 2
```

Cela signifie :

> La tâche 2 dépend de la tâche 1.

### 2.5. Construire le graphe des dépendances

Représentez ensuite les relations entre les tâches.

Utilisez un schéma simple :

```text
Tâche 1
   ↓
Tâche 2
   ↓
Tâche 3
```

Si une tâche permet de continuer plusieurs travaux :

```text
          Tâche 2
         ↗
Tâche 1
         ↘
          Tâche 3
```

Votre objectif est d'identifier les tâches qui conditionnent les autres.

### 2.6. Identifier les tâches bloquantes

Observez votre graphe.

Pour chaque tâche, posez la question :

> **Si cette tâche n'est pas terminée, quelles autres tâches sont bloquées ?**

Complétez :

| Tâche   | Bloque quelles tâches ? |
| ------- | ----------------------- |
| Tâche 1 |                         |
| Tâche 2 |                         |
| Tâche 3 |                         |
| Tâche 4 |                         |
| Tâche 5 |                         |
| Tâche 6 |                         |

Une tâche qui bloque plusieurs autres tâches doit être clairement identifiée.

### 2.7. Définir l'ordre de réalisation

Utilisez maintenant les dépendances pour organiser le travail.

| Ordre | Tâche | Dépendance principale |
| ----- | ----- | --------------------- |
| 1     |       |                       |
| 2     |       |                       |
| 3     |       |                       |
| 4     |       |                       |
| 5     |       |                       |
| 6     |       |                       |

Commencez par les tâches qui n'ont pas de dépendance non résolue.

Continuez ensuite avec les tâches devenues réalisables.

### 2.8. Ajouter des sous-tâches

Choisissez une tâche suffisamment importante pour être détaillée.

Exemple de format :

| Tâche | Sous-tâche |
| ----- | ---------- |
|       |            |
|       |            |
|       |            |

Ne détaillez pas toutes les tâches.

Ajoutez des sous-tâches uniquement lorsqu'elles permettent de mieux organiser le travail.

### 2.9. Vérifier la qualité des tâches

Pour chaque tâche, vérifiez :

```text
□ L'action commence par un verbe.
□ La tâche décrit un travail précis.
□ Le résultat est identifiable.
□ Les prérequis sont connus.
□ Les dépendances sont identifiées.
□ L'ordre est logique.
□ Les tâches bloquantes sont repérées.
```

### 2.10. Vérifier la fonctionnalité complète

À la fin, votre organisation doit permettre de représenter :

```text
Fonctionnalité
      ↓
Décomposition
      ↓
Tâches
      ↓
Prérequis
      ↓
Dépendances
      ↓
Ordre
      ↓
Livrable
```

Vous devez pouvoir expliquer comment chaque tâche contribue au livrable final.

### 2.11. Exercice individuel

Choisissez une autre fonctionnalité du projet Blog :

> **Gérer les articles**

Décomposez-la sans utiliser la liste des tâches de l'exemple précédent.

Produisez :

#### Tableau des tâches

| N° | Tâche | Résultat attendu |
| -- | ----- | ---------------- |
| 1  |       |                  |
| 2  |       |                  |
| 3  |       |                  |
| 4  |       |                  |
| 5  |       |                  |
| 6  |       |                  |

#### Tableau des dépendances

| Tâche   | Dépend de |
| ------- | --------- |
| Tâche 1 |           |
| Tâche 2 |           |
| Tâche 3 |           |
| Tâche 4 |           |
| Tâche 5 |           |
| Tâche 6 |           |

#### Tâches bloquantes

| Tâche | Bloque |
| ----- | ------ |
|       |        |
|       |        |

#### Ordre final

```text
1. ...
2. ...
3. ...
4. ...
5. ...
6. ...
```

Ne cherchez pas à créer beaucoup de tâches.

Cherchez surtout à créer des tâches **claires, réalisables et dépendantes dans un ordre logique**.

**Résultat attendu :**

Une fonctionnalité est représentée sous cette forme :

```text
Fonctionnalité
      ↓
  Tâche 1
      ↓
  Tâche 2
     ↙ ↘
Tâche 3  Tâche 4
     ↘ ↙
  Tâche 5
      ↓
  Livrable
```

Chaque tâche possède un rôle identifiable et les dépendances permettent de déterminer l'ordre de travail.

**Travail à faire :**

Décomposez la fonctionnalité **Gérer les articles** en tâches réalisables.

Pour chaque tâche, indiquez :

* le résultat attendu ;
* le prérequis ;
* la dépendance éventuelle ;
* l'ordre de réalisation ;
* les tâches qu'elle peut bloquer.

Ajoutez des sous-tâches uniquement lorsqu'elles sont nécessaires.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le tableau des tâches ;
* le tableau des dépendances ;
* les tâches bloquantes ;
* l'ordre de réalisation ;
* le livrable attendu.

**Critère de réussite :**

La fonctionnalité est décomposée en tâches claires et réalisables. Les dépendances sont identifiées, les tâches bloquantes sont repérées et l'ordre de réalisation respecte ces dépendances.

## Bilan

**Vous avez appris :**

* à distinguer une fonctionnalité d'une tâche ;
* à identifier un livrable ;
* à découper une fonctionnalité ;
* à créer des tâches réalisables ;
* à utiliser des sous-tâches lorsque nécessaire ;
* à identifier les prérequis ;
* à identifier les dépendances ;
* à repérer les tâches bloquantes ;
* à organiser l'ordre de réalisation.

**Vous avez réalisé :**

Une décomposition structurée d'une fonctionnalité :

```text
Fonctionnalité
      ↓
Tâches
      ↓
Prérequis
      ↓
Dépendances
      ↓
Tâches bloquantes
      ↓
Ordre de réalisation
      ↓
Livrable
```

Dans le tutoriel suivant, cette organisation pourra être transformée en un processus de développement avec des étapes clairement ordonnées.

## Glossaire

* **Projet** : ensemble de travaux réalisés pour obtenir un résultat.
* **Fonctionnalité** : service que l'application doit fournir à un utilisateur.
* **Livrable** : résultat attendu à la fin d'un travail.
* **Étape** : partie d'un processus de réalisation.
* **Tâche** : travail précis à réaliser.
* **Sous-tâche** : partie d'une tâche plus importante.
* **Prérequis** : élément nécessaire avant de commencer une tâche.
* **Dépendance** : relation entre deux tâches qui impose un ordre.
* **Ordre de réalisation** : ordre dans lequel les tâches doivent être exécutées.
* **Tâche bloquante** : tâche dont l'absence de réalisation empêche d'autres tâches d'avancer.
