document.getElementById("burger-btn").addEventListener("click", function (event) {
    document.getElementById("mobile-menu").classList.toggle("open");
    event.stopPropagation(); // Предотвращаем всплытие клика
});

document.addEventListener("click", function (event) {
    const menu = document.getElementById("mobile-menu");
    const button = document.getElementById("burger-btn");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("open");
    }
});