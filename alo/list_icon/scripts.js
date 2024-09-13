document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let index = 0;

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 30; // item width + margin
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(${-index * itemWidth}px)`;
        
        setTimeout(() => {
            if (index >= items.length) {
                // Move the first item to the end
                carousel.appendChild(carousel.firstElementChild);
                carousel.style.transition = 'none';
                index = items.length - 1;
                carousel.style.transform = `translateX(${-index * itemWidth}px)`;
            } else if (index < 0) {
                // Move the last item to the beginning
                carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
                carousel.style.transition = 'none';
                index = 0;
                carousel.style.transform = `translateX(0px)`;
            }
            requestAnimationFrame(() => {
                carousel.style.transition = 'transform 0.5s ease';
            });
        }, 500);
    }

    prevBtn.addEventListener('click', () => {
        index--;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        index++;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
