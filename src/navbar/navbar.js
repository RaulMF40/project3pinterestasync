import '/src/navbar/navbar.css';
import { currentPage } from './src/globals.js';
import { createButtonElement } from './src/button/button.js'; // Importa createButtonElement
import { CallApi, searchInput as navSearchInput, homeButton, explorerButton as navExplorerButton } from './main.js'; // Renombrar las variables importadas para evitar conflictos

// Create the navigation bar element
export const createNavBar = document.createElement('nav');
createNavBar.className = 'navbar';

// Create the first div of the navigation bar
const firstDiv = document.createElement('div');
firstDiv.className = 'nav-div';
firstDiv.id = 'first-div';

// Create the Pinterest button
const pinterestButton = document.createElement('button');
const pinterestImage = document.createElement('img');
pinterestImage.className = 'image-button-s';
pinterestImage.src = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png';
pinterestButton.append(pinterestImage);

// Create the initial button
homeButton.innerText = 'Inicio';

// Create the explorer button
navExplorerButton.innerText = 'Explorar';

firstDiv.append(pinterestButton, homeButton, navExplorerButton);

// Create the search input
navSearchInput.type = 'text';
navSearchInput.placeholder = '🔍 Buscar';
navSearchInput.id = 'searchBar';

// Create the second div of the navigation bar
const secondDiv = document.createElement('div');
secondDiv.classList = 'nav-div';
secondDiv.id = 'secondDiv';

// Create buttons for notifications, messages, profile, and options
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
divSpanMessages.id = 'divSpanMessages';
divSpanMessages.innerHTML = `<span class="notifications" id="messages">Mensajes</span>`;
divSpanMessages.style.display = 'none';
messagesButton.append(messagesImg, divSpanMessages);

const profileButton = document.createElement('button');
profileButton.className = 'button';
const profileImg = document.createElement('img');
profileImg.id = 'profileImg';
profileImg.src = 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png';
const divSpanProfile = document.createElement('div');
divSpanProfile.id = 'divSpanProfile';
divSpanProfile.innerHTML = `<span class="notifications" id="profile">Perfil</span>`;
divSpanProfile.style.display = 'none';
profileButton.append(profileImg, divSpanProfile);

const optionsButton = document.createElement('button');
optionsButton.className = 'button';
const optionsImg = document.createElement('img');
optionsImg.src = 'https://cdn.icon-icons.com/icons2/1673/PNG/512/arrowiosdownwardoutline_110713.png';
const divSpanOptions = document.createElement('div');
divSpanOptions.id = 'divSpanOptions';
divSpanOptions.innerHTML = `<p class="notifications" id="options">Cuentas y más opciones</p>`;
divSpanOptions.style.display = 'none';
optionsButton.append(optionsImg, divSpanOptions);

secondDiv.append(notificationsButton, messagesButton, profileButton, optionsButton);

createNavBar.append(firstDiv, navSearchInput, secondDiv);

// Insert the navigation bar into the document body
const app = document.querySelector('#app');
document.body.insertBefore(createNavBar, app);

// Get the home button and explore button from the navigation bar
export const homeButton = document.getElementById('initial-button');
export const explorerButton = document.getElementById('explorer-button');
