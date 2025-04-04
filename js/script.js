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

document.addEventListener("DOMContentLoaded", function () {
    // Обработчики для вкладок
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    // Лайтбокс
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
    }

    // Подключаем галерею
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });

    // Подключаем сертификаты
    document.querySelectorAll('.certificate-container .certificate').forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });

    // Закрытие лайтбокса
    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });
});
