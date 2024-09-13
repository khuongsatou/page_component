document.getElementById('nights').addEventListener('input', function() {
    const checkInDate = new Date(document.getElementById('check-in').value);
    const nights = parseInt(this.value);
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkInDate.getDate() + nights);

    const formattedDate = checkOutDate.toISOString().split('T')[0];
    document.getElementById('check-out').value = formattedDate;
});
