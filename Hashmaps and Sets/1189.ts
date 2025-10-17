function maxNumberOfBalloons(text: string): number {
    let charCount = new Map<string, number>([
        ["b", 0],
        ["a", 0],
        ["l", 0],
        ["o", 0],
        ["n", 0],
    ]);

    for (const c of text) {
        if (charCount.has(c)) charCount.set(c, charCount.get(c)! + 1);
    }

    charCount.forEach((v, c) => {
        // Characters that appear twice
        if (["l", "o"].includes(c)) charCount.set(c, Math.floor(v / 2));
    });

    return Math.min(...charCount.values());
}
