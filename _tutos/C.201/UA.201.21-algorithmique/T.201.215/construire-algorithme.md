---
title: "Construire un algorithme à partir d’un problème"
layout: tuto
slug: "construire-algorithme"
permalink: /tutos/:slug/
tuto_id: "T.201.215"
version: "normal"
ua: "UA.201.21"
nav_order: 5
---
 

## 1. Objectif

Apprendre une méthode simple pour construire un algorithme à partir d’un problème composé.

Appliquer la méthode **Comprendre → Décomposer → Construire → Tester → Corriger** avant de programmer.

## 2. Prérequis

* Connaître les tableaux.
* Savoir parcourir un tableau.
* Savoir comparer des valeurs.
* Savoir trier un tableau.
* Connaître les algorithmes élémentaires déjà étudiés.

# Partie 1 — Théorie

## 1.1. Le problème

Un magasin possède plusieurs produits.

Chaque produit possède :

* un nom ;
* un prix ;
* un nombre de `views`.

Un produit est considéré comme populaire s’il possède plus de **1 500 views**.

Un client possède **100 DH**.

Il veut acheter **le plus grand nombre possible de produits populaires** sans dépasser son budget.

### Données

| Produit |  Prix | Views |
| ------- | ----: | ----: |
| A       | 30 DH | 1 200 |
| B       | 20 DH | 2 500 |
| C       | 15 DH | 1 800 |
| D       | 40 DH | 3 000 |
| E       | 10 DH |   900 |
| F       | 25 DH | 2 000 |

Avant d’écrire le code, il faut construire le raisonnement.

---

## 1.2. Comprendre

La première étape consiste à comprendre ce que le problème demande.

On identifie les données, le résultat attendu et les contraintes.

### Données

```text
Produits
Prix
Views
Budget = 100 DH
```

### Condition

```text
Produit populaire → views > 1500
```

### Objectif

```text
Acheter le plus grand nombre possible de produits populaires
```

### Contrainte

```text
Ne pas dépasser 100 DH
```

On sait maintenant **ce que le programme doit faire**.

On ne cherche pas encore comment le faire.

---

## 1.3. Décomposer

Le problème contient plusieurs tâches.

Il faut donc le découper en petits problèmes.

Pour notre exemple :

```text
1. Trier les produits par nombre de views
2. Garder les produits avec plus de 1500 views
3. Trier les produits obtenus par prix
4. Choisir les produits sans dépasser 100 DH
```

Chaque ligne correspond à une petite partie du problème général.

La décomposition permet de ne pas chercher toute la solution en même temps.

### Exemple

Au lieu de chercher directement :

> Comment acheter le plus grand nombre de produits populaires avec 100 DH ?

On cherche successivement :

> Comment organiser les produits selon leur popularité ?

> Comment garder uniquement les produits populaires ?

> Comment organiser les produits selon leur prix ?

> Comment choisir les produits en respectant le budget ?

---

## 1.4. Construire

Après la décomposition, il faut construire chaque partie.

Pour chaque petit problème, il faut déterminer :

1. **l’algorithme élémentaire** à utiliser ;
2. **les variables** nécessaires ;
3. **le résultat** produit par cette étape.

Le résultat d’une étape est utilisé comme donnée d’entrée de l’étape suivante.

### Étape 1 — Trier les produits par views

**Petit problème :**

> Organiser les produits selon leur nombre de `views`.

**Algorithme élémentaire :**

> **Trier un tableau**

Le résultat est enregistré dans une variable :

```text
produitsTriesViews
```

Cette variable devient l’entrée de l’étape suivante.

---

### Étape 2 — Garder les produits populaires

**Petit problème :**

> Garder uniquement les produits dont `views > 1500`.

**Algorithme élémentaire :**

> **Parcourir un tableau + condition**

Le résultat est enregistré dans :

```text
produitsPopulaires
```

L’étape suivante utilise :

```text
produitsPopulaires
```

---

### Étape 3 — Trier les produits par prix

**Petit problème :**

> Organiser les produits populaires selon leur prix.

**Algorithme élémentaire :**

> **Trier un tableau**

Le résultat est enregistré dans :

```text
produitsTriesPrix
```

Cette variable devient l’entrée de l’étape suivante.

---

### Étape 4 — Choisir les produits avec le budget

**Petit problème :**

> Sélectionner des produits sans dépasser 100 DH.

Il faut utiliser :

* le prix des produits ;
* le budget ;
* le total utilisé ;
* le nombre de produits choisis.

**Algorithmes élémentaires :**

> **Parcourir un tableau + calculer une somme + comparer une valeur**

Le résultat est enregistré dans :

```text
produitsAchetes
```

---

## 1.5. Relier les étapes

Les étapes sont maintenant liées entre elles.

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

Chaque variable contient le résultat d’une étape.

Ce résultat devient la donnée d’entrée de l’étape suivante.

On peut résumer les quatre étapes ainsi :

| Étape | Algorithme élémentaire        | Variable résultat    |
| ----- | ----------------------------- | -------------------- |
| 1     | Trier un tableau              | `produitsTriesViews` |
| 2     | Parcourir + condition         | `produitsPopulaires` |
| 3     | Trier un tableau              | `produitsTriesPrix`  |
| 4     | Parcourir + somme + condition | `produitsAchetes`    |

Le problème composé est donc construit à partir de plusieurs algorithmes élémentaires.

---

## 1.6. Tester

Avant d’écrire le programme, il faut tester le raisonnement sur papier.

Utilisez un petit exemple.

```text
Produits populaires :
10 DH
15 DH
20 DH
30 DH
```

Budget :

```text
40 DH
```

On simule le traitement manuellement.

Par exemple :

```text
10 + 15 = 25
```

Puis :

```text
25 + 20 = 45
```

Le budget est dépassé.

Le test montre donc qu’il faut vérifier le budget avant d’ajouter un nouveau produit.

On peut refaire le test avec :

```text
Budget : 45 DH
```

Cette fois :

```text
10 + 15 + 20 = 45
```

Le test permet de vérifier le raisonnement avant le passage au code.

---

## 1.7. Corriger

Le test peut révéler une erreur dans le raisonnement.

Il faut vérifier :

* les résultats de chaque étape ;
* les variables ;
* les données transmises d’une étape à l’autre ;
* les calculs ;
* les conditions ;
* le résultat final.

Si une étape donne un mauvais résultat, il faut corriger cette étape et refaire le test.

Quand le raisonnement fonctionne avec plusieurs exemples, l’algorithme peut être finalisé.

---

## 1.8. À retenir

La construction d’un algorithme suit cinq étapes :

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

Pour un problème composé :

> **Décomposer le problème en petits problèmes.**

Pour chaque petit problème :

> **Choisir un algorithme élémentaire et déterminer les variables.**

Puis :

> **Conserver le résultat dans une variable et utiliser ce résultat pour l’étape suivante.**

Enfin :

> **Tester le raisonnement sur papier et corriger les erreurs.**

# Partie 2 — Pratique

## 2.1. Reproduire la méthode

Reprenez le problème du magasin présenté dans la partie théorique.

### Étape 1 — Comprendre

Écrivez :

* les données ;
* le résultat attendu ;
* les conditions ;
* les contraintes.

### Étape 2 — Décomposer

Découpez le problème en petits problèmes.

Chaque petit problème doit correspondre à une tâche précise.

### Étape 3 — Construire

Pour chaque petit problème :

* indiquez l’algorithme élémentaire utilisé ;
* indiquez les variables nécessaires ;
* indiquez le résultat produit ;
* indiquez la variable utilisée par l’étape suivante.

Construisez ensuite l’enchaînement complet.

### Étape 4 — Tester

Choisissez un petit exemple.

Testez chaque étape sur papier.

Vérifiez les résultats intermédiaires.

### Étape 5 — Corriger

Corrigez les erreurs trouvées.

Refaites le test jusqu’à obtenir un raisonnement correct.

**Résultat attendu :**

Un algorithme complet du problème du magasin, construit à partir de plusieurs algorithmes élémentaires.

# Partie 3 — Exercice

Une plateforme propose plusieurs vidéos pour apprendre une notion technique.

Chaque vidéo possède :

* un titre ;
* une durée ;
* un nombre de `views`.

Une vidéo est considérée comme populaire si elle possède au moins **2 000 views**.

Un apprenant dispose de **10 minutes maximum**.

Il veut regarder **le plus grand nombre possible de vidéos populaires** sans dépasser 10 minutes.

### Travail à faire

Construisez seul l’algorithme en appliquant la méthode :

```text
Comprendre
→ Décomposer
→ Construire
→ Tester
→ Corriger
```

Pour chaque sous-problème, indiquez :

* l’algorithme élémentaire choisi ;
* les variables nécessaires ;
* le résultat produit ;
* la variable utilisée par l’étape suivante.

Ne cherchez pas directement le code.

**Résultat attendu :**

Un algorithme complet et vérifié sur papier.

# 4. Bilan

**Vous avez réalisé :** la construction d’un algorithme à partir d’un problème composé.

**Vous savez maintenant :** décomposer un problème, choisir un algorithme élémentaire pour chaque partie, définir les variables intermédiaires et relier les résultats des différentes étapes.

**Méthode de création d’un algorithme :**

```text
1. Comprendre
2. Décomposer
3. Construire
4. Tester
5. Corriger
```

# 5. Glossaire

* **Algorithme** : suite d’actions organisée pour résoudre un problème.
* **Algorithme élémentaire** : algorithme simple qui réalise une tâche précise.
* **Décomposer** : découper un problème en plusieurs petits problèmes.
* **Variable** : élément qui conserve une valeur ou un résultat.
* **Résultat intermédiaire** : résultat produit par une étape et utilisé par l’étape suivante.
* **Donnée d’entrée** : donnée utilisée par une étape.
* **Contrainte** : règle que la solution doit respecter.
* **Tri** : organisation des éléments d’un tableau dans un ordre choisi.
* **Test sur papier** : vérification manuelle du raisonnement avec des données.
