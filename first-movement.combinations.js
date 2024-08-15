import { key } from "./utils";

const firstMoveCombinations = new Map();

firstMoveCombinations.set(
  key([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]),
  ["0.0", "0.2", "2.0", "2.2"]
);

export default firstMoveCombinations;
