// ==================== VARIABLES GLOBALES ====================
const phoneNumber = "56992999340";

// ==================== PRODUCTOS (GLOBAL) ====================
const products = [

  // ========== 1. PINTURAS ==========
  { name: "Pintura Rojo Italiano", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/rojoitaliano.png", description: "Pintura acrílica de alta cobertura para interiores y exteriores. Color rojo italiano intenso, ideal para destacar paredes y muebles. Resistente a la humedad y fácil de limpiar." },  
  { name: "Pintura Rojo Colonial", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/rojocolonial.png", description: "Pintura acrílica con acabado mate elegante. Color rojo colonial clásico, perfecto para ambientes tradicionales. Excelente adherencia y durabilidad." },
  { name: "Pintura Rojo Cerezo", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/rojocerezo.png", description: "Pintura acrílica de primera calidad. Color rojo cerezo profundo, resistente a la decoloración por rayos UV. Ideal para fachadas y áreas con exposición solar." },
  { name: "Pintura Gris Oscuro", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/grisoscuro.png", description: "Pintura acrílica moderna. Color gris oscuro elegante, ideal para crear ambientes sofisticados y contemporáneos. Secado rápido y bajo olor." },
  { name: "Pintura Gris Claro", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/grisclaro.png", description: "Pintura acrílica versátil. Color gris claro neutro, combina con cualquier estilo de decoración. Excelente rendimiento y cubrimiento." },
  { name: "Pintura Verde Claro", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/verde.png", description: "Pintura acrílica fresca y natural. Color verde claro que transmite calma y armonía. Perfecta para dormitorios y espacios de relajación." },
  { name: "Pintura Café Claro", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/cafeclaro.png", description: "Pintura acrílica cálida. Color café claro terroso, perfecto para crear ambientes acogedores y familiares. Lavable y resistente." },
  { name: "Pintura Amarillo", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/amarillo.png", description: "Pintura acrílica vibrante. Color amarillo que ilumina y da energía a cualquier espacio. Ideal para áreas infantiles y cocinas." },
  { name: "Pintura Azul Rey", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/azulrey.png", description: "Pintura acrílica profunda. Color azul rey intenso, ideal para acentos y paredes principales. Acabado uniforme y gran durabilidad." },
  { name: "Pintura Negro", price2L: 9500, price5L: 18000, category: "pinturas", img: "../../img/productos/negro.png", description: "Pintura acrílica elegante. Color negro clásico, perfecto para detalles y contrastes dramáticos. Alto poder cubriente." },
   
  // ========== 2. VITRIFICANTES ==========
  { name: "Vitrificante 1L", price: 8500, category: "vitrificantes", img: "../../img/productos/vitrificante1L.png", description: "Vitrificante de alto brillo para proteger y sellar superficies. Ideal para pisos de madera y cerámica. Resistente al agua y a los rayones." },
  { name: "Vitrificante 2L", price: 16000, category: "vitrificantes", img: "../../img/productos/vitrificante2L.png", description: "Vitrificante profesional que crea una capa protectora resistente a rayones y al agua. Acabado brillante duradero." },
  { name: "Vitrificante 5L", price: 38000, category: "vitrificantes", img: "../../img/productos/vitrificante.jpg", description: "Vitrificante de larga duración, ideal para proyectos grandes y áreas de alto tránsito. Protección superior para tus pisos." },

  // ========== 3. RENOVADORES ==========
  { name: "Renovador 5L", price: 38000, category: "renovadores", img: "../../img/productos/renovador5L.png", description: "Renovador de pisos que recupera el brillo y color original. Ideal para pisos desgastados. Fácil aplicación." },
  { name: "Renovador 2L", price: 16000, category: "renovadores", img: "../../img/productos/renovador2L.png", description: "Renovador líquido que nutre y protege tus pisos. Devuelve la vida a superficies opacas." },
  { name: "Renovador 1L", price: 8500, category: "renovadores", img: "../../img/productos/renovador1L.png", description: "Renovador concentrado para mantenimiento periódico. Restaura el brillo natural de tus pisos." },

  // ========== 4. SELLANTES ==========
  { name: "Sellante de pintura 5L", price: 19000, category: "sellantes", img: "../../img/productos/sellantegrande.png", description: "Sellante acrílico que prepara superficies para la pintura. Mejora la adherencia y durabilidad del acabado." },
  { name: "Sellante de pintura 2L", price: 9500, category: "sellantes", img: "../../img/productos/sellantechico.png", description: "Sellante de alta penetración. Sella porosidades y uniformiza la absorción de la pintura." },

  // ========== 5. CERAS ==========
  // CERAS ROJAS (3 colores)
  { name: "Cera Roja Cerezo", price2L: 5500, price5L: 9500, category: "ceras", img: "../../img/productos/ceracerezo.png", description: "Cera en pasta para pisos. Acabado brillante y protección duradera. Color rojo cerezo intenso. Fácil de aplicar y pulir." },
  { name: "Cera Roja Italiano", price2L: 5500, price5L: 9500, category: "ceras", img: "../../img/productos/ceraitaliana.png", description: "Cera de alta calidad que nutre y protege tus pisos. Color rojo italiano vibrante. Resistente al agua." },
  { name: "Cera Roja Colonial", price2L: 5500, price5L: 9500, category: "ceras", img: "../../img/productos/ceracolonial.png", description: "Cera tradicional que realza la belleza natural de los pisos. Color rojo colonial clásico. Acabado profesional." },

  // CERAS DE COLORES (8 colores)
  { name: "Cera Gris Oscuro", price2L: 8000, price5L: 14000, category: "ceras", img: "../../img/productos/ceragrisoscuro.png", description: "Cera protectora para pisos. Color gris oscuro elegante. Nutre y protege contra el desgaste diario." },
  { name: "Cera Gris Claro", price2L: 8000, price5L: 14000, category: "ceras", img: "../../img/productos/ceragrisclaro.png", description: "Cera acrílica de alto brillo. Color gris claro neutro. Ideal para todo tipo de pisos." },
  { name: "Cera Café", price2L: 8000, price5L: 14000, category: "ceras", img: "../../img/productos/ceracafe.png", description: "Cera en pasta color café. Proporciona protección y brillo duradero. Fácil de mantener." },
  { name: "Cera Verde", price2L: 8000, price5L: 14000, category: "ceras", img: "../../img/productos/ceraverde.png", description: "Cera protectora color verde. Acabado brillante que realza la belleza de tus pisos." },
  { name: "Cera Negro", price2L: 8000, price5L: 14000, category: "ceras", img: "../../img/productos/ceranegra.png", description: "Cera en pasta color negro. Ideal para pisos oscuros. Protección superior y brillo intenso." },

  // ========== 6. BRILLOS ==========
  { name: "Brillo Premium incoloro 5L", price: 13500, category: "brillos", img: "../../img/productos/brillo5L.png", description: "Brillo incoloro de alta calidad. Ideal para todo tipo de pisos. Acabado brillante y duradero." },
  { name: "Brillo Premium incoloro 2L", price: 9500, category: "brillos", img: "../../img/productos/brillo.png", description: "Brillo acrílico incoloro. Protege y da brillo a tus pisos. Secado rápido." },
  { name: "Brillo Aromático Cerámica Lisa", price: 7500, category: "brillos", img: "../../img/productos/brillo1L.png", description: "Brillo con fragancia agradable. Especial para pisos de cerámica lisa. Deja un aroma fresco." },
  { name: "Abrillantador piso flotante 2L", price: 8500, category: "brillos", img: "../../img/productos/abrillantador.png", description: "Abrillantador específico para pisos flotantes. Restaura el brillo sin dañar la superficie." },
  { name: "Abrillantador piso flotante 1L", price: 16000, category: "brillos", img: "../../img/productos/abrillantador1L.png", description: "Abrillantador profesional para pisos flotantes. Fórmula especial que no deja residuos." },

  // ========== 7. LIMPIEZA ==========
  { name: "Lavalosa 5L", price: 9000, category: "limpieza", img: "../../img/productos/lavaloza.png", description: "Limpiador multiuso concentrado. Ideal para pisos y superficies. Desengrasante y desinfectante." },
  { name: "Desencrustante 5L", price: 18000, category: "limpieza", img: "../../img/productos/Desencrustrante5l.png", description: "Desencrustante potente para suciedad difícil. Elimina manchas incrustadas y sarro." },
  { name: "Decapador 5L", price: 18000, category: "limpieza", img: "../../img/productos/decapador.png", description: "Decapador de pinturas y barnices. Remueve capas antiguas de manera eficaz." },
  { name: "Desencrustante lavadora 900cc", price: 4500, category: "limpieza", img: "../../img/productos/lavadora.png", description: "Limpiador especial para lavadoras. Elimina residuos y malos olores. Prolonga la vida útil." },
  { name: "Eliminador olores de mascota 900cc", price: 4500, category: "limpieza", img: "../../img/productos/sellantechico.png", description: "Elimina olores de mascotas de alfombras y pisos. Neutraliza malos olores permanentemente." },
  { name: "Eliminador de grasa 1L", price: 4500, category: "limpieza", img: "../../img/productos/antigrasa.png", description: "Desengrasante potente para cocinas y superficies. Elimina grasa fácilmente." },
  { name: "Eliminador de grasa 5L", price: 18000, category: "limpieza", img: "../../img/productos/antigrasa5L.png", description: "Desengrasante concentrado de uso profesional. Ideal para limpieza pesada." }
];
  
// ==================== MODAL (FUNCIÓN GLOBAL MEJORADA) ====================
let modal, modalImg, closeBtn;

function openModalWithOptions(product) {
  if (!modal || !modalImg) return;

  modal.style.display = "flex";
  modal.classList.add("active");

  modalImg.src = product.img;
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalBtn = document.getElementById("modalBtn");
  const modalDescription = document.getElementById("modalDescription");
  
  if (modalTitle) modalTitle.textContent = product.name;
  
  // Mostrar descripción
  if (modalDescription && product.description) {
    modalDescription.innerHTML = `<p class="product-description">📝 ${product.description}</p>`;
    modalDescription.style.display = "block";
  }
  
  // Verificar si el producto tiene opciones de tamaño (2L y 5L)
  if (product.price2L && product.price5L) {
    const sizeSelector = `
      <div class="size-selector">
        <label>📏 Selecciona el tamaño:</label>
        <select id="productSize" class="size-select">
          <option value="2L">2 Litros - $${product.price2L.toLocaleString("es-CL")}</option>
          <option value="5L">5 Litros - $${product.price5L.toLocaleString("es-CL")}</option>
        </select>
      </div>
    `;
    
    if (modalPrice) {
      modalPrice.innerHTML = sizeSelector;
      modalPrice.style.display = "block";
    }
    
    // Función para actualizar el mensaje de WhatsApp
    const updateWhatsAppMessage = () => {
      const sizeSelect = document.getElementById("productSize");
      if (sizeSelect && modalBtn) {
        const selectedSize = sizeSelect.value;
        const selectedPrice = selectedSize === "2L" ? product.price2L : product.price5L;
        const message = encodeURIComponent(
          `Hola, quisiera comprar: ${product.name} - ${selectedSize} - $${selectedPrice.toLocaleString("es-CL")}`
        );
        modalBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
        modalBtn.setAttribute('target', '_blank');
      }
    };
    
    setTimeout(() => {
      const sizeSelect = document.getElementById("productSize");
      if (sizeSelect) {
        sizeSelect.addEventListener("change", updateWhatsAppMessage);
        updateWhatsAppMessage();
      }
    }, 100);
    
  } else if (product.price) {
    // Producto con precio único
    if (modalPrice) {
      modalPrice.innerHTML = `<div class="single-price">💰 $${product.price.toLocaleString("es-CL")}</div>`;
      modalPrice.style.display = "block";
    }
    const message = encodeURIComponent(
      `Hola, quisiera comprar: ${product.name} - $${product.price.toLocaleString("es-CL")}`
    );
    if (modalBtn) {
      modalBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
      modalBtn.setAttribute('target', '_blank');
    }
  } else {
    // Producto sin precio definido
    if (modalPrice) {
      modalPrice.innerHTML = `<div class="single-price">💰 Consultar precio</div>`;
      modalPrice.style.display = "block";
    }
    const message = encodeURIComponent(
      `Hola, quisiera más información sobre: ${product.name}`
    );
    if (modalBtn) {
      modalBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
      modalBtn.setAttribute('target', '_blank');
    }
  }
}

// ==================== CREAR CARDS (FUNCIÓN GLOBAL) ====================
function createCard(p) {
  const card = document.createElement("div");
  card.className = "card";

  // Mostrar precio desde (el más bajo)
  let displayPrice = "";
  if (p.price2L && p.price5L) {
    const minPrice = Math.min(p.price2L, p.price5L);
    displayPrice = `<div class="price">Desde $${minPrice.toLocaleString("es-CL")}</div>`;
  } else if (p.price) {
    displayPrice = `<div class="price">$${p.price.toLocaleString("es-CL")}</div>`;
  } else {
    displayPrice = `<div class="price">Consultar precio</div>`;
  }

  card.innerHTML = `
    <div class="card-image">
      <img src="${p.img}" loading="lazy" alt="${p.name}"/>
    </div>
    <div class="card-content">
      <h3>${p.name}</h3>
      <p class="card-description">${p.description || ""}</p>
      ${displayPrice}
    </div>
  `;

  card.addEventListener("click", (e) => {
    openModalWithOptions(p);
  });

  return card;
}

// ==================== FUNCIONES DE RENDER (GLOBALES) ====================
function renderGrid(containerId, productsArray) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = "";
  
  if (productsArray.length === 0) {
    container.innerHTML = "<p class='no-results'>No hay productos en esta categoría</p>";
    return;
  }
  
  productsArray.forEach(product => {
    const card = createCard(product);
    container.appendChild(card);
  });
}

function toggleCategory(sectionId, show) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = show ? "block" : "none";
  }
}

function renderCategories(filteredProducts = null) {
  // Obtener productos por categoría
  let pinturas = [];
  let vitrificantes = [];
  let renovadores = [];
  let sellantes = [];
  let ceras = [];
  let brillos = [];
  let abrillantador = [];
  let limpieza = [];

  if (filteredProducts) {
    // Filtrar por categoría
    pinturas = filteredProducts.filter(p => p.category === "pinturas");
    vitrificantes = filteredProducts.filter(p => p.category === "vitrificantes");
    renovadores = filteredProducts.filter(p => p.category === "renovadores");
    sellantes = filteredProducts.filter(p => p.category === "sellantes");
    ceras = filteredProducts.filter(p => p.category === "ceras");
    brillos = filteredProducts.filter(p => p.category === "brillos");
    abrillantador = filteredProducts.filter(p => p.category === "abrillantador");
    limpieza = filteredProducts.filter(p => p.category === "limpieza");
  } else {
    // Mostrar todos
    pinturas = products.filter(p => p.category === "pinturas");
    vitrificantes = products.filter(p => p.category === "vitrificantes");
    renovadores = products.filter(p => p.category === "renovadores");
    sellantes = products.filter(p => p.category === "sellantes");
    ceras = products.filter(p => p.category === "ceras");
    brillos = products.filter(p => p.category === "brillos");
    abrillantador = products.filter(p => p.category === "abrillantador");
    limpieza = products.filter(p => p.category === "limpieza");
  }

  // Renderizar cada grid
  renderGrid("products-pinturas", pinturas);
  renderGrid("products-vitrificantes", vitrificantes);
  renderGrid("products-renovadores", renovadores);
  renderGrid("products-sellantes", sellantes);
  renderGrid("products-ceras", ceras);
  renderGrid("products-brillos", brillos);
  renderGrid("products-abrillantador", abrillantador);
  renderGrid("products-limpieza", limpieza);

  // Mostrar/ocultar categorías según si tienen productos
  toggleCategory("category-pinturas", pinturas.length > 0);
  toggleCategory("category-vitrificantes", vitrificantes.length > 0);
  toggleCategory("category-renovadores", renovadores.length > 0);
  toggleCategory("category-sellantes", sellantes.length > 0);
  toggleCategory("category-ceras", ceras.length > 0);
  toggleCategory("category-brillos", brillos.length > 0);
  toggleCategory("category-abrillantador", abrillantador.length > 0);
  toggleCategory("category-limpieza", limpieza.length > 0);
}

// ==================== FUNCIONES DE SCROLL ====================
function scrollToProducts() {
  const primeraCategoria = document.getElementById("category-pinturas");
  if (primeraCategoria) {
    const sectionPosition = primeraCategoria.getBoundingClientRect().top + window.pageYOffset;
    const offset = 80;
    window.scrollTo({
      top: sectionPosition - offset,
      behavior: "smooth"
    });
  }
}

function scrollToCatalogo() {
  const catalogoSection = document.getElementById("catalogoSection");
  if (catalogoSection) {
    const sectionPosition = catalogoSection.getBoundingClientRect().top + window.pageYOffset;
    const offset = 80;
    window.scrollTo({
      top: sectionPosition - offset,
      behavior: "smooth"
    });
  }
}

// ==================== CARRUSEL DE PRODUCTOS DESTACADOS (GLOBAL) ====================
let featuredIndex = 0;
let featuredInterval;
let slidesPerView = 3;

function updateSlidesPerView() {
  if (window.innerWidth <= 600) {
    slidesPerView = 1;
  } else if (window.innerWidth <= 900) {
    slidesPerView = 2;
  } else {
    slidesPerView = 3;
  }
}

function setupFeaturedWhatsAppButtons() {
  const buttons = document.querySelectorAll('.featured-whatsapp-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productName = btn.getAttribute('data-producto') || 'este producto';
      const message = encodeURIComponent(`Hola, quiero comprar ${productName}`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    });
  });
}

function renderFeaturedCarousel() {
  const container = document.getElementById('featuredSlides');
  if (!container) return;
  
  container.innerHTML = '';
  
  for (let i = 1; i <= 19; i++) {
    const slide = document.createElement('div');
    slide.className = 'featured-slide-item';
    
    slide.innerHTML = `
      <img src="" alt="Producto ${i}" data-slot="${i}">
      <div class="featured-slide-content">
        <button class="featured-whatsapp-btn" data-producto="Producto ${i}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.4-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </button>
      </div>
    `;
    
    container.appendChild(slide);
  }
  
  setupFeaturedWhatsAppButtons();
  updateSlidesPerView();
  window.addEventListener('resize', () => {
    updateSlidesPerView();
    resetFeaturedCarousel();
  });
}

function resetFeaturedCarousel() {
  const slidesContainer = document.getElementById('featuredSlides');
  if (!slidesContainer) return;
  
  const totalProducts = slidesContainer.children.length;
  const maxIndex = Math.max(0, totalProducts - slidesPerView);
  
  if (featuredIndex > maxIndex) featuredIndex = maxIndex;
  if (featuredIndex < 0) featuredIndex = 0;
  
  const translateValue = -(featuredIndex * (100 / slidesPerView));
  slidesContainer.style.transform = `translateX(${translateValue}%)`;
}

function initFeaturedCarousel() {
  const slidesContainer = document.getElementById('featuredSlides');
  const carouselFeatured = document.getElementById('featuredCarousel');
  
  if (!slidesContainer || !carouselFeatured) return;
  
  const totalProducts = slidesContainer.children.length;
  let maxIndex = Math.max(0, totalProducts - slidesPerView);
  let direction = 1;
  
function showFeaturedSlide() {
    if (featuredIndex > maxIndex) featuredIndex = maxIndex;
    if (featuredIndex < 0) featuredIndex = 0;
    
    // Obtener el ancho real incluyendo el gap
    const slidesContainer = document.getElementById('featuredSlides');
    if (!slidesContainer) return;
    
    const slideWidth = slidesContainer.children[0]?.offsetWidth || 0;
    const gap = 12; // Mismo valor que el gap en CSS
    
    // Calcular desplazamiento en píxeles
    const translateValue = -(featuredIndex * (slideWidth + gap));
    
    slidesContainer.style.transform = `translateX(${translateValue}px)`;
}
  
  const nextBtn = document.querySelector('.featured-next');
  const prevBtn = document.querySelector('.featured-prev');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      direction = 1;
      if (featuredIndex < maxIndex) {
        featuredIndex++;
        showFeaturedSlide();
        resetAutoSlideFeatured();
      }
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      direction = -1;
      if (featuredIndex > 0) {
        featuredIndex--;
        showFeaturedSlide();
        resetAutoSlideFeatured();
      }
    });
  }
  
function startAutoSlideFeatured() {
    if (featuredInterval) clearInterval(featuredInterval);
    featuredInterval = setInterval(() => {
      let newIndex = featuredIndex + direction;
      
      // Versión INFINITA: cuando llega al final vuelve al inicio
      if (newIndex > maxIndex) {
        newIndex = 0;  // Vuelve a la primera imagen
      } else if (newIndex < 0) {
        newIndex = maxIndex;  // Va a la última imagen
      }
      
      featuredIndex = newIndex;
      showFeaturedSlide();
    }, 3000);
}
  
  function stopAutoSlideFeatured() {
    clearInterval(featuredInterval);
  }
  
  function resetAutoSlideFeatured() {
    stopAutoSlideFeatured();
    startAutoSlideFeatured();
  }
  
  carouselFeatured.addEventListener('mouseenter', stopAutoSlideFeatured);
  carouselFeatured.addEventListener('mouseleave', startAutoSlideFeatured);
  
  showFeaturedSlide();
  startAutoSlideFeatured();
}

function setProductImages() {
  const slides = document.querySelectorAll('.featured-slide-item');
  
  const images = [
    './img/image1.png', './img/image2.png', './img/image3.png',
    './img/image4.png', './img/image5.png', './img/image6.png',
    './img/image7.png', './img/image8.png', './img/image9.png',
    './img/image10.png', './img/image11.png', './img/image12.png',
    './img/image13.png', './img/image14.png', './img/image15.png',
    './img/image16.png', './img/image17.png', './img/image18.png',
    './img/image19.png'
  ];
  
  slides.forEach((slide, idx) => {
    const img = slide.querySelector('img');
    if (img && images[idx]) {
      img.src = images[idx];
    }
  });
}

function setProductNames() {
  const buttons = document.querySelectorAll('.featured-whatsapp-btn');
  
  const nombres = [
    "ABRILLANTADOR CERAMICO PISOS LISOS",
    "ABRILLANTADOR CERAMICO POROSO 1 LTS",
    "ABRILLANTADOR CERAMICO POROSO 2 LTS",
    "ABRILLANTADOR PISO FLOTANTE",
    "ANTIGRASA",
    "CERA ACRILICA ROJA 2 LTS",
    "CERA ACRILICA",
    "CERA COLORES 2 LTS",
    "CERA COLORES 5 LTS",
    "DECAPADOR",
    "DESENCRUSTANTE",
    "ELIMINADOR OLORES",
    "LAVALOZAS",
    "PINTURA ACRILICA 2 LTS",
    "PINTURA BLANCA MURO",
    "PINTURA PARA MURO",
    "PINTURA",
    "SELLANTE",
    "VITRIFICANTE"
  ];
  
  buttons.forEach((btn, idx) => {
    if (nombres[idx]) {
      btn.setAttribute('data-producto', nombres[idx]);
    }
  });
}

// ==================== FILTRAR PRODUCTOS (GLOBAL) ====================
window.filterProducts = function(category) {
  if (category === "all") {
    window.location.href = window.location.pathname;
  }
};

// ==================== MODAL TÉRMINOS (GLOBAL) ====================
window.openTerms = function() {
  const termsModal = document.getElementById("termsModal");
  if (termsModal) termsModal.style.display = "flex";
};

// ==================== DOMContentLoaded (INICIALIZACIÓN) ====================
document.addEventListener("DOMContentLoaded", () => {
  // Obtener referencias del modal
  modal = document.getElementById("imageModal");
  modalImg = document.getElementById("modalImg");
  closeBtn = document.querySelector(".close");

  // Configurar eventos del modal
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      setTimeout(() => { modal.style.display = "none"; }, 200);
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        setTimeout(() => { modal.style.display = "none"; }, 200);
      }
    });
  }

  // ==================== BÚSQUEDA ====================
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.querySelector(".search-btn");
  const carousel = document.getElementById("carousel");
  
  let searchTimeout;

  function liveSearch() {
    if (!searchInput) return;
    const value = searchInput.value.trim();
    
    if (value === "") {
      renderCategories();
      if (carousel) carousel.style.display = "block";
      const infoSection = document.querySelector(".info-section");
      const valuesSection = document.querySelector(".values-section");
      if (infoSection) infoSection.style.display = "flex";
      if (valuesSection) valuesSection.style.display = "block";
    } else {
      const filtered = products.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
      if (carousel) carousel.style.display = "none";
      renderCategories(filtered);
      
      const infoSection = document.querySelector(".info-section");
      const valuesSection = document.querySelector(".values-section");
      if (infoSection) infoSection.style.display = "none";
      if (valuesSection) valuesSection.style.display = "none";
      
      if (filtered.length === 0) {
        const containers = ["products-pinturas", "products-vitrificantes", "products-renovadores", "products-sellantes", "products-ceras", "products-brillos", "products-abrillantador", "products-limpieza"];
        containers.forEach(containerId => {
          const container = document.getElementById(containerId);
          if (container && container.innerHTML.trim() === "") {
            container.innerHTML = "<p class='no-results'>No se encontraron productos</p>";
          }
        });
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(liveSearch, 300);
    });
  }

  function redirectWithSearch() {
    if (!searchInput) return;
    const value = searchInput.value.trim();
    if (value === "") {
      window.location.href = window.location.pathname;
    } else {
      window.location.href = `?s=${encodeURIComponent(value)}`;
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", redirectWithSearch);
  }
  
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") redirectWithSearch();
    });
  }

  // ==================== INICIALIZAR DESDE URL ====================
  function initFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get("s");
    
    if (searchTerm) {
      if (carousel) carousel.style.display = "none";
      const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
      renderCategories(filtered);
      const infoSection = document.querySelector(".info-section");
      const valuesSection = document.querySelector(".values-section");
      if (infoSection) infoSection.style.display = "none";
      if (valuesSection) valuesSection.style.display = "none";
      if (searchInput) searchInput.value = searchTerm;
    } else {
      renderCategories();
      if (carousel) carousel.style.display = "block";
      const infoSection = document.querySelector(".info-section");
      const valuesSection = document.querySelector(".values-section");
      if (infoSection) infoSection.style.display = "flex";
      if (valuesSection) valuesSection.style.display = "block";
      if (searchInput) searchInput.value = "";
    }
  }

  // ==================== LOGO CLICK ====================
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = window.location.pathname;
    });
  }

  // ==================== CARRUSEL PRINCIPAL ====================
  if (carousel && !window.location.search) {
    const slides = document.getElementById("slides");
    if (slides && slides.children.length > 0) {
      let index = 0;
      const totalSlides = slides.children.length;
      let interval;

      function showSlide(i) {
        index = (i + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${index * 100}%)`;
      }

      const nextBtn = document.querySelector(".next");
      const prevBtn = document.querySelector(".prev");
      
      if (nextBtn) nextBtn.addEventListener("click", () => showSlide(index + 1));
      if (prevBtn) prevBtn.addEventListener("click", () => showSlide(index - 1));

      function startAutoSlide() { interval = setInterval(() => showSlide(index + 1), 3000); }
      function stopAutoSlide() { clearInterval(interval); }

      carousel.addEventListener("mouseenter", stopAutoSlide);
      carousel.addEventListener("mouseleave", startAutoSlide);
      startAutoSlide();
    }
  }

  // ==================== BOTÓN PRODUCTOS (scroll a categorías) ====================
  const productosBtn = document.getElementById("productosBtn");
  if (productosBtn) {
    productosBtn.addEventListener("click", () => {
      const categoriasSection = document.getElementById("categoriasContainer");
      if (categoriasSection) {
        const sectionPosition = categoriasSection.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: sectionPosition - offset,
          behavior: "smooth"
        });
      }
    });
  }

  // ==================== BOTÓN CONTACTO ====================
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      const footer = document.querySelector(".footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top + window.pageYOffset;
        const offset = 20;
        window.scrollTo({
          top: footerPosition - offset,
          behavior: "smooth"
        });
      }
    });
  }

  // ==================== BOTÓN CATÁLOGO ====================
  const catalogoBtn = document.getElementById("catalogoBtn");
  if (catalogoBtn) {
    catalogoBtn.addEventListener("click", () => {
      const catalogoTitle = document.querySelector(".featured-carousel-title");
      if (catalogoTitle) {
        const titlePosition = catalogoTitle.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: titlePosition - offset,
          behavior: "smooth"
        });
      }
    });
  }

  // ==================== MODAL TÉRMINOS ====================
  const termsModal = document.getElementById("termsModal");
  const closeTerms = document.querySelector(".close-terms");

  if (closeTerms && termsModal) {
    closeTerms.addEventListener("click", () => { 
      termsModal.style.display = "none"; 
    });
  }

  if (termsModal) {
    termsModal.addEventListener("click", (e) => { 
      if (e.target === termsModal) termsModal.style.display = "none"; 
    });
  }

  // ==================== BOTÓN VOLVER ARRIBA ====================
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ==================== BOTONES DEL CARRUSEL PRINCIPAL ====================
  function setupCarouselButtons() {
    const scrollBtns = document.querySelectorAll('.scroll-products-btn');
    scrollBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        scrollToCatalogo();
      });
    });

    const shippingBtn = document.querySelector('.shipping-btn');
    if (shippingBtn) {
      shippingBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('pages/envios.html', '_blank');
      });
    }
  }
  
  setupCarouselButtons();

  // ==================== INICIALIZAR CARRUSEL DESTACADO ====================
  renderFeaturedCarousel();
  initFeaturedCarousel();
  setProductImages();
  setTimeout(() => {
    setProductNames();
  }, 100);

  // ==================== INICIALIZAR TODO ====================
  initFromURL();

  // ==================== SCROLL AUTOMÁTICO PARA HASH LINKS ====================
  if (window.location.hash) {
    const hash = window.location.hash;
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(function() {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetPosition - offset,
          behavior: "smooth"
        });
      }, 500);
    }
  }

});