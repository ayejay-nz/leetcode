function numJewelsInStones(jewels: string, stones: string): number {
    let jewelSet = new Set(jewels);
    let count = 0;

    for (const stone of stones) {
        if (jewelSet.has(stone)) count++;
    }

    return count;
}
