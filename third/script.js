
let slides = document.querySelectorAll(".slide-pic");
let currentSlide = 0;
let leftArr = document.getElementById("left-arr");
let rightArr = document.getElementById("right-arr");

function slideShow(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (slides.length + n) % slides.length;
    slides[currentSlide].classList.add("active");
}
leftArr.addEventListener("click", function () {
     slideShow(currentSlide - 1);
})
rightArr.addEventListener("click", function () {
     slideShow(currentSlide - 1);
})

