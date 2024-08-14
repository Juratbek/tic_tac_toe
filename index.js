window.onload = () => {
  const gameContainer = document.querySelector("#game-container");
  gameContainer.addEventListener("click", gameBoxClickHandler);

  const playAgainBtn = document.querySelector('#play-again-btn');
  playAgainBtn.addEventListener('click', startNewRound)

  renderScoresBoxContent();
  const emptyCoords = generateEmptyCoords()
  renderGameBoxContent(emptyCoords);
};
