document.addEventListener("DOMContentLoaded", function () {
    const sideBar = document.querySelector(".side-bar");
    const mainContent = document.querySelector(".main");
    const mainHeader = document.querySelector(".main-header");

    if (!sideBar || !mainContent || !mainHeader) {
        return;
    }

    // SVG Icons pour l'état ouvert et fermé (Design minimaliste)
    const iconOpen = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
    `;

    const iconClosed = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21" opacity="0.3"></line>
        </svg>
    `;

    // Créer le bouton
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "sidebar-toggle-btn";
    toggleBtn.style.marginRight = "auto";
    
    // Insérer dans le header
    mainHeader.insertBefore(toggleBtn, mainHeader.firstChild);

    function updateBtnState(isHidden) {
        if (isHidden) {
            toggleBtn.setAttribute("aria-label", "Afficher la barre latérale");
            toggleBtn.title = "Afficher le menu";
            toggleBtn.innerHTML = iconClosed;
        } else {
            toggleBtn.setAttribute("aria-label", "Masquer la barre latérale");
            toggleBtn.title = "Masquer le menu";
            toggleBtn.innerHTML = iconOpen;
        }
    }

    // Récupérer l'état sauvegardé
    let isHidden = localStorage.getItem("sidebar_hidden") === "true";
    
    // Application initiale (sans transition pour éviter l'effet flash)
    if (isHidden) {
        sideBar.classList.add("sidebar-hidden", "no-transition");
        mainContent.classList.add("sidebar-hidden-main", "no-transition");
    }
    updateBtnState(isHidden);

    // Retirer les classes no-transition après le premier rendu
    setTimeout(() => {
        sideBar.classList.remove("no-transition");
        mainContent.classList.remove("no-transition");
    }, 50);

    // Gestion du clic
    toggleBtn.addEventListener("click", function () {
        isHidden = !isHidden;
        
        if (isHidden) {
            sideBar.classList.add("sidebar-hidden");
            mainContent.classList.add("sidebar-hidden-main");
            localStorage.setItem("sidebar_hidden", "true");
        } else {
            sideBar.classList.remove("sidebar-hidden");
            mainContent.classList.remove("sidebar-hidden-main");
            localStorage.setItem("sidebar_hidden", "false");
        }
        
        updateBtnState(isHidden);
    });
});
