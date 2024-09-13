document.addEventListener('DOMContentLoaded', () => {
    const notificationIcon = document.querySelector('.notification-icon');
    const loginLink = document.querySelector('.login-link');
    const commentIcons = document.querySelectorAll('.comment-icons i');

    notificationIcon.addEventListener('click', () => {
        alert('Notification clicked!');
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Login link clicked!');
    });

    commentIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            alert('Icon clicked!');
        });
    });
});
