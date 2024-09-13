document.querySelector('.tour-info').addEventListener('mouseover', function() {
    this.querySelector('.current-price').classList.add('animate-price');
});

document.querySelector('.tour-info').addEventListener('mouseout', function() {
    this.querySelector('.current-price').classList.remove('animate-price');
});
