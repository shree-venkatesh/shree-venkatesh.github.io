const container = document.querySelector('.project-page-metacontainer');
const slides = document.querySelectorAll('.project-page-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const left = document.getElementById('left');
const right = document.getElementById('right');
let currentSlide = 0;

function updateButtons() {
    prevBtn.disabled = currentSlide === 0;
    if (currentSlide === 0) {
        left.classList.add("disable");
    } else {
        left.classList.remove("disable");
    }
    
    nextBtn.disabled = currentSlide === slides.length - 1;
    if (currentSlide === slides.length - 1) {
        right.classList.add("disable");
    } else {
        right.classList.remove("disable");
    }
}

function scrollToSlide(index) {
    const slide = document.getElementById(`${index}`);
    slide.scrollIntoView({ behavior: "smooth", block: "nearest" });
    currentSlide = index;
    updateButtons();
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        scrollToSlide(currentSlide - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        scrollToSlide(currentSlide + 1);
    }
});

// Initial button state
updateButtons();
