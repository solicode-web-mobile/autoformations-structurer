# Règle de gestion des métadonnées des Tutoriels (Front Matter)

**OBLIGATION ABSOLUE :**
Lors de la création, modification ou vérification des métadonnées (Front Matter) des fichiers de tutoriels, l'agent doit strictement respecter les conventions suivantes.

## 1. Vocabulaire autorisé
Pour définir l'état d'avancement d'un tutoriel, seules deux variables booléennes canoniques existent :
- `en_construction: true` : Indique que le tutoriel est à l'état de brouillon ou n'a pas encore été rédigé/simplifié.
- `simplified: true` : Indique que le tutoriel a été rédigé, finalisé et simplifié avec succès.

**Interdiction stricte :** 
Ne **JAMAIS** utiliser de variables fantaisistes ou inventées telles que `status: "en construction"` ou `draft: true` pour qualifier le statut. La configuration Jekyll du projet (ex: `tuto-list.html` et `tutos-en-attente.md`) repose exclusivement sur les clés `en_construction` et `simplified`.

## 2. Principe d'exclusion mutuelle
Les balises d'état d'un tutoriel sont sémantiquement exclusives.
Un fichier de tutoriel ne peut **JAMAIS** contenir à la fois `en_construction: true` et `simplified: true`.
- Si un tutoriel possède la balise `simplified: true`, il est considéré comme terminé. Toute balise `en_construction: true` doit être **supprimée**.
- Par défaut, tout nouveau tutoriel généré par le skill `rédacteur-tutos` naît avec la balise `en_construction: true`.
