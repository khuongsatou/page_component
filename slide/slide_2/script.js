let currentPage = 0;
const pages = $('.page');
const totalPages = pages.length;

$('#nextPage').on('click', () => {
    if (currentPage < totalPages - 1) {
        $(pages[currentPage]).css('transform', 'rotateY(-180deg)');
        currentPage++;
    }
});

$('#prevPage').on('click', () => {
    if (currentPage > 0) {
        currentPage--;
        $(pages[currentPage]).css('transform', 'rotateY(0deg)');
    }
});
