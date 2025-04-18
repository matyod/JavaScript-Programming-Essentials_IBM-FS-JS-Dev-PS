const inputText = document.getElementById('inputText');
const userInput = document.getElementById('userInput');
const outputDiv = document.getElementById('output');

inputText.value = "";

let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  inputText.value = testText;
  userInput.readOnly = false;
  userInput.value = "";
  userInput.focus();
  outputDiv.textContent = "";

  startTime = new Date().getTime();
}

function endTest() {
  endTime = new Date().getTime();

  userInput.readOnly = true;

  const timeElapsed = (endTime - startTime) / 1000;
  const userTypedText = document.getElementById('userInput').value;

  const typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;

  let wpm = 0;

  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  outputDiv.innerHTML = `
  <h2>Typing Test Results:</h2>
  <p>Words Typed: ${typedWords}</p>
  <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
  <p>Words Per Minute (WPM): ${wpm}</p>`;
}