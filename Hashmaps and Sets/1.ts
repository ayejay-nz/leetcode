function twoSum(nums: number[], target: number): number[] {
    let indices: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; i + j < nums.length; j++) {
            if (nums[i] + nums[i + j] === target) {
                indices.push(i, i + j);
            }
        }
    }

    return indices;
}
