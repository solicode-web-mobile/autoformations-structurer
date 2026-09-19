document.addEventListener("DOMContentLoaded", function () {
  const validVersions = ["compact", "normal", "detaille"];
  const currentVersion = validVersions.includes(localStorage.getItem("tuto_version")) 
    ? localStorage.getItem("tuto_version") 
    : "normal";

  document.documentElement.dataset.tutoVersion = currentVersion;

  const nextStepLink = document.querySelector("#next-step-link");
  
  if (nextStepLink && nextStepLink.dataset.nextType === "tuto") {
    if (currentVersion === "compact" && nextStepLink.dataset.compactUrl) {
      nextStepLink.href = nextStepLink.dataset.compactUrl;
    } else if (currentVersion === "detaille" && nextStepLink.dataset.detailleUrl) {
      nextStepLink.href = nextStepLink.dataset.detailleUrl;
    } else {
      nextStepLink.href = nextStepLink.dataset.normalUrl;
    }
  }
});
