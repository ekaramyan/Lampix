
let button = document.querySelector('.burger-button'); //кнопка
let menu = document.querySelector('.burger-menu');

button.onclick = () => { //накидываем на кнопку обработчик событий по клику.
//    menu.classList.toggle('.sidebar{display:grid}');
   document.getElementById(".sidebar").style.display = "grid";
}
