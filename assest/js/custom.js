const slides = document.querySelector('.slides');
const cards = document.querySelectorAll('.card');
const slideWidth = cards[0].offsetWidth;
let slideIndex = 0;

function slide() {
  slideIndex++;
  if (slideIndex >= cards.length) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

setInterval(slide, 3000);
