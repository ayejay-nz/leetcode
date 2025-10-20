/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let length = s.length;

    let leftPtr = 0;
    let rightPtr = length - 1;

    while (leftPtr < rightPtr) {
        let leftChar = s[leftPtr];
        let rightChar = s[rightPtr];

        s[leftPtr] = rightChar;
        s[rightPtr] = leftChar;

        leftPtr++;
        rightPtr--;
    }
}
