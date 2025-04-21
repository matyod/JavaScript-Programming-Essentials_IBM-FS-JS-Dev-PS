// 1. Initialization of Arrays and Variables

//   - Define Color Array:
//       - Create an array colors containing a list of colors (strings) to be used for the cards in the game.
const colors = [
  'red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink',
];

//   - Shuffle Cards:
//       - Create an empty array cards to hold the shuffled card values.
//       - Concatenate the colors array to itself to form pairs of colors.
//       - Shuffle the concatenated array using the Fisher-Yates algorithm to randomize the order of cards.
//       - Store the shuffled array in cards.
let cards = shuffle(colors.concat(colors)); // TODO
// let cards = colors.concat(colors);

// 2. Selected Cards Array:

//   - Create an empty array selectedCards to store cards selected by the player for comparison.
let selectedCards = [];

// 3. Score Initialization:

//   - Initialize a variable score to 0.
//   (This variable will keep track of the player's score based on correct matches.)
let score = 0;

// 4. Timer Initialization:

//   - Initialize timeLeft with a value (e.g., 30 seconds).
//   (This will represent the countdown timer for the game.)
let timeLeft = 30;

// 5. Game Interval Timer:

//   - Create a variable gameInterval to store the interval function for updating the countdown timer.
let gameInterval;

// 6. DOM element selection
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');

// 7. Generate cards dynamically
// The generateCards function is responsible for creating card elements based on the 'cards' array.
// Each card is represented as a div element with a class of 'card', and its color is hidden initially (represented by a '?').
function generateCards() {
  cards.forEach(color => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.color = color;
    card.textContent = '?';
    gameContainer.appendChild(card);
  });
}

// 8. Shuffle function to randomize the array of colors
// The shuffle function implements the Fisher-Yates shuffle algorithm to randomly reorder the elements of an array.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 9. Handle card click and reveal color
// This function is triggered when a user clicks on a card. It handles revealing the color and checking for matches.
function handleCardClick(event) {
  const card = event.target;
  if (!card.classList.contains('card') || card.classList.contains('matched')) {
    return;
  }
  card.textContent = card.dataset.color;
  card.style.backgroundColor = card.dataset.color;
  selectedCards.push(card);
  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

// 10. Check if the selected cards match
// The checkMatch function compares the colors of the two selected cards. If they match, they are marked as 'matched' and the score is updated.
function checkMatch() {
  const [card1, card2] = selectedCards;
  if (card1.dataset.color === card2.dataset.color) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    score += 2;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    card1.textContent = '?';
    card2.textContent = '?';
    card1.style.backgroundColor = '#ddd';
    card2.style.backgroundColor = '#ddd';
  }
  selectedCards.length = 0;
}

// 11. Start the game
// The startGame function initializes the game by resetting the score, shuffling the cards, and starting the timer.
function startGame() {
  let timeLeft = 30;
  startBtn.disabled = true;
  score = 0; // Reset score to zero
  scoreElement.textContent = `Score: ${score}`;
  startGameTimer(timeLeft);
  cards = shuffle(colors.concat(colors));
  selectedCards = [];
  gameContainer.innerHTML = '';
  generateCards();
  gameContainer.addEventListener('click', handleCardClick);
}

// 12. Timer function for the game
// This function manages the game timer, updating the display and ending the game when the timer reaches zero.
function startGameTimer(timeLeft) {
  timerElement.textContent = `Time Left: ${timeLeft}`;
  gameInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(gameInterval);
      let timeLeft = 30;
      alert('Game Over!');
      startBtn.disabled = false;
    }
  }, 1000);
}

// 13. Event listener to start the game when the start button is clicked
// Adds an event listener to the start button, calling the startGame function when the button is clicked.
startBtn.addEventListener('click', startGame);