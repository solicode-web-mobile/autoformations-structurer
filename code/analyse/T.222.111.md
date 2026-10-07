---
layout: analyse
title: "Résultat T.222.111"
nav_exclude: true
---

### 1. Carte des responsabilités
* **Représenter la donnée :** `$id`, `$nom`, `$couleur`, `$icone`
* **Accéder aux données :** `getters` et `setters`
* **Gérer le CRUD :** `create()`, `readAll()`, `update()`, `delete()`
* **Persistance technique :** `saveAll()`

### 2. Bilan de l'analyse
* **Cohésion :** Faible. La classe est "fourre-tout", elle mélange la logique métier (catégorie) et la logique technique (manipulation de fichiers).
* **Couplage :** Fort. La classe dépend directement du système de fichiers et du fichier spécifique `categories.json`.
