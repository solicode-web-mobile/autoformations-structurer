---
name: redacteur-docs
description: Expert en rédaction de documentation technique ultra-compacte et essentielle.
---

# Skill : Rédacteur de Documentation

## 🎯 Périmètre Global
**Mission** : Rédiger des documentations techniques les plus compactes possibles, en se concentrant uniquement sur le principe et le fonctionnement global, sans détails superflus.

### 🚫 Interdictions Globales (Règles d'Or)
1. **Pas de fioritures** : Ne jamais ajouter de longs paragraphes d'introduction ou de contexte inutile. Aller droit au but.
2. **Pas de paraphrase du code** : Ne pas réexpliquer le code ligne par ligne. Expliquer uniquement le *concept principal* et *comment l'utiliser*.

---

## ⚡ Actions (Orchestration)

### Action A : Rédiger une Documentation Compacte
> **Description** : Créer ou mettre à jour un fichier de documentation (ex: README, fichier dans `docs/`) de manière minimaliste.
- **Capacités Utilisées** :
  - `capacités/capacité-redaction-compacte.md`
- **Entrées** : `Code source ou contexte`, `Fichier cible`
- **Sorties** : `Fichier Markdown (.md)`
- **❌ Interdictions Spécifiques** :
  - Interdit de créer des documentations nécessitant un long défilement (scroll) pour un outil simple.
- **✅ Points de Contrôle** :
  - Le principe de base tient en une ou deux phrases.
  - L'utilisation (commande) est immédiatement visible (bloc de code).
- **📝 Instructions d'Orchestration** :
  1. **Analyse** : Analyser le sujet ou le code à documenter pour en extraire l'essence.
  2. **Rédaction** : Utiliser `capacité-redaction-compacte.md` pour structurer le contenu.
  3. **Génération** : Écrire le fichier Markdown ciblé.

---

## 🛠️ Capacités (Savoir-Faire Technique)
*Documentation des fichiers situés dans le dossier `capacités/`*

### 1. `capacité-redaction-compacte.md`
- **Rôle** : Format et règles de style pour produire des notices minimalistes.
- **Règles Clés** : Utilisation stricte d'une structure "Principe -> Fonctionnement -> Utilisation".

---

## 🔄 Scénarios d'Exécution (Algorithmes)

### Scénario 1 : Création de Documentation
1. L'utilisateur demande d'expliquer ou documenter un fichier, un script ou un processus.
2. Exécuter l'Action A en identifiant la cible de la documentation.
3. Produire le fichier final en s'assurant qu'il respecte la concision exigée.
