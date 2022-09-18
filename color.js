let colors = document.querySelectorAll(".colors");
let missingColors = colors[3];
let borderedColor = document.querySelectorAll(".color--white");

for (let i= 0; i < colors.length; i++) {
    colors[i].addEventListener("click", () => {
        for (let i = 0; i < borderedColor.length; i++) {
            borderedColor[i].style.border = "none";
            borderedColor[i].style.height = "2.3rem";
        }
        colors[i].style.display = "none";
        missingColors.style.display = "flex";
        missingColors = colors[i];

        if (i === 0) {
            document.documentElement.style.setProperty("--color-primary", "rgb(140, 0, 255)");
            document.documentElement.style.setProperty("--color-secondary", "rgb(21, 255, 0");
            document.documentElement.style.setProperty("--color-tertiary", "#ff00d4");
            document.documentElement.style.setProperty("--color-body", "rgb(21, 255, 0");
            document.documentElement.style.setProperty("--color-white", "black");
        }
        else if (i === 1) {
            let attributeBody = document.querySelectorAll(".attribute__body");
            document.documentElement.style.setProperty("--color-primary", "yellow");
            document.documentElement.style.setProperty("--color-secondary", "red");
            document.documentElement.style.setProperty("--color-tertiary", "white");
            document.documentElement.style.setProperty("--color-body", "white");
            document.documentElement.style.setProperty("--color-white", "red");

            for (let i = 0; i < attributeBody.length; i++)
                attributeBody[i].style.color = "black";
        }
        else if (i === 2) {
            let colorWhite = document.querySelectorAll(".color--white");
            let attributeBody = document.querySelectorAll(".attribute__body");
            document.documentElement.style.setProperty("--color-primary", "rgb(207, 181, 59");
            document.documentElement.style.setProperty("--color-secondary", "white");
            document.documentElement.style.setProperty("--color-tertiary", "white");
            document.documentElement.style.setProperty("--color-body", "white");
            document.documentElement.style.setProperty("--color-white", "#000071");

            for (let i = 0; i < attributeBody.length; i++)
                attributeBody[i].style.color = "black";

            borderedColor = document.querySelectorAll(".color--blue");
    
            for (let i= 0; i < borderedColor.length; i++) {
                borderedColor[i].style.border = "1px solid aqua";
                borderedColor[i].style.height = "2.3rem";
            }
        }
        else if (i === 3) {
            let attributeBody = document.querySelectorAll(".attribute__body");
            document.documentElement.style.setProperty("--color-primary", "#000071");
            document.documentElement.style.setProperty("--color-secondary", "aqua");
            document.documentElement.style.setProperty("--color-tertiary", "#2b52ac");
            document.documentElement.style.setProperty("--color-body", "#5c555c");
            document.documentElement.style.setProperty("--color-white", "white");

            for (let i = 0; i < attributeBody.length; i++)
                attributeBody[i].style.color = "white";

            borderedColor = document.querySelectorAll(".color--white");

            for (let i = 0; i < borderedColor.length; i++) {
                borderedColor[i].style.border = "1px solid #000071";
                borderedColor[i].style.height = "2.3rem";
            }
        } 
    })  
};

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
}

//////// Phone Image Slides In From Right //////////////
let colorScheme = document.querySelector("#color-scheme");
let colorSchemeTagline = document.querySelector(".color-scheme__tagline");
let colorSchemeImage = document.querySelector(".color-scheme__image-background");

function phoneSlide(e) {
    const windowBottom = (window.scrollY + window.innerHeight);
    const taglineBottom = colorScheme.offsetTop + colorSchemeTagline.offsetTop + (colorSchemeTagline.offsetHeight / 2);
    const imageTop = colorScheme.offsetTop + colorSchemeImage.offsetTop;
    if (windowBottom > taglineBottom) {
        if (window.innerWidth < 768) 
            colorSchemeImage.style.right = "-5%";
        else if (window.innerWidth < 1024) 
            colorSchemeImage.style.right = "5%";
        else if (window.innerWidth < 1200) 
            colorSchemeImage.style.right = "15%";
        else 
            colorSchemeImage.style.right = "20%";
    }
    else if (windowBottom < imageTop)
            colorSchemeImage.style.right = "-60%"; 
}

window.addEventListener("scroll", debounce(phoneSlide));