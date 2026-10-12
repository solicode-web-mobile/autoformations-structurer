document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll(".btn-toggle-resultat");
  
  toggleButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      let currentElem = this;
      let nextElem = currentElem.nextElementSibling;
      
      if (!nextElem && currentElem.parentElement && currentElem.parentElement.tagName === 'P') {
          nextElem = currentElem.parentElement.nextElementSibling;
      }

      let targetIframe = null;

      while (nextElem) {
        if (nextElem.classList && nextElem.classList.contains("tuto-resultat")) {
            targetIframe = nextElem;
            break;
        }
        if (nextElem.querySelector && nextElem.querySelector('.tuto-resultat')) {
            targetIframe = nextElem.querySelector('.tuto-resultat');
            break;
        }
        nextElem = nextElem.nextElementSibling;
      }
      
      if (targetIframe) {
        let wrapper = targetIframe.closest('.iframe-wrapper');
        let elementToToggle = wrapper ? wrapper : targetIframe;
        
        elementToToggle.classList.toggle("show");
        
        if (elementToToggle.classList.contains("show")) {
          this.textContent = "Masquer le résultat";
        } else {
          this.textContent = "Afficher le résultat";
        }
      } else {
          console.error("Impossible de trouver l'élément tuto-resultat associé à ce bouton.");
      }
    });
  });

  // --- UI/UX Customizations (Sidebar & Action Bar) ---

  // 1. Sidebar Toggle
  const sidebar = document.getElementById('tuto-sidebar');
  const sidebarToggleBtn = document.getElementById('tuto-sidebar-toggle');
  const sidebarOpenBtn = document.getElementById('tuto-sidebar-open-btn');

  if (sidebar) {
    const savedSidebarState = localStorage.getItem('tutoSidebarState');
    if (savedSidebarState === 'collapsed') {
      sidebar.classList.add('collapsed');
    }

    function toggleSidebar() {
      sidebar.classList.toggle('collapsed');
      if (sidebar.classList.contains('collapsed')) {
        localStorage.setItem('tutoSidebarState', 'collapsed');
      } else {
        localStorage.setItem('tutoSidebarState', 'expanded');
      }
    }

    if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', toggleSidebar);
    if (sidebarOpenBtn) sidebarOpenBtn.addEventListener('click', toggleSidebar);
  }

  // 2. Floating Action Bar Position
  const actionBar = document.getElementById('tuto-action-bar');
  const actionBarPosBtn = document.getElementById('tuto-action-bar-pos-btn');

  if (actionBar && actionBarPosBtn) {
    const savedActionBarPos = localStorage.getItem('tutoActionBarPos');
    if (savedActionBarPos === 'top') {
      actionBar.classList.add('pos-top');
    }

    actionBarPosBtn.addEventListener('click', function() {
      actionBar.classList.toggle('pos-top');
      if (actionBar.classList.contains('pos-top')) {
        localStorage.setItem('tutoActionBarPos', 'top');
      } else {
        localStorage.setItem('tutoActionBarPos', 'bottom');
      }
    });
  }

  // 3. Floating Action Bar Pin/Unpin
  const actionBarPinBtn = document.getElementById('tuto-action-bar-pin-btn');

  if (actionBar && actionBarPinBtn) {
    const savedActionBarPin = localStorage.getItem('tutoActionBarPin');
    if (savedActionBarPin === 'unpinned') {
      actionBar.classList.add('unpinned');
      actionBarPinBtn.style.opacity = '0.5';
    }

    actionBarPinBtn.addEventListener('click', function() {
      actionBar.classList.toggle('unpinned');
      if (actionBar.classList.contains('unpinned')) {
        localStorage.setItem('tutoActionBarPin', 'unpinned');
        actionBarPinBtn.style.opacity = '0.5';
      } else {
        localStorage.setItem('tutoActionBarPin', 'pinned');
        actionBarPinBtn.style.opacity = '1';
      }
    });
  }

});