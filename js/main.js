//EVENTO MENU ON CLICK
const buttonMenu = document.querySelector(".button-menu")
const navLinks = document.querySelector(".nav-links")

buttonMenu.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})