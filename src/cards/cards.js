import './cards.css'

export const drawCard = (data, parent) => {
  const card = document.createElement('div')
  card.className = 'card-container'

  const image = document.createElement('img')
  image.src = data.urls.small
  image.alt = data.alt_description

  card.append(image)
  parent.append(card)
}