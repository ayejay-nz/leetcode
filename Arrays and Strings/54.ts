function spiralOrder(matrix: number[][]): number[] {
    let m = matrix.length;
    let n = matrix[0].length;
    let flatMatrix = matrix.flat();

    let ans: number[] = [];

    let idx = 0;
    let count = 0;
    let rowCount = 0;
    let colCount = 0;
    while (count < m * n) {
        for (let i = 0; i < n - colCount; i++) {
            rowCount % 2 === 0 ? (idx += 1) : (idx -= 1);
            ans.push(flatMatrix[idx - 1]);
            count += 1;
        }
        rowCount += 1;

        for (let j = 0; j < m - rowCount; j++) {
            colCount % 2 === 0 ? (idx += n) : (idx -= n);
            ans.push(flatMatrix[idx - 1]);
            count += 1;
        }
        colCount += 1;
    }

    return ans;
}
