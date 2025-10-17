/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let n = matrix.length - 1;
    let rows = Math.floor((n + 1) / 2);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < n - 2 * i; j++) {
            [
                matrix[i][i + j],
                matrix[i + j][n - i],
                matrix[n - i][n - j - i],
                matrix[n - j - i][i],
            ] = [
                matrix[n - j - i][i],
                matrix[i][i + j],
                matrix[i + j][n - i],
                matrix[n - i][n - j - i],
            ];
        }
    }
}
