// ==================== FUNCIÓN PARA RENDERIZAR PRODUCTOS POR CATEGORÍA ====================
function renderCategoryProducts(categoryId, categoryName, categoryIcon) {
  // Verificar que products existe y es un array válido
  if (!Array.isArray(products)) {
    console.error("❌ Error: products no es un array válido o no está cargado aún", products);
    return;
  }

  // Filtrar productos por categoría (más seguro)
  const filteredProducts = products.filter(p => p && p.category === categoryId);

  const container = document.getElementById("products");
  
  if (!container) {
    console.error("❌ Error: No se encontró el contenedor #products");
    return;
  }

  // Limpiar contenedor
  container.innerHTML = "";

  // Actualizar título y subtítulo de la página
  const titleElement = document.querySelector(".products-title");
  const subtitleElement = document.querySelector(".products-subtitle");
  
  if (titleElement) {
    titleElement.innerHTML = `${categoryIcon} ${categoryName}`;
  }

  if (subtitleElement) {
    subtitleElement.innerHTML = `Productos disponibles en ${categoryName}`;
  }

  // Mostrar mensaje si no hay productos
  if (filteredProducts.length === 0) {
    container.innerHTML = `<p class="no-results">No hay productos disponibles en ${categoryName}</p>`;
    return;
  }

  // Verificar que createCard existe
  if (typeof createCard !== 'function') {
    console.error("❌ Error: createCard no está definida. Verifica que app.js esté cargado antes");
    return;
  }

  // Renderizar cada producto
  filteredProducts.forEach(product => {
    try {
      const card = createCard(product);

      if (card instanceof HTMLElement) {
        container.appendChild(card);
      } else {
        console.warn("⚠️ createCard no devolvió un elemento válido:", card);
      }

    } catch (error) {
      console.error("❌ Error renderizando producto:", product, error);
    }
  });
}


// ==================== DETECTAR PÁGINA Y CARGAR CATEGORÍA ====================
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const pageName = path.split("/").pop().replace(".html", "");

  const categoryMap = {
    "pinturas": { id: "pinturas", name: "Pinturas", icon: "🎨" },
    "vitrificantes": { id: "vitrificantes", name: "Vitrificantes", icon: "✨" },
    "renovadores": { id: "renovadores", name: "Renovadores", icon: "🔄" },
    "sellantes": { id: "sellantes", name: "Sellantes", icon: "🛡️" },
    "ceras": { id: "ceras", name: "Ceras", icon: "🪙" },
    "brillos": { id: "brillos", name: "Brillos", icon: "✨" },
    "limpieza": { id: "limpieza", name: "Limpieza", icon: "🧼" }
  };

  if (categoryMap[pageName]) {
    const cat = categoryMap[pageName];

    // Esperar un poco por si products aún no carga (fallback)
    setTimeout(() => {
      renderCategoryProducts(cat.id, cat.name, cat.icon);
    }, 50);
  } else {
    console.warn("⚠️ No se encontró categoría para esta página:", pageName);
  }
});