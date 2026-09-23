# Issue 001 : Exécution contrôlée du code (Debounce & Mode Manuel)

## 1. Description du Problème / Besoin
- **Contexte** : Actuellement, ou par défaut, le code s'exécute potentiellement à chaque frappe de clavier, ce qui peut causer des problèmes de performance, notamment des boucles infinies ou de la lenteur.
- **Comportement attendu vs actuel** :
  - Il ne faut pas exécuter le code JavaScript (ni HTML/CSS) directement à chaque frappe.
  - Il faut ajouter une option d'exécution manuelle (clic sur un bouton "Exécuter").
  - Il faut ajouter une option (toggle/checkbox) pour activer ou désactiver l'exécution automatique.
  - Si l'exécution automatique est activée, l'exécution doit se faire à la fin de la saisie (système de *debounce*), pour ne pas spammer le navigateur à chaque frappe.
  - **Réponse concernant PHP** : Oui, l'exécution continue pour PHP est techniquement possible grâce à WebAssembly. Toutefois, relancer la compilation PHP à chaque frappe est très gourmand en ressources CPU. Il est donc recommandé d'appliquer la même logique pour tous les langages : exécution manuelle ou automatique avec un délai de *debounce* (ex: 1 seconde après avoir arrêté de taper).

## 2. Analyse et Impacts
- **Fichiers/composants impactés** :
  - L'interface UI (`index.html`) : Ajout des contrôles (bouton "Exécuter le code" global et toggle "Exécution auto").
  - L'orchestration Alpine.js (`assets/js/app.js` ou la logique UI existante) : État de l'auto-run.
  - La logique Monaco (`assets/js/editor-init.js`) : Implémentation du *debounce* sur l'événement `onDidChangeModelContent`.
- **Schémas de `conception/` mis à jour** :
  - `cas-utilisation.mmd` : Intégration des nouveaux cas "Activer/Désactiver l'exécution automatique" et "Exécuter manuellement".

## 3. Skills Requis
- `agent-developer` (skill existant pour implémenter l'intégration Monaco, le debounce et lier tout cela à Alpine.js).

## 4. Plan de Résolution (Comment faire)
- **Étape 1** : Dans `index.html`, ajouter un switch/checkbox "Exécution automatique" et généraliser le bouton "Exécuter" (qui ne servait qu'à PHP) pour qu'il force l'exécution du langage courant.
- **Étape 2** : Dans la logique Alpine.js, ajouter l'état réactif `autoRun` (activé par défaut).
- **Étape 3** : Dans l'initialisation de Monaco Editor (`editor-init.js`), ajouter une fonction de `debounce` (ex: 800ms) sur l'événement de changement de contenu. Si `autoRun` est à false, ne pas déclencher le refresh automatique.
- **Étape 4** : Lier le bouton d'exécution manuelle pour qu'il déclenche instantanément le `live-preview.js` ou le `php-runner.js` selon l'onglet actif.

## 5. Statut
- [ ] À faire
- [ ] En cours
- [x] Terminé