// Typed JS
let typeAdj = new Typed('#type_adj', {
    strings: ['современный', 'творческий', 'креативный', 'уникальный', 'необычный', 'новаторский', 'качественный'],
    smartBackspace: true,
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1400,
    loop: true,
});

// Animation on scroll

const skillsFills = document.querySelectorAll('.skills__fill');
const skillsProgressbars = document.querySelectorAll('.skills__progressbar');

let scrollNow = window.scrollY;
const scrollChange = 590;

function animOnScroll() {
    for (const skillsFill of skillsFills) {
        skillsFill.style.animation = "tech-progress 2s 0.5s forwards";
    }
    for (const skillsProgressbar of skillsProgressbars) {
        skillsProgressbar.style.animation = "soft-progress 2s 0.5s forwards";
    }
};

window.addEventListener('scroll', () => { 
    scrollNow = window.scrollY;
    if (scrollNow >= scrollChange) { animOnScroll(); } 
    else {
        for (const skillsFill of skillsFills) {
            skillsFill.style.animation = "";
        }
        for (const skillsProgressbar of skillsProgressbars) {
            skillsProgressbar.style.animation = "";
            skillsProgressbar.style.setProperty('--percentage', '0');
        }
    }
});

// AOS JS
AOS.init({ duration: 1500 });