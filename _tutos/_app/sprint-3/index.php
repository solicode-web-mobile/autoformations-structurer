<?php require_once __DIR__ . '/backend/check_install.php'; ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administration - Tableau de bord</title>
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
<body class="bg-gray-100 text-gray-800 flex h-screen overflow-hidden">

    <!-- BARRE LATÉRALE (Sidebar) -->
    <aside class="w-64 bg-gray-900 text-white flex flex-col hidden md:flex">
        <div class="p-6 border-b border-gray-800">
            <h2 class="text-xl font-bold">Admin Blog</h2>
            <p class="text-xs text-primary-500 mt-1 uppercase font-semibold tracking-wider">Sprint 3</p>
        </div>
        <nav class="flex-1 p-4 space-y-2">
            <!-- Lien actif -->
            <a href="index.php" class="block px-4 py-2 rounded bg-primary-600 text-white font-medium">Tableau de bord</a>
            <a href="admin-articles.php" class="block px-4 py-2 rounded text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">Articles</a>
            <a href="admin-categories.php" class="block px-4 py-2 rounded text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">Catégories</a>
        </nav>
    </aside>

    <!-- CONTENU PRINCIPAL -->
    <div class="flex-1 flex flex-col h-screen overflow-hidden">
        
        <!-- ENTÊTE (Header) -->
        <header class="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6">
            <div class="font-medium text-gray-600">
                Tableau de bord
            </div>
            <div class="flex items-center gap-4">
                <a href="public-index.php" class="text-sm text-primary-600 hover:underline font-medium">Voir le site</a>
                <span class="text-sm font-semibold text-gray-700">Admin</span>
            </div>
        </header>

        <!-- ZONE DE TRAVAIL (Main) -->
        <main class="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div class="max-w-5xl mx-auto space-y-8">
                
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900">Bienvenue sur votre Tableau de bord</h1>
                        <p class="text-sm text-gray-500">Aperçu rapide de votre blog.</p>
                    </div>
                </div>

                <!-- STATISTIQUES (Cards) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Carte Catégories -->
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
                        <div class="p-4 bg-primary-50 text-primary-600 rounded-full mr-4">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <div>
                            <h3 class="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Catégories</h3>
                            <p class="text-3xl font-bold text-gray-900" id="count-categories">...</p>
                        </div>
                    </div>
                    
                    <!-- Carte Articles -->
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
                        <div class="p-4 bg-green-50 text-green-600 rounded-full mr-4">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </div>
                        <div>
                            <h3 class="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Articles</h3>
                            <p class="text-3xl font-bold text-gray-900" id="count-articles">...</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>

    <!-- Conteneur pour les Toasts -->
    <div id="toast-container" class="fixed bottom-4 right-4 z-50 flex flex-col gap-2"></div>

    <script src="assets/js/admin-dashboard.js"></script>
</body>
</html>
