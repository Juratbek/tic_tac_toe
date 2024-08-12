// Rules for second player

// first move: take center

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

// third move:
//            rule 1: ['x', '',  ''], if there are two your marks together and the third is empty, mark the third position
//                    ['x', 'o', ''],
//                    ['o', 'x', '']
//            rule 2: ['x', '',  ''], if there are two your marks together and the third is empty, mark the third position
//                    ['x', 'o', ''],
//                    ['o', 'x', '']


const combinationsMap = new Map();

combinationsMap.set([
    ['x', '', ''],
    ['', '', ''],
    ['', '', '']
],'1.1')

combinationsMap.set([
    ['', 'x', ''],
    ['', '', ''],
    ['', '', '']
],'1.1')

combinationsMap.set([
    ['', '', 'x'],
    ['', '', ''],
    ['', '', '']
],'1.1')

combinationsMap.set([
    ['', '', ''],
    ['x', '', ''],
    ['', '', '']
],'1.1')

combinationsMap.set([
    ['', '', ''],
    ['', 'x', ''],
    ['', '', '']
],'1.1')

combinationsMap.set([
    ['', '', ''],
    ['', '', 'x'],
    ['', '', '']
],'1.1')

combinationsMap.set([
    ['', '', ''],
    ['', '', ''],
    ['x', '', '']
],'1.1')

combinationsMap.set([
    ['', '', ''],
    ['', '', ''],
    ['', 'x', '']
],'1.1')

combinationsMap.set([
    ['', '', ''],
    ['', '', ''],
    ['', '', 'x']
],'1.1')
