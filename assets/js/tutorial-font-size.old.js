document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector("#main-content");
  const buttons = document.querySelectorAll("[data-font-size]");

  if (!content) return;

  const STORAGE_KEY = "tutorial-font-size";

  const STEP = 0.1;
  const DEFAULT_SIZE = 1;
  const MIN_SIZE = 0.7;
  const MAX_SIZE = 1.8;

  let currentSize = parseFloat(
    localStorage.getItem(STORAGE_KEY)
  );

  // Valeur par défaut
  if (
    isNaN(currentSize) ||
    currentSize < MIN_SIZE ||
    currentSize > MAX_SIZE
  ) {
    currentSize = DEFAULT_SIZE;
  }

  function applyFontSize() {
    content.style.fontSize = `${currentSize}em`;

    // Enregistrer la taille
    localStorage.setItem(
      STORAGE_KEY,
      currentSize.toString()
    );
  }

  // Restaurer la taille enregistrée
  applyFontSize();

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const action = button.dataset.fontSize;

      if (action === "large") {
        currentSize = Math.min(
          currentSize + STEP,
          MAX_SIZE
        );
      }

      if (action === "small") {
        currentSize = Math.max(
          currentSize - STEP,
          MIN_SIZE
        );
      }

      if (action === "reset") {
        currentSize = DEFAULT_SIZE;
      }

      applyFontSize();
    });
  });
});