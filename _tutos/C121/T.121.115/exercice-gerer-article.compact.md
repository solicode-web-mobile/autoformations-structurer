---
title: "Exercice : gérer un article"
layout: tuto
slug: "exercice-gerer-article"
permalink: /tutos/:slug/compact
tuto_id: "T.121.115"
version: "compact"
ua: "UA.121.11"
nav_order: 5
---

## 1. Objectif

Réutiliser les variables, `prompt-sync`, les opérations et `console.log()` dans un même programme JavaScript.

## 2. Prérequis

Savoir utiliser les variables, `prompt-sync`, les opérations et `console.log()` avec Node.js.

# Partie 1 — Théorie

## 1.1. Travail à réaliser

Vous allez créer un programme qui permet de gérer l’achat d’un article.

Le programme doit :

1. demander le **nom de l’article** ;
2. demander son **prix** ;
3. demander la **quantité** ;
4. calculer le **total** ;
5. afficher les informations de l’article et le total.

Le fonctionnement attendu est :

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

## 1.2. Notions à utiliser

Vous devez utiliser :

* une variable pour stocker chaque valeur ;
* `prompt-sync` pour recevoir les valeurs ;
* `Number()` pour le prix et la quantité ;
* `*` pour calculer le total ;
* `console.log()` pour afficher le résultat.

## 1.3. À retenir

Le programme suit cette logique :

```text
Recevoir → Stocker → Calculer → Afficher
```

# Partie 2 — Pratique

## 2.1. Réaliser l’exercice

### Étape 1 — Créer le fichier

Créez un fichier :

```text
article.js
```

### Étape 2 — Demander les informations

Demandez à l’utilisateur :

```text
Nom de l'article
Prix
Quantité
```

Stockez chaque valeur dans une variable.

### Étape 3 — Calculer le total

Calculez le prix total avec :

```text
total = prix × quantité
```

### Étape 4 — Afficher le résultat

Affichez :

```text
Article
Prix
Quantité
Total
```

### Étape 5 — Tester le programme

Exécutez :

```bash
node article.js
```

Testez avec plusieurs valeurs.

**Résultat attendu :**

Le programme demande les informations, calcule correctement le total et affiche le résultat dans la console.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui reçoit, traite et affiche des données.

**Vous savez maintenant :** réutiliser plusieurs notions dans un même programme.

# 4. Glossaire

* **Exercice** : travail réalisé seul pour vérifier ses connaissances.
* **Variable** : espace qui stocke une valeur.
* **Total** : résultat du prix multiplié par la quantité.
