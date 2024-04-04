// Definir una función para restablecer la página
export function resetPage() {
  searchInput.value = ''; // Borrar la búsqueda
  page = 1; // Restablecer Page a 1
  CallApi(''); // Llamar a la función de búsqueda con una cadena vacía para cargar imágenes automáticamente
}

// Definir una función para recargar la página
export function reloadPage() {
  window.location.reload(); // Recargar la página
}
