document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.animation = 'shake 0.3s';
        });

        item.addEventListener('animationend', () => {
            item.style.animation = '';
        });
    });
});
