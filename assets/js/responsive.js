// Function to toggle the menu visibility
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Optional: Close the menu when clicking outside the menu
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu");
    const toggleButton = document.querySelector(".menu-toggle");
    
    // If the click is outside the menu and button, close the menu on small screens
    if (!menu.contains(event.target) && !toggleButton.contains(event.target) && window.innerWidth <= 768) {
        menu.classList.remove("show");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const mainContent = document.querySelector(".main-content");
    const headerHeight = header.offsetHeight; // ارتفاع الهيدر
    mainContent.style.marginTop = `${headerHeight}px`; // تطبيق المسافة ديناميكيًا
});
