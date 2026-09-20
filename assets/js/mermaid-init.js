import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@12/dist/mermaid.esm.min.mjs';

document.addEventListener("DOMContentLoaded", function () {
    // Jekyll/Kramdown outputs <pre><code class="language-mermaid">
    // Mermaid needs <div class="mermaid">
    const mermaidBlocks = document.querySelectorAll("pre code.language-mermaid");
    
    mermaidBlocks.forEach(function (block) {
        const div = document.createElement("div");
        div.className = "mermaid";
        div.textContent = block.textContent;
        block.parentElement.replaceWith(div);
    });
    
    mermaid.initialize({ startOnLoad: false });

    // Rendre les diagrammes uniquement lorsque le document est visible 
    // (utile pour les iframes cachées par défaut)
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            observer.disconnect();
            // On s'assure qu'il y a des éléments à rendre
            if (document.querySelectorAll('.mermaid').length > 0) {
                mermaid.run({ querySelector: '.mermaid' }).catch(e => console.error(e));
            }
        }
    });

    observer.observe(document.body);
});
