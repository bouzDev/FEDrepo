const sliderWidth = document.querySelector('section:nth-of-type(2) h2');
const slider = document.querySelector('#home section:nth-of-type(2) ul');
const video = document.querySelector('main > header video');
const videoTrigger = document.querySelector('section:nth-of-type(2)');
const scaleVideo = videoTrigger.getBoundingClientRect();
const sections = document.querySelectorAll('section');

function setSlider() {
    slider.style.padding = `3.5rem ${sliderWidth.offsetLeft}px`;
}

function videoScroll() {
    // 400 - 100 = 300
    // 100 / 400 * 300
    let distance = window.innerHeight - window.pageYOffset;
    let scale = (50 / window.innerHeight) * distance + 50;
    if (window.pageYOffset < window.innerHeight) {
        video.style.transform = `scale(${scale * 0.01})`;
    }
}

const observerVideo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        video.classList.toggle('video-absolute', entry.isIntersecting);
    });
});

const observerAnim = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('entry-animation');
        }
    });
});

observerVideo.observe(videoTrigger);

sections.forEach((section) => {
    for (let i = 0; i < section.children.length; i++) {
        observerAnim.observe(section.children[i]);
    }
});

setSlider();

window.addEventListener('resize', setSlider);
window.addEventListener('scroll', videoScroll);
