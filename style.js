const carousel = document.querySelector('.carousel');
const brands = document.querySelectorAll('.brand');

let currentIndex = 0;
const totalBrands = brands.length;

function slideNextBrand() {
    currentIndex++;
    if (currentIndex >= totalBrands) {
        currentIndex = 0;
    }
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const position = -currentIndex * (brands[0].offsetWidth + 20);
    carousel.style.transform = translateX(${position}px);
}

setInterval(slideNextBrand, 4000);