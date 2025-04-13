function calculateTotal() {
  let grocery1, grocery2, grocery3, total, result;

  grocery1 = parseFloat(document.getElementById('grocery1').value);
  grocery2 = parseFloat(document.getElementById('grocery2').value);
  grocery3 = parseFloat(document.getElementById('grocery3').value);
  result = document.getElementById('result');

  total = grocery1 + grocery2 + grocery3;
  result.textContent = total.toFixed(2);
 }