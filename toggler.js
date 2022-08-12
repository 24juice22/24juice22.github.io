let toggler = document.querySelector(".toggler");
let nav = document.querySelector(".navbar__list");
let menu = document.querySelector(".toggler__menu");
let closed = document.querySelector(".toggler__closed");
let link = document.querySelectorAll(".collapsible-menu__link");
let hero = document.querySelector(".hero__content");
let logo = document.querySelector(".navbar__logo");
let collapsibleMenu = document.querySelector(".collapsible-menu");


console.log(logo.style);
////// adjust Toggler

toggler.addEventListener("click", () => {
    collapsibleMenu.classList.toggle("collapse");
    closed.classList.toggle("show")
    menu.classList.toggle("hide")
    logo.classList.toggle("white");
    toggler.classList.toggle("white")
})

/////// Hide Nav-List when Link is Clicked

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", hideNavList);
}

function hideNavList() {
    collapsibleMenu.classList.toggle("collapse");
    closed.classList.toggle("show");
    menu.classList.toggle("hide");
    logo.classList.toggle("white");
    toggler.classList.toggle("white")
}






