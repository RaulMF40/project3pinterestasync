import '/src/navbar/navbar.css';

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

// Create other buttons for the navigation bar
const initialButton = document.createElement('button');
initialButton.id = 'initial-button';
initialButton.innerText = 'Home';

const explorerButton = document.createElement('button');
explorerButton.innerText = 'Explore';

const createButton = document.createElement('button');
createButton.innerText = 'Create';

firstDiv.append(pinterestButton, initialButton, explorerButton, createButton);

// Create the search input
export const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = '🔍 Search';
searchInput.id = 'searchBar';

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
divSpanNotifications.innerHTML = `<span class="notifications">Notifications</span>`;
divSpanNotifications.style.display = 'none';
notificationsImg.src = 'https://img.icons8.com/ios/50/appointment-reminders--v1.png';
notificationsButton.append(notificationsImg, divSpanNotifications);

const messagesButton = document.createElement('button');
messagesButton.className = 'button';
const messagesImg = document.createElement('img');
messagesImg.src = 'https://cdn-icons-png.flaticon.com/512/31/31278.png';
const divSpanMessages = document.createElement('div');
divSpanMessages.id = 'divSpanMesages';
divSpanMessages.innerHTML = `<span class="notifications" id="messages">Messages</span>`;
divSpanMessages.style.display = 'none';
messagesButton.append(messagesImg, divSpanMessages);

const profileButton = document.createElement('button');
profileButton.className = 'button';
const profileImg = document.createElement('img');
profileImg.id = 'profileImg';
profileImg.src = 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png';
const divSpanProfile = document.createElement('div');
divSpanProfile.id = 'divSpanProfile';
divSpanProfile.innerHTML = `<span class="notifications" id="profile">Profile</span>`;
divSpanProfile.style.display = 'none';
profileButton.append(profileImg, divSpanProfile);

const optionsButton = document.createElement('button');
optionsButton.className = 'button';
const optionsImg = document.createElement('img');
optionsImg.src = 'https://cdn.icon-icons.com/icons2/1673/PNG/512/arrowiosdownwardoutline_110713.png';
const divSpanOptions = document.createElement('div');
divSpanOptions.id = 'divSpanOptions';
divSpanOptions.innerHTML = `<p class="notifications" id="options">Accounts and more options</p>`;
divSpanOptions.style.display = 'none';
optionsButton.append(optionsImg, divSpanOptions);

secondDiv.append(notificationsButton, messagesButton, profileButton, optionsButton);

createNavBar.append(firstDiv, searchInput, secondDiv);

// Insert the navigation bar into the document body
const app = document.querySelector('#app');
document.body.insertBefore(createNavBar, app);

// Remove previous results
function clearPage() {
    const previousResults = document.querySelectorAll('.result');
    previousResults.forEach(result => result.remove());
}

// Function to render new results
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

// Search logic to fetch new results (Example)
function search(query) {
    // Here goes the actual search logic to fetch new results
    // For now, we're using example results
    const newResults = ["Result 1", "Result 2", "Result 3"];
    
    renderNewResults(newResults);
}

// Example of calling the search function
search('search term');

// Get the home button and other buttons from the navigation bar
const homeButton = document.getElementById('initial-button');
const exploreButton = document.querySelector('.nav-div:nth-child(1) button:nth-child(3)');
const createButton = document.querySelector('.nav-div:nth-child(1) button:nth-child(4)');

// Add event listeners to the buttons
homeButton.addEventListener('click', clearPage);
exploreButton.addEventListener('click', clearPage);
createButton.addEventListener('click', clearPage);
