# D.225.1 — Construire une interface web avec Tailwind CSS

**Mini-code :** `tailwind`
**Niveau :** N2 — Structurer
**Sprints :** S1 → S2 → S3

## Capacité finale

**Construire une interface web structurée, responsive et cohérente à partir d’une maquette ou d’une interface existante en utilisant Tailwind CSS.**

---

# UA.225.11 — Construire l’interface avec Tailwind CSS

**Session :** S1

## Objectif

Transformer une maquette ou une interface HTML existante en une première interface fonctionnelle avec les utilitaires Tailwind CSS.

### T.225.111 — Structurer une interface avec les utilitaires Tailwind

**Notions :**

* Tailwind CSS
* Classes utilitaires
* `block`
* `flex`
* `grid`
* `flex-col`
* `items-*`
* `justify-*`
* `gap-*`
* `w-*`
* `h-*`
* `p-*`
* `m-*`
* `max-w-*`
* `min-h-*`

**Production :**

Structure visuelle de la page :

```text id="o8n0y4"
Sidebar
   +
Header
   +
Contenu
```

### T.225.112 — Mettre en forme les composants de l’interface

**Notions :**

* Couleurs
* Arrière-plans
* Typographie
* Bordures
* `rounded-*`
* `shadow-*`
* `text-*`
* `font-*`
* `bg-*`
* `border-*`
* Bouton
* Formulaire
* Champ
* Tableau
* Carte
* Section

**Production :**

Interface CRUD reproduisant la maquette avec Tailwind.

### Résultat S1

**Une interface structurée et stylée avec Tailwind CSS.**

---

# UA.225.12 — Adapter et enrichir l’interface

**Session :** S2

## Objectif

Rendre l’interface responsive et représenter visuellement les différents états d’interaction.

### T.225.121 — Rendre l’interface responsive

**Notions :**

* Responsive design
* Mobile first
* Breakpoint
* `sm:`
* `md:`
* `lg:`
* `xl:`
* `2xl:`
* `grid-cols-*`
* adaptation des dimensions
* adaptation des espacements
* affichage / masquage responsive

**Production :**

Interface adaptée aux principales tailles d’écran.

```text id="fkm7tq"
Mobile
  ↓
1 colonne

Desktop
  ↓
Sidebar + contenu
```

### T.225.122 — Gérer les états visuels

**Notions :**

* `hover:`
* `focus:`
* `disabled:`
* `opacity-*`
* `transition-*`
* `duration-*`
* `ease-*`
* `animate-*`
* état normal
* état actif
* état de chargement
* état d’erreur
* état de succès
* feedback visuel

**Production :**

Interface capable de représenter clairement les différents états des contrôles.

### Résultat S2

**Une interface responsive avec des états visuels cohérents.**

---

# UA.225.13 — Harmoniser l’interface avec Tailwind

**Session :** S3

## Objectif

Organiser les styles afin de maintenir une interface cohérente sur l’ensemble de l’application.

### T.225.131 — Personnaliser le thème Tailwind

**Notions :**

* Thème
* Configuration Tailwind
* Couleurs personnalisées
* Extension du thème
* Système de couleurs
* Système d’espacement
* Système de tailles
* Valeurs cohérentes

Dans le projet, par exemple :

```text id="zq7z6m"
primary-50
primary-500
primary-600
primary-900
```

**Production :**

Thème visuel cohérent pour l’application.

### T.225.132 — Harmoniser et réutiliser les styles

**Notions :**

* Cohérence visuelle
* Convention de styles
* Réutilisation
* Composants visuels cohérents
* Boutons
* Formulaires
* Tableaux
* Navigation
* Notifications
* Titres
* Espacements
* États interactifs

**Production :**

Interface finale homogène sur les différentes pages.

### Résultat S3

**Une interface finale cohérente et maintenable visuellement.**

---

# Progression globale

```text id="jmqpnr"
S1 — Construire
Utilitaires → Layout → Mise en forme → Composants
```

↓

```text id="1ppx8x"
S2 — Adapter
Responsive → Breakpoints → États → Transitions
```

↓

```text id="teuwn9"
S3 — Harmoniser
Thème → Personnalisation → Cohérence → Réutilisation
```

# Résultats par Sprint

| Sprint | UA            | Résultat                                           |
| ------ | ------------- | -------------------------------------------------- |
| **S1** | **UA.225.11** | Interface CRUD structurée et stylée avec Tailwind  |
| **S2** | **UA.225.12** | Interface responsive avec états visuels            |
| **S3** | **UA.225.13** | Interface finale harmonisée avec un thème cohérent |

# Limites

**D.225.1 — Tailwind** traite la **présentation visuelle**.

Il ne traite pas :

* DOM ;
* événements JavaScript ;
* `fetch` ;
* JSON ;
* gestion de l’état applicatif ;
* API ;
* POO PHP ;
* responsabilités des classes ;
* architecture des composants ;
* architecture 3-tiers.

Ces notions appartiennent respectivement à **D.224.1**, **D.213.1**, **D.221.1**, **D.222.1** et **D.223.1**.

## Question centrale

> **Comment transformer une maquette en une interface visuellement structurée, responsive et cohérente avec Tailwind CSS ?**
