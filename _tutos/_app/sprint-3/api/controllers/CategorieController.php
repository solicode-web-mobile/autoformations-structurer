<?php
require_once __DIR__ . '/../../backend/services/GestionCategorie.php';
require_once __DIR__ . '/../../backend/models/Categorie.php';

class CategorieController {
    private $gestionnaire;

    public function __construct() {
        $this->gestionnaire = new GestionCategorie();
    }

    /**
     * Point d'entrée du contrôleur. Analyse la méthode HTTP.
     */
    public function handleRequest($method) {
        try {
            if ($method === 'GET') {
                $this->get();
            } elseif ($method === 'POST') {
                $this->post();
            } elseif ($method === 'PUT') {
                $this->put();
            } elseif ($method === 'DELETE') {
                $this->delete();
            } else {
                throw new Exception("Méthode HTTP non supportée.");
            }
        } catch (Exception $e) {
            $this->sendResponse('error', $e->getMessage(), 400);
        }
    }

    private function get() {
        $categories = $this->gestionnaire->readAll();
        $arrayData = array_map(function($c) { return $c->toArray(); }, $categories);
        $this->sendResponse('success', '', 200, $arrayData);
    }

    private function post() {
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['nom']) && isset($input['couleur']) && isset($input['icone'])) {
            $cat = new Categorie($input['nom'], $input['couleur'], $input['icone']);
            if ($this->gestionnaire->create($cat)) {
                $this->sendResponse('success', 'Catégorie ajoutée avec succès !');
            } else {
                throw new Exception("Erreur lors de l'enregistrement.");
            }
        } else {
            throw new Exception("Données incomplètes pour la création.");
        }
    }

    private function put() {
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['id']) && isset($input['nom']) && isset($input['couleur']) && isset($input['icone'])) {
            $cat = new Categorie($input['nom'], $input['couleur'], $input['icone'], $input['id']);
            if ($this->gestionnaire->update($cat)) {
                $this->sendResponse('success', 'Catégorie modifiée avec succès !');
            } else {
                throw new Exception("Catégorie introuvable ou erreur de modification.");
            }
        } else {
            throw new Exception("Données incomplètes pour la modification.");
        }
    }

    private function delete() {
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['id'])) {
            if ($this->gestionnaire->delete($input['id'])) {
                $this->sendResponse('success', 'Catégorie supprimée avec succès !');
            } else {
                throw new Exception("Catégorie introuvable ou erreur de suppression.");
            }
        } else {
            throw new Exception("ID manquant pour la suppression.");
        }
    }

    /**
     * Envoie la réponse JSON standardisée
     */
    private function sendResponse($status, $message, $httpCode = 200, $data = null) {
        http_response_code($httpCode);
        $response = ['status' => $status];
        if ($message) $response['message'] = $message;
        if ($data !== null) $response['data'] = $data;
        
        echo json_encode($response);
        exit;
    }
}
?>
