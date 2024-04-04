import './style.css'; // Importa el archivo CSS
import { createCardSection } from './src/imagesSection/images.js';
import { drawCard } from './src/cards/cards.js';
import { createButton } from './src/button/button.js';
import { createFooter } from './src/footer/footer.js';
import { createNavBar, } from './src/navbar/navbar.js';
import { resetPage, reloadPage } from './src/utils.js';

/* createCardSection(); */
let page = 1

async function CallApi(inputValue, page = 1, perPage = 15, resetPage = true) {
  const ACCESS_KEY = 'ZoYrICho_8WIhQQu2dAtWN2D6QGb5xfgBn7ieXbloYA';
  const API_URL = `https://api.unsplash.com/search/photos?query=${inputValue}&page=${page}&per_page=${perPage}&client_id=${ACCESS_KEY}`;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const app = document.querySelector('#app');
    const cardSection = document.createElement('section');
    cardSection.className = 'cardSection';

    if (resetPage) {
      page = 1; // Restablecer Page a 1 si se establece la bandera resetPage
    }

    if (data && data.results && data.results.length > 0) {
      cardSection.innerHTML = ''; // Limpiar la sección de tarjetas antes de mostrar los nuevos resultados
      data.results.forEach((item) => {
        drawCard(item, cardSection);
      });
      app.innerHTML = ''; // Limpiar la página antes de mostrar los nuevos resultados
      app.append(cardSection); // Mostrar los nuevos resultados
    } else {
      app.innerHTML = ''; // Limpiar la página si no hay resultados
      createCardSection(); // Volver a crear la sección de tarjetas si no hay resultados
      console.log('Data is empty or not defined:', data);
    }
  } catch (error) {
    console.error('Error al obtener los datos de la API', error);
  }
}

CallApi('landscape', page); // Llama a la función CallApi para cargar las imágenes iniciales

// Función para manejar el evento de tecla presionada
const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del evento

    const inputValue = event.target.value;
    CallApi(inputValue);
  }
};

searchInput.addEventListener('keydown', handleKeyDown); // Agrega el evento de presionar tecla al input de búsqueda

/* createButton();*/ // Crea el botón "Mostrar más" al principio

const showMoreButton = document.getElementById('show-more');

showMoreButton.addEventListener('click', async () => {
  try {
    page++; // Incrementa el número de página actual
    const inputValue = searchInput.value;
    await CallApi(inputValue, page); // Llama a la función CallApi con el término de búsqueda actual y la página actual
  } catch (error) {
    console.error('Error al cargar más imágenes', error);
  }
});

/*createFooter(); */// Crea el pie de página

// Agregar evento de clic al botón de inicio para restablecer la página
homeButton.addEventListener('click', async () => {
  try {
    resetPage();
  } catch (error) {
    console.error('Error al realizar la búsqueda:', error);
  }
});

// Agregar evento de clic al botón de explorar para recargar la página
explorerButton.addEventListener('click', () => {
  reloadPage();
});

// Mantener el evento de entrada en el campo de búsqueda para realizar acciones adicionales según sea necesario
searchInput.addEventListener('input', function() {
  if (searchInput.value === '') {
    clearPage();
  }
});
