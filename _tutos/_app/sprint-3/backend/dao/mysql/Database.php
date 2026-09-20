<?php
class Database {
    private static $instance = null;
    private $pdo;

    private function __construct() {
        // Chargement sécurisé des identifiants depuis env.php (non commité sur GitHub)
        $env = require __DIR__ . '/../../env.php';

        $host = $env['db_host'];
        $db   = $env['db_name'];
        $user = $env['db_user'];
        $pass = $env['db_pass'];
        $charset = $env['db_charset'];

        $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        try {
            $this->pdo = new PDO($dsn, $user, $pass, $options);
        } catch (\PDOException $e) {
            die("Erreur de connexion à la base de données : " . $e->getMessage());
        }
    }

    /**
     * Retourne l'instance unique de la connexion (Design Pattern Singleton)
     */
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function getConnection() {
        return $this->pdo;
    }
}
?>
