const cords = [
    ['x', '0', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];

function calculateNextCords(opponentCoords, myCoords, movementNumber) {
    if (movementNumber === 1) {
        return [
            '0.0', '0.2',
            '2.0', '2.2'
        ];
    }

    if (movementNumber === 2) {
        return '1.1'
    }

    if (movementNumber === 3) {
        return calculateCordsForThirdMove(coords);
    }

}
