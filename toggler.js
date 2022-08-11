let toggler = document.querySelector(".toggler");
let nav = document.querySelector(".navbar__list");
let menu = document.querySelector(".toggler__menu");
let closed = document.querySelector(".toggler__closed");
let link = document.querySelectorAll(".navbar__link");

toggler.addEventListener("click", () => {
    nav.classList.toggle("active")
    closed.classList.toggle("show")
    menu.classList.toggle("hide")
})

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", () => {
        nav.classList.toggle("active")
        closed.classList.toggle("show")
        menu.classList.toggle("hide")
    })
}






