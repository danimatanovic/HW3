
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
let stopExecution = false;
function moveNext() {
    stopExecution = false;
}
function cantMoveNext() {
    stopExecution = true;
}
document.addEventListener('keydown', function (event) {
    if (stopExecution) {
        return;
      }
    if (event.keyCode === 37) {
        slideShow(currentSlide - 1);
    } else if (event.keyCode === 39) {
        slideShow(currentSlide + 1);
    }
});   
