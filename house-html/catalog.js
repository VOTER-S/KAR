let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const totalSlides = images.length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}