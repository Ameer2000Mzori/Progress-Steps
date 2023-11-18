// getting our elements
const progress: any = document.getElementById("progress");
const prev: any = document.getElementById("prev");
const nextBtn: any = document.getElementById("next");
const cercles = document.querySelectorAll(".cercle");

// creating global varibales
let currentActive: number = 1;

// our functions

// next func
const nextHandler = () => {
  currentActive++;
  console.log("you clicked");
  if (currentActive > cercles.length) {
    currentActive = cercles.length;
  }
  console.log(currentActive);
  update();
};

// prev func
const prevHandler = () => {
  currentActive--;
  console.log("you clicked");
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);
  update();
};

// our update func
const update = () => {
  cercles.forEach((cercle, idx) => {
    if (idx < currentActive) {
      cercle.classList.add("active");
    } else {
      cercle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (cercles.length - 1)) * 100 + `%`;
};

// our event lisnters
nextBtn.addEventListener("click", nextHandler);
prev.addEventListener("click", prevHandler);
