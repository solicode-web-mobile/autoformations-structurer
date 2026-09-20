<?php require_once __DIR__ . '/backend/check_install.php'; ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administration - Articles</title>
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
            <a href="index.php" class="block px-4 py-2 rounded text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">Tableau de bord</a>
            <!-- Lien actif -->
            <a href="admin-articles.php" class="block px-4 py-2 rounded bg-primary-600 text-white font-medium">Articles</a>
            <a href="admin-categories.php" class="block px-4 py-2 rounded text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">Catégories</a>
        </nav>
    </aside>

    <!-- CONTENU PRINCIPAL -->
    <div class="flex-1 flex flex-col h-screen overflow-hidden">
        
        <!-- ENTÊTE (Header) -->
        <header class="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6">
            <div class="font-medium text-gray-600">
                Gestion des articles
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
                        <h1 class="text-2xl font-bold text-gray-900">Articles</h1>
                        <p class="text-sm text-gray-500">Rédigez et publiez vos contenus.</p>
                    </div>
                    <button id="btn-show-form" class="bg-primary-600 text-white px-4 py-2 rounded shadow hover:bg-primary-700 transition">
                        + Nouvel Article
                    </button>
                </div>

                <!-- FORMULAIRE (Caché par défaut) -->
                <div id="section-form" class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hidden">
                    <h2 class="text-lg font-bold mb-4">Rédiger / Modifier un article</h2>
                    <form id="form-article" class="space-y-4">
                        <input type="hidden" id="art-id" value="">
                        
                        <div>
                            <label for="art-titre" class="block text-sm font-semibold text-gray-700 mb-1">Titre</label>
                            <input type="text" id="art-titre" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                        </div>

                        <div>
                            <label for="art-contenu" class="block text-sm font-semibold text-gray-700 mb-1">Contenu</label>
                            <textarea id="art-contenu" required rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
                        </div>

                        <div>
                            <label for="art-image" class="block text-sm font-semibold text-gray-700 mb-1">URL Image de Couverture</label>
                            <input type="url" id="art-image" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="art-categorie" class="block text-sm font-semibold text-gray-700 mb-1">Catégorie</label>
                                <select id="art-categorie" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                                    <option value="">-- Chargement... --</option>
                                    <!-- Les options seront injectées par JS -->
                                </select>
                            </div>
                            <div>
                                <label for="art-statut" class="block text-sm font-semibold text-gray-700 mb-1">Statut</label>
                                <select id="art-statut" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                                    <option value="brouillon">Brouillon</option>
                                    <option value="publie">Publié</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex justify-end gap-2 mt-4">
                            <button type="button" id="btn-cancel-form" class="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100 transition">Annuler</button>
                            <button type="submit" id="btn-submit-form" class="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition flex items-center gap-2">
                                <svg id="spinner-submit" class="animate-spin h-4 w-4 text-white hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span id="text-submit">Enregistrer</span>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- LISTE DES ARTICLES -->
                <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <table class="w-full text-left border-collapse">
                        <thead class="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th class="p-4 text-sm font-semibold text-gray-500 uppercase">Titre</th>
                                <th class="p-4 text-sm font-semibold text-gray-500 uppercase">Cat. ID</th>
                                <th class="p-4 text-sm font-semibold text-gray-500 uppercase">Statut</th>
                                <th class="p-4 text-sm font-semibold text-gray-500 uppercase">Vues</th>
                                <th class="p-4 text-sm font-semibold text-gray-500 uppercase text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="table-articles-body" class="divide-y divide-gray-100">
                            <!-- Les données seront injectées ici par JavaScript -->
                        </tbody>
                    </table>
                </div>

            </div>
        </main>
    </div>

    <!-- Conteneur pour les Toasts -->
    <div id="toast-container" class="fixed bottom-4 right-4 z-50 flex flex-col gap-2"></div>

    <script src="assets/js/admin-articles.js"></script>
</body>
</html>
