function sortedSquares(nums: number[]): number[] {
    return nums.map((num) => num ** 2).toSorted((a, b) => a - b);
}
