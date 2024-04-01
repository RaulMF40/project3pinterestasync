import './button.css';

export const createButton = () => {
  const showMoreButton = document.createElement('button');
  showMoreButton.id = 'show-more';
  showMoreButton.innerText = 'Mostrar más';

  // Agregar evento de clic al botón
  showMoreButton.addEventListener('click', () => {
    // Aquí puedes poner la funcionalidad que deseas que ocurra cuando se haga clic en el botón
    console.log('¡El botón "Mostrar más" ha sido clicado!');
    // Por ejemplo, podrías llamar a una función o realizar alguna acción específica aquí
  });

  // Añadir el botón al cuerpo del documento
  document.body.append(showMoreButton);
};
