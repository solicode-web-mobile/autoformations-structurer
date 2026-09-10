---
title: "Créer le dictionnaire de données d’un Blog"
layout: tuto
slug: "creer-dictionnaire-donnees-blog"
permalink: /tutos/:slug/detaille
tuto_id: "T.201.112"
version: "detaille"
ua: "UA.201.11"
nav_order: 2
---


## 1. Objectif

À partir des maquettes du **Blog personnel**, identifier les données utilisées par les différentes fonctionnalités.

Construire un dictionnaire de données complet et l’enregistrer au format **CSV** avec **VS Code**.

## 2. Prérequis

* Comprendre ce qu’est une donnée.
* Comprendre ce qu’est un dictionnaire de données.
* Savoir lire une maquette.
* Savoir utiliser VS Code.
* Consulter les maquettes du Blog :
  https://solicode-web-mobile.github.io/maquette-blog/
* Installer l’extension **Edit CSV** dans VS Code.

# Partie 1 — Théorie

## 1.1. Partir de la maquette

Une **maquette** représente une page ou une fonctionnalité de l’application.

Elle permet d’identifier les informations présentes sur l’écran.

Ces informations peuvent être :

* **affichées** ;
* **saisies** ;
* **calculées**.

**Exemple :**

```text
Titre : Mon premier article
Auteur : Madani
Catégorie : Laravel
Date : 08/09/2026
```

À partir de cette maquette, nous pouvons identifier :

```text
titre
auteur
categorie
date_publication
```

La maquette est donc le point de départ du dictionnaire de données.

## 1.2. Identifier une donnée

Une **donnée** est une information utilisée par l’application.

Pour identifier une donnée, posez-vous la question :

> Quelle information est affichée ou demandée sur cette page ?

**Exemple :**

```text
Champ : Titre de l’article
```

La donnée identifiée peut être :

```text
titre
```

## 1.3. Nom de la donnée

Le **nom** permet d’identifier une donnée.

Le nom doit être :

* clair ;
* précis ;
* unique dans le dictionnaire.

**Exemple :**

```text
titre
contenu
email
date_publication
```

Évitez :

```text
info
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

La signification doit être simple et précise.

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

Le **format** indique comment la donnée est écrite.

**Exemple :**

```text
date_publication
Type : Date
Format : JJ/MM/AAAA
```

Autre exemple :

```text
email
Type : Texte
Format : Adresse email
```

## 1.7. Taille

La **taille** indique la longueur maximale d’une donnée lorsque cette information est nécessaire.

**Exemple :**

```text
titre
Taille : 255 caractères
```

Pour une donnée dont la taille n’est pas utile à ce stade, utilisez :

```text
—
```

## 1.8. Donnée obligatoire

Une donnée **obligatoire** doit être renseignée.

Exemple :

```text
titre
Obligatoire : Oui
```

## 1.9. Donnée facultative

Une donnée **facultative** peut rester vide.

Exemple :

```text
description
Obligatoire : Non
```

Dans le dictionnaire, utilisez :

```text
Obligatoire : Oui
```

ou :

```text
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

Dans le dictionnaire :

```text
prix_total
Calculée : Oui
```

Pour une donnée qui n’est pas calculée :

```text
Calculée : Non
```

## 1.11. Donnée affichée et donnée saisie

Une **donnée saisie** est renseignée par l’utilisateur.

**Exemple :**

```text
Titre : [Mon premier article]
```

Une **donnée affichée** est montrée par l’application.

**Exemple :**

```text
Titre : Mon premier article
```

Cette information est importante pour comprendre comment la donnée est utilisée dans la fonctionnalité.

## 1.12. Structure du dictionnaire

Le dictionnaire de données peut utiliser les colonnes suivantes :

| Nom | Signification | Type | Format | Taille | Obligatoire | Calculée |
| --- | ------------- | ---- | ------ | ------ | ----------- | -------- |

Chaque ligne décrit une donnée.

**Exemple :**

| Nom              | Signification           | Type   | Format     | Taille | Obligatoire | Calculée |
| ---------------- | ----------------------- | ------ | ---------- | ------ | ----------- | -------- |
| titre            | Titre de l’article      | Texte  | Texte      | 255    | Oui         | Non      |
| contenu          | Contenu de l’article    | Texte  | Texte long | —      | Oui         | Non      |
| date_publication | Date de publication     | Date   | JJ/MM/AAAA | —      | Oui         | Non      |
| nombre_vues      | Nombre de consultations | Nombre | Entier     | —      | Non         | Oui      |

## 1.13. À retenir

Pour chaque donnée identifiée dans une maquette, il faut déterminer :

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

## 2.1. Analyser les maquettes du Blog

### Étape 1 — Ouvrir les maquettes

Ouvrez :

https://solicode-web-mobile.github.io/maquette-blog/

Parcourez les différentes pages du Blog.

### Étape 2 — Observer chaque page

Pour chaque page, repérez :

* les informations affichées ;
* les champs de saisie ;
* les informations calculées, lorsqu’elles sont visibles.

Ne commencez pas encore par créer le fichier CSV.

### Étape 3 — Lister les données

Notez toutes les données trouvées.

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

Ne supprimez pas une donnée simplement parce qu’elle apparaît sur plusieurs pages.

## 2.2. Décrire les données

### Étape 4 — Donner un nom

Pour chaque information, choisissez un nom clair.

**Exemple :**

```text
Titre de l’article → titre
Date de publication → date_publication
Adresse email de l’auteur → email
```

### Étape 5 — Donner la signification

Écrivez une description courte.

**Exemple :**

```text
titre → Titre de l’article
email → Adresse email de l’auteur
```

### Étape 6 — Déterminer le type

Indiquez le type adapté :

```text
titre → Texte
date_publication → Date
nombre_vues → Nombre
```

### Étape 7 — Déterminer le format

Indiquez le format lorsque cela est nécessaire.

**Exemple :**

```text
date_publication → JJ/MM/AAAA
email → Adresse email
```

### Étape 8 — Déterminer la taille

Indiquez une taille lorsque cela est nécessaire.

**Exemple :**

```text
titre → 255
email → 255
```

### Étape 9 — Déterminer si la donnée est obligatoire

Pour chaque donnée, choisissez :

```text
Oui
```

ou :

```text
Non
```

### Étape 10 — Déterminer si la donnée est calculée

Vérifiez si la valeur est obtenue à partir d’autres données.

Choisissez :

```text
Oui
```

ou :

```text
Non
```

## 2.3. Créer le fichier CSV

### Étape 11 — Créer le fichier

Dans VS Code, créez un fichier :

```text
dictionnaire_donnees.csv
```

### Étape 12 — Ajouter les colonnes

Ajoutez la première ligne :

```csv
Nom,Signification,Type,Format,Taille,Obligatoire,Calculée
```

### Étape 13 — Ajouter les données

Ajoutez une ligne pour chaque donnée identifiée.

**Exemple :**

```csv
titre,Titre de l’article,Texte,Texte,255,Oui,Non
contenu,Contenu de l’article,Texte,Texte long,,Oui,Non
date_publication,Date de publication,Date,JJ/MM/AAAA,,Oui,Non
email,Adresse email de l’auteur,Texte,Email,255,Oui,Non
```

## 2.4. Utiliser l’extension Edit CSV

### Étape 14 — Installer l’extension

Dans VS Code :

1. Ouvrez **Extensions**.
2. Recherchez **Edit CSV**.
3. Installez l’extension.

### Étape 15 — Ouvrir le fichier

Ouvrez `dictionnaire_donnees.csv` avec **Edit CSV**.

Le fichier est affiché sous forme de tableau.

### Étape 16 — Vérifier le tableau

Vérifiez que :

* chaque donnée est sur une ligne ;
* chaque colonne contient la bonne information ;
* aucune donnée importante n’est oubliée ;
* les valeurs `Oui` et `Non` sont correctes ;
* les données sont lisibles.

### Étape 17 — Enregistrer le fichier

Enregistrez les modifications dans :

```text
dictionnaire_donnees.csv
```

**Résultat attendu :**

Un fichier **`dictionnaire_donnees.csv`** contenant le dictionnaire de données complet du **Blog personnel**, construit à partir des maquettes.

## 2.5. Vérification finale

Avant de rendre le travail, vérifiez :

| Vérification                                     | Résultat  |
| ------------------------------------------------ | --------- |
| Toutes les pages des maquettes ont été analysées | Oui / Non |
| Toutes les données utiles sont présentes         | Oui / Non |
| Chaque donnée possède un nom                     | Oui / Non |
| Chaque donnée possède une signification          | Oui / Non |
| Le type est indiqué                              | Oui / Non |
| Le format est indiqué                            | Oui / Non |
| La taille est indiquée lorsque nécessaire        | Oui / Non |
| Obligatoire est indiqué                          | Oui / Non |
| Calculée est indiqué                             | Oui / Non |
| Le fichier CSV est lisible dans VS Code          | Oui / Non |

**Résultat attendu :**

Le dictionnaire de données est complet, cohérent avec les maquettes et enregistré au format CSV.

# 3. Bilan

**Vous avez réalisé :** le dictionnaire de données du Blog personnel au format CSV.

**Vous savez maintenant :** analyser une maquette, identifier les données et décrire leurs principales caractéristiques dans un dictionnaire de données.

# 4. Glossaire

* **Maquette** : représentation visuelle d’une page ou d’une fonctionnalité.
* **CSV** : fichier qui organise les données en lignes et colonnes.
* **Donnée** : information utilisée par une application.
* **Donnée affichée** : information montrée par l’application.
* **Donnée saisie** : information renseignée par l’utilisateur.
* **Donnée calculée** : donnée obtenue à partir d’autres données.
* **Dictionnaire de données** : document qui décrit les données d’une application.
* **Type** : nature d’une donnée.
* **Format** : manière dont une donnée est écrite.
* **Taille** : longueur maximale d’une donnée.
* **Obligatoire** : donnée qui doit être renseignée.
* **Edit CSV** : extension VS Code permettant de modifier un fichier CSV sous forme de tableau.
