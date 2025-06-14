const container = document.querySelector('.project-page-metacontainer');
let slides = document.querySelectorAll('.active .project-page-container');

// project page navigation buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// nav button labels
const left = document.getElementById('left');
const right = document.getElementById('right');

const leftMobile = document.getElementById('leftMobile');
const rightMobile = document.getElementById('rightMobile');

// project category selector buttons
const tuasBtn = document.getElementById('tuas-button');
const personalBtn = document.getElementById('personal-button');
const academicBtn = document.getElementById('academic-button');
const otherBtn = document.getElementById('other-button');

// project category selector button labels
const tuasH2 = document.getElementById('tuas-h2');
const personalH2 = document.getElementById('personal-h2');
const academicH2 = document.getElementById('academic-h2');
const otherH2 = document.getElementById('other-h2');

// project gallery metacontainers
const tuas = document.getElementById('tuas');
const personal = document.getElementById('personal');
const academic = document.getElementById('academic');
const other = document.getElementById('other');

// initialize which slide to show on initial render
let currentSlide = 0;
let currentCategory = "tuas";

function updateButtons() {
    // disable buttons if only one slide is present
    if (slides.length === 1) {
        left.classList.add("disable");
        leftMobile.classList.add("disable");
        right.classList.add("disable");
        rightMobile.classList.add("disable");
        return;
    }

    // disable left button, if on first slide
    prevBtn.disabled = currentSlide === 0;
    if (currentSlide === 0) {
        left.classList.add("disable");
        leftMobile.classList.add("disable");
    } else {
        left.classList.remove("disable");
        leftMobile.classList.remove("disable");
    }
    
    // disable right button, if on last slide
    nextBtn.disabled = currentSlide === slides.length - 1;
    if (currentSlide === slides.length - 1) {
        right.classList.add("disable");
        rightMobile.classList.add("disable");
    } else {
        right.classList.remove("disable");
        rightMobile.classList.remove("disable");
    }
}

function scrollToSlide(index) {
    const slide = document.getElementById(`${currentCategory}-${index}`);
    slide.scrollIntoView({ behavior: "smooth", block: "nearest" });
    currentSlide = index;
    updateButtons();
}

function initialScrollToSlide(index) {
    const slide = document.getElementById(`${currentCategory}-${index}`);
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

// set the selected category as active, and the others to inactive
tuasBtn.addEventListener('click', () => {
    tuas.classList.add('active');
    tuasH2.classList.add('selected');
    personal.classList.remove('active');
    personalH2.classList.remove('selected');
    academic.classList.remove('active');
    academicH2.classList.remove('selected');
    other.classList.remove('active');
    otherH2.classList.remove('selected');
    slides = document.querySelectorAll('.active .project-page-container');
    currentCategory = "tuas";
    currentSlide = 0;
    initialScrollToSlide(currentSlide)
    updateButtons();
});

personalBtn.addEventListener('click', () => {
    personal.classList.add('active');
    personalH2.classList.add('selected');
    tuas.classList.remove('active');
    tuasH2.classList.remove('selected');
    academic.classList.remove('active');
    academicH2.classList.remove('selected');
    other.classList.remove('active');
    otherH2.classList.remove('selected');
    slides = document.querySelectorAll('.active .project-page-container');
    currentCategory = "personal";
    currentSlide = 0;
    initialScrollToSlide(currentSlide)
    updateButtons();
});

academicBtn.addEventListener('click', () => {
    academic.classList.add('active');
    academicH2.classList.add('selected');
    personal.classList.remove('active');
    personalH2.classList.remove('selected');
    tuas.classList.remove('active');
    tuasH2.classList.remove('selected');
    other.classList.remove('active');
    otherH2.classList.remove('selected');
    slides = document.querySelectorAll('.active .project-page-container');
    currentCategory = "academic";
    currentSlide = 0;
    initialScrollToSlide(currentSlide)
    updateButtons();
});

otherBtn.addEventListener('click', () => {
    other.classList.add('active');
    otherH2.classList.add('selected');
    personal.classList.remove('active');
    personalH2.classList.remove('selected');
    tuas.classList.remove('active');
    tuasH2.classList.remove('selected');
    academic.classList.remove('active');
    academicH2.classList.remove('selected');
    slides = document.querySelectorAll('.active .project-page-container');
    currentCategory = "other";
    currentSlide = 0;
    initialScrollToSlide(currentSlide)
    updateButtons();
});
// Initial button state
updateButtons();
