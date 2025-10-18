function isValidSudoku(board: string[][]): boolean {
    const emptyCell = ".";
    const boardSize = 9;
    const boxSize = 3;

    let digits = new Set();

    // Check rows
    for (const row of board) {
        for (const square of row) {
            if (square === emptyCell) continue;

            if (digits.has(square)) return false;
            else digits.add(square);
        }
        digits.clear();
    }

    // Check columns
    for (let col = 0; col < boardSize; col++) {
        for (let row = 0; row < boardSize; row++) {
            const square = board[row][col];

            if (square === emptyCell) continue;

            if (digits.has(square)) return false;
            else digits.add(square);
        }
        digits.clear();
    }

    // Check boxes
    for (let boxCol = 0; boxCol < boardSize; boxCol += 3) {
        for (let boxRow = 0; boxRow < boardSize; boxRow += 3) {
            for (let col = 0; col < boxSize; col++) {
                for (let row = 0; row < boxSize; row++) {
                    let square = board[boxRow + row][boxCol + col];

                    if (square === emptyCell) continue;

                    if (digits.has(square)) return false;
                    else digits.add(square);
                }
            }
            digits.clear();
        }
    }

    return true;
}
