<?php
require_once __DIR__ . '/interfaces/ICategorieDAO.php';
require_once __DIR__ . '/interfaces/IArticleDAO.php';
require_once __DIR__ . '/mysql/CategorieDAOMySQL.php';
require_once __DIR__ . '/mysql/ArticleDAOMySQL.php';
require_once __DIR__ . '/json/CategorieDAOJSON.php';
require_once __DIR__ . '/json/ArticleDAOJSON.php';

class DAOFactory {
    
    private static function getStorageType() {
        // Lecture depuis le fichier d'environnement global
        $env = require __DIR__ . '/../env.php';
        return $env['storage_type'] ?? 'json';
    }

    public static function getCategorieDAO() {
        $type = self::getStorageType();
        if ($type === 'mysql') {
            return new CategorieDAOMySQL();
        } else {
            return new CategorieDAOJSON();
        }
    }

    public static function getArticleDAO() {
        $type = self::getStorageType();
        if ($type === 'mysql') {
            return new ArticleDAOMySQL();
        } else {
            return new ArticleDAOJSON();
        }
    }
}
?>
