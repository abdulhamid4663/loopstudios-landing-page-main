const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector ('.header');
const overlay = document.querySelector ('.overlay');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function() {
    console.log('click hamburger');

    if(header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        hamburgerMenu.classList.add('fade-out');
        hamburgerMenu.classList.remove('fade-in');
        body.classList.remove('no-scroll');
    }
    else {
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        hamburgerMenu.classList.remove('fade-out');
        hamburgerMenu.classList.add('fade-in');
        body.classList.add('no-scroll');
    }
})