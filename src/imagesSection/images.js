import './images.css'

import { drawCard } from '../cards/cards'

export const createCardSection = (data) => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  const cardSection = document.createElement('section')
  cardSection.className = 'cardSection'
  const USER_KEY = 'ZoYrICho_8WIhQQu2dAtWN2D6QGb5xfgBn7ieXbloYA'
  const currentPage = Math.floor(Math.random() * 346) + 1
  let API_URL = `https://api.unsplash.com/photos?page=${currentPage}&client_id=${USER_KEY}`
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        drawCard(item, cardSection)
      })
    })
  app.append(cardSection)
}

createCardSection();
