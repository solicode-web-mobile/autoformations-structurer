---
title: "Créer le dictionnaire de données d’un Blog"
layout: tuto
slug: "creer-dictionnaire-donnees-blog"
permalink: /tutos/:slug/detaille
tuto_id: "T.021.112"
version: "detaille"
ua: "UA.021.11"
nav_order: 2
---


## 1. Objectif

Créer le dictionnaire de données du **Blog personnel** à partir des maquettes.

Identifier les données affichées et saisies, puis préciser leurs principales caractéristiques.

## 2. Prérequis

* Comprendre ce qu’est une donnée.
* Comprendre ce qu’est un dictionnaire de données.
* Savoir lire une maquette simple.
* Avoir les maquettes du Blog.

# Partie 1 — Théorie

## 1.1. Lire une maquette

Une **maquette** représente l’interface d’une fonctionnalité.

Elle permet de repérer les informations :

* affichées à l’écran ;
* saisies par l’utilisateur ;
* utilisées pour afficher un résultat.

**Exemple :**

```text
Titre : Les bases de Laravel
Auteur : Madani Ali
Catégorie : Laravel
Date : 08/09/2026
```

Dans cette maquette, nous pouvons identifier :

```text
titre
auteur
catégorie
date_publication
```

**À retenir :**

La maquette est le point de départ pour identifier les données.

## 1.2. Regrouper les données

Pour le Blog personnel, nous allons travailler avec trois groupes :

```text
Article
Auteur
Catégorie
```

Ces groupes correspondent aux éléments principaux visibles dans les maquettes.

**Exemple :**

```text
Article
- titre
- contenu
- date_publication

Auteur
- nom
- prenom
- email

Catégorie
- nom
- description
```

À ce stade, nous cherchons seulement à **organiser les données**. La notion d’**entité** sera étudiée dans l’UA suivante.

## 1.3. Nom de la donnée

Le **nom** permet d’identifier la donnée.

Il doit être clair et précis.

**Exemple :**

```text
titre
contenu
date_publication
email
```

Évitez les noms trop vagues :

```text
information
champ1
data
```

## 1.4. Signification

La **signification** explique ce que représente la donnée.

**Exemple :**

| Nom     | Signification             |
| ------- | ------------------------- |
| titre   | Titre de l’article        |
| contenu | Contenu de l’article      |
| email   | Adresse email de l’auteur |

**À retenir :**

La signification doit être compréhensible par une autre personne qui utilise le dictionnaire.

## 1.5. Type de donnée

Le **type** indique la nature de la donnée.

Exemples :

* Texte ;
* Nombre ;
* Date ;
* Booléen.

**Exemple :**

```text
titre → Texte
nombre_vues → Nombre
date_publication → Date
publie → Booléen
```

## 1.6. Format

Le **format** précise comment la donnée est écrite.

**Exemple :**

```text
date_publication
Type : Date
Format : JJ/MM/AAAA
```

**Exemple :**

```text
email
Type : Texte
Format : Adresse email
```

Une donnée peut donc avoir un type général et un format plus précis.

## 1.7. Taille

La **taille** indique la longueur maximale d’une donnée lorsque cette information est utile.

**Exemple :**

```text
titre
Type : Texte
Taille : 255 caractères
```

## 1.8. Donnée obligatoire

Une donnée est **obligatoire** lorsqu’elle doit être renseignée.

**Exemple :**

```text
titre
Obligatoire : Oui
```

## 1.9. Donnée facultative

Une donnée est **facultative** lorsqu’elle peut rester vide.

**Exemple :**

```text
description
Obligatoire : Non
```

Dans le dictionnaire, utilisez simplement :

```text
Obligatoire : Oui
Obligatoire : Non
```

## 1.10. Donnée calculée

Une donnée est **calculée** lorsque sa valeur est obtenue à partir d’autres données.

**Exemple :**

```text
prix = 100
quantite = 2

prix_total = prix × quantite
```

Ici :

```text
prix_total
Calculée : Oui
```

Une donnée saisie directement n’est pas une donnée calculée.

**Exemple :**

```text
titre
Calculée : Non
```

## 1.11. À retenir

Pour chaque donnée, le dictionnaire permet de préciser :

```text
Nom
Signification
Type
Format
Taille
Obligatoire
Calculée
```

# Partie 2 — Pratique

## 2.1. Analyser les maquettes

### Étape 1 — Observer les maquettes

Ouvrez les maquettes du Blog personnel.

Observez chaque écran.

Repérez les informations :

* affichées ;
* saisies.

Ne renseignez pas encore les caractéristiques.

### Étape 2 — Noter les données

Notez toutes les données identifiées.

**Exemple :**

```text
titre
contenu
date_publication
nom
prenom
email
nom_categorie
description
```

### Étape 3 — Regrouper les données

Classez les données dans les trois groupes :

```text
Article
Auteur
Catégorie
```

**Exemple :**

```text
Article
- titre
- contenu
- date_publication

Auteur
- nom
- prenom
- email

Catégorie
- nom_categorie
- description
```

## 2.2. Décrire les données

### Étape 4 — Définir la signification

Pour chaque donnée, écrivez une explication courte.

**Exemple :**

```text
titre → Titre de l’article
email → Adresse email de l’auteur
```

### Étape 5 — Définir le type et le format

Pour chaque donnée, indiquez son type et son format.

**Exemple :**

```text
titre
Type : Texte
Format : Texte
```

```text
date_publication
Type : Date
Format : JJ/MM/AAAA
```

### Étape 6 — Définir la taille

Indiquez la taille lorsqu’elle est connue ou utile.

**Exemple :**

```text
titre
Taille : 255 caractères
```

### Étape 7 — Définir si la donnée est obligatoire

Pour chaque donnée, indiquez :

```text
Obligatoire : Oui
```

ou :

```text
Obligatoire : Non
```

### Étape 8 — Vérifier si la donnée est calculée

Pour chaque donnée, posez la question :

> La valeur est-elle obtenue à partir d’autres données ?

Si oui :

```text
Calculée : Oui
```

Sinon :

```text
Calculée : Non
```

## 2.3. Construire le dictionnaire

### Étape 9 — Créer le tableau

Créez un tableau pour le dictionnaire de données.

Utilisez les colonnes :

| Groupe | Nom | Signification | Type | Format | Taille | Obligatoire | Calculée |
| ------ | --- | ------------- | ---- | ------ | ------ | ----------- | -------- |

### Étape 10 — Ajouter les données

Ajoutez toutes les données identifiées dans les maquettes.

**Exemple :**

| Groupe    | Nom              | Signification             | Type  | Format     | Taille | Obligatoire | Calculée |
| --------- | ---------------- | ------------------------- | ----- | ---------- | ------ | ----------- | -------- |
| Article   | titre            | Titre de l’article        | Texte | Texte      | 255    | Oui         | Non      |
| Article   | contenu          | Contenu de l’article      | Texte | Texte long | —      | Oui         | Non      |
| Article   | date_publication | Date de publication       | Date  | JJ/MM/AAAA | —      | Oui         | Non      |
| Auteur    | nom              | Nom de l’auteur           | Texte | Texte      | 100    | Oui         | Non      |
| Auteur    | email            | Adresse email de l’auteur | Texte | Email      | 255    | Oui         | Non      |
| Catégorie | nom_categorie    | Nom de la catégorie       | Texte | Texte      | 100    | Oui         | Non      |

### Étape 11 — Vérifier le dictionnaire

Vérifiez chaque ligne.

Posez-vous les questions suivantes :

```text
Le nom est-il clair ?
La signification est-elle correcte ?
Le type est-il correct ?
Le format est-il correct ?
La taille est-elle renseignée lorsque nécessaire ?
La donnée est-elle obligatoire ?
La donnée est-elle calculée ?
```

**Résultat attendu :**

Un **dictionnaire de données complet du Blog personnel**, construit à partir des maquettes et regroupant les données de **Article, Auteur et Catégorie** avec leurs principales caractéristiques.

# 3. Bilan

**Vous avez réalisé :** le dictionnaire de données du Blog personnel.

**Vous savez maintenant :** analyser une maquette, identifier les données, les organiser et décrire leurs principales caractéristiques dans un dictionnaire de données.

# 4. Glossaire

* **Maquette** : représentation visuelle d’une page ou d’une fonctionnalité.
* **Donnée** : information utilisée par une application.
* **Donnée affichée** : information montrée par l’application.
* **Donnée saisie** : information renseignée par l’utilisateur.
* **Donnée calculée** : donnée obtenue à partir d’autres données.
* **Dictionnaire de données** : document qui décrit les données d’une application.
* **Type** : nature d’une donnée, par exemple Texte ou Date.
* **Format** : manière dont une donnée est écrite.
* **Taille** : longueur maximale d’une donnée.
* **Obligatoire** : donnée qui doit être renseignée.
* **Facultative** : donnée qui peut rester vide.
