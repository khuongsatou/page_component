let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const pageNumber = document.getElementById('pageNumber');

document.getElementById('nextBtn').addEventListener('click', () => {
    moveToNextSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    moveToPrevSlide();
});

document.getElementById('nextPageBtn').addEventListener('click', () => {
    moveToNextSlide();
});

document.getElementById('prevPageBtn').addEventListener('click', () => {
    moveToPrevSlide();
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

function updateSlidePosition() {
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${newTransformValue}%)`;
    updatePageNumber();
}

function updatePageNumber() {
    pageNumber.textContent = `${currentIndex + 1} of ${totalSlides}`;
}

// Initial setup
updatePageNumber();
