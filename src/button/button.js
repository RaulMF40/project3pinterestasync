import './button.css';

// Función que maneja la lógica de cargar más contenido
const loadMoreContent = () => {
  // Aquí puedes colocar la lógica para cargar más contenido
  console.log('Cargando más contenido...');
};

export const createButtonElement = () => {
  const showMoreButton = document.createElement('button');
  showMoreButton.id = 'show-more';
  showMoreButton.innerText = 'Mostrar más';

  // Agregar evento de clic al botón
  showMoreButton.addEventListener('click', () => {
    // Llamar a la función para cargar más contenido
    loadMoreContent();
  });

  // Añadir el botón al cuerpo del documento
  document.body.append(showMoreButton);
};

createButton();
