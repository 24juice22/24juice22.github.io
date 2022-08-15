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

//////// Attribute Becomes Visible on Scroll //////////////
let attribute = document.querySelectorAll(".about__attribute");
let attribute1 = document.querySelector(".about__attribute-1");
let attribute2 = document.querySelector(".about__attribute-2");
let attribute3 = document.querySelector(".about__attribute-3");
let attribute4 = document.querySelector(".about__attribute-4");
let attributeParent = attribute[0].offsetParent;
let attributeParentParent = attributeParent.offsetParent;

function attributeVisible(e) {
    const windowBottom = (window.scrollY + window.innerHeight);
    const attribute1VisibleLevel = attributeParentParent.offsetTop + attributeParent.offsetTop + attribute1.offsetTop + (attribute1.offsetHeight / 1.2);
    const attribute2VisibleLevel = attributeParentParent.offsetTop + attributeParent.offsetTop + attribute2.offsetTop + (attribute2.offsetHeight / 1.2);
    const attribute3VisibleLevel = attributeParentParent.offsetTop + attributeParent.offsetTop + attribute3.offsetTop + (attribute3.offsetHeight / 1.2);
    const attribute4VisibleLevel = attributeParentParent.offsetTop + attributeParent.offsetTop + attribute4.offsetTop + (attribute4.offsetHeight / 1.2);
    console.log(windowBottom);
    console.log("att1:   " + attribute1VisibleLevel)
    if (windowBottom > attribute1VisibleLevel) 
        attribute1.classList.add("visible");
    if (windowBottom > attribute2VisibleLevel) 
        attribute2.classList.add("visible"); 
    if (windowBottom > attribute3VisibleLevel) 
        attribute3.classList.add("visible");
    if (windowBottom > attribute4VisibleLevel) 
        attribute4.classList.add("visible");
}

window.addEventListener("scroll", debounce(attributeVisible));


 




