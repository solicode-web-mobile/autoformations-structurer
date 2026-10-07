document.addEventListener('DOMContentLoaded', () => {
    
    // Éléments du DOM
    const tbody = document.getElementById('table-categories-body');
    const btnShowForm = document.getElementById('btn-show-form');
    const btnCancelForm = document.getElementById('btn-cancel-form');
    const sectionForm = document.getElementById('section-form');
    const formCategorie = document.getElementById('form-categorie');
    const btnSubmitForm = document.getElementById('btn-submit-form');
    const spinnerSubmit = document.getElementById('spinner-submit');
    const textSubmit = document.getElementById('text-submit');

    // ==========================================
    // 0. FONCTIONS UTILITAIRES UX
    // ==========================================
    
    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `px-4 py-3 rounded shadow-lg text-white text-sm font-medium transition-opacity duration-500 ease-in-out flex items-center gap-2 ${type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`;
        
        const icon = type === 'success' 
            ? `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
            : `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;
            
        toast.innerHTML = `${icon} <span>${message}</span>`;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('opacity-0');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    function setLoadingState(isLoading) {
        if (!btnSubmitForm) return;
        if (isLoading) {
            btnSubmitForm.disabled = true;
            btnSubmitForm.classList.add('opacity-75', 'cursor-not-allowed');
            spinnerSubmit.classList.remove('hidden');
            textSubmit.textContent = 'Enregistrement...';
        } else {
            btnSubmitForm.disabled = false;
            btnSubmitForm.classList.remove('opacity-75', 'cursor-not-allowed');
            spinnerSubmit.classList.add('hidden');
            textSubmit.textContent = 'Enregistrer';
        }
    }

    // ==========================================
    // 1. CHARGEMENT ASYNCHRONE DES DONNÉES
    // ==========================================
    
    /**
     * Appelle l'API en GET pour récupérer la liste des catégories
     */
    function chargerCategories() {
        fetch('api/router.php?route=categories')
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    afficherCategories(result.data);
                } else {
                    showToast(result.message, 'error');
                }
            })
            .catch(error => console.error("Erreur de requête fetch :", error));
    }

    /**
     * Génère le HTML pour insérer les catégories dans le tableau
     */
    function afficherCategories(categories) {
        tbody.innerHTML = ''; // Vider le tableau
        
        categories.forEach(cat => {
            const tr = document.createElement('tr');
            tr.className = "hover:bg-gray-50";
            
            tr.innerHTML = `
                <td class="p-4 text-sm text-gray-500">#${cat.id}</td>
                <td class="p-4 text-sm font-bold text-gray-900">${cat.nom}</td>
                <td class="p-4 text-sm text-gray-600">${cat.couleur}</td>
                <td class="p-4 text-right space-x-2">
                    <button onclick="editerCategorie(${cat.id}, '${cat.nom.replace(/'/g, "\\'")}', '${cat.couleur}', '${cat.icone}')" class="text-primary-600 hover:underline text-sm font-medium">Éditer</button>
                    <button onclick="supprimerCategorie(${cat.id})" class="text-red-600 hover:underline text-sm font-medium">Supprimer</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Fonctions globales pour qu'elles soient accessibles depuis le onclick du HTML généré
    window.editerCategorie = function(id, nom, couleur, icone) {
        // Pré-remplir le formulaire
        document.getElementById('cat-id').value = id;
        document.getElementById('cat-nom').value = nom;
        document.getElementById('cat-couleur').value = couleur;
        document.getElementById('cat-icone').value = icone;
        
        // Afficher le formulaire
        sectionForm.classList.remove('hidden');
        sectionForm.classList.add('block');
        window.scrollTo(0, 0); // Remonter en haut de page
    };

    window.supprimerCategorie = function(id) {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")) {
            fetch('api/router.php?route=categories', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id })
            })
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    chargerCategories();
                    showToast("Catégorie supprimée avec succès.", 'success');
                } else {
                    showToast(result.message, 'error');
                }
            })
            .catch(error => console.error("Erreur de suppression :", error));
        }
    };

    // ==========================================
    // 2. GESTION DE L'AFFICHAGE DU FORMULAIRE
    // ==========================================
    
    btnShowForm.addEventListener('click', () => {
        sectionForm.classList.remove('hidden');
        sectionForm.classList.add('block');
    });

    btnCancelForm.addEventListener('click', () => {
        sectionForm.classList.add('hidden');
        sectionForm.classList.remove('block');
        formCategorie.reset(); // Vider les champs
        document.getElementById('cat-id').value = ''; // Réinitialiser l'ID caché
    });

    // ==========================================
    // 3. SOUMISSION DU FORMULAIRE (SPA)
    // ==========================================
    
    formCategorie.addEventListener('submit', (event) => {
        // Bloquer le rechargement classique de la page HTML
        event.preventDefault();

        // Récupérer les valeurs des champs
        const id = document.getElementById('cat-id').value;
        const nom = document.getElementById('cat-nom').value;
        const couleur = document.getElementById('cat-couleur').value;
        const icone = document.getElementById('cat-icone').value;

        // Déterminer l'action (Création si id est vide, Modification sinon)
        const isUpdate = id !== '';
        
        const data = {
            nom: nom,
            couleur: couleur,
            icone: icone
        };
        
        if (isUpdate) {
            data.id = id;
        }

        const method = isUpdate ? 'PUT' : 'POST';

        setLoadingState(true);

        // Appel asynchrone vers l'API
        fetch('api/router.php?route=categories', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                // Masquer le formulaire et le réinitialiser
                sectionForm.classList.add('hidden');
                formCategorie.reset();
                document.getElementById('cat-id').value = ''; // Réinitialiser l'ID caché
                
                // Recharger la liste pour voir la nouvelle catégorie
                chargerCategories();
                showToast(isUpdate ? "Catégorie modifiée avec succès." : "Catégorie ajoutée avec succès.", 'success');
            } else {
                showToast(result.message, 'error');
            }
        })
        .catch(error => {
            console.error("Erreur lors de l'enregistrement :", error);
            showToast("Une erreur est survenue lors de l'enregistrement.", 'error');
        })
        .finally(() => {
            setLoadingState(false);
        });
    });

    // ==========================================
    // DÉMARRAGE : Charger la liste au premier lancement
    // ==========================================
    chargerCategories();
});
