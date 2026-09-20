<?php
require_once __DIR__ . '/../../backend/services/GestionArticle.php';
require_once __DIR__ . '/../../backend/models/Article.php';

class ArticleController {
    private $gestionnaire;

    public function __construct() {
        $this->gestionnaire = new GestionArticle();
    }

    public function handleRequest($method) {
        try {
            if ($method === 'GET') $this->get();
            elseif ($method === 'POST') $this->post();
            elseif ($method === 'PUT') $this->put();
            elseif ($method === 'DELETE') $this->delete();
            else throw new Exception("Méthode HTTP non supportée.");
        } catch (Exception $e) {
            $this->sendResponse('error', $e->getMessage(), 400);
        }
    }

    private function get() {
        $articles = $this->gestionnaire->readAll();
        $arrayData = array_map(function($a) { return $a->toArray(); }, $articles);
        $this->sendResponse('success', '', 200, $arrayData);
    }

    private function post() {
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['titre']) && isset($input['contenu']) && isset($input['categorie_id']) && isset($input['auteur_id'])) {
            $art = new Article($input['titre'], $input['contenu'], $input['image_couverture'] ?? null, $input['statut'] ?? 'brouillon', $input['categorie_id'], $input['auteur_id']);
            if ($this->gestionnaire->create($art)) {
                $this->sendResponse('success', 'Article ajouté avec succès !');
            } else {
                throw new Exception("Erreur lors de l'enregistrement.");
            }
        } else {
            throw new Exception("Données incomplètes pour la création d'un article.");
        }
    }

    private function put() {
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['id']) && isset($input['titre']) && isset($input['contenu']) && isset($input['categorie_id']) && isset($input['auteur_id'])) {
            $art = new Article($input['titre'], $input['contenu'], $input['image_couverture'] ?? null, $input['statut'] ?? 'brouillon', $input['categorie_id'], $input['auteur_id'], $input['id']);
            if ($this->gestionnaire->update($art)) {
                $this->sendResponse('success', 'Article modifié avec succès !');
            } else {
                throw new Exception("Article introuvable ou erreur de modification.");
            }
        } else {
            throw new Exception("Données incomplètes pour la modification.");
        }
    }

    private function delete() {
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['id'])) {
            if ($this->gestionnaire->delete($input['id'])) {
                $this->sendResponse('success', 'Article supprimé avec succès !');
            } else {
                throw new Exception("Article introuvable ou erreur de suppression.");
            }
        } else {
            throw new Exception("ID manquant pour la suppression.");
        }
    }

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
