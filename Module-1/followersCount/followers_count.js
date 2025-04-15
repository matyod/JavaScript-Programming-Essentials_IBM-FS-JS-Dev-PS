let count = 0;
let countDisplay = document.getElementById("count-display");

function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

function displayCount() {
  countDisplay.textContent = count;
}

function checkCountValue() {
  if (Number.isInteger(count / 10)) {
    alert(`You Instagram gained ${count} followers! ${count >= 20 ? 'Keep it up!' : ''}`)
  }
}