# Guide d'Intégration de l'Éditeur

L'éditeur de code in-browser a été conçu pour être 100% côté client ("client-side"). Il ne possède pas de base de données intégrée ni de backend lourd. L'injection des exercices (code HTML, CSS, JS, ou PHP) se fait **uniquement via une variable globale JavaScript (`window.exerciseData`)** ou via les paramètres de l'URL.

Cette architecture modulaire permet à n'importe quel système extérieur (un backend complet, un CMS, un LMS, ou une SPA) de configurer l'éditeur très facilement.

Afin de clarifier les différents cas d'usage, la documentation d'intégration a été séparée en deux grands axes selon votre architecture technique :

## 1. Intégration Statique (Backend classique)
Pour les sites web traditionnels générés côté serveur (PHP, Laravel, Node.js) ou les simples partages de code via URL. Les données sont chargées dès l'ouverture de la page.

👉 **[Voir le guide de l'intégration statique](integration-statique.md)**

## 2. Intégration Dynamique (API / SPA / Iframe)
Pour les applications modernes (React, Vue, Alpine.js) où l'utilisateur navigue sans recharger la page, ou pour une intégration très isolée via un élément Iframe communiquant en temps réel.

👉 **[Voir le guide de l'intégration dynamique](integration-dynamique.md)**
