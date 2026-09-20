---
layout: fonctionnalite
title: "Résultat T.211.114 - Exceptions"
nav_exclude: true
---

*(Suite du scénario nominal "Ajouter un article")*

**Condition (Erreur) :** À l'étape 3, l'Auteur ne saisit aucun contenu avant de valider.  
**Scénario d'erreur :**  
1. L'Auteur clique sur le bouton "Enregistrer l'article".  
2. Le système refuse l'enregistrement et affiche le message d'erreur "Le contenu de l'article est obligatoire".  
**Reprise :** L'Auteur remplit le champ contenu et le scénario reprend à l'étape 3.  

<hr style="margin: 25px 0; border-top: 1px dashed #ddd;">

**Condition (Alternatif) :** À l'étape 3, l'Auteur sélectionne le statut "Brouillon" au lieu de "Publié".  
**Scénario alternatif :**  
1. L'Auteur clique sur le bouton "Enregistrer l'article".  
2. Le système sauvegarde l'article dans la base de données avec le statut inactif (brouillon).  
3. Le système redirige l'Auteur vers la liste des articles.  
**Fin du scénario.** *(Le résultat attendu diffère : l'article est enregistré, mais non visible par les visiteurs du site).*

<hr style="margin: 25px 0; border-top: 1px dashed #ddd;">

*Modélisation optionnelle (Scénario complet avec exceptions) :*
```mermaid
sequenceDiagram
    actor Auteur
    participant Systeme as Système
    Auteur->>Systeme: Accède à la création d'article
    Systeme-->>Auteur: Affiche le formulaire de rédaction
    Auteur->>Systeme: Remplit le formulaire et clique sur Enregistrer
    
    alt Contenu vide (Erreur)
        Systeme-->>Auteur: Refuse et affiche "Le contenu est obligatoire"
    else Statut Brouillon (Alternatif)
        Systeme-->>Auteur: Sauvegarde en inactif et redirige vers la liste
    else Cas nominal
        Systeme-->>Auteur: Sauvegarde l'article et redirige vers la liste
    end
```
