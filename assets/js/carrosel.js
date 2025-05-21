let index = 0;
const images = document.querySelectorAll(".carousel-images img");
const total = images.length;

function showSlide() {
    const offset = -index * 100;
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    index = (index + 1) % total;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + total) % total;
    showSlide();
}
setInterval(nextSlide, 3000); // Altera a imagem a cada 3 segundos