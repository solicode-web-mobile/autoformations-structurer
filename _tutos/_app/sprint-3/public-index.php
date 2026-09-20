<?php require_once __DIR__ . '/backend/check_install.php'; ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Spartel - Accueil</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: { primary: { 50: '#f0f6ff', 500: '#2673e8', 600: '#1c5bba', 900: '#0a2042' } }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">

    <!-- En-tête -->
    <header class="bg-white shadow-sm sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex flex-col">
                <h1 class="text-2xl font-bold text-primary-600">Blog Spartel</h1>
                <span class="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">Sprint 3</span>
            </div>
            <nav class="space-x-4">
                <a href="#" class="text-gray-600 hover:text-primary-600 font-medium">Accueil</a>
                <a href="index.php" class="text-gray-600 hover:text-primary-600 font-medium">Administration</a>
            </nav>
        </div>
    </header>

    <!-- Section Principale (Hero + Grid) -->
    <main class="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
        <div class="mb-12 text-center">
            <h2 class="text-4xl font-extrabold text-gray-900 mb-4">Derniers Articles</h2>
            <p class="text-lg text-gray-600">Découvrez nos dernières actualités et tutoriels.</p>
        </div>

        <!-- Conteneur Grid pour les articles -->
        <div id="articles-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Loader Spinner par défaut -->
            <div class="col-span-full flex justify-center py-12" id="loader">
                <svg class="animate-spin h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
            <!-- Les articles seront injectés ici par public-app.js -->
        </div>
    </main>

    <!-- Pied de page -->
    <footer class="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
        <p>&copy; 2024 Blog Spartel. Tous droits réservés.</p>
    </footer>

    <script src="assets/js/public-app.js"></script>
</body>
</html>
