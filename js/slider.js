
window.onload = function() {
    var preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 1s ease-in-out';

    setTimeout(function() {
        preloader.style.display = 'none';
    }, 2000); // Match the fade-out duration
};

 
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentIndex) ? "block" : "none";
    });
}

// Переключение на следующий и предыдущий слайд
function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Автоматическая смена слайдов каждые 5 секунд
setInterval(() => {
    nextSlide();
}, 5000);

// Показ первого слайда при загрузке
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);
});





