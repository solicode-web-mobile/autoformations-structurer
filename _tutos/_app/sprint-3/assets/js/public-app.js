document.addEventListener('DOMContentLoaded', () => {
    const articlesGrid = document.getElementById('articles-grid');
    const loader = document.getElementById('loader');

    // Charger les articles depuis l'API 
    // L'API pointera elle-même vers DAOFactory, qui retournera la donnée JSON ou MySQL selon config.php !
    fetch('api/router.php?route=articles')
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                afficherArticles(result.data);
            } else {
                articlesGrid.innerHTML = `<p class="col-span-full text-center text-red-500">Erreur : ${result.message}</p>`;
            }
        })
        .catch(error => {
            console.error("Erreur de fetch :", error);
            articlesGrid.innerHTML = `<p class="col-span-full text-center text-red-500">Impossible de charger les articles.</p>`;
        });

    function afficherArticles(articles) {
        // Enlever le loader
        if (loader) loader.remove();

        if (articles.length === 0) {
            articlesGrid.innerHTML = `<p class="col-span-full text-center text-gray-500">Aucun article n'a été publié pour le moment.</p>`;
            return;
        }

        articlesGrid.innerHTML = ''; // Nettoyer la grille

        articles.forEach(art => {
            // Création d'une "Carte" (Card) avec Tailwind
            const card = document.createElement('article');
            card.className = "bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100";
            
            // Image par défaut si aucune image n'a été fournie
            const imgSrc = art.image_couverture || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80';
            
            card.innerHTML = `
                <img src="${imgSrc}" alt="${art.titre}" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-semibold px-2 py-1 bg-primary-50 text-primary-600 rounded-full">Catégorie ${art.categorie_id}</span>
                        <span class="text-xs text-gray-400">${new Date(art.date_creation).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">${art.titre}</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">${art.contenu}</p>
                    <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span class="text-sm font-medium text-gray-900">Auteur ${art.auteur_id}</span>
                        <span class="text-xs text-gray-500 flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                            ${art.vues}
                        </span>
                    </div>
                </div>
            `;
            
            articlesGrid.appendChild(card);
        });
    }
});
