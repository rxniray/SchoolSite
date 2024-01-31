document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.header__burger');
    var nav = document.querySelector('.nav');

    burger.addEventListener('click', function(event) {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});