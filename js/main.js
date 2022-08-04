let elButton= document.querySelector(".header__button")
let elBurger= document.querySelector(".header__brg")
let elNav= document.querySelector(".header__navbar")
let elCross= document.querySelector(".navbar__cross1")
let elbg = document.querySelector(".header")
elButton.addEventListener("click" , ()=> {
    elNav.classList.toggle("active")
    if (elCross.style.display == "flex") {
        elCross.style.display = "none"
    }else{
        elCross.style.display = "flex"
    }
    elbg.classList.toggle("active__bg")
    elBurger.classList.toggle("deactive")
})