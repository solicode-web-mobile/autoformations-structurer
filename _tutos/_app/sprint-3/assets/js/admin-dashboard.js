document.addEventListener('DOMContentLoaded', () => {
    
    // Fonction utilitaire (copiée de l'app.js)
    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        
        const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
        
        toast.className = `${bgColor} text-white px-6 py-3 rounded shadow-lg flex items-center gap-2 transform transition-all duration-300 translate-y-10 opacity-0`;
        toast.innerHTML = `
            <span>${message}</span>
            <button class="ml-4 hover:text-gray-200" onclick="this.parentElement.remove()">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.remove('translate-y-10', 'opacity-0');
        }, 10);
        
        setTimeout(() => {
            toast.classList.add('opacity-0');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    // Charger les statistiques
    function loadStats() {
        // 1. Fetch Categories
        fetch('api/router.php?route=categories')
            .then(res => res.json())
            .then(result => {
                if(result.status === 'success') {
                    document.getElementById('count-categories').textContent = result.data.length;
                }
            })
            .catch(() => showToast("Erreur lors du chargement des statistiques des catégories.", "error"));

        // 2. Fetch Articles
        fetch('api/router.php?route=articles')
            .then(res => res.json())
            .then(result => {
                if(result.status === 'success') {
                    document.getElementById('count-articles').textContent = result.data.length;
                }
            })
            .catch(() => showToast("Erreur lors du chargement des statistiques des articles.", "error"));
    }

    loadStats();
});
