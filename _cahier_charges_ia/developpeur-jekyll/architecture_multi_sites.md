# Architecture Multi-Sites pour Plateforme d'Autoformation (N1, N2, N3)

## 📌 Contexte et Problématique
Nous disposons de trois versions du site d'autoformation (Niveau 1, Niveau 2, Niveau 3). 
* **Ce qui diffère :** Chaque site possède son propre contenu (collections : `_missions`, `_tutos`, `_projets`, etc.) **ET des layouts spécifiques à ses propres domaines de compétence** (ex: pour l'affichage des résultats de tutos).
* **Ce qui est commun :** Les trois sites partagent le socle de base, la logique métier, les fonctionnalités principales (layouts globaux, JS partagé, CSS de base) et utilisent le thème "Just the Docs".

**Objectif :** Centraliser le code commun pour éviter la duplication tout en conservant l'indépendance du contenu et des spécificités d'affichage de chaque niveau, en respectant les principes de simplicité du développement Jekyll.

---

## 💡 Architecture Retenue : Le "Remote Theme"

L'architecture s'appuie sur le système de thème distant (`remote_theme`) natif à Jekyll. Cette approche permet de séparer complètement le socle technique commun du contenu pédagogique spécifique à chaque site.

### Le Modèle de Répartition

1. **Le Dépôt Central (Thème)** : Un nouveau dépôt dédié (ex: `autoformations-theme`) regroupe tous les éléments partagés : les dossiers `_layouts` globaux, `_includes`, `assets` (CSS, JS) et `_sass`. Il sert de surcouche centralisée pour "Just the Docs".
2. **Les Dépôts Locaux (N1, N2, N3)** : Les dépôts de chaque niveau sont allégés. Ils ne contiennent plus que la matière pédagogique (collections `_tutos`, `_missions`, etc.), leur configuration (`_config.yml`, `_data/`), ainsi que **leurs layouts spécifiques** (ex: `_layouts/resultat-frontend.html` pour un domaine de compétence précis).

### L'Avantage de la Surcharge Native (Overriding)
La force de cette architecture réside dans le fonctionnement en cascade de Jekyll. Lors de la compilation d'un site (ex: N1), Jekyll cherche d'abord les fichiers (layouts, includes) dans le dépôt local. S'il ne les trouve pas, il les récupère depuis le dépôt central (`autoformations-theme`). 
Cela garantit :
* Zéro duplication pour le code partagé (mis à jour à un seul endroit).
* Une flexibilité totale pour gérer des affichages spécifiques aux domaines de compétence de chaque site.

---

## 🚀 Plan de Mise en Œuvre

### 1. Création du Dépôt Thème (`autoformations-theme`)
- Extraire et transférer les dossiers `_layouts/` globaux, `_includes/`, `assets/`, et `_sass/` vers ce nouveau dépôt.
- S'assurer que le thème inclut ou déclare correctement les dépendances de "Just the Docs".

### 2. Nettoyage et Adaptation des Dépôts N1, N2, N3
- Supprimer les éléments désormais centralisés (layouts génériques, includes, assets).
- Conserver de manière stricte :
  - Les dossiers de collections (ex: `_missions/`, `_tutos/`).
  - Les pages racines (`index.md`).
  - Le dossier `_data/`.
  - Le dossier `_layouts/`, qui ne doit désormais contenir **que** les layouts spécifiques aux domaines de compétence du niveau concerné.

### 3. Configuration des Sites
Dans les fichiers `_config.yml` de N1, N2 et N3, ajouter l'appel au thème partagé :

```yaml
plugins:
  - jekyll-remote-theme

remote_theme: "organisation/autoformations-theme" # À adapter avec le nom réel de l'organisation et du dépôt
```

### 4. Déploiement sur GitHub Pages
Cette architecture est pleinement compatible avec l'hébergement GitHub Pages.

- **Si le dépôt `autoformations-theme` est public** : GitHub Pages récupérera le thème nativement sans configuration supplémentaire.
- **Si le dépôt `autoformations-theme` est privé** : Le build classique de GitHub Pages n'aura pas les droits d'accès. Il sera nécessaire de déployer les sites N1, N2, N3 via des workflows **GitHub Actions**. Ces workflows devront être configurés avec un jeton d'accès personnel (*Personal Access Token*) permettant de lire le dépôt privé du thème lors de la compilation.
