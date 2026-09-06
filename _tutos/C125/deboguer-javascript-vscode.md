---
title: "Déboguer avec VS Code"
layout: tuto
slug: "deboguer-javascript-vscode"
permalink: /tutos/:slug/
tuto_id: "T.125.211"
version: "normal"
ua: "UA.125.21"
nav_order: 1
---



# Déboguer un programme JavaScript avec VS Code

> * C.125 — Structurer et déboguer une solution / D.125.2 — Déboguer et résoudre les erreurs
> * UA.121.12 — Déboguer un programme JavaScript
  
Apprendre à trouver une erreur dans un programme JavaScript en l’exécutant **ligne par ligne avec VS Code**.

**Prérequis** : variables, `prompt()`, `console.log()`, JavaScript de base et VS Code.

# Partie 1 — Théorie

## 1.1. Déboguer

**Déboguer** consiste à chercher et corriger une erreur dans un programme.

**Exemple :** un calcul donne `12` au lieu de `20`. Il faut trouver l’instruction responsable.

## 1.2. Exécuter ligne par ligne

VS Code permet de lancer un programme et de l’exécuter **instruction par instruction**.

À chaque arrêt, on peut observer les valeurs des variables.

## 1.3. Point d’arrêt

Un **point d’arrêt** indique au programme où il doit s’arrêter pendant le débogage.

**Exemple :**

```javascript
let prix = 10;       // arrêt ici
let quantite = 2;
let total = prix + quantite;
console.log(total);
```

## 1.4. À retenir

* **Point d’arrêt** → arrêter le programme.
* **Ligne suivante** → avancer dans le programme.
* **Variable** → observer sa valeur.
* **Débogage** → trouver et corriger une erreur.

# Partie 2 — Pratique

## 2.1. Préparer le programme

### Étape 1 — Créer le fichier

Ouvrez VS Code.

Créez un fichier :

```text
debug.js
```

### Étape 2 — Ajouter le programme

Ajoutez le code suivant :

```javascript
let prix = 10;
let quantite = 2;

let total = prix + quantite;

console.log("Prix :", prix);
console.log("Quantité :", quantite);
console.log("Total :", total);
```

### Étape 3 — Exécuter le programme

Lancez le programme avec Node.js.

Observez le résultat dans le terminal.

Le programme affiche :

```text
Prix : 10
Quantité : 2
Total : 12
```

Le résultat attendu est `20`.

## 2.2. Déboguer ligne par ligne

### Étape 4 — Ajouter un point d’arrêt

Placez un point d’arrêt sur cette ligne :

```javascript
let total = prix + quantite;
```

### Étape 5 — Démarrer le débogage

Lancez le débogage du fichier avec **Run and Debug**.

Le programme s’arrête sur le point d’arrêt.

### Étape 6 — Observer les variables

Observez les valeurs de :

```text
prix = 10
quantite = 2
```

Utilisez **Step Over** pour exécuter la ligne suivante.

### Étape 7 — Observer le calcul

Avancez ligne par ligne.

Observez la valeur de :

```text
total
```

Vous pouvez voir que le programme réalise :

```text
10 + 2 = 12
```

Le calcul est incorrect.

## 2.3. Corriger le programme

### Étape 8 — Modifier le calcul

Remplacez :

```javascript
let total = prix + quantite;
```

par :

```javascript
let total = prix * quantite;
```

### Étape 9 — Relancer le débogage

Relancez le programme.

Avancez de nouveau **ligne par ligne**.

Observez la valeur de `total`.

**Résultat attendu :**

```text
Prix : 10
Quantité : 2
Total : 20
```

### Étape 10 — Tester avec d’autres valeurs

Modifiez les valeurs :

```javascript
let prix = 15;
let quantite = 3;
```

Relancez le programme et observez le calcul ligne par ligne.

**Résultat attendu :**

```text
Total : 45
```

# 3. Bilan

**Vous avez réalisé :** le débogage d’un programme JavaScript avec VS Code.

**Vous savez maintenant :** placer un point d’arrêt, exécuter un programme ligne par ligne, observer les variables et corriger une erreur.

# 4. Glossaire

* **Débogage** : recherche et correction d’une erreur dans un programme.
* **Point d’arrêt** : emplacement où le programme s’arrête pendant le débogage.
* **Step Over** : exécuter la ligne suivante.
* **Variable** : valeur stockée dans le programme.
* **Terminal** : espace où un programme peut être exécuté.
