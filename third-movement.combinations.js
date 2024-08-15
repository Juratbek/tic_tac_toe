import { key } from "./utils";

const thirdMoveCombinations = new Map();

thirdMoveCombinations.set(
  key([
    ["o", " ", " "],
    ["x", " ", " "],
    [" ", " ", " "],
  ]),
  "0.1"
);

thirdMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", " ", " "],
    ["x", " ", " "],
  ]),
  "0.1"
);

thirdMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", " ", " "],
    [" ", "x", " "],
  ]),
  ["2.0", "0.2"]
);

thirdMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", "x", " "],
    [" ", " ", " "],
  ]),
  ["2.1", "1.2", "2.2"]
);

thirdMoveCombinations.set(
  key([
    ["o", " ", " "],
    [" ", " ", " "],
    [" ", " ", "x"],
  ]),
  ["0.2", "2.0"]
);

export default thirdMoveCombinations;
