function sortedSquares(nums: number[]): number[] {
    let length = nums.length;
    let leftPtr = 0;
    let rightPtr = length - 1;

    let squares = new Array(length);

    while (leftPtr <= rightPtr) {
        let leftSqr = nums[leftPtr] ** 2;
        let rightSqr = nums[rightPtr] ** 2;

        if (leftSqr >= rightSqr) {
            squares[rightPtr - leftPtr] = leftSqr;
            leftPtr++;
        } else {
            squares[rightPtr - leftPtr] = rightSqr;
            rightPtr--;
        }
    }

    return squares;
}
