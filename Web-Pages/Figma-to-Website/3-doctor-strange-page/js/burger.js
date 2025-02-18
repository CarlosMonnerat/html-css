const menu = document.querySelector(".menu-burger-container");

const active = () => menu.classList.toggle('active') //Se não tiver a classe "active", add, não tiver, remove

menu.addEventListener('click', active);