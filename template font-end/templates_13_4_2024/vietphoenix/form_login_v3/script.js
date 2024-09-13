// Toggle password visibility
document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordInput = document.querySelector('input[type="password"]');
    const icon = this;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

// Thêm hiệu ứng khi nhấn vào nút Đăng Nhập
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn submit thực sự để hiển thị animation
    const button = document.querySelector('.btn-login');
    
    // Thêm animation cho nút đăng nhập
    button.classList.add('pressed');
    setTimeout(function() {
        button.classList.remove('pressed');
        
        // Thực hiện điều hướng hoặc xử lý sau khi animation hoàn tất
        // Ví dụ: chuyển hướng tới trang chính sau khi đăng nhập
        window.location.href = "dashboard.html"; // Điều hướng tạm thời
    }, 200); // Animation diễn ra trong 200ms
});
