import { key } from "../utils";

//            rule 1: ['x', ' ', ' '], if user marks any position except the center, mark the center
//                    [' ', 'o', ' '],
//                    [' ', ' ', ' ']

//            rule 2: ['o', ' ', ' '], if user marks the center, mark any position except the center
//                    [' ', 'x', ' '],
//                    [' ', ' ', ' ']

const secondMoveCombinations = new Map();

secondMoveCombinations.set(
  key([
    [" ", " ", " "],
    [" ", "x", " "],
    [" ", " ", " "],
  ]),
  ["0.0", "0.1", "0.2", "1.0", "1.2", "2.0", "2.1", "2.2"]
);

secondMoveCombinations.set(
  key([
    ["x", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]),
  "1.1"
);

secondMoveCombinations.set(
  key([
    [" ", " ", " "],
    ["x", " ", " "],
    [" ", " ", " "],
  ]),
  "1.1"
);

export default secondMoveCombinations;
