$(document).ready(function () {
    $('.search-wrap').click(function (event) {
        $('.searchTerm').toggleClass('active');
    });
});

const search = function () {

}

const menu_btn = document.getElementById('burger-menu__btn');
if (menu_btn) {
    const burger_menu = document.getElementById('burger-menu');
    const burger_menu_content = document.getElementById('menu');
    menu_btn.addEventListener('click', function (e) {
        burger_menu.classList.add('active');
        burger_menu_content.classList.add('active');
    });
    console.log(menu_btn)
}
const menuClose = document.getElementById('burger-menu__btn_close');
if (menuClose) {
    const burger_menu = document.getElementById('burger-menu');
    const burger_menu_content = document.getElementById('menu');
    menuClose.addEventListener('click', function (e) {
        burger_menu.classList.remove('active');
        burger_menu_content.classList.remove('active');
    });
}

let acc = document.getElementsByClassName("accordion");
let acc_arr = document.getElementsByClassName("accordion__arrow");
let i;

acc.onclick = function () {
    acc.classList.toggle('active')
}

acc_arr.onclick = function () {
    acc_arr.classList.toggle('active')
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");


        /* Toggle between hiding and showing the active panel */
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function rangeFunction() {
    let rng = document.getElementById('myRange'); //rng - это ползунок
    let out = document.getElementById('range_count'); // i1 - input
    let coins = document.getElementById('range_coins');
    const min = rng.min
    const max = rng.max
    const value = rng.value
    rng.style.background = `linear-gradient(to right, #FFD699 0%, #FFD699 ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

    out.innerHTML = rng.value;
    coins.innerHTML = rng.value;

    rng.oninput = function () {
        out.innerHTML = parseInt(this.value * 10);
        coins.innerHTML = parseInt(this.value * 14);
        this.style.background = `linear-gradient(to right, #FFD699 0%, #FFD699 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`

    }
}
rangeFunction();
