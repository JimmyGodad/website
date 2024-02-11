document.addEventListener("DOMContentLoaded", function(event) {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 1;
  var slideInterval = setInterval(nextSlide, 9000); // Change slide every 3 seconds

  function nextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide) % slides.length;
    slides[currentSlide].style.display = "block";
  }
});
