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
            let iframe = buttonWrapper.nextElementSibling;
            if (iframe && iframe.matches("iframe.auto-wrapper")) {
                iframe.style.display = "block";
                return;
            }

            iframe = document.createElement("iframe");
            iframe.className = "auto-wrapper";
            iframe.height = "500";
            iframe.title = "Résultat du code " + language.toUpperCase();

            const editorUrl = window.editeurCodeUrl || "/editeur-code";
            const pageData = window.pageData || {};
            
            const params = new URLSearchParams();
            const languages = ["html", "css", "js", "php"];
            
            languages.forEach(lang => {
                const content = (language === lang) ? exampleCode : (pageData[lang] || "");
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
