import { key } from "../utils";

const sixthMoveCombinations = new Map();

//             rule 1: ['x', ' ', 'x'], if there are two marks together and the third is empty, mark the third position
//                     ['x', 'o', ' '],
//                     ['o', ' ', ' ']

//             rule 2: ['x', ' ', ' '], if there are two your marks together and the third is empty, mark the third position
//                     ['x', 'o', 'x'],
//                     ['o', ' ', ' ']

//             rule 3: ['x', ' ', ' '], if the structure is like this, mark one of the second column cells (2.2, 3.2)
//                     ['o', 'o', 'x'],
//                     ['x', ' ', ' ']

// o centered

sixthMoveCombinations.set(
  key([
    ["x", " ", "x"],
    ["x", "o", " "],
    ["o", " ", " "],
  ]),
  "0.1"
);

sixthMoveCombinations.set(
  key([
    [" ", "x", " "],
    ["x", "o", "o"],
    ["x", " ", " "],
  ]),
  "0.0"
);

sixthMoveCombinations.set(
  key([
    ["x", "x", " "],
    ["x", "o", " "],
    ["o", " ", " "],
  ]),
  "0.2"
);

sixthMoveCombinations.set(
  key([
    ["x", " ", " "],
    ["x", "o", "x"],
    ["o", " ", " "],
  ]),
  "0.2"
);

sixthMoveCombinations.set(
  key([
    ["x", " ", " "],
    ["x", "o", " "],
    ["o", " ", "x"],
  ]),
  "0.2"
);

sixthMoveCombinations.set(
  key([
    ["x", " ", " "],
    ["o", "o", "x"],
    ["x", " ", " "],
  ]),
  ["0.1", "2.1"]
);

sixthMoveCombinations.set(
  key([
    ["x", "x", " "],
    ["o", "o", " "],
    ["x", " ", " "],
  ]),
  ["1.2"]
);

sixthMoveCombinations.set(
  key([
    ["x", " ", "x"],
    ["o", "o", " "],
    ["x", " ", " "],
  ]),
  ["1.2"]
);

sixthMoveCombinations.set(
  key([
    ["x", " ", " "],
    ["o", "o", "x"],
    [" ", " ", "x"],
  ]),
  ["0.2"]
);

sixthMoveCombinations.set(
  key([
    ["x", " ", "x"],
    ["o", "o", " "],
    [" ", " ", "x"],
  ]),
  ["1.2"]
);

sixthMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["x", "o", " "],
    [" ", " ", "x"],
  ]),
  ["2.0", "0.2"]
);

sixthMoveCombinations.set(
  key([
    ["o", "x", "x"],
    ["x", "o", " "],
    [" ", " ", " "],
  ]),
  "2.2"
);

sixthMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["x", "o", "x"],
    [" ", " ", " "],
  ]),
  "2.2"
);

sixthMoveCombinations.set(
  key([
    ["x", "o", " "],
    [" ", "o", "x"],
    [" ", "x", " "],
  ]),
  "2.0"
);

sixthMoveCombinations.set(
  key([
    [" ", "x", " "],
    ["o", "o", " "],
    ["x", " ", "x"],
  ]),
  "1.2"
);

sixthMoveCombinations.set(
  key([
    ["x", "x", " "],
    ["o", "o", " "],
    [" ", "x", " "],
  ]),
  "1.2"
);

sixthMoveCombinations.set(
  key([
    ["x", "x", " "],
    ["o", "o", " "],
    ["x", " ", " "],
  ]),
  "1.2"
);

sixthMoveCombinations.set(
  key([
    ["x", "x", " "],
    ["o", "o", " "],
    [" ", " ", "x"],
  ]),
  "1.2"
);

sixthMoveCombinations.set(
  key([
    ["x", " ", " "],
    ["o", "o", " "],
    [" ", "x", "x"],
  ]),
  "1.2"
);

sixthMoveCombinations.set(
  key([
    ["o", "x", " "],
    [" ", "o", " "],
    [" ", "x", "x"],
  ]),
  "2.0"
);

sixthMoveCombinations.set(
  key([
    ["o", " ", " "],
    ["x", "o", "x"],
    [" ", "x", " "],
  ]),
  "2.2"
);

sixthMoveCombinations.set(
  key([
    ["o", " ", "x"],
    ["x", "o", "x"],
    [" ", " ", " "],
  ]),
  "2.2"
);

// x centered

sixthMoveCombinations.set(
  key([
    ["o", " ", "x"],
    ["x", "x", " "],
    ["o", " ", " "],
  ]),
  "1.2"
);

sixthMoveCombinations.set(
  key([
    ["o", "o", "x"],
    [" ", "x", " "],
    [" ", "x", " "],
  ]),
  "2.0"
);

sixthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", "x", " "],
    ["x", "x", " "],
  ]),
  "0.2"
);

sixthMoveCombinations.set(
  key([
    ["o", "x", "o"],
    [" ", "x", " "],
    ["x", " ", " "],
  ]),
  "2.1"
);

sixthMoveCombinations.set(
  key([
    ["o", "x", "x"],
    [" ", "x", " "],
    [" ", "o", " "],
  ]),
  "2.0"
);

sixthMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["x", "x", "o"],
    [" ", " ", " "],
  ]),
  "2.1"
);

sixthMoveCombinations.set(
  key([
    ["o", "x", " "],
    [" ", "x", " "],
    ["x", "o", " "],
  ]),
  "0.2"
);

sixthMoveCombinations.set(
  key([
    ["o", "x", " "],
    [" ", "x", "x"],
    [" ", "o", " "],
  ]),
  "1.0"
);

sixthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    ["x", "x", " "],
    ["x", " ", " "],
  ]),
  "0.1"
);

sixthMoveCombinations.set(
  key([
    ["o", "o", " "],
    ["x", "x", " "],
    [" ", "x", " "],
  ]),
  "0.2"
);

sixthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", "x", " "],
    [" ", "x", "x"],
  ]),
  "0.2"
);

sixthMoveCombinations.set(
  key([
    ["o", "o", " "],
    [" ", "x", "x"],
    [" ", "x", " "],
  ]),
  "0.2"
);

sixthMoveCombinations.set(
  key([
    ["o", " ", "o"],
    [" ", "x", " "],
    ["x", "x", " "],
  ]),
  "0.1"
);

sixthMoveCombinations.set(
  key([
    ["o", " ", " "],
    ["x", "x", "o"],
    [" ", " ", "x"],
  ]),
  "2.1"
);

export default sixthMoveCombinations;
