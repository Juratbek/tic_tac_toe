function mirror2DArray(arr, diagonal = 'main') {
    const mirroredArray = arr.map(row => [...row]); // Clone the array to avoid mutating the original

    if (diagonal === 'main') {
        // Mirror along the main diagonal
        for (let i = 0; i < 3; i++) {
            for (let j = i + 1; j < 3; j++) {
                // Swap elements across the main diagonal
                [mirroredArray[i][j], mirroredArray[j][i]] = [mirroredArray[j][i], mirroredArray[i][j]];
            }
        }
    } else if (diagonal === 'anti') {
        // Mirror along the anti-diagonal
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3 - i - 1; j++) {
                // Swap elements across the anti-diagonal
                [mirroredArray[i][j], mirroredArray[2 - j][2 - i]] = [mirroredArray[2 - j][2 - i], mirroredArray[i][j]];
            }
        }
    } else {
        throw new Error('Invalid diagonal type. Use "main" or "anti".');
    }

    return mirroredArray;
}
