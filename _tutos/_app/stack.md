# Stack Technique de l'Application (Par Sprint d'introduction)

Ce document décrit les choix technologiques et les outils utilisés pour le développement de l'application. Conformément à la progression pédagogique, chaque technologie ou outil est listé dans le Sprint où il est **introduit pour la première fois**. Il est ensuite utilisé tout au long des sprints suivants.

## Sprint 1 : Cadrage, CRUD de base et Interface
*   **Mermaid :** Outil de modélisation as-code pour créer les [diagrammes de cas d'utilisation](https://mermaid.ai/open-source/syntax/usecase.html) à partir des maquettes.
    * *Extensions VS Code recommandées :* 
      * [Mermaid Viewer](https://open-vsx.org/vscode/item?itemName=onlyutkarsh.mermaid-diagram-lens) (`onlyutkarsh.mermaid-diagram-lens`)
*   **PHP (Pure PHP en Orienté Objet) :** Le langage backend principal pour construire les classes et la logique.
*   **Fichiers JSON (Serveur Local) :** Environnement local (PHP) pour exécuter le code et persister les données simplement dans des fichiers JSON.
*   **HTML5 :** Structuration sémantique de l'interface utilisateur.
*   **Tailwind CSS :** Framework utilitaire pour la construction rapide des vues, le design et l'interactivité visuelle.
*   **JavaScript (Vanilla JS) :** Le langage frontend pour rendre l'interface interactive et communiquer de manière asynchrone (`fetch()`).
*   **Git :** Versionnement local du code source.

## Sprint 2 : Séparation des responsabilités et Suivi
*   **GitHub (Dépôts & Issues) :** Plateforme d'hébergement du code et utilisation des "Issues" pour décomposer le travail en tâches et suivre l'avancement par fonctionnalité.

## Sprint 3 : Isolation de l'accès aux données et API
*   **JSON :** Format d'échange de données léger, utilisé pour faire communiquer le frontend et le backend de manière structurée.
*   **SQL & Base de données relationnelle :** Transition de la persistance fichier (JSON) vers MySQL pour stocker les données de manière robuste.
*   **API REST (simplifiée) :** Architecture des points d'entrée (endpoints) backend pour exposer les données au lieu de générer du HTML.

## Sprint 4 : Architecture 3-tiers finale
*   **Architecture en couches (3-tiers) :** Modèle d'organisation structurelle définitif du projet (couches Présentation, Traitement, Data).
*   **Single Page Application (SPA) progressive :** Concept architectural frontend où la page ne se recharge plus du tout, l'interface dialoguant exclusivement via l'API.
