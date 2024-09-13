// You can add additional animation or event handling here
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.backgroundColor = '#3e1b16';
    });
    
    input.addEventListener('blur', () => {
        input.style.backgroundColor = 'transparent';
    });
});
