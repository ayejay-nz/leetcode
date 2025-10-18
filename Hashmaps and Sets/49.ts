function groupAnagrams(strs: string[]): string[][] {
    let anagrams = new Map<string, string[]>();

    // Get all anagrams
    for (const str of strs) {
        let sortedStr = str.split("").sort().join("");

        if (anagrams.has(sortedStr)) {
            anagrams.set(sortedStr, [...anagrams.get(sortedStr)!, str]);
        } else {
            anagrams.set(sortedStr, [str]);
        }
    }

    return [...anagrams.values()];
}
