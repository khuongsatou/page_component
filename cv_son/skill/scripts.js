document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.transform = 'scale(1.05)';
    });

    skill.addEventListener('mouseleave', () => {
        skill.style.transform = 'scale(1)';
    });
});
