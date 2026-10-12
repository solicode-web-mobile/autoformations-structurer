<?php
require_once __DIR__ . '/Categorie.php';

class GestionCategorie {
    private $fichierJson;

    public function __construct() {
        // Le chemin vers le fichier JSON
        $this->fichierJson = __DIR__ . '/../data/categories.json';
    }

    /**
     * Lit toutes les catégories depuis le JSON
     */
    public function readAll() {
        if (!file_exists($this->fichierJson)) {
            return [];
        }
        $contenu = file_get_contents($this->fichierJson);
        $data = json_decode($contenu, true);
        
        $categories = [];
        if (is_array($data)) {
            foreach ($data as $item) {
                // On instancie l'entité Categorie pour chaque ligne
                $categories[] = new Categorie(
                    $item['nom'], 
                    $item['couleur'], 
                    $item['icone'], 
                    $item['id']
                );
            }
        }
        return $categories;
    }

    /**
     * Sauvegarde la liste complète des catégories dans le JSON
     */
    private function saveAll($categoriesArray) {
        $json = json_encode($categoriesArray, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        return file_put_contents($this->fichierJson, $json) !== false;
    }

    /**
     * Ajoute une nouvelle catégorie
     */
    public function create(Categorie $cat) {
        $categories = $this->readAll();
        
        // Trouver le plus grand ID existant
        $maxId = 0;
        foreach ($categories as $existingCat) {
            if ((int)$existingCat->getId() > $maxId) {
                $maxId = (int)$existingCat->getId();
            }
        }
        
        $cat->setId($maxId + 1);
        $categories[] = $cat;
        
        // Convertir le tableau d'objets en tableau associatif
        $arrayData = array_map(function($c) { return $c->toArray(); }, $categories);
        
        return $this->saveAll($arrayData);
    }

    /**
     * Modifie une catégorie existante
     */
    public function update(Categorie $cat) {
        $categories = $this->readAll();
        $updated = false;
        
        foreach ($categories as $index => $existingCat) {
            if ($existingCat->getId() == $cat->getId()) {
                $categories[$index] = $cat;
                $updated = true;
                break;
            }
        }
        
        if ($updated) {
            $arrayData = array_map(function($c) { return $c->toArray(); }, $categories);
            return $this->saveAll($arrayData);
        }
        
        return false;
    }

    /**
     * Supprime une catégorie par son ID
     */
    public function delete($id) {
        $categories = $this->readAll();
        $initialCount = count($categories);
        
        $categories = array_filter($categories, function($cat) use ($id) {
            return $cat->getId() != $id;
        });
        
        // Si le nombre a diminué, c'est qu'on a bien supprimé
        if (count($categories) < $initialCount) {
            // array_values pour réindexer le tableau à partir de 0
            $arrayData = array_map(function($c) { return $c->toArray(); }, array_values($categories));
            return $this->saveAll($arrayData);
        }
        
        return false;
    }
}
?>
