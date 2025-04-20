/*
### Practice task
1. You need to perform arithmetic operations such as addition, multiplication, and division simultaneously using the same function.

2. Additionally, you need to check the flow of the code, which will depend on the arithmetic operation you are performing first.

3. Also, try assigning one value in the form of characters and observe how this value is displayed using the debugger.
*/

const resultPara = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const operationSelector = document.getElementById('operationSelector');

function performOperation() {
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);
  let operator = operationSelector.value;

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = operate(num1, num2, operator);
    displayResult(result);
  } else {
    displayResult("Please enter valid numbers.");
  }
}

function operate(a, b, operator) {
  debugger;

  let result;

  switch (operator) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = a / b;
      break;
    default:
      result = "Please select the available operation.";
      break;
  }

  return result;
}

function displayResult(result) {
  resultPara.textContent = result;
}