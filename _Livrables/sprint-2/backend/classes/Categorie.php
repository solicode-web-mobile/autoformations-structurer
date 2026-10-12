<?php
class Categorie {
    private $id;
    private $nom;
    private $couleur;
    private $icone;

    public function __construct($nom = null, $couleur = null, $icone = null, $id = null) {
        $this->id = $id;
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
    }

    public function getId() { return $this->id; }
    public function getNom() { return $this->nom; }
    public function getCouleur() { return $this->couleur; }
    public function getIcone() { return $this->icone; }
    
    public function setId($id) { $this->id = $id; }
    public function setNom($nom) { $this->nom = $nom; }
    public function setCouleur($couleur) { $this->couleur = $couleur; }
    public function setIcone($icone) { $this->icone = $icone; }

    /**
     * Convertit l'objet en tableau associatif pour le format JSON
     */
    public function toArray() {
        return [
            'id' => $this->id,
            'nom' => $this->nom,
            'couleur' => $this->couleur,
            'icone' => $this->icone
        ];
    }
}
?>
