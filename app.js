(() => {
  "use strict";
  const button = document.getElementById("lang-toggle");
  let language = "en";
  try { language = localStorage.getItem("jianan-language") === "zh" ? "zh" : "en"; } catch (_) {}

  function applyLanguage() {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh" ? "李家楠 — 项目介绍" : "Jianan Li — Project Overview";
    document.querySelectorAll("[data-en][data-zh]").forEach(element => {
      element.textContent = element.dataset[language];
    });
    button.children[0].classList.toggle("is-active", language === "en");
    button.children[2].classList.toggle("is-active", language === "zh");
    button.setAttribute("aria-label", language === "en" ? "切换到中文 / Switch to Chinese" : "Switch to English / 切换到英文");
    document.querySelectorAll(".media-fig video").forEach(video => {
      video.setAttribute("aria-label", video.closest("figure").querySelector("figcaption").textContent);
    });
    try { localStorage.setItem("jianan-language", language); } catch (_) {}
  }

  document.querySelectorAll("[data-media]").forEach(figure => {
    const media = (window.PROJECT_MEDIA || {})[figure.dataset.media];
    if (!media || !media.src) return;
    const safeURL = value => {
      try { return ["http:", "https:", "file:"].includes(new URL(value, document.baseURI).protocol); }
      catch (_) { return false; }
    };
    if (!safeURL(media.src)) return;
    const video = document.createElement("video");
    video.controls = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.src = media.src;
    if (media.poster && safeURL(media.poster)) video.poster = media.poster;
    video.textContent = "Your browser does not support video playback.";
    figure.querySelector(".media-placeholder").replaceWith(video);
  });

  const ablationDialog = document.getElementById("ablation-dialog");
  document.querySelectorAll("[data-open-ablation]").forEach(trigger => {
    trigger.addEventListener("click", () => ablationDialog.showModal());
  });

  button.addEventListener("click", () => {
    language = language === "en" ? "zh" : "en";
    applyLanguage();
  });
  applyLanguage();
})();
