let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    moveToNextSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    moveToPrevSlide();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        moveToSlide(index);
    });
});

function moveToNextSlide() {
    if (currentIndex === totalSlides - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (currentIndex === 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex--;
    }
    updateSlidePosition();
}

function moveToSlide(index) {
    currentIndex = index;
    updateSlidePosition();
}

function updateSlidePosition() {
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${newTransformValue}%)`;
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}
