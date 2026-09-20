---
title: "Compléter et vérifier la fonctionnalité"
layout: tuto
slug: "completer-verifier-fonctionnalite"
permalink: /tutos/:slug/
tuto_id: "T.211.114"
type: "classique"
version: "normal"
ua: "UA.211.11"
nav_order: 4
data_html: ""
data_css: ""
data_js: ""
---


## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

* identifier un scénario alternatif ;
* identifier un scénario d'erreur ;
* décrire la condition qui provoque ce scénario ;
* décrire la réaction du système ;
* compléter un scénario nominal ;
* vérifier la cohérence entre les diagrammes et les scénarios ;
* constituer un dossier fonctionnel final.

## 2. Prérequis

Vous devez savoir :

* identifier le système ;
* identifier les acteurs ;
* construire les cas d'utilisation ;
* décrire un scénario nominal ;
* distinguer une action de l'acteur d'une réponse du système.

Vous devez avoir réalisé :

* le diagramme de contexte ;
* le diagramme de cas d'utilisation ;
* le scénario nominal.

## Données de départ

Le système étudié est un **Blog**.

Le cas d'utilisation étudié est :

> **Ajouter une catégorie**

L'acteur principal est :

> **Administrateur**

L'objectif est :

> Créer une nouvelle catégorie pour classer les articles.

Le scénario nominal est le suivant :

1. L'Administrateur navigue vers la page d'administration des catégories.
2. Le système affiche la liste des catégories existantes et le bouton « Nouvelle Catégorie ».
3. L'Administrateur clique sur « Nouvelle Catégorie ».
4. Le système affiche le formulaire de création.
5. L'Administrateur saisit « Technologie » dans le champ Titre et valide.
6. Le système enregistre la catégorie dans la base de données.
7. Le système affiche la nouvelle catégorie dans la liste.
8. Le système affiche un message de succès.

Un cas d'erreur est également identifié :

> Le champ **Titre** est vide au moment de la validation.

Le système doit alors :

* détecter l'erreur ;
* refuser l'enregistrement ;
* afficher un message d'erreur ;
* permettre à l'Administrateur de corriger sa saisie.

## Partie 1 — Théorie

### 1.1. Le scénario alternatif

Un **scénario alternatif** décrit un autre chemin possible à partir du scénario nominal.

Le fonctionnement reste valide, mais le déroulement change.

Exemple :

> Une catégorie existe déjà avec le même nom.

Le système peut alors demander une autre saisie ou suivre une autre règle prévue par la fonctionnalité.

Un scénario alternatif ne signifie donc pas nécessairement que le système est en erreur.

### 1.2. Le scénario d’erreur

Un **scénario d'erreur** décrit une situation dans laquelle le système ne peut pas poursuivre le traitement normalement.

Exemple :

> Le champ Titre est vide.

Le système doit détecter le problème et empêcher l'enregistrement.

### 1.3. La condition

La **condition** indique ce qui provoque le scénario alternatif ou d'erreur.

Exemple :

> Le champ Titre est vide.

La condition doit être claire et vérifiable.

Éviter :

> Les données sont mauvaises.

Préférer :

> Le champ Titre est vide.

### 1.4. La réaction du système

La **réaction du système** décrit ce que le système fait lorsque la condition est rencontrée.

Exemple :

> Le système refuse l'enregistrement et affiche le message « Le titre de la catégorie est obligatoire. »

La réaction doit correspondre à la condition.

### 1.5. Le retour au scénario nominal

Après un scénario alternatif ou une erreur corrigée, le traitement peut revenir au scénario nominal.

Exemple :

1. L'Administrateur valide un formulaire vide.
2. Le système détecte l'erreur.
3. Le système affiche le message d'erreur.
4. L'Administrateur corrige sa saisie.
5. Le traitement reprend à l'étape concernée.

Il faut indiquer clairement où le traitement reprend.

### 1.6. La cohérence

La **cohérence** signifie que les différentes descriptions parlent de la même fonctionnalité.

Le diagramme de cas d'utilisation indique :

> Ajouter une catégorie

Le scénario doit donc décrire :

> Ajouter une catégorie

et non une autre fonctionnalité.

### 1.7. La complétude

La **complétude** signifie que les éléments nécessaires à la description de la fonctionnalité sont présents.

Pour cette UA, le dossier doit contenir :

* le système ;
* les acteurs ;
* les cas d'utilisation ;
* le scénario nominal ;
* les scénarios alternatifs et d'erreur ;
* le résultat attendu.

### 1.8. Vérifier le diagramme avec le scénario

Le diagramme et le scénario n'ont pas le même rôle.

Le diagramme montre :

> **Qui fait quoi ?**

Le scénario montre :

> **Comment cela se déroule ?**

Exemple :

Le diagramme contient :

> Administrateur → Ajouter une catégorie

Le scénario doit décrire le déroulement de :

> Ajouter une catégorie

Il ne doit pas décrire :

> Publier un article

## Partie 2 — Pratique

### 2.1. Identifier les situations alternatives et d’erreur

Prenez le cas d'utilisation :

> **Ajouter une catégorie**

Cherchez les situations qui peuvent modifier le déroulement normal.

Exemples de questions :

* Que se passe-t-il si une information obligatoire manque ?
* Que se passe-t-il si une donnée n'est pas valide ?
* Que se passe-t-il si une règle métier empêche l'enregistrement ?
* Que se passe-t-il si le système ne peut pas terminer l'opération ?

**Travail à faire :**

Complétez le tableau.

| Situation | Type                | Condition |
| --------- | ------------------- | --------- |
|           | Alternatif / Erreur |           |
|           | Alternatif / Erreur |           |
|           | Alternatif / Erreur |           |

### 2.2. Décrire un scénario d’erreur

Utilisez la situation suivante :

> Le champ Titre est vide.

Décrivez :

1. l'étape où l'erreur apparaît ;
2. la condition ;
3. la réaction du système ;
4. l'action demandée à l'Administrateur ;
5. la reprise du traitement.

Utilisez cette structure :

**Condition :**

> ...

**Scénario d'erreur :**

1. ...
2. ...
3. ...
4. ...

**Reprise :**

> ...

### 2.3. Décrire un scénario alternatif

Choisissez une situation différente du scénario nominal.

Décrivez :

* la condition ;
* l'action de l'acteur ;
* la réaction du système ;
* la suite du traitement.

Utilisez cette structure :

**Condition :**

> ...

**Scénario alternatif :**

1. ...
2. ...
3. ...

**Suite du traitement :**

> ...

### 2.4. Relire le scénario complet

Regroupez :

* le scénario nominal ;
* les scénarios alternatifs ;
* les scénarios d'erreur.

Vérifiez que chaque scénario est lié au même cas d'utilisation :

> **Ajouter une catégorie**

### 2.5. Vérifier le dossier fonctionnel

Utilisez la grille suivante.

| Élément à vérifier                                         | Oui / Non |
| ---------------------------------------------------------- | --------- |
| Le système est identifié                                   |           |
| Les acteurs sont identifiés                                |           |
| Les objectifs des acteurs sont clairs                      |           |
| Les cas d'utilisation sont présents                        |           |
| Le diagramme de contexte est présent                       |           |
| Le diagramme de cas d'utilisation est présent              |           |
| Le scénario nominal est présent                            |           |
| Les scénarios alternatifs sont présents lorsque nécessaire |           |
| Les scénarios d'erreur sont présents lorsque nécessaire    |           |
| Les conditions sont clairement indiquées                   |           |
| Les réactions du système sont clairement indiquées         |           |
| Les scénarios correspondent aux cas d'utilisation          |           |
| Aucun scénario ne décrit une autre fonctionnalité          |           |

### 2.6. Vérifier la cohérence diagramme ↔ scénario

Prenez le diagramme de cas d'utilisation réalisé dans **T.211.112**.

Pour chaque cas d'utilisation, vérifiez :

> L'acteur du diagramme est-il le même acteur que dans le scénario ?

> Le nom du cas d'utilisation est-il identique ?

> Le scénario décrit-il bien la fonctionnalité représentée ?

> Les actions du scénario correspondent-elles à l'objectif de l'acteur ?

### 2.7. Produire le dossier fonctionnel final

Le dossier final doit regrouper les productions de l'UA.

**Travail à faire :**

Constituez un dossier fonctionnel contenant :

1. le diagramme de contexte ;
2. le diagramme de cas d'utilisation ;
3. le scénario nominal ;
4. les scénarios alternatifs ;
5. les scénarios d'erreur ;
6. les éléments de vérification.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant le dossier fonctionnel final.

**Résultat attendu :**

Le dossier doit présenter une fonctionnalité complète et cohérente, depuis son système et ses acteurs jusqu'aux différents scénarios de son fonctionnement.

**Critère de réussite :**

Le dossier est cohérent de bout en bout : les acteurs, les cas d'utilisation et les scénarios décrivent la même fonctionnalité et les erreurs prévues sont correctement traitées.

## Bilan

**Vous avez appris :**

* à identifier un scénario alternatif ;
* à identifier un scénario d'erreur ;
* à définir une condition ;
* à décrire la réaction du système ;
* à vérifier un scénario ;
* à vérifier la cohérence entre un diagramme et un scénario.

**Vous avez réalisé :**

* des scénarios alternatifs ;
* des scénarios d'erreur ;
* la vérification de la fonctionnalité ;
* le dossier fonctionnel final.

**À la fin de l'UA, vous disposez de :**

> **Système → Acteurs → Cas d'utilisation → Scénario nominal → Scénarios alternatifs et d'erreur → Vérification**

## Glossaire

* **Scénario alternatif** : autre chemin possible pour réaliser un cas d'utilisation.
* **Scénario d'erreur** : chemin déclenché lorsqu'un problème empêche le traitement normal.
* **Condition** : situation qui provoque un scénario particulier.
* **Réaction du système** : réponse du système à une situation donnée.
* **Cohérence** : correspondance correcte entre les différents éléments d'une description.
* **Complétude** : présence de tous les éléments nécessaires à une description.
* **Dossier fonctionnel** : ensemble des documents qui décrivent une fonctionnalité.
