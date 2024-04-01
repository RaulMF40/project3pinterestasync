import '/src/navbar/navbar.css';

// Crear el elemento de la barra de navegación
export const createNavBar = document.createElement('nav');
createNavBar.className = 'navbar';

// Crear el primer div de la barra de navegación
const firstDiv = document.createElement('div');
firstDiv.className = 'nav-div';
firstDiv.id = 'first-div';

// Crear el botón de Pinterest
const pinterestButton = document.createElement('button');
const pinterestImage = document.createElement('img');
pinterestImage.className = 'image-button-s';
pinterestImage.src = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png';
pinterestButton.append(pinterestImage);

// Crear los otros botones de la barra de navegación
const initialButton = document.createElement('button');
initialButton.id = 'initial-button';
initialButton.innerText = 'Inicio';

const explorerButton = document.createElement('button');
explorerButton.innerText = 'Explorar';

const createButton = document.createElement('button');
createButton.innerText = 'Crear';

firstDiv.append(pinterestButton, initialButton, explorerButton, createButton);

// Crear el input de búsqueda
export const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = '🔍 Buscar';
searchInput.id = 'searchBar';

// Crear el segundo div de la barra de navegación
const secondDiv = document.createElement('div');
secondDiv.classList = 'nav-div';
secondDiv.id = 'secondDiv';

// Crear los botones de notificaciones, mensajes, perfil y opciones
const notificationsButton = document.createElement('button');
notificationsButton.className = 'button';
const notificationsImg = document.createElement('img');
const divSpanNotifications = document.createElement('div');
divSpanNotifications.id = 'divSpanNotifications';
divSpanNotifications.innerHTML = `<span class="notifications">Notificaciones</span>`;
divSpanNotifications.style.display = 'none';
notificationsImg.src = 'https://img.icons8.com/ios/50/appointment-reminders--v1.png';
notificationsButton.append(notificationsImg, divSpanNotifications);

const messagesButton = document.createElement('button');
messagesButton.className = 'button';
const messagesImg = document.createElement('img');
messagesImg.src = 'https://cdn-icons-png.flaticon.com/512/31/31278.png';
const divSpanMessages = document.createElement('div');
divSpanMessages.id = 'divSpanMesages';
divSpanMessages.innerHTML = `<span class="notifications" id="messages">Mensajes</span>`;
divSpanMessages.style.display = 'none';
messagesButton.append(messagesImg, divSpanMessages);

const perfilButton = document.createElement('button');
perfilButton.className = 'button';
const perfilImg = document.createElement('img');
perfilImg.id = 'perfilImg';
perfilImg.src = 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png';
const divSpanPerfil = document.createElement('div');
divSpanPerfil.id = 'divSpanPerfil';
divSpanPerfil.innerHTML = `<span class="notifications" id="perfil">Perfil</span>`;
divSpanPerfil.style.display = 'none';
perfilButton.append(perfilImg, divSpanPerfil);

const optionsButton = document.createElement('button');
optionsButton.className = 'button';
const optionsImg = document.createElement('img');
optionsImg.src = 'https://cdn.icon-icons.com/icons2/1673/PNG/512/arrowiosdownwardoutline_110713.png';
const divSpanOptions = document.createElement('div');
divSpanOptions.id = 'divSpanOptions';
divSpanOptions.innerHTML = `<p class="notifications" id="options">Cuentas y más opciones</p>`;
divSpanOptions.style.display = 'none';
optionsButton.append(optionsImg, divSpanOptions);

secondDiv.append(notificationsButton, messagesButton, perfilButton, optionsButton);

createNavBar.append(firstDiv, searchInput, secondDiv);

// Insertar la barra de navegación en el cuerpo del documento
const app = document.querySelector('#app');
document.body.insertBefore(createNavBar, app);

// Eliminar los resultados anteriores
function clearPage() {
    const previousResults = document.querySelectorAll('.result');
    previousResults.forEach(result => result.remove());
}

// Función para pintar los nuevos resultados
function renderNewResults(newResults) {
    clearPage(); // Clear the page before rendering new results
    newResults.forEach(result => {
        // Create a result element and configure it
        const resultElement = document.createElement('div');
        resultElement.className = 'result';
        resultElement.textContent = result;

        // Add the result element to the results container
        document.body.appendChild(resultElement);
    });
}

// Lógica de búsqueda para obtener nuevos resultados (Ejemplo)
function search(query) {
    // Aquí iría la lógica real de búsqueda para obtener nuevos resultados
    // Por ahora, estamos usando resultados de ejemplo
    const newResults = ["Result 1", "Result 2", "Result 3"];    
    renderNewResults(newResults);
}

// Ejemplo de llamada a la función de búsqueda
search('search term');

// Obtener el botón de inicio y otros botones de la barra de navegación
const homeButton = document.getElementById('initial-button');
const exploreButton = document.querySelector('.nav-div:nth-child(1) button:nth-child(2)');
const createButton = document.querySelector('.nav-div:nth-child(1) button:nth-child(3)');

// Agregar manejadores de eventos a los botones
homeButton.addEventListener('click', clearPage);
exploreButton.addEventListener('click', clearPage);
createButton.addEventListener('click', clearPage);
