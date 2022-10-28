// $(document).ready(function () {
//     $('.burger-menu__button').click(function (event) {
//         $('.burger-menu, .menu, .burger-menu__button-container .burger-menu__content').toggleClass('active');
//     });

$(document).ready(function () {
    $('.search-wrap').click(function (event) {
        $('.searchTerm').toggleClass('active');
    });
});
// });

const menu_btn = document.getElementById('burger-menu__btn');
if (menu_btn) {
    // const menu_button = document.querySelector('.burger-menu__btn');
    const burger_menu = document.getElementById('burger-menu');
    const burger_menu_content = document.getElementById('menu');
    menu_btn.addEventListener('click', function (e) {
        // menu_button.classList.toggle('active');
        burger_menu.classList.add('active');
        burger_menu_content.classList.add('active');
    });
    console.log(menu_btn)
}
const menuClose = document.getElementById( 'burger-menu__btn_close');
if(menuClose){
    const burger_menu = document.getElementById('burger-menu');
    const burger_menu_content = document.getElementById('menu');
    menuClose.addEventListener('click', function(e){
        burger_menu.classList.remove('active');
        burger_menu_content.classList.remove('active');
    });
}

// const box = document.querySelector('.burger-menu');

// document.addEventListener('click', (e) => {
//     const click = e.composedPath().includes(box);
//     if (!click) {
//         // box.style.display = 'none';
//         // box.classList.toggle('active')
//     }
// })





let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
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
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
//js
// function ActiveClass() {
//     var element = document.getElementById(".burger-menu__btn, .burger-menu__button");
//     element.classList.toggle(".burger-menu.active", ".menu.active");
//   }
