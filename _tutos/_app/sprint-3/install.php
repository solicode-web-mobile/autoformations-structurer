<?php
// Script d'installation automatique pour le Niveau 2 (Spartel Blog)
$message = '';
$status = '';
$envFile = __DIR__ . '/backend/env.php';

// Si le fichier env.php existe déjà, on pré-remplit les champs
$defaultStorage = 'mysql';
$defaultHost = '127.0.0.1';
$defaultDb   = 'blog_n2';
$defaultUser = 'root';
$defaultPass = '';

if (file_exists($envFile)) {
    $env = require $envFile;
    $defaultStorage = $env['storage_type'] ?? $defaultStorage;
    $defaultHost = $env['db_host'] ?? $defaultHost;
    $defaultDb   = $env['db_name'] ?? $defaultDb;
    $defaultUser = $env['db_user'] ?? $defaultUser;
    $defaultPass = $env['db_pass'] ?? $defaultPass;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $storage = $_POST['storage_type'] ?? 'mysql';
    $host = $_POST['db_host'] ?? '127.0.0.1';
    $db   = $_POST['db_name'] ?? 'blog_n2';
    $user = $_POST['db_user'] ?? 'root';
    $pass = $_POST['db_pass'] ?? '';

    // 1. Sauvegarder la configuration dans env.php
    $envContent = "<?php\n// FICHIER GÉNÉRÉ AUTOMATIQUEMENT PAR INSTALL.PHP\nreturn [\n";
    $envContent .= "    'storage_type' => '$storage',\n";
    $envContent .= "    'db_host' => '$host',\n";
    $envContent .= "    'db_name' => '$db',\n";
    $envContent .= "    'db_user' => '$user',\n";
    $envContent .= "    'db_pass' => '$pass',\n";
    $envContent .= "    'db_charset' => 'utf8mb4'\n";
    $envContent .= "];\n?>";

    if (file_put_contents($envFile, $envContent) !== false) {
        
        if ($storage === 'mysql') {
            // 2. Tenter la connexion et exécuter init.sql (Uniquement si MySQL est choisi)
            try {
                $dsn = "mysql:host=$host;charset=utf8mb4";
                $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
                
                $sqlFile = __DIR__ . '/backend/storage/init.sql';
                if (file_exists($sqlFile)) {
                    $sql = file_get_contents($sqlFile);
                    $pdo->exec($sql);
                    
                    $message = "Installation réussie ! Le stockage MySQL a été configuré et la base de données a été créée.";
                    $status = 'success';
                } else {
                    $message = "Configuration sauvegardée, mais impossible de trouver <em>backend/storage/init.sql</em>.";
                    $status = 'error';
                }
            } catch (Exception $e) {
                $message = "Configuration sauvegardée, mais la connexion MySQL a échoué : " . $e->getMessage();
                $status = 'error';
            }
        } else {
            // Si JSON est choisi, on a juste besoin de sauvegarder env.php
            $message = "Installation réussie ! L'application est configurée pour utiliser les fichiers JSON.";
            $status = 'success';
        }

    } else {
        $message = "Erreur : Impossible d'écrire dans <strong>backend/env.php</strong>. Vérifiez les permissions de votre dossier.";
        $status = 'error';
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Installation - Blog Spartel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        function toggleMysqlFields() {
            const storage = document.getElementById('storage_type').value;
            const mysqlFields = document.getElementById('mysql_fields');
            if(storage === 'json') {
                mysqlFields.classList.add('hidden');
            } else {
                mysqlFields.classList.remove('hidden');
            }
        }
    </script>
</head>
<body class="bg-gray-50 text-gray-800 flex items-center justify-center min-h-screen p-4" onload="toggleMysqlFields()">
    <div class="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border border-gray-100">
        
        <div class="text-center mb-8">
            <div class="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h1 class="text-3xl font-extrabold text-gray-900 mb-2">Configuration du Blog</h1>
            <p class="text-gray-500">Configurez votre environnement d'accès aux données.</p>
        </div>
        
        <?php if ($message): ?>
            <div class="p-4 mb-6 rounded-lg text-sm font-medium text-left <?php echo $status === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'; ?>">
                <?php echo $message; ?>
            </div>
            
            <?php if ($status === 'success'): ?>
                <div class="flex gap-4 justify-center mt-6">
                    <a href="index.php" class="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center flex-1">Tableau de bord</a>
                    <a href="public-index.php" class="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-center flex-1">Voir le site</a>
                </div>
            <?php endif; ?>
        <?php endif; ?>

        <?php if ($status !== 'success'): ?>
            <form method="POST" class="space-y-4 text-left">
                
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                    <label class="block text-sm font-bold text-blue-900 mb-2">Technologie de stockage (DAO)</label>
                    <select name="storage_type" id="storage_type" onchange="toggleMysqlFields()" class="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-medium">
                        <option value="mysql" <?php echo $defaultStorage === 'mysql' ? 'selected' : ''; ?>>Base de données (MySQL)</option>
                        <option value="json" <?php echo $defaultStorage === 'json' ? 'selected' : ''; ?>>Fichiers locaux (JSON)</option>
                    </select>
                </div>

                <div id="mysql_fields" class="space-y-4">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Hôte (Host)</label>
                        <input type="text" name="db_host" value="<?php echo htmlspecialchars($defaultHost); ?>" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Nom de la base de données</label>
                        <input type="text" name="db_name" value="<?php echo htmlspecialchars($defaultDb); ?>" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Utilisateur MySQL</label>
                            <input type="text" name="db_user" value="<?php echo htmlspecialchars($defaultUser); ?>" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Mot de passe</label>
                            <input type="password" name="db_pass" value="<?php echo htmlspecialchars($defaultPass); ?>" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                        </div>
                    </div>
                </div>

                <button type="submit" class="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition w-full flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Sauvegarder & Installer
                </button>
            </form>
        <?php endif; ?>
    </div>
</body>
</html>
