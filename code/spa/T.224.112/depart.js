document.addEventListener('DOMContentLoaded', () => {
    const btnShowForm = document.getElementById('btn-show-form');
    const btnCancelForm = document.getElementById('btn-cancel-form');
    const sectionForm = document.getElementById('section-form');
    const formCategorie = document.getElementById('form-categorie');
    const inputId = document.getElementById('cat-id');
    const inputNom = document.getElementById('cat-nom');
    const selectCouleur = document.getElementById('cat-couleur');
    const selectIcone = document.getElementById('cat-icone');
    let ligneEnEdition = null;

    btnShowForm.addEventListener('click', () => {
        sectionForm.hidden = false;
    });

    btnCancelForm.addEventListener('click', () => {
        sectionForm.hidden = true;
        formCategorie.reset();
        inputId.value = '';
        ligneEnEdition = null;
    });

    // TODO : Ajouter la communication avec l'API ici
});
