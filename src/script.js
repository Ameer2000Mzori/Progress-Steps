// getting our elements
var progress = document.getElementById("progress");
var prev = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var cercles = document.querySelectorAll(".cercle");
// creating global varibales
var currentActive = 1;
// our functions
// next func
var nextHandler = function () {
    currentActive++;
    console.log("you clicked");
    if (currentActive > cercles.length) {
        currentActive = cercles.length;
    }
    console.log(currentActive);
    update();
};
// prev func
var prevHandler = function () {
    currentActive--;
    console.log("you clicked");
    if (currentActive < 1) {
        currentActive = 1;
    }
    console.log(currentActive);
    update();
};
// our update func
var update = function () {
    cercles.forEach(function (cercle, idx) {
        if (idx < currentActive) {
            cercle.classList.add("active");
        }
        else {
            cercle.classList.remove("active");
        }
    });
    var actives = document.querySelectorAll(".active");
    progress.style.width =
        ((actives.length - 1) / (cercles.length - 1)) * 100 + "%";
};
// our event lisnters
nextBtn.addEventListener("click", nextHandler);
prev.addEventListener("click", prevHandler);
