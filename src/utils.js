function mirror2DArray(arr, mirrorType = "main") {
  const mirroredArray = arr.map((row) => [...row]); // Clone the array to avoid mutating the original

  if (mirrorType === "main") {
    // Mirror along the main mirror
    for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < 3; j++) {
        [mirroredArray[i][j], mirroredArray[j][i]] = [
          mirroredArray[j][i],
          mirroredArray[i][j],
        ];
      }
    }
  } else if (mirrorType === "column") {
    // Mirror along the second column
    for (let i = 0; i < 3; i++) {
      [mirroredArray[i][0], mirroredArray[i][2]] = [
        mirroredArray[i][2],
        mirroredArray[i][0],
      ];
    }
  } else {
    throw new Error('Invalid mirror type. Use "main", "anti", or "column".');
  }

  return mirroredArray;
}

export function key(coords) {
  return JSON.stringify(coords);
}

export function getCombinationMirrorly(coords, combinationsMap) {
  let retryCount = 0;
  let coords1 = coords;
  let combinations;

  while (retryCount < 12 && !combinations) {
    combinations = combinationsMap.get(key(coords1));

    if (retryCount % 2 === 0) {
      coords1 = mirror2DArray(coords1, "main");
    } else {
      coords1 = mirror2DArray(coords1, "column");
    }

    retryCount++;
  }

  const combinationStr = getCombinationStr(combinations);
  let resCoords = generateCoords(combinationStr);

  while (retryCount > 1) {
    if (retryCount % 2 === 0) {
      resCoords = mirror2DArray(resCoords, "main");
    } else {
      resCoords = mirror2DArray(resCoords, "column");
    }
    retryCount--;
  }

  return findIndexOf(resCoords);
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getCombinationStr(combinations) {
  if (Array.isArray(combinations)) {
    return getRandomElement(combinations);
  }

  return combinations;
}

function generateCoords(combinationStr) {
  const [rowIndex, colIndex] = combinationStr
    .split(".")
    .map((number) => number);
  const threeDimensionalArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  threeDimensionalArray[rowIndex][colIndex] = "o";
  return threeDimensionalArray;
}

function findIndexOf(grid, char = "o") {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === char) {
        return `${i}.${j}`;
      }
    }
  }
  return null; // Return null if 'o' is not found
}

export function checkThreeInARow(arr) {
  const checkLine = (a, b, c) => a === b && b === c && a !== " ";

  // Check rows
  for (let i = 0; i < 3; i++) {
    if (checkLine(arr[i][0], arr[i][1], arr[i][2])) {
      return {
        status: "success",
        coords: [`${i}.0`, `${i}.1`, `${i}.2`],
        char: arr[i][0],
      };
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (checkLine(arr[0][i], arr[1][i], arr[2][i])) {
      return {
        status: "success",
        coords: [`0.${i}`, `1.${i}`, `2.${i}`],
        char: arr[0][i],
      };
    }
  }

  // Check main diagonal
  if (checkLine(arr[0][0], arr[1][1], arr[2][2])) {
    return {
      status: "success",
      coords: ["0.0", "1.1", "2.2"],
      char: arr[0][0],
    };
  }

  // Check anti-diagonal
  if (checkLine(arr[0][2], arr[1][1], arr[2][0])) {
    return {
      status: "success",
      coords: ["0.2", "1.1", "2.0"],
      char: arr[0][2],
    };
  }

  // If no three in a row found
  return {
    status: "fail",
    coords: [],
    char: "",
  };
}

export function generateEmptyCoords() {
  return [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
}
