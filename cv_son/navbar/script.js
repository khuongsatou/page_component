// Add JavaScript if needed for advanced animations or interactions
document.addEventListener("DOMContentLoaded", function() {
    // Example: Add a click event to social icons
    const socialIcons = document.querySelectorAll(".social-icons a");
    socialIcons.forEach(icon => {
        icon.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Icon clicked: " + this.querySelector("i").classList[1]);
        });
    });
});
