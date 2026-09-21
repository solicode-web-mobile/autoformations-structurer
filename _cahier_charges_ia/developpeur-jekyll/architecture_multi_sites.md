# Architecture Multi-Sites pour Plateforme d'Autoformation (N1, N2, N3)

## 📌 Contexte et Problématique
Vous développez trois sites d'autoformation (Niveau 1, Niveau 2, Niveau 3) qui partagent une base technique commune (layouts globaux, JS, CSS) mais ont leurs propres collections (`_tutos`, etc.) et layouts spécifiques.

**Contrainte majeure de développement :** 
L'utilisation d'un agent IA pour le développement nécessite que les fichiers partagés (CSS, JS, Layouts) soient **accessibles et modifiables localement** au sein du site en cours de développement (N1, N2 ou N3). L'agent a besoin de modifier un fichier local et de voir le résultat immédiatement. L'approche classique (`remote_theme`) ralentit ce flux de travail car elle impose de publier le thème avant de voir le résultat sur le site.

**Objectif :** Trouver une architecture qui favorise le "Local-First" pour l'IA, tout en permettant de centraliser et de distribuer les mises à jour du socle commun sur les trois sites de manière versionnée.

---

## 💡 Architecture Retenue : "Local-First" & Synchronisation Scriptée (Push/Pull)

Pour répondre à ce besoin, l'architecture abandonne le concept de `remote_theme` au profit d'une approche **"Développement Local + Synchronisation Centralisée"**. 

Chaque site (N1, N2, N3) possède **sa propre copie physique** des layouts et assets. Un dépôt central "Core" agit comme la source de vérité, et la mise à jour se fait via des scripts d'automatisation.

### Le Fonctionnement

1. **Le Dépôt "Theme Core"** : Un dépôt Git (ou dossier parent) qui sert uniquement d'archive versionnée pour le socle commun (layouts génériques, `base.css`, `formation.js`, etc.).
2. **Développement Local (L'IA au travail)** : L'agent IA travaille par exemple sur N1. Il modifie directement `N1/assets/css/base.css` ou `N1/_layouts/default.html`. L'effet est immédiat via le `jekyll serve` local.
3. **Le Script `push_theme`** : Une fois la fonctionnalité finalisée sur N1, vous (ou l'agent) exécutez un script `push_theme`. Ce script copie les fichiers communs de N1 vers le dépôt "Theme Core", crée un commit, et ajoute un tag de version (ex: `v1.2.0`).
4. **Le Script `pull_theme`** : Pour mettre à jour N2 et N3, vous ouvrez ces projets et lancez `pull_theme`. Le script télécharge la dernière version (ou une version spécifique) depuis "Theme Core" et écrase les fichiers communs locaux (tout en préservant les layouts spécifiques aux domaines).

---

## 🛠️ Avantages de cette solution

* **Flexibilité maximale pour l'IA :** Les fichiers sont tous présents dans le projet, l'IA peut analyser le code existant (CSS/JS) facilement et le modifier en temps réel.
* **Résultat immédiat :** Pas de temps de latence de déploiement lié aux thèmes distants.
* **Versionning contrôlé :** Grâce aux numéros de version, vous savez exactement quelle version du socle technique est déployée sur N1, N2 ou N3.
* **Zéro friction avec Jekyll et GitHub Pages :** Les sites N1, N2, N3 sont des sites Jekyll standards parfaitement lisibles par GitHub Pages sans plugin supplémentaire.

---

## 🚀 Plan de Mise en Œuvre

### 1. Définition du périmètre commun
Il est indispensable de définir strictement la liste des fichiers/dossiers qui font partie du socle commun (qui seront synchronisés) et ceux qui sont spécifiques au site (qui seront ignorés).
* **Synchronisés :** `_includes/`, `assets/css/base.css`, `assets/js/`, `_layouts/default.html`, `_layouts/page.html`...
* **Ignorés (Locaux) :** `_layouts/resultat-frontend.html` (spécifique), `_tutos/`, `_missions/`, `_data/`, `_config.yml`.

### 2. Création du dépôt "Theme Core"
Créer un dépôt Git vierge `autoformations-core-theme`. Ce dépôt n'est pas un site Jekyll exécutable, juste une bibliothèque de fichiers.

### 3. Développement des scripts de synchronisation (Node.js ou Powershell)
Développer deux scripts utilitaires (qui pourront être placés à la racine de chaque projet ou installés globalement) :

#### Script `push_theme`
- Copie la liste stricte des fichiers communs du dossier local vers le dossier `autoformations-core-theme`.
- Effectue un `git commit` sur le Core avec un message automatique.
- Ajoute un `git tag` avec le numéro de version (passé en argument).
- Fait un `git push`.

#### Script `pull_theme`
- Fait un `git pull` sur le dépôt Core (ou un `git checkout` d'un tag spécifique).
- Copie les fichiers du Core vers le projet local (en écrasant les anciens).
- Affiche un rapport des fichiers mis à jour.

### 4. Flux de travail de l'IA (Workflow)
- L'IA implémente une fonctionnalité sur N1.
- Vous testez et validez.
- Vous demandez à l'IA : "Pousse cette mise à jour avec la version 1.3".
- L'IA exécute `./push_theme.ps1 -Version "1.3.0"`.
- Vous passez sur N2 et demandez : "Mets à jour le thème".
- L'IA exécute `./pull_theme.ps1`. N2 est à jour.
