document.querySelectorAll('.btn.plus').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        let value = parseInt(input.value);
        input.value = value + 1;
    });
});

document.querySelectorAll('.btn.minus').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.nextElementSibling;
        let value = parseInt(input.value);
        if (value > 0) {
            input.value = value - 1;
        }
    });
});

document.querySelector('.close-icon').addEventListener('click', function() {
    document.querySelector('.room-selector').style.display = 'none';
});
