document.getElementById("burger-btn").addEventListener("click", function (event) {
    document.getElementById("mobile-menu").classList.toggle("open");
    document.getElementById("nav-section").classList.toggle("open");    
    event.stopPropagation(); 
});

document.addEventListener("click", function (event) {
    const menu = document.getElementById("mobile-menu");
    const button = document.getElementById("burger-btn");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("open");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    
    const lightbox = document.getElementById('lightbox');

    function openLightbox(src) {
        const placeholder = 'https://via.placeholder.com/800x600?text=No+Image'; 
    
        const lightbox = document.getElementById('lightbox');
        lightbox.innerHTML = `<img src="${src || placeholder}" alt="Увеличенное изображение">`;
        lightbox.classList.add('active');
    }
      

    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });

    document.querySelectorAll('.certificate-container .certificate').forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });
});
