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
    
    mermaid.initialize({ startOnLoad: true });
});
