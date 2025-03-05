function toggleMenu() {
    var menu = document.querySelector(".mobile-nav");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}