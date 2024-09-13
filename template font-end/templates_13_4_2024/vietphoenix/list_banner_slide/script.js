function scrollNext() {
    const container = document.getElementById('scrollContainer');
    const scrollAmount = container.offsetWidth; // Chiều rộng của viewport (4 items)
    const maxScrollLeft = container.scrollWidth - container.clientWidth; // Tính vị trí cuối cùng có thể scroll

    // Kiểm tra nếu cuộn đến hết, quay lại đầu
    if (container.scrollLeft >= maxScrollLeft) {
        container.scrollTo({
            left: 0, // Quay về đầu
            behavior: 'smooth'
        });
    } else {
        // Cuộn tiếp theo
        container.scrollBy({
            left: scrollAmount, // Cuộn ngang thêm 4 items
            behavior: 'smooth'
        });
    }
}

function scrollPrev() {
    const container = document.getElementById('scrollContainer');
    const scrollAmount = container.offsetWidth; // Lấy chiều rộng của container (4 items)

    if (container.scrollLeft <= 0) {
        // Nếu đã về đầu danh sách, quay lại cuối
        container.scrollTo({
            left: container.scrollWidth - container.clientWidth,
            behavior: 'smooth'
        });
    } else {
        // Cuộn bình thường
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
}
