import {
  checkThreeInARow,
  generateEmptyCoords,
  getCombinationMirrorly,
} from "./utils";
import {
  hidePlayAgainButton,
  renderCurrentRound,
  renderGameBoxContent,
  renderO,
  renderScoresBoxContent,
  renderX,
  showPlayAgainButton,
} from "./renderer";
import secondMoveCombinations from "./combinations/second-movement.combinations";
import fourthMoveCombinations from "./combinations/fourth-movement.combinations";
import sixthMoveCombinations from "./combinations/sixth-movement.combinations";
import eightMoveCombinations from "./combinations/eighth-movement.combinations";
import firstMoveCombinations from "./combinations/first-movement.combinations";
import thirdMoveCombinations from "./combinations/third-movement.combinations";
import fifthMoveCombinations from "./combinations/fifth-movement.combination";
import seventhMoveCombinations from "./combinations/seventh-movement.combinations";
import ninthMoveCombinations from "./combinations/ninth-movement.combinations";

let movementNumber = 1;
export let currentRound = 1;
let coords = generateEmptyCoords();

export let firstPlayerScore = 0;
export let secondPlayerScore = 0;

const COORDS_COMBINATIONS = {
  1: firstMoveCombinations,
  2: secondMoveCombinations,
  3: thirdMoveCombinations,
  4: fourthMoveCombinations,
  5: fifthMoveCombinations,
  6: sixthMoveCombinations,
  7: seventhMoveCombinations,
  8: eightMoveCombinations,
  9: ninthMoveCombinations,
};

export function gameBoxClickHandler(event) {
  const { target } = event;

  if (target.classList.contains("cell")) {
    const clickedButton = target;

    renderX(clickedButton);
    clickedButton.disabled = true;

    const [row, col] = clickedButton.id.split(".");
    coords[row][col] = "x";

    movementNumber++;

    if (movementNumber > 9) showPlayAgainButton();

    const combinations = COORDS_COMBINATIONS[movementNumber];
    let cordsForNextMovement = getCombinationMirrorly(coords, combinations);

    const btn = document.getElementById(cordsForNextMovement);
    renderO(btn);
    btn.disabled = true;

    const [rowIndex, colIndex] = btn.id.split(".");
    coords[rowIndex][colIndex] = "o";
    movementNumber++;

    if (movementNumber > 4) {
      const { coords: successCoords, char, status } = checkThreeInARow(coords);

      if (status === "success") {
        setTimeout(() => {
          successCoords.forEach((coords) => {
            const btn = document.getElementById(coords);
            btn.classList.add("success");
          });
        }, 700);

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

  if (currentRound % 2 === 0) {
    const cordsForFirstMovement = getCombinationMirrorly(
      coords,
      firstMoveCombinations
    );

    const btn = document.getElementById(cordsForFirstMovement);
    renderO(btn);
    btn.disabled = true;

    const [rowIndex, colIndex] = btn.id.split(".");
    coords[rowIndex][colIndex] = "o";
    movementNumber++;
  }

  renderCurrentRound();
  hidePlayAgainButton();
}