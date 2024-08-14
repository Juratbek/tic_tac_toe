function gameBoxClickHandler(event) {
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
      cordsForNextMovement = getCoordsForSecondMovement(coords);
    } else if (movementNumber === 4) {
      cordsForNextMovement = calculateCordsForFourthMove(coords);
    } else if (movementNumber === 6) {
      cordsForNextMovement = calculateCordsForSixthMove(coords);
    } else if (movementNumber === 8) {
      cordsForNextMovement = calculateCordsForEightMove(coords);
    }

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
          const firstPlayerScore =
            document.getElementById("first-player-score");
          const score = Number(firstPlayerScore.innerText);
          firstPlayerScore.innerText = score + 1;
        } else if (char === "o") {
          const secondPlayerScore = document.getElementById(
            "second-player-score"
          );
          const score = Number(secondPlayerScore.innerText);
          secondPlayerScore.innerText = score + 1;
        }
      }
    }
  }
}
