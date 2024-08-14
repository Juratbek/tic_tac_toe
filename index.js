let movementNumber = 1;

const coords = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

window.onload = () => {
  const gameContainer = document.querySelector("#game-container");

  gameContainer.addEventListener("click", gameBoxClickHandler);

  renderScoresBoxContent();
  renderGameBoxContent();
};
