---
title: "Rechercher une valeur maximale dans un tableau"
layout: tuto
slug: "rechercher-une-valeur-maximale"
permalink: /tutos/:slug/detaille
tuto_id: "T.201.212"
version: "detaille"
ua: "UA.201.21"
nav_order: 2
---


## 1. Objectif

Écrire un programme JavaScript qui recherche la plus grande valeur d’un tableau.

Vous allez déclarer un tableau, lire ses éléments, le parcourir et construire vous-même le traitement de recherche du maximum.

Vous allez ensuite exécuter le programme avec **Node.js** et le déboguer ligne par ligne avec **VS Code**.

## 2. Prérequis

* Connaître les variables.
* Savoir utiliser `let`.
* Savoir utiliser `console.log()`.
* Connaître la boucle `for`.
* Savoir accéder à un élément d’un tableau.
* Savoir exécuter un fichier avec Node.js.
* Savoir utiliser le débogueur de VS Code.

# Partie 1 — Théorie

## 1.1. Déclarer un tableau

Un tableau permet de stocker plusieurs valeurs dans une même variable.

En JavaScript, les valeurs sont placées entre crochets `[]`.

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Le tableau `nombres` contient cinq valeurs.

Chaque valeur possède un indice.

Le premier indice est `0`.

```text
Indice :    0   1   2   3   4
Valeur :   12   5  27   9  18
```

## 1.2. Lire un élément

Pour lire un élément, utilisez son indice.

```javascript
console.log(nombres[0]);
console.log(nombres[2]);
```

La forme générale est :

```text
tableau[indice]
```

Le programme peut donc lire une valeur précise sans parcourir tout le tableau.

## 1.3. Modifier un élément

Pour modifier un élément, utilisez son indice et affectez une nouvelle valeur.

```javascript
nombres[2] = 30;
```

La forme générale est :

```text
tableau[indice] = nouvelleValeur
```

La valeur située à cet indice est remplacée.

## 1.4. Connaître la taille du tableau

La propriété `length` donne le nombre d’éléments du tableau.

```javascript
console.log(nombres.length);
```

Pour le tableau précédent, le résultat est :

```text
5
```

Cette propriété est utile pour parcourir tout le tableau.

## 1.5. Parcourir un tableau

Une boucle `for` permet de lire les éléments un par un.

```javascript
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

À chaque passage :

* `i` contient l’indice courant ;
* `nombres[i]` donne la valeur à cet indice.

Le parcours doit permettre de visiter tous les éléments du tableau.

## 1.6. Comprendre le problème

Le problème consiste à trouver la plus grande valeur d’un tableau.

Exemple :

```text
[12, 5, 27, 9, 18]
```

Le résultat attendu est :

```text
27
```

Le programme doit donc examiner les valeurs du tableau et déterminer laquelle est la plus grande.

## 1.7. Décomposer le problème

Avant d’écrire le code, découpez le travail.

Vous devez déterminer :

1. comment commencer la recherche ;
2. comment parcourir le tableau ;
3. quelle valeur comparer ;
4. quelle valeur conserver ;
5. dans quel cas cette valeur doit changer ;
6. quelle valeur afficher à la fin.

Écrivez votre raisonnement avant de coder.

## 1.8. Utiliser une valeur de référence

Pendant la recherche, vous devez conserver une valeur qui représente le meilleur résultat trouvé jusqu’à présent.

Cette valeur peut changer pendant le parcours.

Réfléchissez à la question suivante :

> Quelle valeur du tableau peut servir de première référence ?

Votre choix doit fonctionner avec différents tableaux.

Par exemple :

```text
[12, 5, 27, 9, 18]
```

```text
[4, 8, 2, 15, 6]
```

```text
[20, 7, 13, 5, 9]
```

## 1.9. Comparer les valeurs

À chaque passage, vous disposez de deux informations :

* la valeur actuellement lue ;
* la valeur conservée comme référence.

Vous devez déterminer si la valeur lue doit remplacer la valeur de référence.

Posez-vous cette question :

> Dans quel cas la nouvelle valeur est-elle meilleure que la valeur conservée ?

Cette comparaison permet au programme de faire évoluer le résultat pendant le parcours.

## 1.10. Comprendre la mise à jour

La valeur de référence ne doit pas changer à chaque passage.

Elle change seulement lorsque la condition que vous avez définie est vraie.

Votre algorithme doit donc répondre clairement à deux questions :

* Quand garder la valeur actuelle ?
* Quand remplacer cette valeur ?

N’écrivez pas encore le code.

## 1.11. Préparer une trace d’exécution

Une trace permet de suivre le fonctionnement du programme.

Préparez un tableau avec ces informations :

```text
Indice | Valeur courante | Référence avant | Référence après
```

Pendant le débogage, complétez cette trace avec les valeurs observées.

Cette méthode permet de comprendre à quel moment votre traitement fonctionne ou ne fonctionne pas.

## 1.12. Prévoir plusieurs cas de test

Votre algorithme ne doit pas fonctionner uniquement avec un seul exemple.

Testez différents cas :

```text
[12, 5, 27, 9, 18]
```

```text
[4, 8, 2, 15, 6]
```

```text
[20, 7, 13, 5, 9]
```

Testez aussi :

* une plus grande valeur au début ;
* une plus grande valeur au milieu ;
* une plus grande valeur à la fin.

Le but est de vérifier que votre raisonnement fonctionne dans plusieurs situations.

## 1.13. Erreurs fréquentes

Pendant la construction de votre algorithme, faites attention à ces erreurs :

* ne pas parcourir tous les éléments ;
* utiliser un mauvais indice ;
* choisir une mauvaise valeur de départ ;
* comparer les mauvaises valeurs ;
* oublier de mettre à jour la valeur de référence ;
* afficher une valeur avant la fin du traitement.

Utilisez le débogueur pour identifier précisément l’erreur.

## 1.14. À retenir

* Un tableau contient plusieurs valeurs.
* Le premier indice est `0`.
* `tableau[indice]` permet de lire une valeur.
* `tableau[indice] = valeur` permet de modifier une valeur.
* `tableau.length` donne le nombre d’éléments.
* Une boucle `for` permet de parcourir le tableau.
* Une valeur de référence permet de suivre le meilleur résultat trouvé.
* Une comparaison permet de décider quand cette valeur doit changer.
* Les tests permettent de vérifier l’algorithme.

# Partie 2 — Pratique

## 2.1. Préparer le programme

### Étape 1 — Créer le fichier

Créez le fichier :

```text
maximum.js
```

### Étape 2 — Déclarer le tableau

Dans `maximum.js`, créez un tableau de nombres.

Utilisez d’abord :

```javascript
let nombres = [12, 5, 27, 9, 18];
```

Affichez le tableau avec `console.log()`.

Exécutez le programme pour vérifier les données.

## 2.2. Construire l’algorithme

### Étape 3 — Parcourir le tableau

Ajoutez une boucle `for`.

Utilisez l’indice pour lire les éléments.

Affichez temporairement chaque valeur.

Vérifiez que toutes les valeurs sont parcourues.

### Étape 4 — Rechercher le maximum

Ajoutez une variable pour conserver votre valeur de référence.

Construisez ensuite la comparaison avec la valeur courante.

Décidez dans quel cas la valeur de référence doit changer.

Enfin, affichez la valeur obtenue.

**Ne copiez pas une solution déjà écrite.**

## 2.3. Tester avec Node.js

### Étape 5 — Exécuter le programme

Dans le terminal de VS Code, exécutez :

```bash
node maximum.js
```

Pour le tableau :

```text
[12, 5, 27, 9, 18]
```

le résultat attendu est :

```text
27
```

### Étape 6 — Tester plusieurs tableaux

Modifiez les valeurs du tableau.

Testez au minimum :

```text
[4, 8, 2, 15, 6]
```

```text
[20, 7, 13, 5, 9]
```

Ajoutez ensuite vos propres tests.

Vérifiez le résultat après chaque exécution.

# Partie 3 — Déboguer avec VS Code

## 3.1. Placer un point d’arrêt

### Étape 1 — Choisir une ligne

Placez un point d’arrêt au début de votre traitement de recherche.

## 3.2. Lancer le débogueur

### Étape 2 — Démarrer le programme

Dans VS Code, ouvrez **Exécuter et déboguer**.

Lancez le programme avec **Node.js**.

## 3.3. Suivre le traitement

### Étape 3 — Avancer ligne par ligne

Utilisez **Step Over**.

À chaque passage, observez :

* l’indice `i` ;
* la valeur de `nombres[i]` ;
* votre variable de référence ;
* la condition exécutée ;
* le résultat après la comparaison.

### Étape 4 — Compléter la trace

Notez les valeurs observées :

```text
Indice
Valeur courante
Référence avant
Référence après
```

Comparez cette trace avec votre raisonnement.

## 3.4. Trouver une erreur

### Étape 5 — Repérer le premier mauvais résultat

Si le programme donne un mauvais résultat, cherchez le premier moment où le comportement devient incorrect.

Vérifiez :

* l’indice ;
* la valeur lue ;
* la valeur de référence ;
* la comparaison ;
* la mise à jour.

Ne corrigez pas plusieurs éléments en même temps.

### Étape 6 — Corriger et relancer

Corrigez la première erreur trouvée.

Relancez ensuite :

```bash
node maximum.js
```

Déboguez à nouveau si nécessaire.

## 3.5. Vérifier différents cas

### Étape 7 — Tester le comportement

Vérifiez votre programme avec des tableaux où :

* la plus grande valeur est au début ;
* la plus grande valeur est au milieu ;
* la plus grande valeur est à la fin.

Ajoutez également un test avec plusieurs valeurs identiques.

Le programme doit donner un résultat correct pour chaque test.

**Résultat attendu :**

Le programme parcourt correctement le tableau, compare les valeurs et affiche la plus grande valeur.

# Partie 4 — Vérification finale

## 4.1. Vérifier le code

Votre programme doit :

* déclarer un tableau ;
* lire ses éléments ;
* parcourir le tableau ;
* comparer les valeurs ;
* conserver une valeur de référence ;
* afficher le maximum.

## 4.2. Vérifier le débogage

Vous devez être capable de suivre dans VS Code :

* l’indice courant ;
* la valeur courante ;
* la valeur de référence ;
* la condition exécutée ;
* les changements de la valeur de référence.

## 4.3. Vérifier les tests

Testez plusieurs tableaux.

Vérifiez que le résultat reste correct lorsque la position de la plus grande valeur change.

**Résultat attendu :**

Le programme recherche correctement la valeur maximale dans différents tableaux.

# 3. Bilan

**Vous avez réalisé :** un programme JavaScript qui déclare un tableau, lit ses éléments, les parcourt et recherche la plus grande valeur.

**Vous savez maintenant :** utiliser les indices d’un tableau, parcourir ses éléments avec `for`, comparer des valeurs, conserver une valeur de référence et déboguer un traitement ligne par ligne avec Node.js et VS Code.

# 4. Glossaire

* **Tableau** : ensemble de plusieurs valeurs.
* **Élément** : valeur contenue dans un tableau.
* **Indice** : position d’un élément dans un tableau.
* **`length`** : propriété qui donne le nombre d’éléments.
* **Parcours** : lecture successive des éléments d’un tableau.
* **Valeur courante** : valeur actuellement traitée.
* **Valeur de référence** : valeur conservée pour effectuer les comparaisons.
* **Maximum** : plus grande valeur trouvée.
* **Initialisation** : action qui donne une première valeur à une variable.
* **Mise à jour** : action qui remplace une valeur par une nouvelle valeur.
* **Trace d’exécution** : suivi des valeurs pendant l’exécution.
* **Point d’arrêt** : emplacement où le programme s’arrête pendant le débogage.
* **Débogage** : action qui permet de suivre le programme pour trouver et corriger une erreur.
