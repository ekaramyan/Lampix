$(document).ready(function(){
    $('.burger-menu__button').click(function(event){
    $('.burger-menu, .menu, burger-menu__button-container').toggleClass('active');

    $('.search').click(function(event)
    {
        $('.searchTerm').toggleClass('active');
    });
    });
});


//js
// function ActiveClass() {
//     var element = document.getElementById("burger-menu__btn");
//     element.classList.toggle(".burger-menu.active", ".menu.active");
//   }