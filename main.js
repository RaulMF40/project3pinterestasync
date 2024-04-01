import './style.css'; // Importa el archivo CSS
import { createCardSection } from './src/imagesSection/images.js';
import { drawCard } from './src/cards/cards.js';
import { createButton } from './src/button/button.js';
import { createFooter } from './src/footer/footer.js';
import { createNavBar, searchInput } from './src/navbar/navbar.js';

createCardSection();
let currentPage = 1;

/* async function CallApi(inputValue, page = 1) {
  const ACCESS_KEY = 'ZoYrICho_8WIhQQu2dAtWN2D6QGb5xfgBn7ieXbloYA';
  const API_URL = `https://api.unsplash.com/search/photos?query=${inputValue}&page=${page}&client_id=${ACCESS_KEY}`;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const app = document.querySelector('#app');
    const cardSection = document.createElement('section');
    cardSection.className = 'cardSection';
    if (data && data.results && data.results.length > 0) {
      cardSection.innerHTML = '';
      data.results.forEach((item) => {
        drawCard(item, cardSection);
      });
      app.append(cardSection);
    } else {
      createCardSection();
      console.log('Data is empty or not defined:', data);
    }
  } catch (error) {
    console.log('Error al obtener los datos de la API', error);
  }
} */

async function CallApi(inputValue, page = 1, perPage = 15) {
  const ACCESS_KEY = 'ZoYrICho_8WIhQQu2dAtWN2D6QGb5xfgBn7ieXbloYA';
  const API_URL = `https://api.unsplash.com/search/photos?query=${inputValue}&page=${page}&per_page=${perPage}&client_id=${ACCESS_KEY}`;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const app = document.querySelector('#app');
    const cardSection = document.createElement('section');
    cardSection.className = 'cardSection';
    if (data && data.results && data.results.length > 0) {
      if (page === 1) {
        cardSection.innerHTML = ''; // Limpiar la sección de tarjetas si estamos en la primera página
      }
      data.results.forEach((item) => {
        drawCard(item, cardSection);
      });
      app.append(cardSection);
    } else {
      createCardSection(); // Volver a crear la sección de tarjetas si no hay resultados
      console.log('Data is empty or not defined:', data);
    }
  } catch (error) {
    console.log('Error al obtener los datos de la API', error);
  }
}

CallApi('landscape', currentPage); // Llama a la función CallApi para cargar las imágenes iniciales

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del evento

    const inputValue = event.target.value;
    CallApi(inputValue);
  }
};

// Función para cargar más imágenes cuando el usuario se desplaza hacia abajo
/*window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // Cuando el usuario se desplaza cerca del final de la página (5 píxeles antes del final),
    // carga más imágenes llamando a la función CallApi con el término de búsqueda actual
    CallApi(currentSearchTerm, currentPage++)
  }
}) */

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

// Inserta la barra de navegación en el DOM
const navbar = createNavBar(); // Llama a la función createNavBar para obtener el elemento de navegación
const app = document.querySelector('#app');
document.body.insertBefore(navbar, app); // Inserta la barra de navegación antes de #app
