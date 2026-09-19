document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".tuto-content, .session-page");
  if (!content) return;

  const increaseBtn = document.querySelector('[data-text-size-action="increase"]');
  const decreaseBtn = document.querySelector('[data-text-size-action="decrease"]');
  const resetBtn = document.querySelector('[data-text-size-action="reset"]');

  const STEP = 2, MIN_SIZE = 12, MAX_SIZE = 32;
  const savedSize = parseInt(localStorage.getItem("text_size"), 10);
  let fontSize = (!Number.isNaN(savedSize) && savedSize >= MIN_SIZE && savedSize <= MAX_SIZE) ? savedSize : null;

  function applyFontSize() {
    if (fontSize === null) {
      content.style.removeProperty("font-size");
    } else {
      content.style.fontSize = `${fontSize}px`;
    }
  }

  function updateFontSize(change) {
    if (fontSize === null) {
      fontSize = parseFloat(window.getComputedStyle(content).fontSize);
    }
    fontSize = Math.max(MIN_SIZE, Math.min(MAX_SIZE, fontSize + change));
    localStorage.setItem("text_size", fontSize);
    applyFontSize();
  }

  if (increaseBtn) {
    increaseBtn.addEventListener("click", e => { e.preventDefault(); updateFontSize(STEP); });
  }
  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", e => { e.preventDefault(); updateFontSize(-STEP); });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", e => {
      e.preventDefault();
      fontSize = null;
      localStorage.removeItem("text_size");
      applyFontSize();
    });
  }

  applyFontSize();
});
