<?php
require_once __DIR__ . '/../models/Article.php';
require_once __DIR__ . '/../dao/DAOFactory.php';

class GestionArticle {
    private $dao;

    public function __construct() {
        // La gestion délègue au Factory le soin de choisir la bonne implémentation !
        $this->dao = DAOFactory::getArticleDAO();
    }

    public function readAll() {
        return $this->dao->readAll();
    }

    public function create(Article $art) {
        return $this->dao->create($art);
    }

    public function update(Article $art) {
        return $this->dao->update($art);
    }

    public function delete($id) {
        return $this->dao->delete($id);
    }
}
?>
