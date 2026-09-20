<?php
require_once __DIR__ . '/../../models/Categorie.php';

interface ICategorieDAO {
    public function readAll();
    public function create(Categorie $cat);
    public function update(Categorie $cat);
    public function delete($id);
}
?>
