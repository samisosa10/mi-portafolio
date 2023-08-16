const burgerBtn = document.querySelector('.burger-btn')
const closeBtn = document.querySelector('.close-btn')
const head = document.querySelector('head')
const navBurger = document.querySelector('.nav-burger')
const main = document.querySelector('.main')
const header = document.querySelector('header')


burgerBtn.addEventListener('click' , () =>{
    
    navBurger.classList.add('nav-burger-visible')
})

closeBtn.addEventListener('click' , () => {

   navBurger.classList.remove('nav-burger-visible')
})

main.addEventListener('click' , () => {
    navBurger.classList.remove('nav-burger-visible')
})