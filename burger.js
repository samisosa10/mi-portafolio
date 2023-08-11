const burgerBtn = document.querySelector('.burger-btn')
const closeBtn = document.querySelector('.close-btn')
const head = document.querySelector('head')
const navBurger = document.querySelector('.nav-burger')


burgerBtn.addEventListener('click' , () =>{
    
    navBurger.classList.add('nav-burger-visible')
})

closeBtn.addEventListener('click' , () => {

   navBurger.classList.remove('nav-burger-visible')
})

