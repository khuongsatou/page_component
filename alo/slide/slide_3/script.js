let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const pageNumber = document.getElementById('pageNumber');

const textContent = [
    {
        avatar: 'avatar1.jpg',
        name: 'The Independent US',
        title: 'Kaley Cuoco, Mark Hamill lead host of tributes to \'comedy royalty\' Bob Newhart',
        description: '\'Watching him was a privilege\''
    },
    {
        avatar: 'avatar2.jpg',
        name: 'Author 2',
        title: 'Sample Title 2',
        description: 'Sample Description 2'
    },
    {
        avatar: 'avatar3.jpg',
        name: 'Author 3',
        title: 'Sample Title 3',
        description: 'Sample Description 3'
    }
];

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
    updateTextContent();
}

function updatePageNumber() {
    pageNumber.textContent = `${currentIndex + 1} of ${totalSlides}`;
}

function updateTextContent() {
    const content = textContent[currentIndex];
    document.getElementById('authorAvatar').src = content.avatar;
    document.getElementById('authorName').textContent = content.name;
    document.getElementById('title').textContent = content.title;
    document.getElementById('description').textContent = content.description;
}

// Initial setup
updatePageNumber();
updateTextContent();
