function containsDuplicate(nums: number[]): boolean {
    let uniqueNums = new Set();

    for (const n of nums) {
        if (uniqueNums.has(n)) return true;

        uniqueNums.add(n);
    }

    return false;
}
