/*
### Practice task
1. In this task you need to create a reset button which will reset the followers count code. For this you need to include:
    - One button to represent Reset Count in **followers_count.html** file.
    - Then create one function in **followers_count.js** file to reset count to 0.
    - Also use alert popup box method to show alert message which will say that the Followers count has been reset.
*/

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

function resetCount() {
  count = 0;
  displayCount();
  alertReset();
}

function alertReset() {
  alert("You Instagram followers has been reset!")
}