function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    let startIdx = 0;
    let endIdx = nums.length - 1;

    let triples = [];
    while (startIdx < endIdx - 1) {
        let leftPtr = startIdx + 1;
        let rightPtr = endIdx;

        while (leftPtr < rightPtr) {
            let tripletSum = nums[startIdx] + nums[leftPtr] + nums[rightPtr];
            if (tripletSum === 0) {
                triples.push([nums[startIdx], nums[leftPtr], nums[rightPtr]]);
                // Move left pointer to next unique element
                let leftNum = nums[leftPtr];
                leftPtr = nums.findIndex((v) => v > leftNum);
                if (leftPtr === -1) break;
            } else if (tripletSum > 0) {
                rightPtr--;
            } else {
                leftPtr++;
            }
        }

        // Move start index to next unique element
        let startNum = nums[startIdx];
        startIdx = nums.findIndex((v) => v > startNum);
        if (startIdx === -1) break;
    }

    return triples;
}
