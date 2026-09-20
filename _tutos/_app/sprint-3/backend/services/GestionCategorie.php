<?php
require_once __DIR__ . '/../models/Categorie.php';
require_once __DIR__ . '/../dao/DAOFactory.php';

class GestionCategorie {
    private $dao;

    public function __construct() {
        // La gestion délègue au Factory le soin de choisir la bonne implémentation !
        $this->dao = DAOFactory::getCategorieDAO();
    }

    public function readAll() {
        return $this->dao->readAll();
    }

    public function create(Categorie $cat) {
        return $this->dao->create($cat);
    }

    public function update(Categorie $cat) {
        return $this->dao->update($cat);
    }

    public function delete($id) {
        return $this->dao->delete($id);
    }
}
?>
