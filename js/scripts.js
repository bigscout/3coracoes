var expandArray = document.querySelectorAll("ul.navbar__submenu");
var buttonArray = document.querySelectorAll("#toggle");

buttonArray.forEach(function (i) {
    i.addEventListener("click", function (e) {
        const clickedBtnIndex = [...buttonArray].indexOf(e.target);

        i.style.fontWeight = "300";

        expandArray.forEach(function (e) {
            if (e != expandArray[clickedBtnIndex]) {
                e.classList.add("hide");
                e.classList.remove("show");
            }
        });

        buttonArray.forEach(function (t) {
            t.removeAttribute("style");
        });

        if (expandArray[clickedBtnIndex].classList.contains("hide")) {
            expandArray[clickedBtnIndex].classList.add("show");
            expandArray[clickedBtnIndex].classList.remove("hide");
            //buttonArray[clickedBtnIndex].style.fontWeight = "bold";

            buttonArray[clickedBtnIndex].style.textShadow =
                "0 0 1px var(--color-text)";
        } else {
            expandArray[clickedBtnIndex].classList.remove("show");
            expandArray[clickedBtnIndex].classList.add("hide");
            buttonArray[clickedBtnIndex].removeAttribute("style");
        }
        //expandArray[clickedBtnIndex].classList.toggle("hide", false);
    });
});

document.body.addEventListener("click", function (evt) {
    if (evt.target.id != "toggle") {
        expandArray.forEach(function (e) {
            e.classList.add("hide");
            e.classList.remove("show");
        });
        buttonArray.forEach(function (t) {
            t.removeAttribute("style");
        });
    }
});

function validateForm() {
    let btnSearch = document.getElementsByName("navbar__search");
    let inputSearch = document.getElementById("searchbar");

    if (inputSearch.classList.contains("closed")) {
        inputSearch.classList.add("open");
        inputSearch.classList.remove("closed");
    } else {
        inputSearch.classList.add("closed");
        inputSearch.classList.remove("open");
    }
}

var swiper1 = new Swiper(".slide", {
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
    },
});

var swiper2 = new Swiper(".slider-brands", {
    slidesPerView: 5,
    spaceBetween: 1,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
});

var swiper3 = new Swiper(".banner__overflow", {
    pagination: {
        el: ".pagination-test",
        type: "bullets",
        clickable: true,
    },
});
