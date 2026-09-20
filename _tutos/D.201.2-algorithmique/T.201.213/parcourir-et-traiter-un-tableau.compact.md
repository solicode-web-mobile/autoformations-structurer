---
title: "Parcourir et traiter un tableau"
layout: tuto
slug: "parcourir-et-traiter-un-tableau"
permalink: /tutos/:slug/compact
tuto_id: "T.201.213"
version: "compact"
ua: "UA.201.21"
nav_order: 3
---
 
## 1. Objectif

Écrire un programme JavaScript qui construit un nouveau tableau contenant les valeurs qui se répètent dans un tableau.

Exécuter, tester et déboguer le programme avec **Node.js** et **VS Code**.

## 2. Prérequis

* Avoir réalisé les tutoriels précédents de l’UA.
* Savoir parcourir un tableau.
* Savoir comparer des valeurs.
* Savoir utiliser `console.log()`.
* Savoir exécuter un fichier avec Node.js.

# Partie 1 — Théorie

## 1.1. Le problème

Vous disposez d’un tableau de nombres :

```text
[4, 7, 2, 7, 9, 4, 5]
```

Votre programme doit construire un **nouveau tableau** contenant les valeurs qui apparaissent plusieurs fois.

Résultat attendu :

```text
[4, 7]
```

Chaque valeur répétée doit apparaître **une seule fois** dans le nouveau tableau.

Autre exemple :

```text
[4, 7, 4, 2, 7, 7]
```

Résultat attendu :

```text
[4, 7]
```

Votre travail consiste à trouver vous-même le traitement permettant d’obtenir ce résultat.

Ne copiez pas une solution toute faite.

## 1.2. Observer les répétitions

Observez le tableau :

```text
[4, 7, 2, 7, 9, 4, 5]
```

Certaines valeurs apparaissent une seule fois.

D’autres apparaissent plusieurs fois.

Le nouveau tableau doit conserver uniquement les valeurs qui se répètent.

Une valeur qui apparaît plusieurs fois dans le tableau de départ ne doit apparaître qu’une seule fois dans le nouveau tableau.

## 1.3. À retenir

* Le tableau de départ contient les données.
* Le nouveau tableau contient le résultat.
* Une valeur répétée apparaît plusieurs fois dans le tableau de départ.
* Chaque valeur répétée doit apparaître une seule fois dans le nouveau tableau.
* L’algorithme doit être construit par l’apprenant.

# Partie 2 — Pratique

## 2.1. Construire et tester

### Étape 1 — Créer le fichier

Créez :

```text
repetitions.js
```

Dans ce fichier, utilisez le tableau suivant :

```javascript
let nombres = [4, 7, 2, 7, 9, 4, 5];
```

Construisez votre propre traitement pour créer le nouveau tableau.

Affichez le résultat.

### Étape 2 — Exécuter

Dans le terminal de VS Code :

```bash
node repetitions.js
```

Le résultat attendu est :

```text
[4, 7]
```

Testez ensuite plusieurs tableaux.

Vérifiez notamment les cas où :

* une valeur apparaît deux fois ;
* une valeur apparaît plusieurs fois ;
* aucune valeur ne se répète.

### Étape 3 — Déboguer

Utilisez le débogueur **Node.js** de VS Code pour suivre votre programme ligne par ligne.

Observez les valeurs utilisées par votre traitement et le contenu du nouveau tableau pendant son exécution.

Vérifiez que les valeurs répétées sont correctement détectées et qu’elles ne sont conservées qu’une seule fois.

Corrigez les erreurs trouvées et relancez les tests.

**Résultat attendu :**

Le programme construit correctement un nouveau tableau contenant les valeurs qui se répètent.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui construit un nouveau tableau à partir des valeurs répétées d’un tableau.

**Vous savez maintenant :** utiliser un parcours et des comparaisons pour construire un nouveau résultat à partir des données d’un tableau.

# 4. Glossaire

* **Valeur répétée** : valeur présente plusieurs fois dans un tableau.
* **Nouveau tableau** : tableau utilisé pour conserver le résultat.
* **Comparaison** : action qui permet de comparer des valeurs.
