var slideIndex = 0;
var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 2000); // Change slide every 2 seconds (2000ms)
}

showSlides();
