let count = 0;

const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

function updateCounter() {
  counterElement.textContent = count;
}

increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});