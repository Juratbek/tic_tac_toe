import { checkThreeInARow, generateEmptyCoords } from "./utils";
import calculateCordsForSecondMove from './second-movement'
import calculateCordsForFourthMove from './fourth-movement';
import calculateCordsForSixthMove from './sixth-movement';
import calculateCordsForEightMove from './eight-movement';
import { renderCurrentRound, renderGameBoxContent, renderScoresBoxContent, showPlayAgainButton } from "./renderer";

let movementNumber = 1;
let coords = generateEmptyCoords();

const COORDS_CALLBACKS = {
  2: calculateCordsForSecondMove,
  4: calculateCordsForFourthMove,
  6: calculateCordsForSixthMove,
  8: calculateCordsForEightMove,
};

export function gameBoxClickHandler(event) {
  const { target } = event;

  if (target.classList.contains("cell")) {
    const clickedButton = target;
    clickedButton.innerHTML = "x";
    clickedButton.disabled = true;

    const [row, col] = clickedButton.id.split(".");
    coords[row][col] = "x";

    movementNumber++;

    const getCoordsForNextMovement = COORDS_CALLBACKS[movementNumber];
    let cordsForNextMovement = getCoordsForNextMovement(coords);

    const btn = document.getElementById(cordsForNextMovement);
    btn.innerHTML = "o";
    btn.disabled = true;

    const [rowIndex, colIndex] = btn.id.split(".");
    coords[rowIndex][colIndex] = "o";
    movementNumber++;

    if (movementNumber > 4) {
      const { coords: successCoords, char, status } = checkThreeInARow(coords);

      if (status === "success") {
        successCoords.forEach((coords) => {
          const btn = document.getElementById(coords);
          btn.style.color = "#05dc05";
        });

        if (char === "x") {
          firstPlayerScore++;
        } else if (char === "o") {
          secondPlayerScore++;
        }

        renderScoresBoxContent();
        showPlayAgainButton();
      }
    }
  }
}

export function startNewRound() {
  movementNumber = 1;
  const emptyCoords = generateEmptyCoords();
  coords = emptyCoords;

  renderGameBoxContent(emptyCoords);

  currentRound++;
  renderCurrentRound();
}
