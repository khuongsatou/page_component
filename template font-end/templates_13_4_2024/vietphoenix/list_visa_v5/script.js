document.addEventListener('DOMContentLoaded', () => {
    // Add hover animation to visa cards
    document.querySelectorAll('.visa-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Add zoom-in rotation animation to the container
    const container = document.querySelector('.visa-container');
    container.style.opacity = '1';
});
