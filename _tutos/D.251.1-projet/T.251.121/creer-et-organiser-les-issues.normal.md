---
title: "Créer et organiser les Issues"
layout: tuto
slug: "creer-organiser-issues"
permalink: /tutos/:slug/
tuto_id: "T.251.121"
type: "classique"
version: "normal"
ua: "UA.251.12"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à transformer les tâches préparées dans S1 en **Issues GitHub**.

Vous allez apprendre à :

* comprendre une Issue ;
* définir un titre clair ;
* rédiger une description ;
* ajouter une checklist ;
* utiliser des labels ;
* affecter une Issue à une personne ;
* utiliser un milestone ;
* distinguer fonctionnalité, tâche et sous-tâche ;
* organiser les Issues d'une fonctionnalité.

À la fin du tutoriel, vous devez passer de :

```text
Fonctionnalité
      ↓
Tâches
      ↓
Issues GitHub
```

GitHub permet de créer une Issue avec notamment un titre et une description, puis d'y associer, selon les droits et la configuration du dépôt, des labels, des personnes assignées et un milestone.

## 2. Prérequis

Vous devez avoir réalisé :

> T.251.111 — Décomposer une fonctionnalité en tâches.

> T.251.112 — Organiser le processus de développement.

Vous devez connaître :

* projet ;
* fonctionnalité ;
* tâche ;
* sous-tâche ;
* dépendance ;
* ordre de réalisation ;
* livrable.

Vous devez également avoir accès à un dépôt GitHub dans lequel les Issues sont activées.

## Données de départ

### Projet

Vous travaillez sur un projet de blog.

### Fonctionnalité

La fonctionnalité étudiée est :

> **Gérer les catégories**

Elle doit permettre de :

* consulter les catégories ;
* ajouter une catégorie ;
* modifier une catégorie ;
* supprimer une catégorie.

### Tâches

Vous disposez déjà d'une liste de tâches préparée dans S1.

Exemple :

```text
T1 — Définir les données des catégories
T2 — Préparer le fonctionnement
T3 — Construire le formulaire
T4 — Construire la liste
T5 — Ajouter les actions
T6 — Tester les opérations
```

Votre travail consiste maintenant à représenter ces tâches dans GitHub.

## Partie 1 — Théorie

### 1.1. Une Issue

Une Issue GitHub permet d'enregistrer un travail à réaliser ou un problème à suivre.

Une Issue possède notamment :

* un titre ;
* une description ;
* des informations de classement ;
* éventuellement une personne responsable ;
* éventuellement un milestone.

GitHub permet aussi d'associer une Issue à un projet, selon la configuration du dépôt.

### 1.2. Une Issue représente un travail

Une tâche de S1 peut devenir une Issue.

Exemple :

```text
Tâche S1
↓
Créer le formulaire de catégorie
```

devient :

```text
Issue
↓
Créer le formulaire de catégorie
```

L'Issue devient alors un élément identifiable du travail.

### 1.3. Le titre

Le titre doit être court et précis.

Exemple :

> Créer le formulaire de catégorie

Un bon titre permet de comprendre rapidement le travail.

Évitez :

> Formulaire

ou :

> Catégories

Ces titres sont trop vagues.

### 1.4. La description

La description explique le travail à réaliser.

Elle peut préciser :

* l'objectif ;
* le travail attendu ;
* le résultat attendu ;
* les conditions importantes.

Exemple :

```text
Créer le formulaire permettant de saisir une catégorie.

Le formulaire doit contenir :
- le nom ;
- la couleur ;
- l'icône.

Résultat attendu :
le formulaire permet de saisir les informations nécessaires
à la création d'une catégorie.
```

La description permet donc de donner le contexte de la tâche.

### 1.5. La checklist

Une checklist permet de représenter plusieurs petites actions dans une même Issue.

Exemple :

```markdown
- [ ] Ajouter le champ Nom
- [ ] Ajouter le champ Couleur
- [ ] Ajouter le champ Icône
- [ ] Ajouter le bouton Enregistrer
```

Les cases peuvent être cochées pendant la réalisation. GitHub prend en charge les tasklists Markdown dans les Issues.

### 1.6. Tâche et sous-tâche

Une tâche représente un travail principal.

Exemple :

> Créer le formulaire de catégorie.

Les éléments plus petits peuvent être représentés comme sous-tâches :

```text
Créer le formulaire
├── champ Nom
├── champ Couleur
├── champ Icône
└── bouton Enregistrer
```

Pour un petit travail, une checklist peut suffire.

Pour un travail qui doit être suivi séparément, GitHub permet également d'utiliser des **sub-issues** pour créer une relation entre une Issue principale et des Issues plus petites.

Dans ce parcours, nous utiliserons d'abord la checklist pour garder le suivi simple.

### 1.7. La fonctionnalité

Une fonctionnalité regroupe plusieurs tâches.

Exemple :

```text
Fonctionnalité
Gérer les catégories

        ↓

Tâche 1
Définir les données

Tâche 2
Construire le formulaire

Tâche 3
Construire la liste

Tâche 4
Ajouter les actions
```

Une fonctionnalité peut donc être suivie avec plusieurs Issues.

### 1.8. Les labels

Un label permet de classer une Issue.

Exemples :

```text
feature
task
frontend
backend
test
bug
```

GitHub permet de créer et d'appliquer des labels aux Issues pour les classer.

Dans notre parcours, les labels servent surtout à répondre à la question :

> **De quel type de travail s'agit-il ?**

### 1.9. Exemple de labels

Pour une fonctionnalité :

```text
feature
```

Pour une tâche :

```text
task
```

Pour un problème découvert pendant le développement :

```text
bug
```

Pour une partie frontend :

```text
frontend
```

Les labels doivent rester peu nombreux et compréhensibles.

### 1.10. L'assignee

L'**assignee** est la personne à qui l'Issue est attribuée.

Exemple :

```text
Issue :
Construire le formulaire

Assignee :
Madani Ali
```

L'assignation répond à la question :

> **Qui prend en charge ce travail ?**

GitHub permet d'assigner des personnes à une Issue lorsque les permissions du dépôt le permettent.

### 1.11. Le milestone

Un milestone regroupe plusieurs Issues autour d'un objectif commun.

Exemple :

```text
Milestone :
Gestion des catégories

Issues :
- Définir les données
- Construire le formulaire
- Construire la liste
- Ajouter les actions
- Tester
```

GitHub utilise les milestones pour suivre le progrès d'un groupe d'Issues. Un milestone peut notamment afficher le nombre d'Issues ouvertes et fermées et un pourcentage de progression.

### 1.12. Organiser les Issues

Une fonctionnalité peut être organisée ainsi :

```text
Fonctionnalité
Gérer les catégories

Milestone
Gestion des catégories

    ├── Issue : Définir les données
    ├── Issue : Construire le formulaire
    ├── Issue : Construire la liste
    ├── Issue : Ajouter les actions
    └── Issue : Tester les opérations
```

Chaque Issue représente une partie identifiable du travail.

### 1.13. Une Issue doit représenter un travail clair

Évitez une Issue trop grande :

> Réaliser toute la gestion des catégories.

Cette Issue contient trop de travaux différents.

Préférez plusieurs Issues :

```text
Définir les données
Construire le formulaire
Construire la liste
Ajouter les actions
Tester les opérations
```

### 1.14. Une Issue ne doit pas être trop petite

Évitez également :

> Ouvrir le fichier HTML.

ou :

> Écrire le mot « Nom ».

Ces actions sont trop petites pour constituer un suivi utile.

Une Issue doit représenter un travail identifiable.

### 1.15. À retenir

* Une Issue représente un travail à suivre.
* Le titre doit être clair.
* La description précise le travail attendu.
* Une checklist permet de détailler de petites actions.
* Une fonctionnalité peut regrouper plusieurs Issues.
* Les labels servent à classer les Issues.
* L'assignee indique la personne responsable.
* Le milestone regroupe des Issues autour d'un objectif.
* Une Issue doit être assez grande pour représenter un vrai travail.
* Une Issue ne doit pas être inutilement détaillée.

## Partie 2 — Pratique

### 2.1. Ouvrir le dépôt GitHub

Ouvrez le dépôt utilisé pour votre projet.

Vérifiez que vous disposez de l'accès nécessaire pour créer des Issues.

Ouvrez ensuite :

```text
Issues
```

GitHub propose différentes façons de créer une Issue, notamment depuis la section Issues ou depuis un projet.

### 2.2. Préparer le milestone

Créez un milestone pour la fonctionnalité :

```text
Gestion des catégories
```

Description :

```text
Réaliser et suivre la fonctionnalité de gestion des catégories.
```

Ce milestone regroupera les Issues de la fonctionnalité.

### 2.3. Créer la première Issue

Créez une Issue avec :

**Titre :**

```text
Définir les données des catégories
```

**Description :**

```text
Identifier les données nécessaires à la gestion des catégories.

Résultat attendu :
les informations nécessaires à une catégorie sont définies.
```

Associez l'Issue au milestone :

```text
Gestion des catégories
```

### 2.4. Ajouter un label

Ajoutez un label adapté.

Par exemple :

```text
task
```

Le label indique que cette Issue représente une tâche.

Les labels permettent de classer les Issues et peuvent être réutilisés dans tout le dépôt.

### 2.5. Attribuer l'Issue

Attribuez l'Issue à la personne qui réalise le travail.

Exemple :

```text
Assignee :
Madani Ali
```

L'Issue indique maintenant :

```text
Travail
↓
Définir les données des catégories

Responsable
↓
Madani Ali
```

### 2.6. Créer une Issue pour le formulaire

Créez :

**Titre :**

```text
Construire le formulaire de catégorie
```

**Description :**

```text
Construire le formulaire permettant de saisir une catégorie.

Le formulaire doit permettre de saisir :
- le nom ;
- la couleur ;
- l'icône.

Résultat attendu :
le formulaire contient tous les champs nécessaires.
```

### 2.7. Ajouter une checklist

Dans la description, ajoutez :

```markdown
## Travail à faire

- [ ] Ajouter le champ Nom
- [ ] Ajouter le champ Couleur
- [ ] Ajouter le champ Icône
- [ ] Ajouter le bouton Enregistrer
```

La checklist permet de visualiser les petites actions nécessaires à l'intérieur de l'Issue.

### 2.8. Organiser l'Issue

Pour cette Issue, utilisez :

```text
Titre :
Construire le formulaire de catégorie

Label :
task

Milestone :
Gestion des catégories

Assignee :
Madani Ali
```

Vous avez maintenant une Issue organisée.

### 2.9. Créer les autres Issues

Créez les Issues correspondant aux autres tâches.

Exemple :

```text
Construire la liste des catégories
Ajouter les actions des catégories
Tester les opérations des catégories
```

Chaque Issue doit avoir :

* un titre ;
* une description ;
* un label ;
* le milestone correspondant ;
* un assignee lorsque nécessaire.

### 2.10. Représenter la fonctionnalité avec des Issues

Vous devez obtenir une organisation proche de :

```text
Milestone : Gestion des catégories

├── Définir les données des catégories
├── Construire le formulaire de catégorie
├── Construire la liste des catégories
├── Ajouter les actions des catégories
└── Tester les opérations des catégories
```

Les Issues représentent maintenant les tâches préparées dans S1.

### 2.11. Distinguer fonctionnalité et tâche

Créez une Issue principale pour représenter la fonctionnalité :

**Titre :**

```text
Gérer les catégories
```

Ajoutez une description :

```text
Fonctionnalité permettant à l'administrateur de :

- consulter les catégories ;
- ajouter une catégorie ;
- modifier une catégorie ;
- supprimer une catégorie.
```

Utilisez le label :

```text
feature
```

Puis utilisez les autres Issues pour représenter les tâches.

Vous obtenez :

```text
Feature
Gérer les catégories

        ↓

Tasks
├── Définir les données
├── Construire le formulaire
├── Construire la liste
├── Ajouter les actions
└── Tester
```

### 2.12. Organiser les sous-tâches

Pour l'Issue :

> Construire le formulaire de catégorie

utilisez une checklist :

```markdown
- [ ] Ajouter le champ Nom
- [ ] Ajouter le champ Couleur
- [ ] Ajouter le champ Icône
- [ ] Ajouter le bouton Enregistrer
```

Vous avez donc :

```text
Issue
Construire le formulaire

        ↓

Sous-tâches
├── Nom
├── Couleur
├── Icône
└── Enregistrer
```

Pour ce tutoriel, gardez les sous-tâches simples.

Les sub-issues pourront être utilisées plus tard lorsqu'une sous-tâche doit devenir un travail suivi indépendamment.

### 2.13. Vérifier les dépendances

Les dépendances identifiées en S1 doivent rester visibles dans votre organisation.

Exemple :

```text
Définir les données
        ↓
Construire le formulaire
        ↓
Construire les actions
```

Dans la description, vous pouvez indiquer :

```text
Prérequis :
Les données de catégorie doivent être définies.
```

Le but est de conserver l'information préparée dans T.251.111.

### 2.14. Utiliser les commentaires pour préciser

Une Issue peut recevoir des commentaires pour ajouter une information pendant le travail.

Exemple :

```text
Le champ Icône sera une liste déroulante.
```

Le commentaire complète l'Issue.

Il ne doit pas remplacer sa description principale.

### 2.15. Organiser les Issues par type de travail

Utilisez les labels de manière cohérente.

Par exemple :

```text
feature
task
bug
```

Puis, lorsque cela est utile :

```text
frontend
backend
test
documentation
```

Ne créez pas un label pour chaque petite situation.

### 2.16. Vérifier le milestone

Toutes les Issues de la fonctionnalité doivent être associées au même milestone :

```text
Gestion des catégories
```

Le milestone permet ensuite de suivre le groupe d'Issues associé à cet objectif.

### 2.17. Vérifier l'organisation

Votre liste devrait ressembler à :

| Issue                    | Type           | Label     | Milestone              | Assignee   |
| ------------------------ | -------------- | --------- | ---------------------- | ---------- |
| Gérer les catégories     | Fonctionnalité | `feature` | Gestion des catégories | Madani Ali |
| Définir les données      | Tâche          | `task`    | Gestion des catégories | Madani Ali |
| Construire le formulaire | Tâche          | `task`    | Gestion des catégories | Madani Ali |
| Construire la liste      | Tâche          | `task`    | Gestion des catégories | Madani Ali |
| Ajouter les actions      | Tâche          | `task`    | Gestion des catégories | Madani Ali |
| Tester les opérations    | Tâche          | `task`    | Gestion des catégories | Madani Ali |

### 2.18. Vérifier une Issue

Pour chaque Issue, posez les questions :

```text
□ Le titre est clair.
□ La description explique le travail.
□ Le résultat attendu est identifiable.
□ Le label est adapté.
□ Le milestone est correct.
□ La personne responsable est définie.
□ Les sous-tâches sont utiles.
□ Les prérequis importants sont indiqués.
```

### 2.19. Exercice individuel

Choisissez la fonctionnalité :

> **Gérer les articles**

À partir de la décomposition réalisée dans T.251.111 :

Créez dans GitHub :

```text
1 Issue fonctionnalité
+
plusieurs Issues tâches
```

L'Issue fonctionnalité doit être :

```text
Gérer les articles
```

Ajoutez :

```text
Label :
feature
```

Créez ensuite les Issues correspondant aux tâches.

Chaque Issue doit contenir :

* un titre ;
* une description ;
* un résultat attendu ;
* un label ;
* un milestone ;
* un assignee.

Ajoutez une checklist lorsqu'une tâche contient plusieurs petites actions.

### 2.20. Vérifier le résultat

Votre organisation doit suivre :

```text
Fonctionnalité
      ↓
Milestone
      ↓
Issues
      ↓
Checklist / sous-tâches
```

Vous devez pouvoir ouvrir GitHub et comprendre rapidement :

* quelle fonctionnalité est travaillée ;
* quelles tâches existent ;
* qui les réalise ;
* à quel objectif elles appartiennent ;
* quelles petites actions restent à faire.

**Résultat attendu :**

```text
Fonctionnalité
Gérer les articles

Milestone
Gérer les articles

Issues
├── Définir les données
├── Construire le formulaire
├── Construire la liste
├── Ajouter les actions
└── Tester les opérations
```

Chaque Issue possède un titre clair, une description, un classement et une personne responsable.

**Travail à faire :**

Créez dans GitHub les Issues correspondant à la fonctionnalité **Gérer les articles**.

Vous devez créer :

* une Issue représentant la fonctionnalité ;
* une Issue pour chaque tâche principale ;
* les labels nécessaires ;
* un milestone ;
* les assignees ;
* les checklists pour les tâches qui nécessitent plusieurs petites actions.

Organisez les Issues pour que la relation entre fonctionnalité, tâches et sous-tâches soit facilement compréhensible.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le lien vers l'Issue de la fonctionnalité ;
* les liens vers les Issues des tâches ;
* le milestone utilisé ;
* la liste des labels utilisés ;
* une courte description de l'organisation choisie.

**Critère de réussite :**

La fonctionnalité est représentée dans GitHub par un ensemble d'Issues claires et organisées. Chaque tâche possède les informations nécessaires pour être identifiée, attribuée et suivie.

## Bilan

**Vous avez appris :**

* à créer une Issue ;
* à rédiger un titre clair ;
* à rédiger une description ;
* à utiliser une checklist ;
* à distinguer fonctionnalité, tâche et sous-tâche ;
* à utiliser des labels ;
* à attribuer une Issue ;
* à utiliser un milestone ;
* à organiser plusieurs Issues autour d'une fonctionnalité.

**Vous avez réalisé :**

Une première organisation du travail dans GitHub :

```text
Fonctionnalité
      ↓
Milestone
      ↓
Issues
      ↓
Checklists
      ↓
Responsables
```

La prochaine étape consistera à utiliser ces Issues pour rendre visible l'état réel du travail : **à faire, en cours, bloqué, terminé et validé**.

## Glossaire

* **Issue** : élément GitHub utilisé pour enregistrer et suivre un travail.
* **Titre** : texte court qui identifie une Issue.
* **Description** : texte qui explique le travail à réaliser.
* **Checklist** : liste de petites tâches avec des cases à cocher.
* **Label** : étiquette utilisée pour classer une Issue.
* **Assignee** : personne responsable d'une Issue.
* **Milestone** : regroupement d'Issues autour d'un objectif.
* **Fonctionnalité** : service que l'application doit fournir à l'utilisateur.
* **Tâche** : travail précis à réaliser.
* **Sous-tâche** : partie d'une tâche plus importante.
* **Organisation des Issues** : manière de regrouper et de classer les Issues pour rendre le travail compréhensible.
