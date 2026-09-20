<?php
// Vérifie si le projet est configuré (présence du fichier env.php).
// Si ce n'est pas le cas, on redirige le navigateur vers la page d'installation.
if (!file_exists(__DIR__ . '/env.php')) {
    header('Location: install.php');
    exit;
}
?>
