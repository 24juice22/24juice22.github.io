let colors = document.querySelectorAll(".colors");

let missing = colors[3];

let borderedColor = document.querySelectorAll(".color--white");

for (let i= 0; i < colors.length; i++) {
    colors[i].addEventListener("click", () => {
        for (let i = 0; i < borderedColor.length; i++) {
            borderedColor[i].style.border = "none";
            borderedColor[i].style.height = "2.3rem";
        }
        colors[i].style.display = "none";
        missing.style.display = "flex";
        missing = colors[i];

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