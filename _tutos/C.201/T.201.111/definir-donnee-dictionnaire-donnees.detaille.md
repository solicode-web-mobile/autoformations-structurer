---
title: "Définir une donnée et un dictionnaire de données"
layout: tuto
slug: "definir-donnee-dictionnaire-donnees"
permalink: /tutos/:slug/detaille
tuto_id: "T.021.111"
version: "detaille"
ua: "UA.021.11"
nav_order: 1
---


## 1. Objectif

Comprendre ce qu’est une **donnée** et un **dictionnaire de données**.

Comprendre les principales caractéristiques d’une donnée : nom, signification, type, format, taille, obligatoire et calculée.

Créer une présentation simple pour expliquer ces notions avec des exemples.

## 2. Prérequis

* Savoir lire une information simple.
* Savoir créer et modifier une présentation.
* Savoir ajouter du texte et un tableau dans une présentation.

# Partie 1 — Théorie

## 1.1. Qu’est-ce qu’une donnée ?

Une **donnée** est une information utilisée par une application.

Une application utilise beaucoup de données pour fonctionner.

**Exemple :**

```text
Nom : Madani Ali
Âge : 20
Email : madani@example.com
```

Dans cet exemple :

* `Nom` est une donnée ;
* `Âge` est une donnée ;
* `Email` est une donnée.

La donnée peut être utilisée pour :

* afficher une information ;
* enregistrer une information ;
* rechercher une information ;
* modifier une information ;
* réaliser un calcul.

**À retenir :**

Une **donnée** est une information utilisée par une application.

## 1.2. Qu’est-ce qu’un dictionnaire de données ?

Un **dictionnaire de données** est un document qui décrit les données utilisées par une application.

Il permet de donner une description claire de chaque donnée.

Pour chaque donnée, on peut préciser :

* **Nom** : nom utilisé pour identifier la donnée.
* **Signification** : explication de la donnée.
* **Type** : nature de la donnée.
* **Format** : manière dont la donnée est écrite.
* **Taille** : longueur maximale de la donnée.
* **Obligatoire** : indique si la donnée doit être renseignée.
* **Calculée** : indique si la donnée est obtenue par un calcul.

**Exemple :**

| Nom   | Signification      | Type   | Format | Taille | Obligatoire | Calculée |
| ----- | ------------------ | ------ | ------ | ------ | ----------- | -------- |
| nom   | Nom d’une personne | Texte  | Texte  | 100    | Oui         | Non      |
| age   | Âge d’une personne | Nombre | Entier | —      | Oui         | Non      |
| email | Adresse email      | Texte  | Email  | 255    | Oui         | Non      |

**À retenir :**

Le dictionnaire de données sert à **décrire et organiser les données** avant de concevoir le modèle de données.

## 1.3. Le nom d’une donnée

Le **nom** permet d’identifier une donnée.

Le nom doit être clair et précis.

**Exemples :**

```text
nom
email
date_naissance
prix
quantite
```

Évitez les noms trop vagues :

```text
info
data
champ1
```

**À retenir :**

Le nom doit permettre de comprendre rapidement la donnée.

## 1.4. La signification d’une donnée

La **signification** explique ce que représente la donnée.

**Exemple :**

```text
Nom : email
Signification : Adresse email de la personne
```

**Exemple :**

```text
Nom : date_naissance
Signification : Date de naissance de la personne
```

**À retenir :**

La signification explique le contenu de la donnée.

## 1.5. Le type d’une donnée

Le **type** indique la nature de la donnée.

Exemples :

* **Texte** ;
* **Nombre** ;
* **Date** ;
* **Booléen**.

**Exemple :**

```text
nom → Texte
age → Nombre
date_naissance → Date
actif → Booléen
```

**À retenir :**

Le type permet de savoir quelle sorte de valeur contient la donnée.

## 1.6. Le format d’une donnée

Le **format** indique comment une donnée doit être écrite.

**Exemples :**

```text
Date : JJ/MM/AAAA
Email : nom@example.com
Téléphone : 10 chiffres
```

Une donnée peut donc avoir un type **Texte**, mais avoir un format particulier.

**Exemple :**

```text
email
Type : Texte
Format : Adresse email
```

## 1.7. La taille d’une donnée

La **taille** indique la longueur maximale d’une donnée lorsque cette information est nécessaire.

**Exemple :**

```text
nom
Type : Texte
Taille : 100 caractères
```

**Exemple :**

```text
email
Type : Texte
Taille : 255 caractères
```

**À retenir :**

La taille permet de définir une limite pour certaines données.

## 1.8. Donnée obligatoire

Une donnée **obligatoire** doit être renseignée.

**Exemple :**

```text
Nom : obligatoire
Email : obligatoire
```

Dans un formulaire, l’utilisateur ne peut pas valider sans renseigner cette donnée.

## 1.9. Donnée facultative

Une donnée **facultative** peut rester vide.

**Exemple :**

```text
Nom : obligatoire
Téléphone : non obligatoire
```

La personne peut donc ne pas renseigner son téléphone.

Dans le dictionnaire, on peut simplement utiliser :

```text
Obligatoire : Oui
Obligatoire : Non
```

## 1.10. Donnée calculée

Une donnée **calculée** est obtenue à partir d’autres données.

**Exemple :**

```text
Prix = 100
Quantité = 2
Total = 200
```

Le `Total` est calculé à partir de `Prix` et `Quantité`.

Dans le dictionnaire :

| Nom      | Signification         | Type   | Obligatoire | Calculée |
| -------- | --------------------- | ------ | ----------- | -------- |
| prix     | Prix d’un produit     | Nombre | Oui         | Non      |
| quantite | Quantité d’un produit | Nombre | Oui         | Non      |
| total    | Prix total            | Nombre | Oui         | Oui      |

**À retenir :**

Une donnée calculée n’est pas saisie directement comme une donnée classique.

## 1.11. Donnée saisie et donnée affichée

Une **donnée saisie** est renseignée par l’utilisateur.

**Exemple :**

```text
Nom : [Madani Ali]
```

Une **donnée affichée** est montrée par l’application.

**Exemple :**

```text
Nom : Madani Ali
```

Une même donnée peut être saisie à un moment et affichée plus tard.

**À retenir :**

* **Saisie** : l’utilisateur renseigne la donnée.
* **Affichée** : l’application montre la donnée.

## 1.12. À retenir

* Une **donnée** est une information utilisée par une application.
* Un **dictionnaire de données** décrit les données.
* Chaque donnée possède des caractéristiques.
* Une donnée peut être **obligatoire** ou non.
* Une donnée peut être **calculée** ou non.
* La maquette permet ensuite d’identifier les données à décrire.

# Partie 2 — Pratique

## 2.1. Préparer la présentation

### Étape 1 — Créer la présentation

Créez une nouvelle présentation.

Ajoutez le titre :

```text
Donnée et dictionnaire de données
```

### Étape 2 — Créer la partie sur la donnée

Ajoutez une slide avec :

* la définition de **donnée** ;
* un exemple simple.

**Exemple :**

```text
Donnée = information utilisée par une application.

Exemples :
Nom
Âge
Email
```

### Étape 3 — Créer la partie sur le dictionnaire

Ajoutez une slide avec :

* la définition du **dictionnaire de données** ;
* son rôle ;
* un exemple.

**Exemple :**

| Nom   | Signification      | Type   | Format |
| ----- | ------------------ | ------ | ------ |
| nom   | Nom d’une personne | Texte  | Texte  |
| age   | Âge d’une personne | Nombre | Entier |
| email | Adresse email      | Texte  | Email  |

### Étape 4 — Présenter les caractéristiques

Ajoutez une slide pour présenter :

```text
Nom
Signification
Type
Format
Taille
Obligatoire
Calculée
```

Pour chaque caractéristique, ajoutez une courte explication.

### Étape 5 — Ajouter un exemple complet

Ajoutez une slide avec un dictionnaire de données complet.

**Exemple :**

| Nom   | Signification      | Type   | Format  | Taille | Obligatoire | Calculée |
| ----- | ------------------ | ------ | ------- | ------ | ----------- | -------- |
| nom   | Nom d’une personne | Texte  | Texte   | 100    | Oui         | Non      |
| age   | Âge d’une personne | Nombre | Entier  | —      | Oui         | Non      |
| email | Adresse email      | Texte  | Email   | 255    | Oui         | Non      |
| total | Total à payer      | Nombre | Décimal | —      | Oui         | Oui      |

### Étape 6 — Vérifier la présentation

Vérifiez que :

* chaque notion possède une définition ;
* chaque notion possède un exemple ;
* le tableau est lisible ;
* les termes techniques sont correctement utilisés ;
* les exemples sont simples ;
* les informations sont faciles à comprendre.

**Résultat attendu :**

Une présentation claire et structurée qui explique :

* ce qu’est une donnée ;
* ce qu’est un dictionnaire de données ;
* les principales caractéristiques d’une donnée ;
* la différence entre donnée saisie, donnée affichée et donnée calculée ;
* un exemple de dictionnaire de données.

# 3. Bilan

**Vous avez réalisé :** une présentation sur la donnée et le dictionnaire de données.

**Vous savez maintenant :** définir une donnée, expliquer le rôle d’un dictionnaire de données et décrire les principales caractéristiques d’une donnée.

# 4. Glossaire

* **Donnée** : information utilisée par une application.
* **Dictionnaire de données** : document qui décrit les données d’une application.
* **Type** : nature d’une donnée, par exemple Texte ou Nombre.
* **Format** : manière dont une donnée est écrite.
* **Taille** : longueur maximale d’une donnée.
* **Obligatoire** : donnée qui doit être renseignée.
* **Facultative** : donnée qui peut rester vide.
* **Donnée saisie** : donnée renseignée par l’utilisateur.
* **Donnée affichée** : donnée montrée par l’application.
* **Donnée calculée** : donnée obtenue à partir d’autres données.
