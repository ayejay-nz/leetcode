function canConstruct(ransomNote: string, magazine: string): boolean {
    let mCharCount: Record<string, number> = {};

    for (const c of magazine) {
        if (mCharCount[c] === undefined) {
            mCharCount[c] = 1;
        } else {
            mCharCount[c] += 1;
        }
    }

    for (const c of ransomNote) {
        if (mCharCount[c] === undefined || mCharCount[c] === 0) return false;

        mCharCount[c] -= 1;
    }

    return true;
}
