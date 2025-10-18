function majorityElement(nums: number[]): number {
    nums.sort();

    let majorityCount = Math.floor(nums.length / 2);

    return nums[majorityCount];
}
