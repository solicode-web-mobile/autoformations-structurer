---
title: "Construire les cas d’utilisation"
layout: tuto
slug: "construire-cas-utilisation"
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
* identifier les cas d’utilisation à partir d'une liste de fonctionnalités ;
* associer chaque acteur à ses cas d’utilisation ;
* construire un diagramme de cas d’utilisation complet et cohérent.

Vous utiliserez les acteurs et le système identifiés dans le tutoriel précédent.

## 2. Prérequis

Vous devez savoir :
* définir le périmètre d'un système ;
* identifier les acteurs et leurs objectifs.

## Cas d'étude

Le système étudié est le **Blog**.

Les acteurs identifiés sont :
* Administrateur (Gérer le contenu)
* Auteur (Rédiger et gérer ses articles)
* Visiteur (Consulter les articles publiés)

Les fonctionnalités de départ à analyser sont :

**Administrateur :**
* consulter les catégories ;
* ajouter une catégorie ;
* modifier une catégorie ;
* supprimer une catégorie ;
* créer un auteur ;
* valider un article ;
* publier un article.

**Auteur :**
* ajouter un article ;
* modifier un article non publié ;
* supprimer un article non publié ;
* changer son profil ;
* réinitialiser son mot de passe.

**Visiteur :**
* consulter les articles.

## Partie 1 — Théorie

### 1.1. Le Cas d’utilisation

Un **cas d’utilisation** représente une action métier spécifique déclenchée par un acteur pour atteindre son objectif. 

**Nommage :** Il doit toujours être formulé avec un **verbe d'action à l'infinitif**. 
* ✅ Correct : `Ajouter une catégorie`
* ❌ Incorrect : `Catégorie`

En modélisation, on représente graphiquement le cas d'utilisation par une ellipse (souvent dessinée avec des parenthèses dans le code).

```mermaid
usecase-beta
    UC("Ajouter une catégorie")
```

### 1.2. Le Diagramme de Cas d’utilisation

Le diagramme rassemble tous les acteurs, le système (la "boîte"), et les cas d'utilisation. 
On relie un acteur à un cas d'utilisation (via une flèche) pour indiquer qu'il **participe** à cette action.

**Règle de cohérence absolue :** Un acteur ne doit être relié qu'aux actions qui relèvent strictement de ses attributions dans le cas d'étude.

Exemple de diagramme montrant deux interactions :

```mermaid
usecase-beta
    actor Administrateur
    actor Visiteur

    UC1("Ajouter une catégorie")
    UC2("Consulter les articles")

    Administrateur --- UC1
    Visiteur --- UC2
```

## Partie 2 — Pratique

### 2.1. Identifier et lier les cas d'utilisation

À partir du cas d'étude, associez chaque acteur aux actions métier (cas d'utilisation) qui relèvent de sa responsabilité. 
Prenez soin d'utiliser des verbes à l'infinitif.

**Travail à faire :**

Complétez le tableau suivant avec l'ensemble des 13 fonctionnalités de départ :

| Acteur | Cas d’utilisation (Verbe d'action) |
| --- | --- |
| Administrateur | |
| Administrateur | |
| ... | |
| Auteur | |
| Auteur | |
| ... | |
| Visiteur | |

### 2.2. Construire le diagramme complet

Il est temps de tracer votre diagramme global à partir du tableau que vous venez de remplir.

**Travail à faire :**

Dans un fichier `use_cases.mmd`, représentez :
* Les 3 acteurs.
* L'ensemble des cas d'utilisation.
* Les lignes d'association reliant chaque acteur à ses cas d'utilisation.

Le rendu attendu doit ressembler à cette structure :

```mermaid
usecase-beta
    actor Administrateur
    actor Auteur
    actor Visiteur

    UC1("Consulter les catégories")
    UC2("Ajouter une catégorie")
    %% ... (à compléter avec tous les autres cas) ...

    Administrateur --- UC1
    Administrateur --- UC2
    %% ... (à compléter) ...
```

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/fonctionnalite/tuto-211-112-fonctionnalite.html' | relative_url }}"
    height="800"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez appris :**
* à formuler correctement un cas d'utilisation avec un verbe d'action ;
* à lier un acteur à un cas d'utilisation en respectant son rôle ;
* à construire un diagramme complet représentant le périmètre d'un système.

**Vous avez produit :**
* la liste des cas d'utilisation associés aux acteurs ;
* le diagramme global de cas d'utilisation de l'application.

**Vous préparerez ensuite :**
> la description détaillée d'un cas d'utilisation (ses scénarios nominaux et alternatifs).

## Glossaire

* **Cas d'utilisation** : action métier précise réalisée par un acteur dans le système.
* **Association** : lien représenté par une flèche entre un acteur et le cas d'utilisation auquel il participe.
* **Diagramme de cas d'utilisation** : carte détaillée modélisant le système, les acteurs, et les actions métier qu'ils peuvent accomplir.
