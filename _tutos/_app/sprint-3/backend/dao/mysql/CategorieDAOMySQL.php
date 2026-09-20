<?php
require_once __DIR__ . '/Database.php';
require_once __DIR__ . '/../interfaces/ICategorieDAO.php';

class CategorieDAOMySQL implements ICategorieDAO {
    private $pdo;

    public function __construct() {
        $this->pdo = Database::getInstance()->getConnection();
    }

    public function readAll() {
        $stmt = $this->pdo->query("SELECT * FROM Categorie");
        $categories = [];
        while ($row = $stmt->fetch()) {
            $categories[] = new Categorie($row['nom'], $row['couleur'], $row['icone'], $row['id']);
        }
        return $categories;
    }

    public function create(Categorie $cat) {
        $stmt = $this->pdo->prepare("INSERT INTO Categorie (nom, couleur, icone) VALUES (:nom, :couleur, :icone)");
        return $stmt->execute([
            'nom' => $cat->getNom(),
            'couleur' => $cat->getCouleur(),
            'icone' => $cat->getIcone()
        ]);
    }

    public function update(Categorie $cat) {
        $stmt = $this->pdo->prepare("UPDATE Categorie SET nom = :nom, couleur = :couleur, icone = :icone WHERE id = :id");
        return $stmt->execute([
            'nom' => $cat->getNom(),
            'couleur' => $cat->getCouleur(),
            'icone' => $cat->getIcone(),
            'id' => $cat->getId()
        ]);
    }

    public function delete($id) {
        $stmt = $this->pdo->prepare("DELETE FROM Categorie WHERE id = :id");
        return $stmt->execute(['id' => $id]);
    }
}
?>
