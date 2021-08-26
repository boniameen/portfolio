const links = document.querySelectorAll(".alternate-style");
const bodySkin = document.querySelectorAll(".body-skin");
play();

function setActiveStyle(color) {
    for (let i = 0; i < links.length; i++) {
        if (color == links[i].getAttribute("title"))
            links[i].removeAttribute("disabled");
        else
            links[i].setAttribute("disabled", "true");
    }
    console.log(color)
}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
    if (document.querySelector(".aside").classList.contains("open")) {
        document.querySelector(".aside").classList.toggle("open");
    }
});
//Body Skin
for (let i = 0; i < bodySkin.length; i++) {
    bodySkin[i].addEventListener("change", function () {

        console.log(this.value);
        if (this.value === "dark")
            document.body.className = "dark"
        else
            document.body.className = ""

    })
}

function play() {
    //    var colorNum = Math.floor(Math.random() * 5);
    var colorNum = getRndInteger(0, 4);
    var date = new Date();
    for (let i = 0; i < links.length; i++) {
        if (colorNum == i)
            links[i].removeAttribute("disabled");
        else
            links[i].setAttribute("disabled", "true");
    }
    console.log(date.getHours())
    if (date.getHours() >= 19 || date.getHours() <= 6) { // switch to dark if night
        document.body.className = "dark";
        bodySkin[1].setAttribute("checked", "true");
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
