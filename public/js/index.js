//-------------- SHOW MENU ---------------
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

//------------- CHANGE BACKGROUND HEADER -------------
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    this.scrollY >= 100 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
});

//------------- SWIPER DISCOVER -------------
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
    }
});

//----------------- VIDEO -----------------
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon');

const playPauseVideo = () => {

    if (videoFile.paused) {

        videoFile.play();

        videoIcon.classList.remove('ri-play-line');
        videoIcon.classList.add('ri-pause-line');

    }
    else {

        videoFile.pause();

        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');

    }
}

videoButton.addEventListener('click', playPauseVideo);

videoFile.addEventListener('ended', () => {

    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');

});

//----------------- SHOW SCROLL UP -----------------
const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
    this.scrollY >= 200 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
});

//----------------- SCROLL ACTIVE -----------------
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {

    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
}

window.addEventListener('scroll', scrollActive);

//----------------- DARK LIGHT THEME -----------------
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

//----------------- SCROLL REVEAL ANIMATION -----------------
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
});

sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
});

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
});

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
});