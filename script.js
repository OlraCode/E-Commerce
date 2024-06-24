function menu(){
    const menu = document.querySelector("nav .hamburguer")
    menu.style.maxHeight = menu.style.maxHeight == "0px"? "577px": "0"
}
window.addEventListener("resize", () => {
    const menu = document.querySelector("nav .hamburguer")
    if (innerWidth > 600){
        menu.style.maxHeight = 0
    }
})

const carrousel = document.querySelector(".carrousel .images")
const carrousel_imgs = document.querySelectorAll(".carrousel .images img")

let current = 1

function CarrouselNext(){
        current++
        CarrouselMove()
}
function CarrouselMove(animation=true){
    if (animation) carrousel.style.transition = "all .5s ease-in-out"
    else carrousel.style.transition = "none"
    carrousel.style.transform = `translateX(-${current * 350}px)`
    setTimeout(() =>{
    if (current == carrousel_imgs.length - 1){
        current = 1
        CarrouselMove(false)
    }
    }, 500)
}
let interval = setInterval(CarrouselNext, 5000)