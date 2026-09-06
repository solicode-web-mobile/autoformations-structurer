---
title: "Exercice : gérer un article"
layout: tuto
slug: "exercice-gerer-article"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.115"
version: "detaille"
ua: "UA.121.11"
nav_order: 5
---


## 1. Objectif

Réutiliser les variables, `prompt-sync`, les opérations et `console.log()` dans un même programme JavaScript.

Vous allez réaliser un petit programme capable de recevoir les informations d’un article, de calculer son prix total et d’afficher le résultat.

## 2. Prérequis

Savoir utiliser les variables, `prompt-sync`, les opérations et `console.log()` avec Node.js.

# Partie 1 — Théorie

## 1.1. Travail à réaliser

Vous allez créer un programme qui permet de gérer l’achat d’un article.

Le programme doit d’abord **recevoir les informations** de l’article.

Il doit ensuite **stocker ces informations dans des variables**.

Après cela, il doit **calculer le prix total**.

Enfin, il doit **afficher les informations et le résultat** dans la console.

Le programme suit donc cette logique :

```text
Utilisateur
    ↓
Nom + Prix + Quantité
    ↓
Programme
    ↓
Calcul du total
    ↓
Affichage du résultat
```

Le programme doit réaliser les cinq actions suivantes :

1. demander le **nom de l’article** ;
2. demander le **prix** ;
3. demander la **quantité** ;
4. calculer le **total** ;
5. afficher les informations et le total.

## 1.2. Notions à utiliser

Pour réaliser l’exercice, vous allez réutiliser les notions déjà étudiées.

### Variable

Une variable permet de stocker une valeur.

Exemple :

```javascript id="9p7h0s"
let nom = "Livre";
```

### prompt-sync

`prompt-sync` permet de recevoir une valeur saisie par l’utilisateur.

Exemple :

```javascript id="3v2l8h"
let nom = prompt("Nom de l'article :");
```

### Number()

Le prix et la quantité doivent être utilisés dans un calcul.

Ils doivent donc être convertis en nombres :

```javascript id="qsm2du"
let prix = Number(prompt("Prix :"));
```

### Opération

Le prix total est calculé avec une multiplication :

```text id="7m3oy3"
total = prix × quantité
```

### console.log()

`console.log()` permet d’afficher les informations et le résultat.

## 1.3. À retenir

Le programme suit toujours la même logique :

```text id="omz7wf"
Recevoir
   ↓
Stocker
   ↓
Calculer
   ↓
Afficher
```

Chaque étape a un rôle précis :

* **Recevoir** → obtenir les valeurs de l’utilisateur.
* **Stocker** → conserver les valeurs dans des variables.
* **Calculer** → effectuer le calcul nécessaire.
* **Afficher** → présenter le résultat.

# Partie 2 — Pratique

## 2.1. Réaliser l’exercice

### Étape 1 — Créer le fichier

Créez un fichier :

```text id="t8o8b4"
article.js
```

Ce fichier contiendra tout le programme.

### Étape 2 — Demander les informations

Demandez à l’utilisateur les trois informations suivantes :

```text id="i7j3hp"
Nom de l'article
Prix
Quantité
```

Utilisez `prompt-sync`.

Stockez chaque réponse dans une variable.

Le nom de l’article est une information textuelle.

Le prix et la quantité seront utilisés pour effectuer un calcul. Utilisez donc `Number()` pour ces deux valeurs.

Vous devez obtenir trois variables correspondant à :

```text id="bdp15m"
nom
prix
quantite
```

### Étape 3 — Calculer le total

Utilisez le prix et la quantité pour calculer le total :

```text id="sc7x6g"
total = prix × quantité
```

Stockez le résultat dans une variable `total`.

Par exemple, avec :

```text id="u3gt2x"
prix = 80
quantité = 2
```

le total doit être :

```text id="z9qj0o"
160
```

### Étape 4 — Afficher le résultat

Affichez les quatre informations suivantes :

```text id="xwef0t"
Article
Prix
Quantité
Total
```

Utilisez `console.log()`.

Le résultat peut avoir cette forme :

```text id="2pq5wd"
Article : Livre JavaScript
Prix : 80
Quantité : 2
Total : 160
```

### Étape 5 — Tester le programme

Exécutez le programme avec :

```bash id="3xq2c4"
node article.js
```

Saisissez différentes valeurs.

Par exemple :

```text id="glx5sq"
Nom de l'article : Livre JavaScript
Prix : 80
Quantité : 2
```

Puis testez avec d’autres prix et quantités.

**Résultat attendu :**

Le programme demande les informations de l’article, stocke les valeurs dans des variables, calcule correctement le total et affiche le résultat dans la console.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui reçoit, stocke, traite et affiche des données.

**Vous savez maintenant :** utiliser plusieurs notions déjà étudiées dans un même programme et organiser un traitement simple de bout en bout.

# 4. Glossaire

* **Exercice** : travail réalisé seul pour vérifier ses connaissances.
* **Variable** : espace qui stocke une valeur.
* **prompt-sync** : module permettant de recevoir une valeur saisie dans Node.js.
* **Number()** : fonction qui convertit une valeur en nombre.
* **Total** : résultat du prix multiplié par la quantité.
