import { currentRound, firstPlayerScore, secondPlayerScore } from "./handlers";

export function renderGameBoxContent(coords) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";

  // rendering buttons
  const buttonsFragment = document.createDocumentFragment();
  coords.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const btn = document.createElement("button");
      btn.id = `${rowIndex}.${cellIndex}`;
      btn.className = "cell";
      btn.innerHTML = cell;
      buttonsFragment.appendChild(btn);
    });
  });
  gameContainer.appendChild(buttonsFragment);

  // rendering lines
  const linesFragment = document.createDocumentFragment();
  Array(4)
    .fill("")
    .forEach((_, index) => {
      const line = document.createElement("div");
      line.classList.add("line");

      if (index % 2 === 0) {
        line.classList.add("vertical");
        line.style.left = `${33 * (index / 2 + 1)}%`;
      } else {
        line.classList.add("horizontal");
        line.style.top = `${33 * Math.ceil(index / 2)}%`;
      }

      linesFragment.appendChild(line);
    });
  gameContainer.appendChild(linesFragment);
}

export function renderScoresBoxContent() {
  const scoresBox = document.getElementById("scores-box");
  scoresBox.innerHTML = "";

  const firstPlayerScoreElement = document.createElement("span");
  firstPlayerScoreElement.innerText = firstPlayerScore;
  scoresBox.appendChild(firstPlayerScoreElement);

  const divider = document.createElement("span");
  divider.innerHTML = ":";
  divider.style.margin = "0 6px";
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

export function renderCurrentRound() {
  const roundLabel = document.getElementById("current-round");
  roundLabel.innerHTML = "";
  roundLabel.innerText = `Round ${currentRound}`;
}

export function renderX(element) {
  const firstLine = document.createElement("div");
  firstLine.classList.add("x-line");
  firstLine.classList.add("diagonal");
  element.appendChild(firstLine);

  const secondLine = document.createElement("div");
  secondLine.classList.add("x-diagonal");
  secondLine.classList.add("x-line");
  element.appendChild(secondLine);
}

export function renderO(element) {
  const circle = document.createElement("div");
  circle.innerHTML = `
          <svg width="41px" height="41px" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"/>
          </svg>`;
  circle.classList.add("o-circle");
  element.appendChild(circle);
}
