let body = document.body;
let toggler = document.querySelector(".toggler");
let nav = document.querySelector(".navbar__list");
let menu = document.querySelector(".toggler__menu");
let closed = document.querySelector(".toggler__closed");
let link = document.querySelectorAll(".collapsible-menu__link");
let hero = document.querySelector(".hero__content");
let logo = document.querySelector(".navbar__logo");
let collapsibleMenu = document.querySelector(".collapsible-menu");
let about = document.querySelector("#about");
let project = document.querySelectorAll(".projects__card");
let tech = document.querySelector("#tech");

////// adjust Toggler for Collapsible Menu

toggler.addEventListener("click", () => {
    collapsibleMenu.classList.toggle("collapse");
    closed.classList.toggle("show")
    menu.classList.toggle("hide")
    logo.classList.toggle("collapse-secondary");
    toggler.classList.toggle("collapse-secondary")
    body.classList.toggle("collapse");
})

/////// Hide Nav-List when Link is Clicked

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", hideNavList);
}

function hideNavList() {
    collapsibleMenu.classList.toggle("collapse");
    closed.classList.toggle("show");
    menu.classList.toggle("hide");
    logo.classList.toggle("collapse-secondary");
    toggler.classList.toggle("collapse-secondary");
    body.classList.toggle("collapse");
}

/////// Debounce Function ///////
function debounce(func, wait = 15, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//////// Hide nav-list on scroll //////////////
function checkNavScroll(e) {
    const logoBottom = (window.scrollY + logo.offsetHeight);
    const heroTop = hero.offsetTop;
    if (logoBottom > heroTop) 
        nav.classList.add("hidden");
    else
        nav.classList.remove("hidden");
}

window.addEventListener("scroll", debounce(checkNavScroll))

//////// Change Logo/Toggler colors on scroll /////////////////////
function logoColor(e) {
    const logoBottom = (window.scrollY + logo.offsetHeight);
    const aboutTop = about.offsetTop;
    const aboutBottom = about.offsetTop + about.offsetHeight;
    const projectTop = project[0].offsetTop;
    const projectMiddle = projectTop + (project[0].offsetHeight / 2);
    const lastProjectBottom = project[1].offsetTop + project[1].offsetHeight;
    const techTop = tech.offsetTop;
    if (logoBottom > aboutTop && logoBottom < aboutBottom) {
        logo.classList.add("secondary");
        toggler.classList.add("secondary");
    }
    else if (logoBottom > lastProjectBottom && logoBottom < techTop) {
        logo.classList.add("secondary");
        toggler.classList.add("secondary");
    }
    else {
        logo.classList.remove("secondary");
        toggler.classList.remove("secondary");
    }

    if (window.innerWidth > 1300) {
        if (logoBottom > projectMiddle && logoBottom < techTop) {
            logo.classList.add("secondary");
            toggler.classList.add("secondary");
        }
        else if (logoBottom > techTop) {
            logo.classList.remove("secondary");
            toggler.classList.remove("secondary");
        }
    }
}

window.addEventListener("scroll", debounce(logoColor))

