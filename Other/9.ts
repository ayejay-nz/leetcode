function isPalindrome(x: number): boolean {
    let xStr = x.toString();
    let len = xStr.length;

    let start = 0;
    let end = len - 1;

    while (start < end) {
        if (xStr[start] !== xStr[end]) return false;
        start++;
        end--;
    }

    return true;
}
