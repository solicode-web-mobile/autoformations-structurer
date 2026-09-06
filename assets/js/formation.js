/*
 * ==========================================================
 * FORMATION WEB
 * JavaScript — Organisation par template
 * ==========================================================
 */

document.addEventListener("DOMContentLoaded", function () {


  /*
   * ==========================================================
   * BASE
   * ==========================================================
   *
   * Fonctionnalités communes :
   *
   * 1. Version du tutoriel
   * 2. Navigation vers l'étape suivante
   *
   */


  /*
   * ==========================================================
   * BASE — VERSION DU TUTORIEL
   * ==========================================================
   *
   * Valeurs :
   * - compact
   * - normal
   * - detaille
   *
   * Valeur par défaut :
   * - normal
   */

  const tutoVersion =
    localStorage.getItem("tuto_version") || "normal";


  /*
   * Vérifier la valeur enregistrée.
   */

  const validVersions = [
    "compact",
    "normal",
    "detaille"
  ];

  const currentVersion =
    validVersions.includes(tutoVersion)
      ? tutoVersion
      : "normal";

  document.documentElement.dataset.tutoVersion =
    currentVersion;


  /*
   * ==========================================================
   * BASE — NAVIGATION ÉTAPE SUIVANTE
   * ==========================================================
   *
   * L'ordre est défini par next-step.html :
   *
   * Tutoriel suivant
   *       ↓
   * UA suivante
   *       ↓
   * Lab
   *       ↓
   * Prototype
   *       ↓
   * Projet Fil Rouge
   *
   * Pour un tutoriel, la version sélectionnée est conservée.
   */

  const nextStepLink =
    document.querySelector("#next-step-link");

  if (nextStepLink) {

    const nextType =
      nextStepLink.dataset.nextType;


    /*
     * Les Tutoriels possèdent trois versions.
     */

    if (nextType === "tuto") {

      let nextUrl =
        nextStepLink.dataset.normalUrl;


      if (
        currentVersion === "compact" &&
        nextStepLink.dataset.compactUrl
      ) {

        nextUrl =
          nextStepLink.dataset.compactUrl;

      }


      if (
        currentVersion === "detaille" &&
        nextStepLink.dataset.detailleUrl
      ) {

        nextUrl =
          nextStepLink.dataset.detailleUrl;

      }


      nextStepLink.href =
        nextUrl;

    }

  }


  /*
   * ==========================================================
   * TUTO / SESSION
   * ==========================================================
   *
   * Fonctionnalité :
   *
   * - Taille progressive du texte
   * - Mémorisation dans localStorage
   *
   *
   * La taille normale est définie par le CSS.
   * JavaScript applique uniquement une taille personnalisée.
   */


  /*
   * ==========================================================
   * CONTENU
   * ==========================================================
   *
   * Les contrôles existent sur :
   *
   * - Tutoriel
   * - Session
   */

  const content =
    document.querySelector(".tuto-content, .session-page");


  if (!content) {
    return;
  }


  /*
   * ==========================================================
   * BOUTONS
   * ==========================================================
   */

  const increaseButton =
    document.querySelector(
      '[data-text-size-action="increase"]'
    );

  const decreaseButton =
    document.querySelector(
      '[data-text-size-action="decrease"]'
    );

  const resetButton =
    document.querySelector(
      '[data-text-size-action="reset"]'
    );


  /*
   * ==========================================================
   * CONFIGURATION
   * ==========================================================
   */

  const STEP = 2;
  const MIN_SIZE = 12;
  const MAX_SIZE = 32;


  /*
   * ==========================================================
   * TAILLE ENREGISTRÉE
   * ==========================================================
   *
   * null = aucune personnalisation.
   *
   * Dans ce cas, le CSS définit la taille normale.
   */

  const savedSize =
    localStorage.getItem("text_size");

  let fontSize = null;


  if (savedSize !== null) {

    const parsedSize =
      parseInt(savedSize, 10);


    if (
      !Number.isNaN(parsedSize) &&
      parsedSize >= MIN_SIZE &&
      parsedSize <= MAX_SIZE
    ) {

      fontSize =
        parsedSize;

    }

  }


  /*
   * ==========================================================
   * OBTENIR LA TAILLE CSS ACTUELLE
   * ==========================================================
   *
   * Permet de commencer A+ ou A− à partir de la taille
   * réellement définie par le CSS.
   */

  function getCurrentFontSize() {

    return parseFloat(
      window.getComputedStyle(content).fontSize
    );

  }


  /*
   * ==========================================================
   * APPLIQUER UNE TAILLE PERSONNALISÉE
   * ==========================================================
   */

  function applyFontSize() {

    if (fontSize === null) {

      content.style.removeProperty("font-size");

      return;

    }


    content.style.fontSize =
      `${fontSize}px`;

  }


  /*
   * ==========================================================
   * A+
   * ==========================================================
   */

  if (increaseButton) {

    increaseButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();


        /*
         * Première modification :
         * partir de la taille définie par le CSS.
         */

        if (fontSize === null) {

          fontSize =
            getCurrentFontSize();

        }


        fontSize =
          Math.min(
            fontSize + STEP,
            MAX_SIZE
          );


        localStorage.setItem(
          "text_size",
          String(fontSize)
        );


        applyFontSize();

      }
    );

  }


  /*
   * ==========================================================
   * A−
   * ==========================================================
   */

  if (decreaseButton) {

    decreaseButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();


        /*
         * Première modification :
         * partir de la taille définie par le CSS.
         */

        if (fontSize === null) {

          fontSize =
            getCurrentFontSize();

        }


        fontSize =
          Math.max(
            fontSize - STEP,
            MIN_SIZE
          );


        localStorage.setItem(
          "text_size",
          String(fontSize)
        );


        applyFontSize();

      }
    );

  }


  /*
   * ==========================================================
   * A — TAILLE NORMALE
   * ==========================================================
   *
   * Supprimer la personnalisation JavaScript.
   *
   * La taille normale revient donc automatiquement
   * à celle définie dans le CSS.
   */

  if (resetButton) {

    resetButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();


        fontSize =
          null;


        localStorage.removeItem(
          "text_size"
        );


        content.style.removeProperty(
          "font-size"
        );

      }
    );

  }


  /*
   * ==========================================================
   * INITIALISATION
   * ==========================================================
   *
   * Restaurer uniquement une taille personnalisée
   * réellement enregistrée.
   *
   * Sinon, ne rien modifier :
   * le CSS reste maître de la taille normale.
   */

  applyFontSize();

});

