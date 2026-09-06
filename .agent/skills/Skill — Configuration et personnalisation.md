# Skill — Configuration et personnalisation de `formation-web`

## 1. Mission

Configurer, personnaliser et maintenir `formation-web`, un site **Jekyll + Just the Docs**, sans casser la structure pédagogique, la navigation, les URLs ou les contenus existants.

Priorité :

**Structure pédagogique → Jekyll/Liquid → Just the Docs → personnalisation locale**

Toujours privilégier une solution **locale, simple, réutilisable et maintenable**.

---

## 2. Architecture pédagogique

La structure de référence est :

```text
Mission
  ↓
Compétence
  ↓
Domaine
  ↓
UA
  ↓
Tutoriel
```

Le parcours pédagogique est organisé par les Sessions :

```text
Session
  ↓
UA
  ↓
Tutoriel
  ↓
Lab
  ↓
Prototype
  ↓
Projet Fil Rouge
```

Relations principales :

```text
Compétence → Mission
Domaine → Compétence
UA → Domaine + Compétence
Tutoriel → UA
Session → UA + Lab + Prototype + Projet Fil Rouge
```

Les relations utilisent toujours les **codes**, jamais les titres.

---

## 3. Collections

Collections principales :

```text
_missions/
_competences/
_domaines/
_uas/
_sessions/
_tutos/
_labs/
_prototypes/
_projets/
```

Configuration minimale :

```yaml
collections:
  missions:
    output: true
  competences:
    output: true
  domaines:
    output: true
  uas:
    output: true
  sessions:
    output: true
  tutos:
    output: true
  labs:
    output: true
  prototypes:
    output: true
  projets:
    output: true
```

Ne jamais modifier directement les fichiers internes de `just-the-docs-*`.

---

## 4. Identifiants

Utiliser des identifiants stables :

```text
Mission     → M1
Compétence  → C.111
Domaine     → D.111.1
UA          → UA.111.11
Tutoriel    → T.111.111
Session     → S1
Lab         → L.S1
Prototype   → P.S1
Projet      → PFR.S1
```

Les titres servent à l'affichage.

Les codes servent aux relations et aux recherches Liquid.

---

## 5. UA

Une UA appartient à un Domaine et à une Compétence.

Exemple :

```yaml
code: "UA.111.11"
competence: "C.111"
domaine: "D.111.1"
```

Une UA **ne référence pas nécessairement ses tutoriels**.

Pour obtenir les tutoriels d'une UA :

```liquid
{% assign ua_tutos = site.tutos | where: "ua", ua.code %}
```

Pour obtenir les Sessions d'une UA, parcourir les `session.uas`.

---

## 6. Tutoriels

Un tutoriel est identifié par `tuto_id`.

Exemple :

```yaml
tuto_id: "T.111.111"
ua: "UA.111.11"
version: "normal"
```

Chaque tutoriel possède trois versions :

```text
Compact
Normal
Détaillé
```

Les trois versions partagent :

```text
même tuto_id
même UA
même Domaine
même Compétence
même structure
même objectif
mêmes notions
même réalisation
même livrable
```

Seule la **profondeur de l'explication** change.

La version **Normal** est la référence et la version par défaut.

---

## 7. Sessions

Une Session organise les UA d'une période de formation.

Exemple :

```yaml
code: "S1"
uas:
  - "UA.161.11"
  - "UA.161.12"
  - "UA.111.11"

labs:
  - "L.S1"

prototype:
  - "P.S1"

projet_fil_rouge:
  - "PFR.S1"
```

L'ordre du tableau `uas` est l'ordre pédagogique de la Session.

Ne pas dupliquer les informations détaillées des UA dans la Session.

---

## 8. Prototype

Un Prototype est une activité d'adaptation.

Il est caractérisé par :

```text
Travail à faire
Livrable
Unités d'apprentissage mobilisées
```

Exemple :

```yaml
code: "P.S1"
session: "S1"

travail_a_faire: >
  ...

livrable:
  - "..."

uas:
  - "UA.111.11"
```

Le layout du Prototype ne doit pas transformer celui-ci en tutoriel.

---

## 9. Navigation

Navigation principale recommandée :

```text
Accueil
Sessions
  S1
  S2
  S3
  ...
Formations
  HTML
  CSS
  JavaScript
  ...
```

Missions, Compétences, UA et Tutoriels ne doivent pas surcharger la navigation principale.

Utiliser :

```yaml
nav_exclude: true
```

lorsqu'une page doit être accessible par contexte sans apparaître dans le menu principal.

Pour les pages parentes :

```yaml
has_children: true
nav_order: 1
```

Utiliser `parent` et `nav_order` pour les relations de navigation Just the Docs.

---

## 10. Layouts

Créer des layouts locaux pour chaque type de contenu :

```text
_layouts/
├── mission.html
├── competence.html
├── domaine.html
├── ua.html
├── session.html
├── tuto.html
├── prototype.html
├── lab.html
└── projet.html
```

Un layout doit afficher dynamiquement les données de `page` et de `site`.

Ne pas recopier les informations pédagogiques dans les layouts.

Toujours conserver :

```liquid
{{ content }}
```

afin de permettre du contenu Markdown complémentaire.

---

## 11. Includes

Créer les composants réutilisables dans `_includes/` :

```text
version-switcher.html
text-size-control.html
tuto-list.html
next-step.html
```

Les includes doivent être génériques et utiliser les données de `page` ou de `include`.

Éviter le HTML dupliqué.

---

## 12. Sélecteur de version

Le sélecteur doit proposer :

```text
[ Synthèse ] [ Standard ] [ Approfondi ]
```

Le système doit :

```text
afficher la version active
permettre le changement
mémoriser le choix
```

Le choix est enregistré dans :

```javascript
localStorage.setItem("tuto_version", "normal");
```

Valeur par défaut :

```text
normal
```

Les liens vers les tutoriels doivent respecter cette préférence.

Liquid génère les différentes URLs ; JavaScript applique la version choisie après chargement.

---

## 13. Taille du texte

Composant :

```text
A−  A  A+
```

Fonctionnement :

```text
A− → diminuer
A  → réinitialiser
A+ → augmenter
```

La taille doit être mémorisée dans `localStorage`.

JavaScript doit modifier principalement le contenu pédagogique sans casser :

```text
navigation
code
images
composants
responsive
```

---

## 14. Navigation entre étapes

Le composant `next-step.html` gère la progression pédagogique.

Ordre :

```text
Tutoriel précédent
        ↓
Tutoriel actuel
        ↓
Tutoriel suivant
        ↓
UA suivante
        ↓
Lab
        ↓
Prototype
        ↓
Projet Fil Rouge
```

Dans une même UA :

```text
tutoriel précédent ← → tutoriel suivant
```

À la première étape d'une UA :

```text
dernier tutoriel de l'UA précédente
```

À la dernière étape d'une UA :

```text
premier tutoriel de l'UA suivante
```

Les liens vers les tutoriels doivent également respecter :

```text
Compact / Normal / Détaillé
```

---

## 15. Liste des tutoriels

`_includes/tuto-list.html` doit afficher **un seul élément par `tuto_id`**.

Les trois versions d'un même tutoriel ne doivent jamais apparaître comme trois tutoriels.

Principe :

```text
T.111.111 — Identifier le contexte et les acteurs
```

et non :

```text
T.111.111 — Compact
T.111.111 — Normal
T.111.111 — Détaillé
```

Le lien doit pointer vers la version actuellement sélectionnée.

---

## 16. Liquid

Utiliser les collections et métadonnées pour construire les relations dynamiques.

Exemple :

```liquid
{% assign ua =
  site.uas
  | where: "code", page.ua
  | first
%}
```

Filtrer les données avant l'affichage :

```liquid
{% assign tutos =
  site.tutos
  | where: "ua", page.ua
  | where: "version", "normal"
  | sort: "nav_order"
%}
```

Éviter les relations codées en dur lorsqu'elles peuvent être déduites des métadonnées.

---

## 17. CSS / UI / UX

Toute personnalisation doit être :

```text
simple
lisible
cohérente
responsive
accessible
non intrusive
```

Style recommandé :

```text
espace suffisant
hiérarchie visuelle claire
couleurs limitées
composants légers
interactions prévisibles
```

Éviter :

```text
animations inutiles
menus surchargés
cartes excessives
effets visuels décoratifs
```

Les composants doivent rester adaptés à des apprenants débutants.

---

## 18. JavaScript

Utiliser JavaScript uniquement lorsque Liquid/HTML/CSS ne suffit pas.

JavaScript doit rester :

```text
local
minimal
indépendant du DOM interne de Just the Docs
```

Fonctions principales :

```text
gestion de la version du tutoriel
mémorisation Local Storage
gestion de la taille du texte
mise à jour des liens
navigation contextuelle
```

Ne pas modifier inutilement le fonctionnement natif de Just the Docs.

---

## 19. TOC

Utiliser le TOC natif de Just the Docs lorsqu'il convient au besoin.

Si un TOC personnalisé est nécessaire :

```yaml
has_toc: false
```

puis construire un composant local.

Le TOC doit afficher uniquement les sections utiles à l'apprenant.

---

## 20. Priorité des modifications

Avant toute modification :

```text
Identifier
→ Vérifier l'existant
→ Choisir le niveau de modification le plus local
→ Modifier
→ Tester
→ Vérifier la navigation
```

Ordre de préférence :

```text
Include
→ Layout
→ CSS / JS local
→ Configuration
→ Modification du thème
```

Ne modifier le thème que lorsque les solutions locales ne suffisent pas.

---

## 21. Compatibilité

Toute modification doit rester compatible avec :

```text
Jekyll
Just the Docs
Liquid
Git
structure actuelle de formation-web
```

Ne pas ajouter de dépendance externe lorsqu'une solution locale ou native suffit.

Conserver les URLs existantes sauf demande explicite.

---

## 22. Contrôle final

Après toute modification, vérifier :

```text
Build Jekyll
Liquid
Collections
Relations
Navigation
URLs
Liens
Versions
Local Storage
Responsive
UI / UX
TOC
Absence de doublons
Absence d'erreurs console
Absence d'erreurs Liquid
```

Une erreur doit être corrigée à sa source avant d'ajouter une nouvelle solution.

---

## 23. Règle finale

> **Personnaliser `formation-web` sans casser son architecture : conserver la structure pédagogique, utiliser les données et relations définies dans le Front Matter, privilégier Jekyll/Liquid et les capacités natives de Just the Docs, puis ajouter uniquement des composants locaux simples, réutilisables, accessibles et maintenables.**
