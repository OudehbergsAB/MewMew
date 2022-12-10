const loadingVisualizer = document.querySelector("[data-loading]");

setInterval(() => {
  loadingVisualizer.textContent =
    loadingVisualizer.textContent.length > 2
      ? ""
      : loadingVisualizer.textContent + ".";
}, 500);

setTimeout(() => location.replace("./../../index.html"), 4000);
