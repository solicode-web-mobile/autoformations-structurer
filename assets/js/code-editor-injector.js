document.addEventListener("DOMContentLoaded", function () {
    const codeBlocks = document.querySelectorAll(
        "pre > code.language-html, pre > code.language-css, pre > code.language-js, pre > code.language-javascript, pre > code.language-php"
    );

    const getLanguage = (el) => {
        if (el.classList.contains("language-html")) return "html";
        if (el.classList.contains("language-css")) return "css";
        if (el.classList.contains("language-js") || el.classList.contains("language-javascript")) return "js";
        if (el.classList.contains("language-php")) return "php";
        return null;
    };

    codeBlocks.forEach(function (codeBlock) {
        const pre = codeBlock.closest("pre");
        if (!pre) return;

        const language = getLanguage(codeBlock);
        if (!language) return;

        const exampleCode = codeBlock.textContent.trim();
        const buttonWrapper = document.createElement("div");
        buttonWrapper.className = "code-editor-action";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "open-editor-btn";
        button.textContent = "Exécuter le code";

        buttonWrapper.appendChild(button);
        pre.insertAdjacentElement("afterend", buttonWrapper);

        button.addEventListener("click", function () {
            let nextEl = buttonWrapper.nextElementSibling;
            
            // Si l'élément suivant est l'iframe ou son conteneur (généré par iframe-controls.js)
            if (nextEl && (nextEl.matches("iframe.auto-wrapper") || (nextEl.matches("div.iframe-wrapper") && nextEl.querySelector("iframe.auto-wrapper")))) {
                nextEl.style.display = nextEl.style.display === "none" ? "block" : "none";
                return;
            }

            let iframe = document.createElement("iframe");
            iframe.className = "auto-wrapper";
            iframe.height = "500";
            iframe.title = "Résultat du code " + language.toUpperCase();

            const editorUrl = window.editeurCodeUrl || "/editeur-code";
            const pageData = window.pageData || {};
            
            const params = new URLSearchParams();
            const languages = ["html", "css", "js", "php"];
            
            languages.forEach(lang => {
                let content = (language === lang) ? exampleCode : (pageData[lang] || "");
                // Si le contenu est un chemin local (/code/...), le transformer en URL HTTP complète
                // pour que l'éditeur puisse le charger via fetch(), en tenant compte du baseurl Jekyll
                if (content && content.startsWith("/code/")) {
                    const baseUrl = (typeof window.__jekyll_baseurl !== "undefined") ? window.__jekyll_baseurl : "";
                    content = window.location.origin + baseUrl + content;
                }
                if (content) params.set(lang, content);
            });

            params.set("activeTab", language);

            iframe.src = editorUrl + "?" + params.toString();
            iframe.style.display = "block";
            iframe.style.width = "100%";
            iframe.style.border = "none";

            buttonWrapper.insertAdjacentElement("afterend", iframe);

            if (typeof window.initAutoIframe === "function") {
                window.initAutoIframe(iframe);
            }
        });
    });
});
