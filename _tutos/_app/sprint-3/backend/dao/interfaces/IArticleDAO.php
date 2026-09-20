<?php
require_once __DIR__ . '/../../models/Article.php';

interface IArticleDAO {
    public function readAll();
    public function create(Article $art);
    public function update(Article $art);
    public function delete($id);
}
?>
