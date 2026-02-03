// FORMULARIO (DEMO)
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente (demo)");
  });
}

// PARALLAX POR CAPAS
const layers = document.querySelectorAll(".parallax-layer");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  layers.forEach(layer => {
    if (layer.classList.contains("layer-back")) {
      layer.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
    if (layer.classList.contains("layer-mid")) {
      layer.style.transform = `translateY(${scrollY * 0.35}px)`;
    }
    if (layer.classList.contains("layer-front")) {
      layer.style.transform = `translateY(${scrollY * 0.6}px)`;
    }
  });
});
