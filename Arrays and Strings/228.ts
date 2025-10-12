function summaryRanges(nums: number[]): string[] {
    var ranges: string[] = [];

    var start = 0;
    for (let i = 0; i < nums.length; i++) {
        // Check if not consecutive
        if (nums[i] + 1 !== nums[i + 1] || i + 1 === nums.length) {
            start === i
                ? ranges.push(nums[start].toString())
                : ranges.push(`${nums[start]}->${nums[i]}`);

            start = i + 1;
        }
    }

    return ranges;
}
