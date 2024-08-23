import { key } from "../utils";

const seventhMoveCombinations = new Map();

// o centered

seventhMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["x", "o", " "],
    ["o", " ", "x"],
  ]),
  "0.2"
);

seventhMoveCombinations.set(
  key([
    ["o", "o", "x"],
    [" ", "o", " "],
    ["x", " ", "x"],
  ]),
  "2.1"
);

seventhMoveCombinations.set(
  key([
    ["o", "x", "x"],
    ["x", "o", " "],
    ["o", " ", " "],
  ]),
  "2.2"
);

seventhMoveCombinations.set(
  key([
    ["o", "o", "x"],
    [" ", "o", "x"],
    ["x", " ", " "],
  ]),
  "2.1"
);

seventhMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["o", "o", "x"],
    ["x", " ", " "],
  ]),
  "2.2"
);

seventhMoveCombinations.set(
  key([
    ["o", "o", "x"],
    ["x", "o", " "],
    [" ", " ", "x"],
  ]),
  "2.1"
);

seventhMoveCombinations.set(
  key([
    ["o", "o", "x"],
    ["x", "o", " "],
    ["x", " ", " "],
  ]),
  ["2.1", "2.2"]
);

seventhMoveCombinations.set(
  key([
    ["o", "o", "x"],
    ["x", "o", "x"],
    [" ", " ", " "],
  ]),
  ["2.1", "2.2"]
);

seventhMoveCombinations.set(
  key([
    ["o", "x", "o"],
    ["x", "o", "x"],
    [" ", " ", " "],
  ]),
  ["2.0", "2.2"]
);

seventhMoveCombinations.set(
  key([
    ["o", "o", "x"],
    [" ", "o", " "],
    ["x", "x", " "],
  ]),
  "2.2"
);

seventhMoveCombinations.set(
  key([
    ["o", " ", " "],
    ["x", "o", "x"],
    ["o", "x", " "],
  ]),
  ["2.2", "2.2"]
);

// x centered

seventhMoveCombinations.set(
  key([
    ["x", "o", " "],
    ["o", "x", "x"],
    [" ", " ", "o"],
  ]),
  ["0.2", "2.0"]
);

seventhMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["x", "x", " "],
    ["o", "o", " "],
  ]),
  "2.2"
);

seventhMoveCombinations.set(
  key([
    ["o", " ", " "],
    ["o", "x", "x"],
    ["x", "o", " "],
  ]),
  "0.2"
);

seventhMoveCombinations.set(
  key([
    ["o", " ", "x"],
    ["x", "x", " "],
    ["o", "o", " "],
  ]),
  "2.2"
);

seventhMoveCombinations.set(
  key([
    ["o", "x", "o"],
    [" ", "x", " "],
    ["o", " ", "x"],
  ]),
  "1.0"
);

seventhMoveCombinations.set(
  key([
    ["o", "x", "o"],
    [" ", "x", " "],
    ["x", "o", " "],
  ]),
  "1.2"
);

seventhMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["x", "x", "o"],
    [" ", "o", " "],
  ]),
  "2.2"
);

seventhMoveCombinations.set(
  key([
    ["x", "x", "o"],
    ["o", "x", " "],
    [" ", " ", "o"],
  ]),
  "1.2"
);

// empty centered

seventhMoveCombinations.set(
  key([
    ["o", "x", "o"],
    ["x", " ", " "],
    ["o", " ", "x"],
  ]),
  "1.1"
);

seventhMoveCombinations.set(
  key([
    ["o", "x", "o"],
    ["x", " ", " "],
    ["x", " ", "o"],
  ]),
  ["1.1", "1.2"]
);

seventhMoveCombinations.set(
  key([
    ["o", "x", "o"],
    [" ", " ", " "],
    ["o", "x", "x"],
  ]),
  ["1.0", "1.1"]
);

export default seventhMoveCombinations;
