<?php
/**
 * ROUTEUR PRINCIPAL
 * Ce fichier est le point d'entrée unique de notre API Backend.
 */

// Headers CORS et JSON
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$route = isset($_GET['route']) ? $_GET['route'] : '';
$method = $_SERVER['REQUEST_METHOD'];

switch ($route) {
    case 'categories':
        require_once __DIR__ . '/controllers/CategorieController.php';
        $controller = new CategorieController();
        $controller->handleRequest($method);
        break;

    case 'articles':
        require_once __DIR__ . '/controllers/ArticleController.php';
        $controller = new ArticleController();
        $controller->handleRequest($method);
        break;

    default:
        http_response_code(404);
        echo json_encode([
            'status' => 'error',
            'message' => 'Route non trouvée. (Vérifiez le paramètre ?route=...)'
        ]);
        break;
}
?>
