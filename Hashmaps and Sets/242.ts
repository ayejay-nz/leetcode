function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let sCharCount = new Map<string, number>();

    for (const c of s) {
        if (sCharCount.has(c)) {
            sCharCount.set(c, sCharCount.get(c)! + 1);
        } else {
            sCharCount.set(c, 1);
        }
    }

    for (const c of t) {
        if (!sCharCount.has(c) || sCharCount.get(c) === 0) return false;

        sCharCount.set(c, sCharCount.get(c)! - 1);
    }

    sCharCount.forEach((v) => {
        if (v !== 0) return false;
    });

    return true;
}
