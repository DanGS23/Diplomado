const menu = document.getElementById('menu');

function open() {
    document.querySelector(".sidebar").classList.toggle("translate-x-[-100%]");
    document.querySelector("#container").classList.toggle("ml-[0px]");
    menu.classList.toggle('rotate-180')
}

menu.addEventListener('click', open)