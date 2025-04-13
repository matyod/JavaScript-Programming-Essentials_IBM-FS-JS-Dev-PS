let length, width, area;

function calculateArea() {
  length = parseFloat(document.getElementById('length').value);
  width = parseFloat(document.getElementById('width').value);

  area = length * width;
  document.getElementById('result').textContent = `The area of the rectangle is: ${area}`;
}

