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
let attributeParent = attribute[0].offsetParent;
let attributeParentParent = attributeParent.offsetParent
for (let i = 0; i < attribute.length; i++) {
    function attributeVisible(e) {
        const windowBottom = (window.scrollY + window.innerHeight);
        const attributeVisibleLevel = attributeParentParent.offsetTop + attributeParent.offsetTop + attribute[i].offsetTop + (attribute[i].offsetHeight / 1.2);
        if (windowBottom > attributeVisibleLevel) 
            attribute[i].classList.add("visible")
    }
    window.addEventListener("scroll", debounce(attributeVisible));
}

 




