// PORTFOLIO

const portfolioItems = document.querySelectorAll(".portfolio-item");
portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseover", () => {
    console.log(portfolioItem.childNodes[1].classList);
    portfolioItem.childNodes[1].classList.add("img-darken");
  });

  portfolioItem.addEventListener("mouseout", () => {
    portfolioItem.childNodes[1].classList.remove("img-darken");
  });
});

// SUBMIT

function submitFunction() {
  var ime = document.forms["forma"]["ime"].value;
  var mejl = document.forms["forma"]["mejl"].value;
  var provera = true;
  if ((ime == null || ime == "") && (mejl == null || mejl == "")) {
    alert("Type in your Name and E-mail address");
    provera = false;
  } else {
    if (ime == null || ime == "") {
      alert("Type in your Name");
      provera = false;
    }
    if (mejl == null || mejl == "") {
      alert("Type in your E-mail address");
      provera = false;
    }
  }

  if (provera == true) {
    var r = confirm("Do you want to send this message?");
    if (r == true) {
      alert("Your message has been sent");
    }
  }
}

// FAQ

$(function () {
  $(".jqui").accordion();
});

// GALERIJA

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
