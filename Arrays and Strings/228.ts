function summaryRanges(nums: number[]): string[] {
    var ranges = [];
    for (let i = 0; i < nums.length; i++) {
        let startOfRange = nums[i];

        // Check for consecutive numbers
        for (let j = 0; j + i < nums.length; j++) {
            // Numbers are not consecutive, so write to array
            if (startOfRange + j !== nums[i + j]) {
                j === 1
                    ? ranges.push(startOfRange.toString())
                    : ranges.push(
                          startOfRange.toString() +
                              "->" +
                              nums[i + j - 1].toString()
                      );

                i += j - 1; // Already checked these
                break;
            } else if (i + j + 1 === nums.length) {
                j === 0
                    ? ranges.push(startOfRange.toString())
                    : ranges.push(
                          startOfRange.toString() +
                              "->" +
                              nums[i + j].toString()
                      );

                i += j; // Already checked these
            }
        }
    }

    return ranges;
}
