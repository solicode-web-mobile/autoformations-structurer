document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".fullscreenable");
    
    blocks.forEach(block => {
        // S'assurer que le bloc est en position relative
        block.style.position = "relative";
        
        const btn = document.createElement("button");
        btn.className = "fullscreen-toggle-btn";
        btn.title = "Plein écran";
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`;
        
        block.appendChild(btn);
        
        btn.addEventListener("click", () => {
            if (!document.fullscreenElement) {
                if (block.requestFullscreen) block.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });
        
        document.addEventListener("fullscreenchange", () => {
            if (document.fullscreenElement === block) {
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>`;
                btn.title = "Quitter le plein écran";
            } else {
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`;
                btn.title = "Plein écran";
            }
        });
    });
});
