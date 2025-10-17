function productExceptSelf(nums: number[]): number[] {
    let length = nums.length;
    let answer: number[] = new Array(length).fill(1);

    let prefix = 1;
    let suffix = 1;

    for (let i = 0; i < length; i++) {
        answer[i] *= prefix;
        answer[length - i - 1] *= suffix;
        prefix *= nums[i];
        suffix *= nums[length - i - 1];
    }

    return answer;
}
