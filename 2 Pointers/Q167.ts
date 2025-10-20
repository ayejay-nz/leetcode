function twoSum(numbers: number[], target: number): number[] {
    let leftPtr = 0;
    let rightPtr = numbers.length - 1;

    let indicies: number[] = [];

    while (leftPtr < rightPtr) {
        let sum = numbers[leftPtr] + numbers[rightPtr];

        if (sum === target) {
            indicies = [leftPtr + 1, rightPtr + 1];
            break;
        } else if (sum > target) {
            rightPtr--;
        } else {
            leftPtr++;
        }
    }

    return indicies;
}
