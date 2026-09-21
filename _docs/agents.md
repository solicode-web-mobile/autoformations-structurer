# Agents Disponibles (Skills)

Liste de tous les skills disponibles dans le dossier `.agent/skills/`. Ces skills sont invoqués automatiquement par l'agent IA Antigravity selon le contexte de la tâche.

> **Principe d'architecture :**
> - Les **skills** sont **transversaux** : ils fonctionnent pour tous les niveaux (N1, N2, N3).
> - Les **règles** (`.agent/rules/`) portent les **adaptations spécifiques à un niveau** (ex: terminologie propre à N2, contraintes pédagogiques du niveau, etc.).
> - Un skill ne doit jamais être dupliqué pour gérer une différence de niveau — utiliser une règle à la place.

---

## 🛠️ Skills Plateforme (Transversaux — N1, N2, N3)

Ces skills s'appliquent à l'ensemble de la plateforme, quel que soit le niveau.

| Skill | Description |
|-------|-------------|
| `developpeur-jekyll` | Expert en développement, optimisation et maintenance de la plateforme d'autoformation avec Jekyll et Just the Docs. |
| `gestionnaire-theme-core` | Gestion de la synchronisation du thème central (Core Theme), de `theme-sync.json` et des scripts de push/pull. |
| `edition-skills` | Création, mise à jour et gestion des skills eux-mêmes. |
| `mermaid-expert` | Génération, conception et correction de diagrammes Mermaid. |

---

## 📝 Rédaction de Tutoriels (Transversaux — N1, N2, N3)

| Skill | Description |
|-------|-------------|
| `rédacteur-tutos` | Rédacteur des tutoriels. Produit les fichiers `.md` de tutoriels dans `_tutos/` selon le template standard. |
| `simplificateur-tutos` | Simplification et optimisation des tutoriels existants (alléger, fusionner des concepts). |
| `créateur-exemple-tuto` | Création d'exemples interactifs ou visuels pour les tutoriels. |
| `generateur-resultats-tutos` | Génère les fichiers de résultats attendus dans le dossier `code/`. |

---

## ⚙️ Structure & Génération (Transversaux — N1, N2, N3)

| Skill | Description |
|-------|-------------|
| `generateur-structure-cours` | Création et configuration des Domaines, UAs et structure des tutoriels. |

---

## 🎓 Skills de Domaine — Niveau N2

Ces skills portent la logique **métier et technique** spécifique aux domaines de compétences du **Niveau 2 (N2)**.
Si des différences existent entre N1, N2 et N3 pour ces domaines, elles doivent être exprimées via des **règles** dans `.agent/rules/`, et non en dupliquant le skill.

| Skill | Domaine(s) | Description |
|-------|------------|-------------|
| `dev-architecture-n2` | D.213.1, D.223.1 | Architecte Logiciel. Découplage des composants et organisation en couches 3-tiers. |
| `dev-conception-n2` | D.211.1, D.212.1 | Développeur Concepteur. Cas d'utilisation et diagrammes de classes. |
| `dev-poo-n2` | D.221.1, D.222.1 | Développeur PHP POO. Code orienté objet et répartition des responsabilités. |
| `dev-frontend-n2` | D.224.1, D.225.1 | Développeur Frontend. SPA avec Vanilla JS et intégration Tailwind CSS. |
| `dev-gestion-projet-n2` | D.251.1, D.252.1 | Scrum Master. Décomposition en tâches et utilisation des GitHub Issues. |
| `rédaction-tuto-fonctionnalite` | D.211.1 | Expert domaine Fonctionnalité. Fournit les concepts UML (Acteurs, CU, Scénarios) lors de la rédaction. |

---

## 📁 Règles Actives (`.agent/rules/`)

Les règles sont chargées en permanence et s'appliquent à tous les skills. C'est ici que doivent être placées les **adaptations spécifiques à un niveau**.

| Règle | Portée | Description |
|-------|--------|-------------|
| `afficher-skill.md` | Tous niveaux | Oblige l'agent à afficher le nom du skill utilisé à la fin de chaque réponse. |
| `personality.md` | Tous niveaux | Définit l'organisation des collections Jekyll du site (structure des dossiers). |
