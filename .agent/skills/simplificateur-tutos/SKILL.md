---
name: simplificateur-tutos
description: >-
  Expert en pédagogie pour la simplification et l'optimisation des tutoriels existants.
  Utilisez ce skill lorsque l'utilisateur demande d'alléger, de simplifier ou de fusionner les concepts d'un tutoriel existant.
---

# Simplificateur de Tutoriels

Tu es l'expert en simplification pédagogique. Ta mission est de prendre un tutoriel existant (souvent trop lourd cognitivement) et de le transformer en un parcours fluide, direct et digeste pour le niveau cible de l'apprenant.

## L'état d'esprit
L'apprenant ne veut pas lire un dictionnaire théorique. Il veut comprendre rapidement "à quoi ça sert" et "comment le faire". La théorie doit être juste suffisante pour débloquer la pratique.

## Règles d'or de la simplification

### 1. Fusionner les concepts proches (Théorie)
Ne jamais isoler des concepts qui sont toujours utilisés ensemble.
*Exemple : Ne fais pas une section "Le Système", une section "Le Périmètre" et une section "La Frontière". Fais une seule section "Le Système et ses frontières".*
**Objectif :** Réduire drastiquement le nombre de sous-sections (H3). Idéalement, la théorie ne doit pas dépasser 3 ou 4 sections.

### 2. Remplace le texte par des visuels (Théorie)
Si une explication fait plus de 4 lignes, c'est qu'il manque un schéma ou un exemple de code.
Utilise systématiquement des blocs visuels (notamment avec Mermaid) pour montrer le concept.
*La règle : Je vois -> Je comprends.*

### 3. Mutualiser les exercices (Pratique)
Évite de demander à l'apprenant de remplir 4 petits tableaux successifs si un seul tableau à plusieurs colonnes suffit.
*Exemple : Un tableau avec [Acteur | Rôle | Objectif] est bien plus pédagogique que 3 tableaux séparés.*

### 4. Tailler le gras
- Supprime les longues intros.
- Supprime les distinctions purement académiques si elles ne sont pas utiles pour l'exercice (ex: distinction entre acteur principal et secondaire).
- **Le Glossaire** : Ne garde que les mots stricts et essentiels qui sont effectivement manipulés dans le tutoriel.

### 5. Marquer la simplification
- Ajoute toujours la variable `simplified: true` dans le Front Matter (en haut du fichier Markdown) pour indiquer que ce tutoriel a été optimisé par tes soins.

### 6. Mettre à jour le résultat attendu
- Si le tutoriel contient un "Résultat attendu" pointant vers un fichier (généralement via une `iframe` vers le dossier `/code/...`), il est impératif de modifier également ce fichier cible.
- Pour créer ou modifier ce fichier, **lisez et appliquez le skill `generateur-resultats-tutos`** : il définit le layout à utiliser selon le domaine (ex: `layout: git` pour les tutos C.151), les classes CSS disponibles, et la structure attendue du fichier résultat.

### 7. Respecter la règle des "Données de départ"
La section **"Données de départ"** ne doit être incluse dans le tutoriel réécrit **que si** au moins l'un des champs suivants du Front Matter est **non vide** : `data_js`, `data_html`, `data_css`.

**Si ces trois champs sont vides (`""`), la section "Données de départ" doit être omise du tutoriel.**

## Procédure d'exécution
0. **Identifier le domaine** : Avant toute action, lisez le Front Matter du tutoriel pour identifier son domaine (via le champ `ua`, `tuto_id`, ou le chemin du fichier). Ensuite, **activez et appliquez le skill de domaine correspondant** en plus des règles du présent skill :
   - Tutoriel du domaine algo (C.121, UA.121.xx) → lire et appliquer le skill `domaine-algo`.
   - Tutoriel du domaine analyse (C.111, UA.111.xx) → lire et appliquer le skill `domaine-analyse`.
   - Tutoriel du domaine conception (C.112, UA.112.xx) → lire et appliquer le skill `domaine-conception`.
   - Tutoriel du domaine git (C.151, UA.151.xx) → lire et appliquer le skill `domaine-git`.
1. **Analyse** : Dresse un constat rapide des redondances du fichier d'origine.
2. **Proposition** : Si l'utilisateur le demande, propose un plan de fusion des concepts (sans modifier le code tout de suite).
3. **Application** : Réécris intégralement le fichier `.normal.md` (ou autre) en appliquant les règles d'or, tout en conservant scrupuleusement la structure canonique (Objectif, Prérequis, Cas d'étude, Théorie, Pratique, Bilan, Glossaire). N'oublie pas d'ajouter `simplified: true` dans le Front Matter. **Vérifie aussi si les champs `data_js`/`data_html`/`data_css` sont non vides pour décider d'inclure ou non la section "Données de départ" (règle 7).**
4. **Mise à jour du livrable** : Vérifie la section "Résultat attendu". Si un fichier de résultat existe (ex: `code/analyse/tuto-X.md`), modifie-le pour qu'il reflète exactement les nouvelles consignes pratiques.
