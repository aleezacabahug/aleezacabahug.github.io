let slideIndex = 1;


function showSlides(n) {
let i;
const slides = document.getElementsByClassName("myslides");
const dots = document.getElementsByClassName("demo");
const captionText = document.getElementById("caption");

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
captionText.innerHTML = dots[slideIndex - 1].alt;
}

function plusSlides(n) {
slideIndex += n;
showSlides(slideIndex);
}

function currentSlide(n) {
slideIndex = n;
showSlides(slideIndex);
}

document.querySelector(".prev").addEventListener("click", () => {
plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", () => {
plusSlides(1);
});

document.querySelectorAll(".demo").forEach((thumbnail) => {
thumbnail.addEventListener("click", (event) => {
    const slideNumber = parseInt(event.target.getAttribute("data-slide"));
    currentSlide(slideNumber);
});
});

// Invoke showSlides after functions are defined
showSlides(slideIndex);