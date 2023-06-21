const body = document.querySelector('body')
const switchTheme = document.querySelector('[data-js="switch-theme"]')
const imgMyProfile = document.querySelector('[data-js="img-my-profile"]')

const checkThemeLocalStorage = () => {
  const themeIsLightInLocalStorage = JSON.parse(localStorage.getItem('theme')) === 'light'
  
  if(themeIsLightInLocalStorage) {
    body.classList.add('light')
  }
  
  changeMyProfile()
}

const changeMyProfile = () => {
  body.classList.contains('light') 
  ? imgMyProfile.setAttribute("src", "./assets/avatar-light.png")
  : imgMyProfile.setAttribute("src", "./assets/avatar.png")
}

const changeTheme = () => {
  const themeIsLight = body.classList.toggle('light')
  saveLocalStorage(themeIsLight)
  changeMyProfile()
}
const setItemLocalStorage = theme => localStorage.setItem('theme',JSON.stringify(theme))

const saveLocalStorage = isLight => isLight ? setItemLocalStorage('light') : setItemLocalStorage('dark')

switchTheme.addEventListener('click', changeTheme)

window.addEventListener('load', checkThemeLocalStorage)

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})