function mergeAlternately(word1: string, word2: string): string {
    var word1Arr = word1.split("");
    var word2Arr = word2.split("");
    var mergedWordArr = [];

    var shortestWordLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < shortestWordLength; i++) {
        mergedWordArr.push(word1Arr[0]);
        mergedWordArr.push(word2Arr[0]);

        // Keep track of remaining letters
        word1Arr.splice(0, 1);
        word2Arr.splice(0, 1);
    }

    // Add remaining letters to merged word
    mergedWordArr.push(...word1Arr, ...word2Arr);

    return mergedWordArr.join("");
}
