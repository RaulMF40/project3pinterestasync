import { CallApi } from "../main";

// Definir una función para restablecer la página
export function resetPage() {
  //searchInput.value = ''; // Borrar la búsqueda
  //currentPage = 1; // Restablecer currentPage a 1
  CallApi(''); // Llamar a la función de búsqueda con una cadena vacía para cargar imágenes automáticamente
}

// Definir una función para recargar la página
export function reloadPage() {
  window.location.reload(); // Recargar la página
}

// esto de aqui abajo es lo que yo hice con fallos, y me lo han corregido que es lo de arriba 
/* // Definir una función para restablecer la página
export function resetPage() {
  searchInput.value = ''; // Borrar la búsqueda
  currentPage = 1; // Restablecer currentPage a 1
  CallApi(''); // Llamar a la función de búsqueda con una cadena vacía para cargar imágenes automáticamente
}

// Definir una función para recargar la página
export function reloadPage() {
  window.location.reload(); // Recargar la página
} */
