function isPalindrome(s: string): boolean {
    let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let leftPtr = 0;
    let rightPtr = cleanStr.length - 1;

    while (leftPtr < rightPtr) {
        if (cleanStr[leftPtr] !== cleanStr[rightPtr]) return false;
        leftPtr++;
        rightPtr--;
    }

    return true;
}
