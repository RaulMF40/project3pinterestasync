import './button.css'

export const createButton = () => {
  const showMoreButton = document.createElement('button')
  showMoreButton.id = 'show-more'
  showMoreButton.innerText = 'Mostrar más'
  document.body.append(showMoreButton)
}