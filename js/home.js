// script.js
document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Computer Science @ UC San Diego", "Software Engineer", "Student", "Embedded Systems Engineer", "Full-Stack Engineer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    let isDeleting = false;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenWords = 1500;

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        
        if (isDeleting) {
            letter = currentText.slice(0, --index);
        } else {
            letter = currentText.slice(0, ++index);
        }

        document.querySelector('#typing').textContent = letter;

        if (!isDeleting && letter.length === currentText.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
        }
    })();
});