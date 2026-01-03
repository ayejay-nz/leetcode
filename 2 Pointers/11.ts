function maxArea(height: number[]): number {
    let leftPtr = 0;
    let rightPtr = height.length - 1;
    let length = height.length;

    let maximalArea = 0;
    while (leftPtr < rightPtr) {
        let leftHeight = height[leftPtr];
        let rightHeight = height[rightPtr];
        length--;

        let newArea = length * Math.min(leftHeight, rightHeight);
        if (newArea > maximalArea) {
            maximalArea = newArea;
        }

        // Replace the smallest line
        if (leftHeight < rightHeight) {
            leftPtr++;
        } else {
            rightPtr--;
        }
    }

    return maximalArea;
}
