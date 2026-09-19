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
});