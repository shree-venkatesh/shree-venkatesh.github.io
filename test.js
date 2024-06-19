let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("project-page-container");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Increment slideIndex
    slideIndex++;

    // If slideIndex exceeds the number of slides, reset to 0
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].classList.add('active');

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}
