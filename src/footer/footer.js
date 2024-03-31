import './footer.css'
export const createFooter = () => {
  const footer = document.createElement('footer')
  footer.className = 'footer'
  footer.innerText = 'Create by Raúl MF ©️ 2024 RockTheCode 🤖'
  document.body.appendChild(footer)
}
