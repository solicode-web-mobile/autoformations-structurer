<?php
require_once __DIR__ . '/Database.php';
require_once __DIR__ . '/../interfaces/IArticleDAO.php';

class ArticleDAOMySQL implements IArticleDAO {
    private $pdo;

    public function __construct() {
        $this->pdo = Database::getInstance()->getConnection();
    }

    public function readAll() {
        $stmt = $this->pdo->query("SELECT * FROM Article ORDER BY date_creation DESC");
        $articles = [];
        while ($row = $stmt->fetch()) {
            $articles[] = new Article(
                $row['titre'], $row['contenu'], $row['image_couverture'],
                $row['statut'], $row['categorie_id'], $row['auteur_id'],
                $row['id'], $row['date_creation'], $row['vues']
            );
        }
        return $articles;
    }

    public function create(Article $art) {
        $stmt = $this->pdo->prepare("INSERT INTO Article (titre, contenu, image_couverture, statut, categorie_id, auteur_id) VALUES (:titre, :contenu, :image_couverture, :statut, :categorie_id, :auteur_id)");
        return $stmt->execute([
            'titre' => $art->getTitre(),
            'contenu' => $art->getContenu(),
            'image_couverture' => $art->getImageCouverture(),
            'statut' => $art->getStatut(),
            'categorie_id' => $art->getCategorieId(),
            'auteur_id' => $art->getAuteurId()
        ]);
    }

    public function update(Article $art) {
        $stmt = $this->pdo->prepare("UPDATE Article SET titre = :titre, contenu = :contenu, image_couverture = :image_couverture, statut = :statut, categorie_id = :categorie_id, auteur_id = :auteur_id WHERE id = :id");
        return $stmt->execute([
            'titre' => $art->getTitre(),
            'contenu' => $art->getContenu(),
            'image_couverture' => $art->getImageCouverture(),
            'statut' => $art->getStatut(),
            'categorie_id' => $art->getCategorieId(),
            'auteur_id' => $art->getAuteurId(),
            'id' => $art->getId()
        ]);
    }

    public function delete($id) {
        $stmt = $this->pdo->prepare("DELETE FROM Article WHERE id = :id");
        return $stmt->execute(['id' => $id]);
    }
}
?>
