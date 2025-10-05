
let header = document.querySelector(".header")
let heightScale = window.innerHeight

window.addEventListener("scroll", () => {
    header.classList.toggle("roll", window.scrollY > heightScale - heightScale * 0.3)
    console.log(window.scrollY)
    console.log(heightScale - heightScale * 0.3)
})

console.log(window.innerHeight)



