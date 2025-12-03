// --- CONTROL DE CATÁLOGOS: JUGADOR vs EQUIPO ---
function updatePickCatalogs() {
  const selection = document.getElementById("pick_selectionType").value;
  const jugadorDiv = document.getElementById("pick_jugadorCatalogo");
  const equipoDiv = document.getElementById("pick_equipoCatalogo");

  if (selection === "jugador") {
    jugadorDiv.style.display = "block";
    equipoDiv.style.display = "none";

  } else if (selection === "equipo") {
    jugadorDiv.style.display = "none";
    equipoDiv.style.display = "block";
  }
}

// Escuchar cuando cambia el selector
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("pick_selectionType");
  if (selector) {
    selector.addEventListener("change", updatePickCatalogs);
    updatePickCatalogs(); // Ejecuta al cargar la página
  }
});
