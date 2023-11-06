const burger = document.getElementById('burger')
const burgerMenu = document.getElementById('burgerMenu')
const burgerIcon = document.getElementById('burgerIcon')
const closeIcon = document.getElementById('closeIcon')

function showMenu() {
    let isVisible = false
    if (isVisible === false){
        isVisible = !isVisible
        burgerMenu.classList.toggle('hidden')
        burgerIcon.classList.toggle('hidden')
        closeIcon.classList.toggle('hidden')
    }else {
        isVisible = !isVisible
        closeIcon.classList.toggle('hidden')
        burgerIcon.classList.toggle('hidden')
        burgerMenu.classList.toggle('hidden')
    }
}
