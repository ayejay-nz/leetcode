function findClosestNumber(nums: number[]): number {
    var closestToZero = Infinity;
    nums.forEach((num) => {
        if (Math.abs(num) < Math.abs(closestToZero)) {
            closestToZero = num;
        } else if (Math.abs(num) === Math.abs(closestToZero)) {
            // Check if one value is positive as that is largest
            if (num >= 0 || closestToZero >= 0) {
                closestToZero = Math.abs(closestToZero);
            }
        }
    });

    return closestToZero;
}
