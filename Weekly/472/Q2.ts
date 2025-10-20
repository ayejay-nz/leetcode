function longestBalanced(nums: number[]): number {
    let longest = 0;
    let length = nums.length;

    let tracker = 0;
    let uniqueNums = new Set();
    for (let i = 0; i < length; i++) {
        let currentLength = 0;
        for (let j = i; j < length; j++) {
            let num = nums[j];
            if (uniqueNums.has(num)) {
                if (tracker === 0) {
                    currentLength = j - i + 1;
                }
                continue;
            }

            uniqueNums.add(num);

            if (num % 2 === 0) tracker++;
            else tracker--;

            if (tracker === 0) {
                currentLength = j - i + 1;
            }
        }
        if (currentLength > longest) longest = currentLength;

        tracker = 0;
        uniqueNums.clear();
    }

    return longest;
}
