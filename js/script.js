const toggle = document.getElementById('toggle');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.btn');

toggle.addEventListener('click', () => {
    menu.classList.add('active');
    nav.classList.add('active');
    close.classList.add('active');
});


close.addEventListener('click', () => {
    menu.classList.remove('active');
    nav.classList.remove('active');
    close.classList.remove('active');
});