// second move:
//             rule 1: ['x', '',  ''], if there are two marks together and the third is empty, mark the third position
//                     ['x', 'o', ''],
//                     ['',  '',  '']
//             rule 2: ['x', '',  ''], if there are two marks with one space between, mark the center position of these marks
//                     ['',  'o', ''],
//                     ['x', '',  '']
//             rule 3: ['x', '',  ''], if cords are one lined, don't take diagonal positions. Mark one of the vertical/horizontal positions
//                     ['',  'o', ''],
//                     ['',  '',  'x']
//             rule 4: ['x', '',  ''], if cords are positioned like horse movement from chess, mark one of the horizontal positions
//                     ['',  'o', ''],
//                     ['',  'x', '']

const secondMoveCombinations = new Map();

secondMoveCombinations.set(
  [
    ["x", " ", " "],
    ["x", "o", " "],
    [" ", " ", " "],
  ],
  "3.1"
);

secondMoveCombinations.set(
  [
    ["x", " ", " "],
    [" ", "o", " "],
    ["x", " ", " "],
  ],
  "2.1"
);

secondMoveCombinations.set(
  [
    ["x", " ", " "],
    [" ", "o", " "],
    [" ", "x", " "],
  ],
  ["2.1", "2.3"]
);

secondMoveCombinations.set(
  [
    ["x", " ", " "],
    [" ", "o", " "],
    [" ", " ", "x"],
  ],
  ["2.1", "2.3", "1.2", "3.2"]
);

function calculateCordsForThirdMove(coords) {}
