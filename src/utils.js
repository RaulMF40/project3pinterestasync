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

/*
// ESTO ES LO QUE PUSE YO PARA YO VER LOS FALLOS Y LO DE ARRIBA ES LA CORRECIÓN. //
// Definir una función para restablecer la página
export function resetPage() {
  searchInput.value = ''; // Borrar la búsqueda
  currentPage = 1; // Restablecer currentPage a 1
  CallApi(''); // Llamar a la función de búsqueda con una cadena vacía para cargar imágenes automáticamente
}

// Definir una función para recargar la página
export function reloadPage() {
  window.location.reload(); // Recargar la página
} */ 
