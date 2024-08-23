import { key } from "../utils";

const ninthMoveCombinations = new Map();

ninthMoveCombinations.set(
  key([
    ["x", "o", "x"],
    ["o", "o", " "],
    ["x", "x", " "],
  ]),
  "1.2"
);

ninthMoveCombinations.set(
  key([
    ["o", "x", " "],
    ["x", "x", "o"],
    ["x", "o", "o"],
  ]),
  "0.2"
);

ninthMoveCombinations.set(
  key([
    ["o", "o", "x"],
    ["x", "x", "o"],
    ["o", "x", " "],
  ]),
  "2.2"
);

ninthMoveCombinations.set(
  key([
    ["o", "x", "o"],
    ["x", "x", "o"],
    ["x", "o", " "],
  ]),
  "2.2"
);

export default ninthMoveCombinations;
