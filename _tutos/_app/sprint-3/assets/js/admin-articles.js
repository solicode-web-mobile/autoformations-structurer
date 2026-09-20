document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'api/router.php?route=articles';
    const API_CATEGORIES_URL = 'api/router.php?route=categories';
    
    const tableBody = document.getElementById('table-articles-body');
    const formSection = document.getElementById('section-form');
    const form = document.getElementById('form-article');
    const btnShowForm = document.getElementById('btn-show-form');
    const btnCancelForm = document.getElementById('btn-cancel-form');
    
    // UI Elements
    const spinnerSubmit = document.getElementById('spinner-submit');
    const textSubmit = document.getElementById('text-submit');
    const btnSubmit = document.getElementById('btn-submit-form');
    const selectCategorie = document.getElementById('art-categorie');

    let isEditMode = false;

    // Toast Notification
    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
        toast.className = `${bgColor} text-white px-6 py-3 rounded shadow-lg flex items-center gap-2 transform transition-all duration-300 translate-y-10 opacity-0`;
        toast.innerHTML = `<span>${message}</span><button class="ml-4 hover:text-gray-200" onclick="this.parentElement.remove()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>`;
        container.appendChild(toast);
        setTimeout(() => toast.classList.remove('translate-y-10', 'opacity-0'), 10);
        setTimeout(() => { toast.classList.add('opacity-0'); setTimeout(() => toast.remove(), 300); }, 4000);
    }

    // Gérer l'état du bouton
    function setFormLoading(isLoading) {
        if (isLoading) {
            btnSubmit.disabled = true;
            btnSubmit.classList.add('opacity-75', 'cursor-not-allowed');
            spinnerSubmit.classList.remove('hidden');
            textSubmit.textContent = 'Enregistrement...';
        } else {
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('opacity-75', 'cursor-not-allowed');
            spinnerSubmit.classList.add('hidden');
            textSubmit.textContent = 'Enregistrer';
        }
    }

    // Charger les catégories pour le select
    function loadCategories() {
        fetch(API_CATEGORIES_URL)
            .then(res => res.json())
            .then(result => {
                selectCategorie.innerHTML = '<option value="">-- Choisir une catégorie --</option>';
                if (result.status === 'success') {
                    result.data.forEach(cat => {
                        selectCategorie.innerHTML += `<option value="${cat.id}">${cat.nom}</option>`;
                    });
                }
            })
            .catch(() => showToast("Erreur lors du chargement des catégories", "error"));
    }

    // Fetch and display
    function loadArticles() {
        tableBody.innerHTML = '<tr><td colspan="5" class="p-4 text-center text-gray-500"><div class="flex justify-center items-center gap-2"><svg class="animate-spin h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Chargement des articles...</div></td></tr>';
        
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                tableBody.innerHTML = '';
                if (result.status === 'success') {
                    if (result.data.length === 0) {
                        tableBody.innerHTML = '<tr><td colspan="5" class="p-4 text-center text-gray-500">Aucun article trouvé.</td></tr>';
                        return;
                    }
                    result.data.forEach(art => {
                        const tr = document.createElement('tr');
                        tr.className = 'hover:bg-gray-50 transition-colors group';
                        
                        const statusBadge = art.statut === 'publie' 
                            ? '<span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Publié</span>' 
                            : '<span class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">Brouillon</span>';

                        tr.innerHTML = `
                            <td class="p-4">
                                <div class="font-medium text-gray-900">${art.titre}</div>
                                <div class="text-xs text-gray-500">ID: ${art.id}</div>
                            </td>
                            <td class="p-4 text-gray-600">${art.categorie_id}</td>
                            <td class="p-4">${statusBadge}</td>
                            <td class="p-4 text-gray-600">${art.vues}</td>
                            <td class="p-4 text-right space-x-2">
                                <button class="btn-edit text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors opacity-0 group-hover:opacity-100" data-id="${art.id}">Éditer</button>
                                <button class="btn-delete text-red-500 hover:text-red-700 font-medium text-sm transition-colors opacity-0 group-hover:opacity-100" data-id="${art.id}">Supprimer</button>
                            </td>
                        `;
                        tableBody.appendChild(tr);
                    });

                    document.querySelectorAll('.btn-edit').forEach(btn => btn.addEventListener('click', handleEdit));
                    document.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', handleDelete));
                }
            })
            .catch(() => showToast("Erreur lors du chargement des articles.", "error"));
    }

    function toggleForm(show) {
        if (show) {
            formSection.classList.remove('hidden');
            btnShowForm.classList.add('hidden');
        } else {
            formSection.classList.add('hidden');
            btnShowForm.classList.remove('hidden');
            form.reset();
            document.getElementById('art-id').value = '';
            isEditMode = false;
        }
    }

    btnShowForm.addEventListener('click', () => toggleForm(true));
    btnCancelForm.addEventListener('click', () => toggleForm(false));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        setFormLoading(true);

        const id = document.getElementById('art-id').value;
        const article = {
            id: id ? parseInt(id) : null,
            titre: document.getElementById('art-titre').value,
            contenu: document.getElementById('art-contenu').value,
            image_couverture: document.getElementById('art-image').value,
            statut: document.getElementById('art-statut').value,
            categorie_id: parseInt(document.getElementById('art-categorie').value),
            auteur_id: 1 // TODO: Sera géré au Sprint 4
        };

        const method = isEditMode ? 'PUT' : 'POST';

        fetch(API_URL, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(article)
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                showToast(result.message, 'success');
                loadArticles();
                toggleForm(false);
            } else {
                showToast(result.message, 'error');
            }
        })
        .catch(() => showToast("Une erreur est survenue.", "error"))
        .finally(() => setFormLoading(false));
    });

    function handleEdit(e) {
        const id = e.target.getAttribute('data-id');
        fetch(API_URL)
            .then(res => res.json())
            .then(result => {
                if (result.status === 'success') {
                    const article = result.data.find(a => a.id == id);
                    if (article) {
                        document.getElementById('art-id').value = article.id;
                        document.getElementById('art-titre').value = article.titre;
                        document.getElementById('art-contenu').value = article.contenu;
                        document.getElementById('art-image').value = article.image_couverture;
                        document.getElementById('art-statut').value = article.statut;
                        document.getElementById('art-categorie').value = article.categorie_id;
                        
                        isEditMode = true;
                        toggleForm(true);
                        formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
    }

    function handleDelete(e) {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return;
        
        const id = e.target.getAttribute('data-id');
        const btn = e.target;
        const originalText = btn.textContent;
        btn.textContent = '...';
        btn.disabled = true;
        
        fetch(API_URL, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: parseInt(id) })
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                showToast(result.message, 'success');
                loadArticles();
            } else {
                showToast(result.message, 'error');
                btn.textContent = originalText;
                btn.disabled = false;
            }
        })
        .catch(() => showToast("Erreur lors de la suppression.", "error"));
    }

    // Init
    loadCategories();
    loadArticles();
});
