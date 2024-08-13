let movementNumber = 1;

const coords = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

window.onload = () => {
  const gameContainer = document.querySelector("#game-container");

  gameContainer.addEventListener("click", (event) => {
    const { target } = event;

    if (target.classList.contains("cell")) {
      const clickedButton = target;
      clickedButton.innerHTML = "x";
      clickedButton.disabled = true;

      const [row, col] = clickedButton.id.split(".");
      coords[row][col] = "x";

      movementNumber++;

      let cordsForNextMovement;

      if (movementNumber === 2) {
        cordsForNextMovement = getCoordsForSecondMovement();
      } else if (movementNumber === 4) {
        cordsForNextMovement = calculateCordsForFourthMove(coords);
      } else if (movementNumber === 6) {
        cordsForNextMovement = calculateCordsForSixthMove(coords);
      }
      
      const btn = document.getElementById(cordsForNextMovement);
      btn.innerHTML = "o";
      btn.disabled = true;

      const [rowIndex, colIndex] = btn.id.split(".");
      coords[rowIndex][colIndex] = "o";
      movementNumber++;

      if (movementNumber > 4) {
        const successCoords = checkThreeInARow(coords);
        if (successCoords) {
          successCoords.forEach(coords => {
            const btn = document.getElementById(coords);
            btn.style.color = '#05dc05'
          })
        }
      }
    }
  });
};

const cords = [
  ["x", "o", "x"],
  ["o", "x", "o"],
  ["x", "o", "x"],
];

function calculateNextCords(opponentCoords, myCoords, movementNumber) {
  if (movementNumber === 2) {
    return ["0.0", "0.2", "2.0", "2.2"];
  }

  if (movementNumber === 2) {
    return "1.1";
  }

  if (movementNumber === 3) {
    return calculateCordsForThirdMove(coords);
  }
}
