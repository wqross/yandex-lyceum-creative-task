// Typed JS
let typeAdj = new Typed('#type_adj', {
    strings: ['современный', 'крутой', 'креативный'],
    smartBackspace: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1300,
    loop: true,
});

// Animation on scroll

const skillsFills = document.querySelectorAll('.skills__fill');
const skillsProgressbars = document.querySelectorAll('.skills__progressbar');

let scrollNow = window.scrollY;
const scrollChange = 609;

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