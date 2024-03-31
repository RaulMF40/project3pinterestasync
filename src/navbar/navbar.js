import '/src/navbar/navbar.css'

export const createNavBar = document.createElement('nav')
createNavBar.className = 'navbar'
const firstDiv = document.createElement('div')
firstDiv.className = 'nav-div'
firstDiv.id = 'first-div'
const pinterestButton = document.createElement('button')
const pinterestImage = document.createElement('img')
pinterestImage.className = 'image-button-s'
pinterestImage.src =
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'
pinterestButton.append(pinterestImage)
const initialButton = document.createElement('button')
initialButton.id = 'initial-button'
initialButton.innerText = 'Inicio'
const explorerButton = document.createElement('button')
explorerButton.innerText = 'Explorar'
const createButton = document.createElement('button')
createButton.innerText = 'Crear'
firstDiv.append(pinterestButton, initialButton, explorerButton, createButton)

export const searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.placeholder = '🔍 Buscar'
searchInput.id = 'searchBar'

const secondDiv = document.createElement('div')
secondDiv.classList = 'nav-div'
secondDiv.id = 'secondDiv'
const notificationsButton = document.createElement('button')
notificationsButton.className = 'button'
const notificationsImg = document.createElement('img')
const divSpanNotifications = document.createElement('div')
divSpanNotifications.id = 'divSpanNotifications'
divSpanNotifications.innerHTML = `<span class="notifications">Notificaciones</span>`
divSpanNotifications.style.display = 'none'
notificationsButton.addEventListener('mouseenter', () => {
  const divSpanNotifications = document.querySelector('#divSpanNotifications')
  divSpanNotifications.style.display = 'block'
})
notificationsButton.addEventListener('mouseleave', () => {
  divSpanNotifications.style.display = 'none'
})
notificationsImg.src =
  'https://img.icons8.com/ios/50/appointment-reminders--v1.png'
notificationsButton.append(notificationsImg, divSpanNotifications)

const messagesButton = document.createElement('button')
messagesButton.className = 'button'
const messagesImg = document.createElement('img')
messagesImg.src = 'https://cdn-icons-png.flaticon.com/512/31/31278.png'
const divSpanMessages = document.createElement('div')
divSpanMessages.id = 'divSpanMesages'
divSpanMessages.innerHTML = `<span class="notifications" id="messages">Mensajes</span>`
divSpanMessages.style.display = 'none'
messagesButton.addEventListener('mouseenter', () => {
  const divSpanMessages = document.querySelector('#divSpanMesages')
  divSpanMessages.style.display = 'block'
})
messagesButton.addEventListener('mouseleave', () => {
  divSpanMessages.style.display = 'none'
})
messagesButton.append(messagesImg, divSpanMessages)

const perfilButton = document.createElement('button')
perfilButton.className = 'button'
const perfilImg = document.createElement('img')
perfilImg.id = 'perfilImg'
perfilImg.src = 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png'

const divSpanPerfil = document.createElement('div')
divSpanPerfil.id = 'divSpanPerfil'
divSpanPerfil.innerHTML = `<span class="notifications" id="perfil">Perfil</span>`
divSpanPerfil.style.display = 'none'
perfilButton.addEventListener('mouseenter', () => {
  const divSpanPerfil = document.querySelector('#divSpanPerfil')
  divSpanPerfil.style.display = 'block'
})
perfilButton.addEventListener('mouseleave', () => {
  divSpanPerfil.style.display = 'none'
})
perfilButton.append(perfilImg, divSpanPerfil)

const optionsButton = document.createElement('button')
optionsButton.className = 'button'
const optionsImg = document.createElement('img')
optionsImg.src =
  'https://cdn.icon-icons.com/icons2/1673/PNG/512/arrowiosdownwardoutline_110713.png'

const divSpanOptions = document.createElement('div')
divSpanOptions.id = 'divSpanOptions'
divSpanOptions.innerHTML = `<p class="notifications" id="options">Cuentas y más opciones</p>`
divSpanOptions.style.display = 'none'
optionsButton.addEventListener('mouseenter', () => {
  const divSpanOptions = document.querySelector('#divSpanOptions')
  divSpanOptions.style.display = 'block'
})
optionsButton.addEventListener('mouseleave', () => {
  divSpanOptions.style.display = 'none'
})
optionsButton.append(optionsImg, divSpanOptions)

secondDiv.append(
  notificationsButton,
  messagesButton,
  perfilButton,
  optionsButton
)

createNavBar.append(firstDiv, searchInput, secondDiv) // Utilizar createNavBar en lugar de navBar
const app = document.querySelector('#app')
document.body.insertBefore(createNavBar, app) // Utilizar createNavBar en lugar de navBar
