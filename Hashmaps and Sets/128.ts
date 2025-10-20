function longestConsecutive(nums: number[]): number {
    let uniqueNums = Array.from(new Set(nums.sort((a, b) => a - b)));

    if (uniqueNums.length === 0) return 0;
    if (uniqueNums.length === 1) return 1;

    let longestSeq = 1;
    let candiateLength = 1;

    for (let i = 0; i < uniqueNums.length - 1; i++) {
        if (uniqueNums[i] + 1 === uniqueNums[i + 1]) {
            candiateLength++;
        } else {
            if (candiateLength > longestSeq) longestSeq = candiateLength;
            candiateLength = 1;
        }
    }

    return Math.max(candiateLength, longestSeq);
}
