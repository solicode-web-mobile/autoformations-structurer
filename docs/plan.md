## Plan de configuration et de réalisation

### Étape 1 — Créer le projet Jekyll

Créer le projet :

```text
formation-web/
```

Mettre en place :

```text
_config.yml
Gemfile
index.md
assets/
```

Installer et vérifier **Jekyll + Just the Docs**.

**Résultat :** un site Just the Docs minimal fonctionne localement.

---

### Étape 2 — Configurer Just the Docs

Configurer :

* titre du site ;
* recherche ;
* thème ;
* navigation ;
* responsive ;
* ancres ;
* navigation précédente / suivante.

Créer une première navigation :

```text
Accueil
Sessions
Formations
```

**Résultat :** le socle documentaire est opérationnel.

---

### Étape 3 — Créer les collections pédagogiques

Créer les collections :

```text
_missions/
_competences/
_domaines/
_uas/
_sessions/
_tutos/
```

Configurer leur génération dans `_config.yml`.

**Résultat :** Jekyll connaît les six types d'objets pédagogiques.

---

### Étape 4 — Implémenter le référentiel

Créer les données dans l'ordre :

```text
Mission
   ↓
Compétence
   ↓
Domaine
```

Exemple :

```text
N1-M1
└── C.111
    └── D.111.1
```

Définir les codes comme identifiants stables.

**Résultat :** le référentiel métier est structuré.

---

### Étape 5 — Implémenter les Sessions

Créer les Sessions :

```text
S1
S2
S3
...
```

Chaque Session référence ses UA.

Exemple :

```text
S1
├── UA.111.11
├── UA.112.11
└── UA.121.11
```

Créer le layout :

```text
_layouts/session.html
```

**Résultat :** un apprenant peut ouvrir une Session et voir son parcours.

---

### Étape 6 — Implémenter les UA

Créer les UA :

```text
UA.111.11
UA.112.11
UA.121.11
```

Chaque UA contient **un ou plusieurs tutoriels** :

```yaml
tutos:
  - "T.111.111"
```

ou :

```yaml
tutos:
  - "T.111.111"
  - "T.111.112"
```

Créer :

```text
_layouts/ua.html
_includes/tuto-list.html
```

**Résultat :** le parcours devient :

```text
Session → UA → Tutoriel
```

---

### Étape 7 — Implémenter le système de tutoriels

Créer un tutoriel avec son code :

```text
T.111.111
```

et ses trois versions :

```text
_tutos/
└── T111111/
    ├── compact.md
    ├── normal.md
    └── detaille.md
```

Chaque fichier contient le même :

```yaml
tuto_id: "T.111.111"
```

mais une version différente :

```yaml
version: compact
version: normal
version: detaille
```

**Résultat :** un tutoriel possède trois profondeurs de lecture.

---

### Étape 8 — Créer le layout Tutoriel

Créer :

```text
_layouts/tuto.html
```

Structure :

```text
Titre
Référentiel
UA

[Compact] [Normal] [Détaillé]

[A−] [A] [A+]

Contenu

← Précédent        Suivant →
```

Le contenu provient directement du fichier Markdown.

**Résultat :** tous les tutoriels ont la même interface.

---

### Étape 9 — Implémenter le changement de version

Créer :

```text
_includes/version-switcher.html
assets/js/preferences.js
```

Gérer :

```text
Compact
Normal
Détaillé
```

Stocker le choix :

```javascript
localStorage.setItem("tuto_version", "compact");
```

Au premier accès :

```text
normal
```

est utilisé par défaut.

**Résultat :**

```text
Choix = Compact
↓
Tous les tutoriels suivants = Compact
```

Même comportement pour Normal et Détaillé.

---

### Étape 10 — Implémenter la taille du texte

Créer :

```text
_includes/text-size-control.html
```

Interface :

```text
A−   A   A+
```

Stocker la préférence :

```javascript
localStorage.setItem("text_size", "large");
```

Restaurer automatiquement la préférence lors du chargement.

**Résultat :** l'apprenant conserve sa taille de lecture sur tout le site.

---

### Étape 11 — Construire l'UX de navigation

Mettre en place une navigation réellement pédagogique :

```text
Session
  ↓
UA
  ↓
Tutoriel
  ↓
Version choisie
  ↓
Tutoriel suivant
  ↓
Même version
```

Point important : **la navigation précédente/suivante doit respecter la version mémorisée**.

Ne jamais revenir automatiquement à Normal lorsque l'apprenant a choisi Compact.

Tester également :

```text
Desktop
Tablet
Mobile
```

**Résultat :** le parcours reste cohérent quelle que soit la taille d'écran ou le niveau de lecture.

---

### Étape 12 — Tests et validation

Créer un petit jeu de données réel :

```text
M1
C.111
D.111.1
S1
UA.111.11
T.111.111
T.111.112
```

Puis vérifier le parcours complet :

```text
S1
 ↓
UA.111.11
 ↓
T.111.111
 ↓
Compact
 ↓
T.111.112
 ↓
Compact
```

Tester également :

```text
Compact → Compact
Normal → Normal
Détaillé → Détaillé
A+ → A+
Actualisation → préférences conservées
Navigation mobile → fonctionnelle
```

---

# Ordre de réalisation recommandé

Pour éviter de développer trop tôt les composants UI, je suivrais exactement cet ordre :

```text
1. Jekyll
   ↓
2. Just the Docs
   ↓
3. Collections
   ↓
4. Mission / Compétence / Domaine
   ↓
5. Sessions
   ↓
6. UA
   ↓
7. Tutoriels
   ↓
8. Trois versions
   ↓
9. Layouts
   ↓
10. Sélecteur de version
   ↓
11. Taille du texte
   ↓
12. Navigation + UX
   ↓
13. Tests
   ↓
14. Déploiement
```

## Architecture finale

```text
FORMATION WEB
│
├── Référentiel
│   └── Mission
│       └── Compétence
│           └── Domaine
│
└── Parcours
    └── Session
        └── UA
            └── Tutoriel
                ├── Compact
                ├── Normal
                └── Détaillé
```

Cette séquence est importante : **on construit d'abord le modèle pédagogique et les relations, puis l'interface**. Cela évite de créer un site visuellement correct mais difficile à faire évoluer lorsque vous ajouterez les nombreuses UA, Sessions et tutoriels de Solicode.
