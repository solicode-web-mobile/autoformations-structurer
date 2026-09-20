<?php
class Article {
    private $id;
    private $titre;
    private $contenu;
    private $image_couverture;
    private $statut;
    private $date_creation;
    private $vues;
    private $categorie_id;
    private $auteur_id;

    public function __construct($titre = null, $contenu = null, $image_couverture = null, $statut = 'brouillon', $categorie_id = null, $auteur_id = null, $id = null, $date_creation = null, $vues = 0) {
        $this->id = $id;
        $this->titre = $titre;
        $this->contenu = $contenu;
        $this->image_couverture = $image_couverture;
        $this->statut = $statut;
        $this->categorie_id = $categorie_id;
        $this->auteur_id = $auteur_id;
        $this->date_creation = $date_creation ?: date('Y-m-d H:i:s');
        $this->vues = $vues;
    }

    // Getters
    public function getId() { return $this->id; }
    public function getTitre() { return $this->titre; }
    public function getContenu() { return $this->contenu; }
    public function getImageCouverture() { return $this->image_couverture; }
    public function getStatut() { return $this->statut; }
    public function getDateCreation() { return $this->date_creation; }
    public function getVues() { return $this->vues; }
    public function getCategorieId() { return $this->categorie_id; }
    public function getAuteurId() { return $this->auteur_id; }
    
    // Setters
    public function setId($id) { $this->id = $id; }
    public function setTitre($titre) { $this->titre = $titre; }
    public function setContenu($contenu) { $this->contenu = $contenu; }
    public function setImageCouverture($image) { $this->image_couverture = $image; }
    public function setStatut($statut) { $this->statut = $statut; }
    public function setDateCreation($date) { $this->date_creation = $date; }
    public function setVues($vues) { $this->vues = $vues; }
    public function setCategorieId($catId) { $this->categorie_id = $catId; }
    public function setAuteurId($auteurId) { $this->auteur_id = $auteurId; }

    public function toArray() {
        return [
            'id' => $this->id,
            'titre' => $this->titre,
            'contenu' => $this->contenu,
            'image_couverture' => $this->image_couverture,
            'statut' => $this->statut,
            'date_creation' => $this->date_creation,
            'vues' => $this->vues,
            'categorie_id' => $this->categorie_id,
            'auteur_id' => $this->auteur_id
        ];
    }
}
?>
