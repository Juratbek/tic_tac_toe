import { key } from "./utils";

//             rule 1: ['x', ' ', ' '], if there are two marks together and the third is empty, mark the third position
//                     ['x', 'o', ' '],
//                     [' ', ' ', ' ']

//             rule 2: ['x', ' ', ' '], if there are two marks with one space between, mark the center position of these marks
//                     [' ', 'o', ' '],
//                     ['x', ' ', ' ']

//             rule 3: ['x', ' ', ' '], if cords are one lined, don't take diagonal positions. Mark one of the vertical/horizontal positions
//                     [' ', 'o', ' '],
//                     [' ', ' ', 'x']

//             rule 4: ['x', ' ', ' '], if cords are positioned like horse movement from chess, mark one of the horizontal positions
//                     [' ', 'o', ' '],
//                     [' ', 'x', ' ']

const fourthMoveCombinations = new Map();

fourthMoveCombinations.set(
  key([
    ["o", " ", " "],
    ["x", "x", " "],
    [" ", " ", " "],
  ]),
  "1.2"
);

fourthMoveCombinations.set(
  key([
    [" ", "x", " "],
    ["o", "x", " "],
    [" ", " ", " "],
  ]),
  "2.1"
);

fourthMoveCombinations.set(
  key([
    ["x", " ", " "],
    [" ", "x", " "],
    ["o", " ", " "],
  ]),
  "2.2"
);

fourthMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", "x", " "],
    [" ", " ", "x"],
  ]),
  ["0.2", "2.0"]
);

fourthMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", "x", " "],
    [" ", "x", " "],
  ]),
  "0.1"
);

fourthMoveCombinations.set(
  key([
    ["o", " ", "x"],
    [" ", "x", " "],
    [" ", " ", " "],
  ]),
  "2.0"
);

// o centered

fourthMoveCombinations.set(
  key([
    ["x", " ", " "],
    ["x", "o", " "],
    [" ", " ", " "],
  ]),
  "2.0"
);

fourthMoveCombinations.set(
  key([
    ["x", " ", " "],
    [" ", "o", " "],
    ["x", " ", " "],
  ]),
  "1.0"
);

fourthMoveCombinations.set(
  key([
    ["x", " ", " "],
    [" ", "o", " "],
    [" ", "x", " "],
  ]),
  ["1.0", "1.2"]
);

fourthMoveCombinations.set(
  key([
    ["x", " ", " "],
    [" ", "o", " "],
    [" ", " ", "x"],
  ]),
  ["1.0", "1.2", "0.1", "2.1"]
);

fourthMoveCombinations.set(
  key([
    [" ", "x", " "],
    ["x", "o", " "],
    [" ", " ", " "],
  ]),
  ["0.0", "0.2", "2.0"]
);

fourthMoveCombinations.set(
  key([
    [" ", "x", " "],
    [" ", "o", " "],
    [" ", "x", " "],
  ]),
  ["0.0", "2.0"]
);

export default fourthMoveCombinations;
