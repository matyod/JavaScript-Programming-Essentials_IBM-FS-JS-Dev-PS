const resultPara = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function performOperation() {
  num1 = input1.value;
  num2 = input2.value;

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = multiply(num1, num2);
    displayResult(result);
  } else {
    displayResult("Please enter valid numbers.");
  }
}

function multiply(a, b) {
  debugger;
  
  return a * b;
}

function displayResult(result) {
  resultPara.textContent = result;
}