---
title: "Décrire le scénario d’une fonctionnalité"
layout: tuto
slug: "decrire-scenario-fonctionnalite"
permalink: /tutos/:slug/
tuto_id: "T.211.113"
type: "classique"
version: "normal"
ua: "UA.211.11"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à décrire le **scénario nominal** d’un cas d’utilisation.
Vous allez préciser :
* la précondition et le déclencheur ;
* les échanges entre l'acteur et le système ;
* le résultat attendu.

## 2. Prérequis

Vous devez avoir identifié le système, ses acteurs, et modélisé le diagramme de cas d’utilisation.

## Cas d'étude

Le système étudié est le **Blog**.

* **Cas d'utilisation :** Ajouter une catégorie
* **Acteur principal :** Administrateur
* **Objectif :** Créer une nouvelle catégorie pour classer les articles.

**Le fonctionnement brut attendu est le suivant :**
1. L'Administrateur accède à la gestion des catégories.
2. Le système affiche les catégories existantes.
3. L'Administrateur demande la création d'une catégorie.
4. Le système affiche le formulaire.
5. L'Administrateur saisit les informations de la catégorie.
6. L'Administrateur valide le formulaire.
7. Le système enregistre la catégorie.
8. Le système affiche la nouvelle catégorie.

*Note : Dans ce tutoriel, on ne décrit que le fonctionnement parfait sans aucune erreur (le scénario nominal).*

## Partie 1 — Théorie

### 1.1. L'anatomie d'un scénario nominal

Un **scénario nominal** raconte l'histoire "parfaite" où le cas d'utilisation se déroule du début à la fin sans la moindre erreur. 
Pour bien l'encadrer, on utilise trois balises obligatoires :

1. **La Précondition** : L'état dans lequel doit se trouver le système *avant* de commencer. 
   *(Ex: L'Administrateur est déjà connecté).*
2. **Le Déclencheur** : L'action précise qui donne le coup d'envoi.
   *(Ex: L'Administrateur clique sur "Ajouter").*
3. **Le Résultat attendu** : L'état dans lequel se trouve le système à la toute fin.
   *(Ex: La catégorie est enregistrée en base de données).*

### 1.2. L'échange "Ping-Pong" (Acteur / Système)

Le cœur du scénario décrit les étapes pas à pas. 
La **règle d'or** est de rédiger sous la forme d'un match de ping-pong : `Action de l'Acteur` ➡️ `Réponse du Système`.

Chaque phrase doit :
- Commencer par le nom de l'acteur ou "Le système".
- Contenir un verbe d'action précis.
- Être courte et ne faire qu'une seule chose à la fois.

> ❌ **Mauvais exemple (trop vague ou condensé) :**
> L'Administrateur ouvre la page, tape son titre et le système sauvegarde.

> ✅ **Bon exemple (séparé en étapes claires) :**
> 1. L'Administrateur clique sur "Nouvelle catégorie".
> 2. Le système affiche le formulaire de création.
> 3. L'Administrateur saisit le titre.
> 4. L'Administrateur valide.

## Partie 2 — Pratique

### 2.1. Rédiger le scénario nominal

À partir du fonctionnement brut listé dans le **Cas d'étude**, vous devez rédiger le scénario complet et formel de l'ajout d'une catégorie.

> [!TIP]
> **Conseil de rédaction**
> Soyez systématique : demandez-vous "Qui fait l'action ?" à chaque ligne. Si c'est l'humain, écrivez "L'Administrateur...". Si c'est l'application qui réagit, écrivez "Le système...".

**Travail à faire :**

Dans votre document de travail, rédigez le livrable final en respectant scrupuleusement la structure ci-dessous. Remplissez les espaces vides.

**Cas d'utilisation :** Ajouter une catégorie
**Acteur principal :** Administrateur
**Précondition :** L'Administrateur est connecté au blog.
**Déclencheur :** ...

**Scénario nominal :**
1. L'Administrateur ...
2. Le système ...
3. L'Administrateur ...
4. Le système ...
5. L'Administrateur saisit les informations de la catégorie.
6. L'Administrateur valide le formulaire.
7. ...
8. ...

**Résultat attendu :** ...

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<div class="auto-wrapper tuto-resultat" style="display: none; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-top: 15px;">
<strong>Cas d'utilisation :</strong> Ajouter une catégorie<br>
<strong>Acteur principal :</strong> Administrateur<br>
<strong>Précondition :</strong> L'Administrateur est connecté au blog.<br>
<strong>Déclencheur :</strong> L'Administrateur veut créer une nouvelle catégorie.<br>
<br>
<strong>Scénario nominal :</strong><br>
1. L'Administrateur accède à la gestion des catégories.<br>
2. Le système affiche les catégories existantes.<br>
3. L'Administrateur demande la création d'une catégorie.<br>
4. Le système affiche le formulaire.<br>
5. L'Administrateur saisit les informations de la catégorie.<br>
6. L'Administrateur valide le formulaire.<br>
7. Le système enregistre la catégorie.<br>
8. Le système affiche la nouvelle catégorie.<br>
<br>
<strong>Résultat attendu :</strong> La catégorie est sauvegardée et visible dans l'interface de gestion.
</div>

## Bilan

**Vous avez appris :**
* à définir les bornes d'un scénario (Précondition, Déclencheur, Résultat).
* à décrire précisément un échange d'étapes (Ping-Pong) entre un acteur et le système.

**Vous préparerez ensuite :**
> les scénarios alternatifs (erreurs et cas particuliers) pour rendre ce cas d'utilisation parfaitement robuste.

## Glossaire

* **Scénario nominal** : le chemin idéal où le cas d'utilisation se déroule parfaitement, sans aucune erreur.
* **Précondition** : état requis du système avant de pouvoir démarrer le scénario.
* **Déclencheur** : l'événement initial qui provoque le démarrage du scénario.
* **Résultat attendu** : état garanti par le système à la fin du scénario nominal.
