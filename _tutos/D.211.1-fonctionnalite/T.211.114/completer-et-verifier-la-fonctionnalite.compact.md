---
title: "Compléter et vérifier la fonctionnalité"
layout: tuto
slug: "completer-verifier-fonctionnalite"
permalink: /tutos/:slug/compact
tuto_id: "T.211.114"
type: "classique"
version: "compact"
ua: "UA.211.11"
nav_order: 4
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- identifier et décrire des scénarios alternatifs et d'erreur ;
- décrire les conditions et réactions du système ;
- compléter le scénario nominal ;
- vérifier la cohérence globale ;
- constituer un dossier fonctionnel final.

## 2. Prérequis

Vous devez savoir :

- identifier système, acteurs, cas d'utilisation ;
- décrire un scénario nominal.

Vous devez avoir réalisé :

- diagramme de contexte ;
- diagramme de cas d'utilisation ;
- scénario nominal.

## Données de départ

**Système :** Blog
**Cas d'utilisation :** Ajouter une catégorie
**Acteur principal :** Administrateur
**Objectif :** Créer une nouvelle catégorie.

**Scénario nominal :**

1. L'Administrateur navigue vers l'administration des catégories.
2. Le système affiche les catégories et le bouton « Nouvelle Catégorie ».
3. L'Administrateur clique sur « Nouvelle Catégorie ».
4. Le système affiche le formulaire.
5. L'Administrateur saisit « Technologie » et valide.
6. Le système enregistre la catégorie.
7. Le système affiche la nouvelle catégorie.
8. Le système affiche un message de succès.

**Cas d'erreur identifié :**

- Le champ **Titre** est vide à la validation.
- Le système doit refuser l'enregistrement, afficher une erreur et demander correction.

## Partie 1 — Théorie

### 1.1. Le scénario alternatif

**Scénario alternatif** : autre chemin valide. (ex: la catégorie existe déjà, traitement spécifique).

### 1.2. Le scénario d’erreur

**Scénario d'erreur** : traitement impossible, arrêt de l'opération (ex: champ obligatoire vide).

### 1.3. La condition

Événement clair et vérifiable qui déclenche l'alternative ou l'erreur (ex: *Le champ Titre est vide*).

### 1.4. La réaction du système

Action du système face à la condition (ex: *refus d'enregistrement et affichage d'un message*).

### 1.5. Le retour au scénario nominal

Après correction, le traitement peut reprendre le chemin du scénario nominal. Précisez à quelle étape.

### 1.6. La cohérence

Les scénarios doivent correspondre exactement au cas d'utilisation décrit dans le diagramme.

### 1.7. La complétude

Le dossier fonctionnel doit réunir système, acteurs, cas d'utilisation, scénarios (nominals, alternatifs, erreurs) et résultat attendu.

### 1.8. Vérifier le diagramme avec le scénario

- **Diagramme** = Qui fait quoi ?
- **Scénario** = Comment cela se déroule ?

## Partie 2 — Pratique

### 2.1. Identifier les situations alternatives et d’erreur

Cas d'utilisation : **Ajouter une catégorie**

**Travail à faire :**

Complétez le tableau.

| Situation | Type                | Condition |
| --------- | ------------------- | --------- |
|           | Alternatif / Erreur |           |
|           | Alternatif / Erreur |           |
|           | Alternatif / Erreur |           |

### 2.2. Décrire un scénario d’erreur

Situation : *Le champ Titre est vide.*

Utilisez cette structure :

**Condition :**

> ...

**Scénario d'erreur :**

1. ...
2. ...

**Reprise :**

> ...

### 2.3. Décrire un scénario alternatif

Choisissez une situation différente du scénario nominal.

**Condition :**

> ...

**Scénario alternatif :**

1. ...
2. ...

**Suite du traitement :**

> ...

### 2.4. Relire le scénario complet

Vérifiez que tous les scénarios décrivent bien **Ajouter une catégorie**.

### 2.5. Vérifier le dossier fonctionnel

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

Comparez avec le diagramme T.211.112 : même acteur, même nom, objectifs alignés.

### 2.7. Produire le dossier fonctionnel final

**Travail à faire :**

Constituez le dossier fonctionnel final.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

1. diagramme de contexte ;
2. diagramme de cas d'utilisation ;
3. scénario nominal ;
4. scénarios alternatifs ;
5. scénarios d'erreur ;
6. éléments de vérification.

**Résultat attendu :**

Dossier présentant une fonctionnalité complète et cohérente.

**Critère de réussite :**

Cohérence totale de bout en bout (acteurs, cas d'utilisation, scénarios).

## Bilan

**Vous avez appris :**

- décrire scénarios alternatifs et d'erreur, avec conditions et réactions ;
- vérifier la cohérence et la complétude.

**Vous avez réalisé :**

- scénarios d'erreur et alternatifs ;
- un dossier fonctionnel final.

**À la fin de l'UA, vous disposez de :**

> **Système → Acteurs → Cas d'utilisation → Scénario nominal → Scénarios alternatifs et d'erreur → Vérification**

## Glossaire

* **Scénario alternatif** : autre chemin valide.
* **Scénario d'erreur** : chemin déclenché par un problème bloquant.
* **Condition** : situation déclenchante.
* **Réaction du système** : réponse du système face à la condition.
* **Cohérence** : bonne correspondance entre éléments.
* **Complétude** : présence de tous les éléments nécessaires.
* **Dossier fonctionnel** : ensemble documentant une fonctionnalité.
