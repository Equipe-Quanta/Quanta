let index = 0;

const images = document.querySelectorAll(".carousel-images img");
const total = images.length;
const carouselImages = document.querySelector('.carousel-images');

// Detecta se é mobile ou desktop
const isMobile = window.innerWidth <= 768;

// Define os valores dependendo do dispositivo
const widthPercent = isMobile ? 18 : 15;
const offsetMultiplier = isMobile ? 80 : 100;

// Define a largura total do container das imagens
carouselImages.style.width = `${widthPercent * total}%`;

function showSlide() {
    const offset = -index * offsetMultiplier;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    index = (index + 1) % total;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + total) % total;
    showSlide();
}

// Auto-play a cada 3 segundos
setInterval(nextSlide, 3000);

// Atualiza quando redimensionar a tela (opcional)
window.addEventListener('resize', () => {
    location.reload(); // Atualiza a página para recalcular
});
