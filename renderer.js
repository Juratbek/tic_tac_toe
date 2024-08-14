function renderGameBoxContent() {
  const fragment = document.createDocumentFragment();

  coords.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const btn = document.createElement("button");
      btn.id = `${rowIndex}.${cellIndex}`;
      btn.className = "cell";
      fragment.appendChild(btn);
    });
  });

  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(fragment);
}

let firstPlayerScore = 0;
let secondPlayerScore = 0;

function renderScoresBoxContent() {
  const scoresBox = document.getElementById("scores-box");

  const firstPlayerScoreElement = document.createElement("span");
  firstPlayerScoreElement.innerText = firstPlayerScore;
  scoresBox.appendChild(firstPlayerScoreElement);

  const divider = document.createElement("span");
  divider.innerHTML = ":";
  scoresBox.appendChild(divider);

  const secondPlayerScoreElement = document.createElement("span");
  secondPlayerScoreElement.innerText = secondPlayerScore;
  scoresBox.appendChild(secondPlayerScoreElement);
}
