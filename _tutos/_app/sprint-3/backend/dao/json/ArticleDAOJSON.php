<?php
require_once __DIR__ . '/../interfaces/IArticleDAO.php';

class ArticleDAOJSON implements IArticleDAO {
    private $fichierJson;

    public function __construct() {
        $this->fichierJson = __DIR__ . '/../../storage/articles.json';
    }

    public function readAll() {
        if (!file_exists($this->fichierJson)) return [];
        $data = json_decode(file_get_contents($this->fichierJson), true);
        
        $articles = [];
        if (is_array($data)) {
            foreach ($data as $item) {
                $articles[] = new Article(
                    $item['titre'], $item['contenu'], $item['image_couverture'],
                    $item['statut'], $item['categorie_id'], $item['auteur_id'],
                    $item['id'], $item['date_creation'], $item['vues']
                );
            }
        }
        return $articles;
    }

    private function saveAll($articlesArray) {
        return file_put_contents($this->fichierJson, json_encode($articlesArray, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)) !== false;
    }

    public function create(Article $art) {
        $articles = $this->readAll();
        
        $maxId = 0;
        foreach ($articles as $existing) {
            if ((int)$existing->getId() > $maxId) $maxId = (int)$existing->getId();
        }
        
        $art->setId($maxId + 1);
        $articles[] = $art;
        
        $arrayData = array_map(function($a) { return $a->toArray(); }, $articles);
        return $this->saveAll($arrayData);
    }

    public function update(Article $art) {
        $articles = $this->readAll();
        $updated = false;
        
        foreach ($articles as $index => $existing) {
            if ($existing->getId() == $art->getId()) {
                $art->setDateCreation($existing->getDateCreation());
                $art->setVues($existing->getVues());
                $articles[$index] = $art;
                $updated = true;
                break;
            }
        }
        
        if ($updated) {
            $arrayData = array_map(function($a) { return $a->toArray(); }, $articles);
            return $this->saveAll($arrayData);
        }
        return false;
    }

    public function delete($id) {
        $articles = $this->readAll();
        $initialCount = count($articles);
        
        $articles = array_filter($articles, function($art) use ($id) {
            return $art->getId() != $id;
        });
        
        if (count($articles) < $initialCount) {
            $arrayData = array_map(function($a) { return $a->toArray(); }, array_values($articles));
            return $this->saveAll($arrayData);
        }
        return false;
    }
}
?>
