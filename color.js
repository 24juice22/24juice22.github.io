let colors = document.querySelectorAll(".colors");

let missing = colors[3];

for (let i= 0; i < colors.length; i++) {
    colors[i].addEventListener("click", () => {
        if (i === 0) {
            let colorBlack = document.querySelector(".color--black")
            document.documentElement.style.setProperty("--color-primary", "rgb(140, 0, 255)");
            document.documentElement.style.setProperty("--color-secondary", "rgb(21, 255, 0");
            document.documentElement.style.setProperty("--color-tertiary", "#ff00d4");
            document.documentElement.style.setProperty("--color-body", "rgb(21, 255, 0");
            document.documentElement.style.setProperty("--color-white", "black");
            document.querySelector("body").style.backgroundColor = "black";
            
            colorBlack.style.border = "1px solid rgb(140, 0, 255)";
            colorBlack.style.height = "2.3rem";

            colors[i].style.display = "none";
            missing.style.display = "flex";
            missing = colors[i]
        }
        else if (i === 1) {
            let colorWhite = document.querySelectorAll(".color--white");
            let attributeBody = document.querySelectorAll(".attribute__body");
            document.documentElement.style.setProperty("--color-primary", "yellow");
            document.documentElement.style.setProperty("--color-secondary", "red");
            document.documentElement.style.setProperty("--color-tertiary", "rgb(255, 102, 0)");
            document.documentElement.style.setProperty("--color-body", "white");
            document.documentElement.style.setProperty("--color-white", "red");
            document.querySelector("body").style.backgroundColor = "red";

            for (let i = 0; i < attributeBody.length; i++)
                attributeBody[i].style.color = "black";
            
            colors[i].style.display = "none";
            missing.style.display = "flex";
            missing = colors[i]

            for (let i = 0; i < colorWhite.length; i++) {
                colorWhite[i].style.border = "none";
                colorWhite[i].style.height = "2.5rem";
            }
        }
        else if (i === 2) {
            let colorWhite = document.querySelectorAll(".color--white");
            let colorBlue = document.querySelectorAll(".color--blue");
            let attributeBody = document.querySelectorAll(".attribute__body");
            document.documentElement.style.setProperty("--color-primary", "rgb(207, 181, 59");
            document.documentElement.style.setProperty("--color-secondary", "white");
            document.documentElement.style.setProperty("--color-tertiary", "#2b52ac");
            document.documentElement.style.setProperty("--color-body", "white");
            document.documentElement.style.setProperty("--color-white", "#000071");
            document.querySelector("body").style.backgroundColor = "#000071";

            for (let i = 0; i < attributeBody.length; i++)
                attributeBody[i].style.color = "black";
            
            colors[i].style.display = "none";
            missing.style.display = "flex";
            missing = colors[i];

            for (let i = 0; i < colorWhite.length; i++) {
                colorWhite[i].style.border = "none";
                colorWhite[i].style.height = "2.5rem";
            }

            for (let i= 0; i < colorBlue.length; i++) {
                colorBlue[i].style.border = "1px solid aqua";
                colorBlue[i].style.height = "2.3rem";
            }
        }
        else if (i === 3) {
            let colorWhite = document.querySelectorAll(".color--white");
            let colorBlue = document.querySelectorAll(".color--blue");
            let attributeBody = document.querySelectorAll(".attribute__body");
            document.documentElement.style.setProperty("--color-primary", "#000071");
            document.documentElement.style.setProperty("--color-secondary", "aqua");
            document.documentElement.style.setProperty("--color-tertiary", "#2b52ac");
            document.documentElement.style.setProperty("--color-body", "#5c555c");
            document.documentElement.style.setProperty("--color-white", "white");
            document.querySelector("body").style.backgroundColor = "white";

            for (let i = 0; i < attributeBody.length; i++)
                attributeBody[i].style.color = "white";
            
            colors[i].style.display = "none";
            missing.style.display = "flex";
            missing = colors[i];
        }

    })
};