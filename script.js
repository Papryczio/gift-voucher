let slideIndex = 0;
const slides = document.querySelectorAll(".slides");
let slideInterval = setInterval(nextSlide, 4000); // Auto-switch every 4s
const slideshow = document.getElementById("slideshow");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function changeSlide(direction) {
  clearInterval(slideInterval);
  slideIndex += direction;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  showSlide(slideIndex);
  slideInterval = setInterval(nextSlide, 4000); // Restart auto-slide
}

function nextSlide() {
  changeSlide(1);
}

// Initialize
showSlide(slideIndex);

// Touch/swipe support
let startX = 0;

slideshow.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slideshow.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (endX < startX - 50) {
    changeSlide(1); // Swipe left
  } else if (endX > startX + 50) {
    changeSlide(-1); // Swipe right
  }
});