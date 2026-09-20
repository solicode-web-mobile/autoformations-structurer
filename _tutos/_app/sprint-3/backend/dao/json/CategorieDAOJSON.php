<?php
require_once __DIR__ . '/../interfaces/ICategorieDAO.php';

class CategorieDAOJSON implements ICategorieDAO {
    private $fichierJson;

    public function __construct() {
        $this->fichierJson = __DIR__ . '/../../storage/categories.json';
    }

    public function readAll() {
        if (!file_exists($this->fichierJson)) return [];
        $data = json_decode(file_get_contents($this->fichierJson), true);
        
        $categories = [];
        if (is_array($data)) {
            foreach ($data as $item) {
                $categories[] = new Categorie($item['nom'], $item['couleur'], $item['icone'], $item['id']);
            }
        }
        return $categories;
    }

    private function saveAll($categoriesArray) {
        return file_put_contents($this->fichierJson, json_encode($categoriesArray, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)) !== false;
    }

    public function create(Categorie $cat) {
        $categories = $this->readAll();
        
        $maxId = 0;
        foreach ($categories as $existing) {
            if ((int)$existing->getId() > $maxId) $maxId = (int)$existing->getId();
        }
        
        $cat->setId($maxId + 1);
        $categories[] = $cat;
        
        $arrayData = array_map(function($c) { return $c->toArray(); }, $categories);
        return $this->saveAll($arrayData);
    }

    public function update(Categorie $cat) {
        $categories = $this->readAll();
        $updated = false;
        
        foreach ($categories as $index => $existing) {
            if ($existing->getId() == $cat->getId()) {
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

    public function delete($id) {
        $categories = $this->readAll();
        $initialCount = count($categories);
        
        $categories = array_filter($categories, function($cat) use ($id) {
            return $cat->getId() != $id;
        });
        
        if (count($categories) < $initialCount) {
            $arrayData = array_map(function($c) { return $c->toArray(); }, array_values($categories));
            return $this->saveAll($arrayData);
        }
        return false;
    }
}
?>
