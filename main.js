import './style.css'; // Importa el archivo CSS
import { createCardSection } from './src/imagesSection/images.js';
import { drawCard } from './src/cards/cards.js';
import { createButton } from './src/button/button.js';
import { createFooter } from './src/footer/footer.js';
import { createNavBar, searchInput } from './src/navbar/navbar.js';
import { refreshButton } from './src/navbar/navbar.js';
import { currentPage } from './src/globals.js';

createCardSection();
let currentPage = 1;

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
      currentPage = 1; // Restablecer currentPage a 1 si se establece la bandera resetPage
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
    console.log('Error al obtener los datos de la API', error);
  }
}

CallApi('landscape', currentPage); // Llama a la función CallApi para cargar las imágenes iniciales

// Función para manejar el evento de tecla presionada
const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del evento

    const inputValue = event.target.value;
    CallApi(inputValue);
  }
};

searchInput.addEventListener('keydown', handleKeyDown); // Agrega el evento de presionar tecla al input de búsqueda

createButton(); // Crea el botón "Mostrar más" al principio

const showMoreButton = document.getElementById('show-more');

showMoreButton.addEventListener('click', async () => {
  try {
    currentPage++; // Incrementa el número de página actual
    const inputValue = searchInput.value;
    await CallApi(inputValue, currentPage); // Llama a la función CallApi con el término de búsqueda actual y la página actual
  } catch (error) {
    console.log('Error al cargar más imágenes', error);
  }
});

createFooter(); // Crea el pie de página

// Llama a la función createNavBar para obtener el elemento de navegación
const navbar = createNavBar();

// Inserta la barra de navegación en el DOM
const app = document.querySelector('#app');
document.body.insertBefore(navbar, app); // Inserta la barra de navegación antes de #app

// Agregar el botón de refrescar al lugar deseado
const firstDiv = document.querySelector('#first-div');
firstDiv.insertBefore(refreshButton, firstDiv.children[1]);

// Agregar un evento de clic al botón de refrescar
refreshButton.addEventListener('click', () => {
    const confirmRefresh = confirm('¿Estás seguro de que quieres refrescar la página?');
    if (confirmRefresh) {
        window.location.reload();
    }
});
