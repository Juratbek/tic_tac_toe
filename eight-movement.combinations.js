import { key } from "./utils";

const eightMoveCombinations = new Map();

// o centered

eightMoveCombinations.set(
  key([
    ["o", "x", "x"],
    ["x", "o", " "],
    ["o", " ", "x"],
  ]),
  "1.2"
);

eightMoveCombinations.set(
  key([
    ["x", "x", "o"],
    ["o", "o", "x"],
    ["x", " ", " "],
  ]),
  ["2.1", "2.2"]
);

eightMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["x", "o", " "],
    ["o", "x", "x"],
  ]),
  "0.2"
);

eightMoveCombinations.set(
  key([
    ["o", "x", "x"],
    [" ", "o", " "],
    ["o", "x", "x"],
  ]),
  "1.0"
);

eightMoveCombinations.set(
  key([
    ["x", "x", " "],
    ["o", "o", "x"],
    ["x", " ", "o"],
  ]),
  "0.2"
);

eightMoveCombinations.set(
  key([
    ["o", "x", "o"],
    [" ", "o", "x"],
    ["x", "x", " "],
  ]),
  "2.2"
);

eightMoveCombinations.set(
  key([
    ["x", "x", " "],
    ["o", "o", " "],
    ["x", "x", "o"],
  ]),
  "1.2"
);

// x centered

eightMoveCombinations.set(
  key([
    ["o", "x", "x"],
    ["x", "x", " "],
    ["o", "o", " "],
  ]),
  "1.2"
);

eightMoveCombinations.set(
  key([
    ["o", "x", "x"],
    [" ", "x", "x"],
    ["o", "o", " "],
  ]),
  ["1.0", "2.2"]
);

eightMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["x", "x", "o"],
    ["x", "o", " "],
  ]),
  "0.2"
);

eightMoveCombinations.set(
  key([
    ["o", "x", "o"],
    [" ", "x", "x"],
    ["x", "o", " "],
  ]),
  "1.0"
);

eightMoveCombinations.set(
  key([
    ["o", "x", "o"],
    ["x", "x", " "],
    ["x", "o", " "],
  ]),
  "1.2"
);

eightMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["o", "x", "x"],
    ["x", "o", " "],
  ]),
  "0.2"
);

eightMoveCombinations.set(
  key([
    ["o", "o", " "],
    ["x", "x", "o"],
    ["x", "x", " "],
  ]),
  "0.2"
);

eightMoveCombinations.set(
  key([
    ["o", " ", "o"],
    ["x", "x", "o"],
    ["x", " ", "x"],
  ]),
  "0.1"
);

eightMoveCombinations.set(
  key([
    ["o", "x", "o"],
    ["o", "x", "x"],
    ["x", " ", " "],
  ]),
  "2.1"
);

export default eightMoveCombinations;
