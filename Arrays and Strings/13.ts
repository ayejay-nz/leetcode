const numerals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt(s: string): number {
    // Group consecutive numerals
    const integers = s.split("").map((n) => numerals[n]);

    return integers.reduce(
        (sum, x, i) => (x < integers[i + 1] ? sum - x : sum + x),
        0
    );
}
