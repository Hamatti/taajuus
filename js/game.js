const urlParams = new URLSearchParams(window.location.search);

GLOBALS.nodes.seedInput.addEventListener("keyup", () => {
  startGame();
});

GLOBALS.nodes.seedInput.value =
  urlParams.get("seed") || Math.floor(Math.random() * 10000);

startGame();

// FUNCTIONS

function startGame() {
  clearCanvas();
  const seed = GLOBALS.nodes.seedInput.value;
  Math.seedrandom(seed.toLowerCase());
  GLOBALS.randpos = Math.random() * 1000;

  const randomNumber = Math.floor(Math.random() * cards.length);
  const card = cards[randomNumber];

  document.querySelector("#score_display").innerHTML = "";
  document.querySelector("#card").innerHTML = `
        <div class="left-card">
          <div class="arrow">&#10229</div>
          <div class="word">${card[0]}</div>
        </div>
        <div class="right-card">
          <div class="arrow">&#10230</div>
          <div class="word">${card[1]}</div>
        </div>
    `;
}

function toggleSeedVisibility() {
  GLOBALS.nodes.seedInput.classList.toggle("white-text");
}

function newRound() {
  Math.seedrandom();
  GLOBALS.nodes.seedInput.value = Math.floor(Math.random() * 10000);
  startGame();
}

function makeGuess() {
  const guess = document.querySelector("#guess").value;
  if (window.confirm(`You've guessed ${Math.round(guess / 10)}. Confirm?`)) {
    drawGuess();
  }
}

function score(randpos, guess) {
  const scoreDisplay = document.getElementById("score_display");
  let score = 0;
  if (
    between(
      guess,
      randpos - GLOBALS.targetWidth / 2,
      randpos + GLOBALS.targetWidth / 2
    )
  ) {
    score = 4;
  } else if (
    between(
      guess,
      randpos - (3 * GLOBALS.targetWidth) / 2,
      randpos + (3 * GLOBALS.targetWidth) / 2
    )
  ) {
    score = 3;
  } else if (
    between(
      guess,
      randpos - (5 * GLOBALS.targetWidth) / 2,
      randpos + (5 * GLOBALS.targetWidth) / 2
    )
  ) {
    score = 2;
  }

  scoreDisplay.innerHTML = `<div class="score">${score} points!</div>`;

  teamScore = document.querySelector(`#score-team-${GLOBALS.currentTeam}`);
  teamScore.value = parseInt(teamScore.value, 10) + score;
  GLOBALS.currentTeam = GLOBALS.currentTeam === 1 ? 2 : 1;
}

function calculatePosition(x) {
  return 5 + (x / 1005) * GLOBALS.canvasWidth;
}
