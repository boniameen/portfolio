const protfoliContainer = document.querySelector(".protfolio-filter"),
    filterBtns = protfoliContainer.children,
    totalFilterBtn = filterBtns.length,
    protfolioItems = document.querySelectorAll(".protfolio-item"),
    toTalProtfolioItems = protfolioItems.length;

const protfolioTitle = document.querySelectorAll(".protfolio-info h4"),
    protfolioIcon = document.querySelectorAll(".protfolio-info .icon");

for (var i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        protfoliContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (var k = 0; k < toTalProtfolioItems; k++) {
            const itemCat = protfolioItems[k].getAttribute("data-category");

            if (filterValue === itemCat || filterValue === "all") {
                protfolioItems[k].classList.remove("hide");
                protfolioItems[k].classList.add("show");
            } else {
                protfolioItems[k].classList.remove("show");
                protfolioItems[k].classList.add("hide");
            }
        }
    });
}

// Lightbox
let lightbox = document.querySelector(".lightbox"),
    lightboxImg = document.querySelector(".lightbox-content img"),
    lightboxText = document.querySelector(".caption-text"),
    lightboxCounter = document.querySelector(".caption-counter"),
    lightboxDetails = document.querySelector(".details p"),
    lightboxTags = document.querySelector(".tags");
var active = "home",
    prev;
let itemIndex = 0;
let imgSrc = "";
for (let i = 0; i < toTalProtfolioItems; i++) {
    protfolioTitle[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
    });
    protfolioIcon[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
    });
}
// lightbox close
document.querySelector(".lightbox-close").addEventListener("click", function () {
    lightbox.classList.remove("open");
});
document.querySelector(".lightbox").addEventListener("click", function (e) {
    if (e.target === lightbox)
        lightbox.classList.remove("open");
});

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
    let img = protfolioItems[itemIndex].querySelector(".protfolio-img img").getAttribute("src");
    let title = protfolioItems[itemIndex].querySelector(".protfolio-info h4").innerHTML;
    let details = protfolioItems[itemIndex].querySelector(".protfolio-info .details p").innerHTML;
    let tags = protfolioItems[itemIndex].querySelector(".protfolio-info .details .tags").innerHTML;
    document.querySelector(".lightbox-content img").setAttribute("src", img);
    document.querySelector(".caption-text").innerText = title;
    document.querySelector(".caption-counter").innerText = itemIndex + 1 + " of " + toTalProtfolioItems;
    document.querySelector(".lightbox-caption .details p.text").innerHTML = details;
    document.querySelector(".lightbox-caption .details p.tags").innerHTML = tags;
    lightbox.classList.add("open");
}

function previous() {
    if (itemIndex <= 0)
        itemIndex = toTalProtfolioItems - 1;
    else
        --itemIndex
    changeItem();
}

function next2() {
    if (itemIndex <= 0)
        itemIndex = toTalProtfolioItems - 1;
    else
        --itemIndex
    changeItem();
}

function next() {
    if (itemIndex >= toTalProtfolioItems - 1)
        itemIndex = 0;
    else
        itemIndex++;
    changeItem();
}
//Section animations
//Aside Navbar

const navItems = document.querySelectorAll(".nav li a");
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {


        if (document.querySelector(".home").classList[2] === "pre-active") {
            document.querySelector(".home").classList.toggle("pre-active");
            console.log("pre-active toggled!");
        }
        for (let j = 0; j < navItems.length; j++) {
            navItems[j].classList.remove("active");
        }
        this.classList.add("active");
        if (document.querySelector(".aside").classList.contains("open")) {
            document.querySelector(".aside").classList.toggle("open");
        }
        if (document.querySelector(".style-switcher").classList.contains("open")) {
            document.querySelector(".style-switcher").classList.toggle("open");
        }

        showSection(this.getAttribute("href").split("#")[1]);
    })
}
document.querySelector(".aside .logo a").addEventListener("click", function () {
    showSection("home");
    for (let i = 0; i < document.querySelectorAll(".nav li a").length; i++) {
        document.querySelectorAll(".nav li a")[i].classList.remove("active");
    }
    document.querySelectorAll(".nav li a")[0].classList.add("active");
})
document.querySelector("#hire-me").addEventListener("click", function () {
    showSection("contact");
    for (let i = 0; i < document.querySelectorAll(".nav li a").length; i++) {
        document.querySelectorAll(".nav li a")[i].classList.remove("active");
    }
    document.querySelectorAll(".nav li a")[5].classList.add("active");
})
//.about .about-content .personal-info .buttons .btn
function showSection(section) {
    const sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++) {
        if (section === sections[i].getAttribute("id")) {
            prev = active;
            active = sections[i].getAttribute("id");
            for (let j = 0; j < sections.length; j++) {
                if (prev === sections[j].getAttribute("id")) {

                    sections[j].classList.add("prev");
                } else {

                    sections[j].classList.remove("prev");
                }
            }
            sections[i].classList.add("active");
        } else {

            sections[i].classList.remove("active");
        }

    }
}

//Nav toggle
const navToggle = document.querySelector(".aside .nav-toggler");
navToggle.addEventListener("click", function () {
    document.querySelector(".aside").classList.toggle("open");
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.toggle("open");
    }
})

function bodyClick(event) {
    //    if (document.querySelector(".aside").classList.contains("open"))
    //        setTimeout(() => {
    //            document.querySelector(".aside").classList.toggle("open");
    //            console.log(event.type);
    //        }, 1000)

}

// typing effect
function write(obj, sentence, i, cb) {
    if (i != sentence.length) {
        setTimeout(function () {
            i++
            console.log('in timeout', i)
            obj.innerHTML = sentence.substr(0, i + 1) + ' <em aria-hidden="true"></em>';
            write(obj, sentence, i, cb)
        }, 50)
    } else {
        console.log(i)
        cb()
    }
}

function erase(obj, cb, i) {
    var sentence = obj.innerText
    if (sentence.length != 0) {
        setTimeout(function () {
            sentence = sentence.substr(0, sentence.length - 1)
            console.log('in timeout', i)
            obj.innerText = sentence
            erase(obj, cb)
        }, 18 / (i * (i / 10000000)))
    } else {
        obj.innerText = " "
        cb()
    }
}
var typeline = document.querySelector(".typeline")

function writeerase(obj, sentence, time, cb) {
    write(obj, sentence, 0, function () {
        setTimeout(function () {
            erase(obj, cb)
        }, time)
    })
}

var sentences = [
                    "an IT Entrepreneur. ",
                    "an Inventor. ",
                    "a Developer. ",
                    "a Web Designer. "
                  ]

var counter = 0

function loop() {
    var sentence = sentences[counter % sentences.length]
    writeerase(typeline, sentence, 1500, loop)
    counter++
}

loop()
