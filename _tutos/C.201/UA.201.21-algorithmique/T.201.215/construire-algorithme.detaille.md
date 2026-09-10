---
title: "Construire un algorithme à partir d’un problème"
layout: tuto
slug: "construire-algorithme"
permalink: /tutos/:slug/detaille
tuto_id: "T.201.215"
version: "detaille"
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

Un problème algorithmique présente une situation et demande un résultat.

Pour un problème simple, une seule technique peut parfois suffire.

Pour un problème composé, plusieurs traitements sont nécessaires.

Dans ce cas, il ne faut pas chercher tout l’algorithme en une seule fois.

Il faut d’abord comprendre le problème, puis le découper en plusieurs petits problèmes.

### Exemple

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

Le problème semble être une seule question :

> Quels produits le client doit-il acheter ?

Mais cette question contient plusieurs tâches.

La première étape consiste donc à comprendre exactement le problème.

---

## 1.2. Comprendre

La première étape est de comprendre la situation avant de chercher une solution.

Pour cela, il faut identifier :

* les données disponibles ;
* le résultat demandé ;
* les conditions ;
* les contraintes.

### Les données

Les données disponibles sont :

```text
Produits
Prix
Views
Budget = 100 DH
```

### La condition

Un produit est populaire si :

```text
views > 1500
```

### L’objectif

Le client veut :

```text
acheter le plus grand nombre possible de produits populaires
```

### La contrainte

Le prix total des produits achetés doit respecter :

```text
total <= 100 DH
```

### Exemple

Considérons le produit B :

```text
Prix = 20 DH
Views = 2500
```

On vérifie sa popularité :

```text
2500 > 1500
```

Le produit B respecte donc la condition.

Avec cette analyse, on connaît maintenant les éléments importants du problème.

On ne cherche toujours pas le code.

---

## 1.3. Décomposer

Un problème composé peut être découpé en plusieurs petits problèmes.

On cherche :

> Quelles sont les tâches nécessaires pour obtenir le résultat final ?

Dans notre exemple, on peut décomposer le problème en quatre étapes :

```text
1. Trier les produits par nombre de views
2. Garder seulement les produits avec plus de 1500 views
3. Trier le nouveau tableau par prix
4. Prendre les produits tant que la somme des prix ne dépasse pas 100 DH
```

Cette décomposition donne une première organisation du problème.

### Pourquoi décomposer ?

Le problème complet est difficile à résoudre directement.

Les petits problèmes sont plus simples.

Par exemple :

```text
Problème complet
        ↓
Trouver les produits populaires
        ↓
Organiser les produits
        ↓
Respecter le budget
```

On peut donc chercher une solution pour une petite partie avant de passer à la suivante.

### Exemple

Au lieu de chercher directement :

> Comment acheter le plus grand nombre de produits populaires avec 100 DH ?

On commence par :

> Comment organiser les produits selon leur nombre de views ?

Puis :

> Comment garder les produits populaires ?

Puis :

> Comment organiser les produits selon leur prix ?

Enfin :

> Comment choisir les produits sans dépasser le budget ?

La décomposition permet donc de transformer un problème complexe en plusieurs problèmes plus faciles.

---

## 1.4. Construire

Après avoir décomposé le problème, il faut construire chaque étape.

Pour chaque petit problème, il faut déterminer :

1. **l’algorithme élémentaire** à utiliser ;
2. **les variables** nécessaires ;
3. **le résultat** produit.

Le résultat de l’étape doit être enregistré dans une variable.

Cette variable devient une donnée d’entrée pour l’étape suivante.

On peut représenter cette idée ainsi :

```text
Données initiales
        ↓
Algorithme 1
        ↓
Variable résultat 1
        ↓
Algorithme 2
        ↓
Variable résultat 2
        ↓
Algorithme 3
        ↓
Variable résultat 3
        ↓
Algorithme 4
        ↓
Résultat final
```

### Étape 1 — Trier les produits par views

**Petit problème :**

> Organiser les produits selon leur nombre de `views`.

On cherche parmi les algorithmes élémentaires déjà étudiés.

**Algorithme élémentaire :**

> **Trier un tableau**

Le résultat doit être conservé dans une variable.

Exemple :

```text
produitsTriesViews
```

Cette variable contient le résultat de l’étape 1.

Elle sera utilisée par l’étape 2.

---

### Étape 2 — Garder les produits populaires

**Petit problème :**

> Garder seulement les produits dont le nombre de `views` est supérieur à 1 500.

La donnée d’entrée est :

```text
produitsTriesViews
```

On doit examiner les produits et vérifier leur nombre de `views`.

**Algorithmes élémentaires :**

> **Parcourir un tableau**
> **Comparer une valeur avec une condition**

Exemple :

```text
2500 > 1500 → garder
1200 > 1500 → ne pas garder
```

Le résultat doit être enregistré dans une nouvelle variable :

```text
produitsPopulaires
```

Cette variable devient l’entrée de l’étape 3.

---

### Étape 3 — Trier le nouveau tableau par prix

**Petit problème :**

> Organiser les produits populaires selon leur prix.

La donnée d’entrée est :

```text
produitsPopulaires
```

On utilise encore un algorithme élémentaire connu :

> **Trier un tableau**

Le résultat peut être enregistré dans :

```text
produitsTriesPrix
```

Cette variable devient l’entrée de l’étape 4.

---

### Étape 4 — Prendre les produits sans dépasser 100 DH

**Petit problème :**

> Choisir les produits dans l’ordre obtenu, sans dépasser le budget de 100 DH.

Les données nécessaires sont :

```text
produitsTriesPrix
budget = 100
```

Il faut également conserver les informations utiles pendant le traitement, par exemple :

```text
total
produitsAchetes
```

**Algorithmes élémentaires utilisés :**

> **Parcourir un tableau**
> **Calculer une somme**
> **Comparer une valeur avec une limite**

Le résultat final est conservé dans :

```text
produitsAchetes
```

---

## 1.5. Relier les étapes

Les résultats doivent être transmis d’une étape à l’autre.

On obtient :

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

Chaque variable a donc un rôle précis.

| Étape | Algorithme élémentaire        | Variable résultat    |
| ----- | ----------------------------- | -------------------- |
| 1     | Trier un tableau              | `produitsTriesViews` |
| 2     | Parcourir + condition         | `produitsPopulaires` |
| 3     | Trier un tableau              | `produitsTriesPrix`  |
| 4     | Parcourir + somme + condition | `produitsAchetes`    |

Le grand problème est maintenant formé de plusieurs petits traitements.

On ne cherche donc plus un seul grand algorithme.

On combine plusieurs algorithmes élémentaires.

---

## 1.6. Tester

Avant de programmer, il faut vérifier que le raisonnement fonctionne.

Une bonne méthode consiste à faire un **test sur papier**.

Pour cela, on choisit un petit exemple et on applique les étapes manuellement.

### Exemple

Prix des produits :

```text
10 DH
15 DH
20 DH
30 DH
```

Budget :

```text
40 DH
```

On commence avec :

```text
total = 0 DH
```

On ajoute les valeurs une par une et on observe le total.

Par exemple :

```text
10 + 15 = 25
```

Puis :

```text
25 + 20 = 45
```

On constate que le budget de 40 DH est dépassé.

Le test permet donc de vérifier qu’une nouvelle valeur ne doit pas être ajoutée lorsque la contrainte n’est plus respectée.

### Autre test

Prenons :

```text
10 DH
15 DH
20 DH
```

Avec :

```text
budget = 45 DH
```

On obtient :

```text
10 + 15 + 20 = 45
```

Le budget est respecté.

Le test sur papier permet donc de vérifier le comportement du raisonnement avant d’écrire le code.

Il faut tester plusieurs situations, par exemple :

* un petit nombre de données ;
* un tableau déjà organisé ;
* des valeurs très différentes ;
* un budget faible ;
* un budget suffisant.

---

## 1.7. Corriger

Le test peut montrer qu’une partie du raisonnement est incorrecte.

Il faut alors revenir à l’étape concernée.

Vérifiez :

* les données utilisées ;
* l’algorithme élémentaire choisi ;
* les variables ;
* le résultat de l’étape ;
* les données utilisées par l’étape suivante ;
* les calculs ;
* les conditions ;
* le résultat final.

### Exemple

Supposons que le test produise :

```text
total = 105 DH
budget = 100 DH
```

Il y a une erreur.

Il faut rechercher dans quelle étape le problème apparaît.

Après la correction, on refait le test sur papier.

Quand le raisonnement fonctionne avec plusieurs exemples, l’algorithme peut être finalisé.

Le code JavaScript peut alors être écrit à partir de cet algorithme.

---

## 1.8. À retenir

Pour construire un algorithme à partir d’un problème composé, utilisez cinq étapes :

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

**Comprendre**

Identifier les données, le résultat attendu et les contraintes.

**Décomposer**

Découper le problème en petits problèmes.

**Construire**

Pour chaque petit problème :

* choisir un algorithme élémentaire ;
* déterminer les variables ;
* enregistrer le résultat ;
* utiliser ce résultat dans l’étape suivante.

**Tester**

Vérifier le raisonnement sur papier avec des exemples.

**Corriger**

Corriger les erreurs et refaire les tests.

# Partie 2 — Pratique

## 2.1. Reproduire la méthode

Reprenez le problème du magasin présenté dans la partie théorique.

Vous allez maintenant appliquer vous-même les cinq étapes.

### Étape 1 — Comprendre

Identifiez :

* les données ;
* le résultat attendu ;
* les conditions ;
* les contraintes.

Notez vos réponses avant de commencer la décomposition.

### Étape 2 — Décomposer

Découpez le problème en plusieurs petits problèmes.

Pour chaque partie, indiquez clairement ce que cette partie doit produire.

### Étape 3 — Construire

Pour chaque petit problème :

* choisissez l’algorithme élémentaire ;
* déterminez les variables ;
* indiquez le résultat produit ;
* indiquez la variable qui sera utilisée par l’étape suivante.

Construisez ensuite l’enchaînement complet des étapes.

### Étape 4 — Tester

Choisissez un petit exemple.

Faites le traitement manuellement sur papier.

Vérifiez les résultats de chaque étape.

### Étape 5 — Corriger

Recherchez les éventuelles erreurs dans votre raisonnement.

Corrigez-les et refaites le test.

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

Résolvez le problème en appliquant seul la méthode :

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
* le résultat produit ;
* la variable utilisée comme entrée de l’étape suivante.

Ne commencez pas directement par le code.

Construisez d’abord le raisonnement et l’algorithme.

**Résultat attendu :**

Un algorithme complet et vérifié sur papier.

# 4. Bilan

**Vous avez réalisé :** la construction d’un algorithme à partir d’un problème composé.

**Vous savez maintenant :** décomposer un problème, choisir un algorithme élémentaire pour chaque partie, déterminer les variables intermédiaires, transmettre les résultats entre les étapes et tester le raisonnement sur papier.

**Méthode de création d’un algorithme :**

```text
1. Comprendre
   Identifier les données, le résultat et les contraintes.

2. Décomposer
   Découper le problème en petits problèmes.

3. Construire
   Pour chaque petit problème :
   - choisir un algorithme élémentaire ;
   - déterminer les variables ;
   - enregistrer le résultat ;
   - utiliser ce résultat dans l'étape suivante.

4. Tester
   Vérifier le raisonnement sur papier avec un exemple.

5. Corriger
   Corriger les erreurs et refaire les tests.
```

> **Un problème composé peut être résolu en combinant plusieurs algorithmes élémentaires. Chaque étape produit un résultat qui devient la donnée d’entrée de l’étape suivante.**

# 5. Glossaire

* **Algorithme** : suite d’actions organisée pour résoudre un problème.
* **Algorithme élémentaire** : algorithme simple qui réalise une tâche précise.
* **Problème composé** : problème qui contient plusieurs tâches.
* **Décomposer** : découper un problème en plusieurs petits problèmes.
* **Variable** : élément qui conserve une valeur ou un résultat.
* **Résultat intermédiaire** : résultat produit par une étape et utilisé par l’étape suivante.
* **Donnée d’entrée** : donnée utilisée par une étape.
* **Contrainte** : règle que la solution doit respecter.
* **Tri** : organisation des éléments d’un tableau dans un ordre choisi.
* **Test sur papier** : vérification manuelle du raisonnement avec des données.
