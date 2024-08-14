export function renderGameBoxContent(coords) {
  const fragment = document.createDocumentFragment();
  
  coords.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const btn = document.createElement("button");
      btn.id = `${rowIndex}.${cellIndex}`;
      btn.className = "cell";
      btn.innerHTML = cell;
      fragment.appendChild(btn);
    });
  });

  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";
  gameContainer.appendChild(fragment);
}

let firstPlayerScore = 0;
let secondPlayerScore = 0;

export function renderScoresBoxContent() {
  const scoresBox = document.getElementById("scores-box");
  scoresBox.innerHTML = "";

  const firstPlayerScoreElement = document.createElement("span");
  firstPlayerScoreElement.innerText = firstPlayerScore;
  scoresBox.appendChild(firstPlayerScoreElement);

  const divider = document.createElement("span");
  divider.innerHTML = ":";
  divider.style.margin = '0 6px'
  scoresBox.appendChild(divider);

  const secondPlayerScoreElement = document.createElement("span");
  secondPlayerScoreElement.innerText = secondPlayerScore;
  scoresBox.appendChild(secondPlayerScoreElement);
}

export function showPlayAgainButton() {
  const btn = document.getElementById("play-again-btn");
  btn.style.display = "block";
}

export function hidePlayAgainButton() {
  const btn = document.getElementById("play-again-btn");
  btn.style.display = "none";
}

let currentRound = 1;

export function renderCurrentRound() {
  const roundLabel = document.getElementById("current-round");
  roundLabel.innerHTML = "";
  roundLabel.innerText = `Round ${currentRound}`;
}
