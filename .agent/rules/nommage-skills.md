# Règle de nommage des Skills de l'Agent

Cette règle standardise la façon dont les compétences (skills) de l'agent doivent être nommées, afin de conserver une arborescence claire et cohérente.

## 1. Skills de Domaine
Les skills qui définissent l'expertise d'un domaine technique spécifique (vocabulaire métier, concepts, règles UML ou code) doivent obligatoirement être préfixés par `domaine-` suivi du mot-clé ou mini-code du domaine.

**Exemples :**
- Modélisation Objet (D.212.1) -> `domaine-objets`
- Fonctionnalité (D.211.1) -> `domaine-fonctionnalite`
- Algorithmique -> `domaine-algo`

## 2. Skills Rôles/Métiers
Les skills qui agissent avec un rôle précis doivent refléter ce rôle.
**Exemples :**
- `simplificateur-tutos`
- `rédacteur-tutos`
- `sys-agent`
- `mermaid-expert`

## 3. Format Global
- Tout en minuscules (kebab-case).
- Pas d'espaces ni de caractères spéciaux.
- Mots séparés par des tirets `-`.
