---
title: "Construire un algorithme à partir d’un problème"
layout: tuto
slug: "construire-algorithme"
permalink: /tutos/:slug/compact
tuto_id: "T.201.215"
version: "compact"
ua: "UA.201.21"
nav_order: 5
---
 

## 1. Objectif

Apprendre une méthode pour construire un algorithme à partir d’un problème composé.

Appliquer la méthode :

**Comprendre → Décomposer → Construire → Tester → Corriger**

## 2. Prérequis

* Connaître les tableaux.
* Savoir parcourir un tableau.
* Savoir comparer des valeurs.
* Savoir trier un tableau.
* Connaître les algorithmes élémentaires déjà étudiés.

# Partie 1 — Théorie

## 1.1. Le problème

Un magasin possède plusieurs produits.

Chaque produit possède un prix et un nombre de `views`.

Un produit est populaire s’il possède plus de **1 500 views**.

Un client possède **100 DH**.

Il veut acheter le plus grand nombre possible de produits populaires sans dépasser son budget.

| Produit |  Prix | Views |
| ------- | ----: | ----: |
| A       | 30 DH | 1 200 |
| B       | 20 DH | 2 500 |
| C       | 15 DH | 1 800 |
| D       | 40 DH | 3 000 |
| E       | 10 DH |   900 |
| F       | 25 DH | 2 000 |

## 1.2. Comprendre

Identifiez :

* les données ;
* le résultat attendu ;
* les contraintes.

**Exemple :**

```text
Données : produits, prix, views, budget
Condition : views > 1500
Objectif : acheter le plus grand nombre de produits populaires
Contrainte : total <= 100 DH
```

## 1.3. Décomposer

Découpez le problème en petits problèmes.

**Exemple :**

```text
1. Trier les produits par views
2. Garder les produits avec plus de 1500 views
3. Trier les produits obtenus par prix
4. Choisir les produits sans dépasser 100 DH
```

## 1.4. Construire

Pour chaque petit problème :

* choisir un **algorithme élémentaire** ;
* déterminer les **variables** ;
* enregistrer le résultat ;
* utiliser ce résultat dans l’étape suivante.

**Exemple :**

| Étape | Algorithme                    | Résultat             |
| ----- | ----------------------------- | -------------------- |
| 1     | Trier un tableau              | `produitsTriesViews` |
| 2     | Parcourir + condition         | `produitsPopulaires` |
| 3     | Trier un tableau              | `produitsTriesPrix`  |
| 4     | Parcourir + somme + condition | `produitsAchetes`    |

```text
produits
   ↓
produitsTriesViews
   ↓
produitsPopulaires
   ↓
produitsTriesPrix
   ↓
produitsAchetes
```

## 1.5. Tester

Testez le raisonnement sur papier avec un petit exemple.

Vérifiez le résultat de chaque étape.

**Exemple :**

```text
Prix : 10 DH, 15 DH, 20 DH
Budget : 40 DH
```

## 1.6. Corriger

Vérifiez :

* les résultats intermédiaires ;
* les variables ;
* les calculs ;
* les conditions ;
* le résultat final.

Corrigez le raisonnement si nécessaire, puis testez à nouveau.

## 1.7. À retenir

**Comprendre → Décomposer → Construire → Tester → Corriger**

* **Comprendre** : identifier les données, le résultat et les contraintes.
* **Décomposer** : découper le problème.
* **Construire** : choisir les algorithmes élémentaires et les variables.
* **Tester** : vérifier le raisonnement sur papier.
* **Corriger** : corriger les erreurs et finaliser l’algorithme.

# Partie 2 — Pratique

## 2.1. Reproduire la méthode

Reprenez le problème du magasin présenté dans la théorie.

Appliquez vous-même les cinq étapes :

**Étape 1 — Comprendre**

Identifiez les données, le résultat attendu et les contraintes.

**Étape 2 — Décomposer**

Découpez le problème en petits problèmes.

**Étape 3 — Construire**

Pour chaque petit problème :

* choisissez l’algorithme élémentaire ;
* déterminez les variables ;
* indiquez le résultat produit.

**Étape 4 — Tester**

Testez votre raisonnement sur papier.

**Étape 5 — Corriger**

Corrigez les erreurs et finalisez votre algorithme.

**Résultat attendu :**

Un algorithme complet construit à partir du problème du magasin.

# Partie 3 — Exercice

Une plateforme propose plusieurs vidéos pour apprendre une notion technique.

Chaque vidéo possède :

* un titre ;
* une durée ;
* un nombre de `views`.

Une vidéo est populaire si elle possède au moins **2 000 views**.

Un apprenant dispose de **10 minutes maximum**.

Il veut regarder le plus grand nombre possible de vidéos populaires sans dépasser 10 minutes.

**Travail à faire :**

Appliquez seul la méthode :

```text
Comprendre
→ Décomposer
→ Construire
→ Tester
→ Corriger
```

Pour chaque sous-problème, indiquez :

* l’algorithme élémentaire utilisé ;
* les variables nécessaires ;
* le résultat produit.

**Résultat attendu :**

Un algorithme complet construit par vous-même.

# 4. Bilan

**Vous avez réalisé :** la construction d’un algorithme à partir d’un problème composé.

**Vous savez maintenant :** découper un problème, choisir des algorithmes élémentaires, utiliser des variables intermédiaires et vérifier votre raisonnement.

**Méthode à retenir :**

```text
Comprendre
   ↓
Décomposer
   ↓
Construire
   ↓
Tester
   ↓
Corriger
```

# 5. Glossaire

* **Algorithme** : suite d’actions pour résoudre un problème.
* **Algorithme élémentaire** : algorithme simple qui réalise une tâche précise.
* **Décomposer** : découper un problème en petits problèmes.
* **Variable** : élément qui conserve une valeur ou un résultat.
* **Résultat intermédiaire** : résultat produit par une étape et utilisé par une autre étape.
* **Contrainte** : règle que la solution doit respecter.
* **Test sur papier** : vérification manuelle du raisonnement.
