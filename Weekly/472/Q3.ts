function lexGreaterPermutation(s: string, target: string): string {
    let sCodes = s.split("").map((c) => c.charCodeAt(0));
    let tCodes = target.split("").map((c) => c.charCodeAt(0));

    // No greater permutation exists
    let sCodesSorted = sCodes.toSorted((a, b) => b - a);
    let tCodeMin = Math.min(...tCodes);
    let isEqual = true;
    let lessThan = true;
    for (let i = 0; i < tCodes.length; i++) {
        if (tCodes[i] !== sCodesSorted[i]) isEqual = false;
        if (sCodes[i] >= tCodeMin) lessThan = false;
    }
    if (isEqual || lessThan) return "";

    let largerCodes = new Map<number, number[]>();

    // Get char-wise larger characters
    for (let i = 0; i < tCodes.length; i++) {
        let tCode = tCodes[i];

        if (!largerCodes.has(i)) largerCodes.set(i, []);

        for (const sCode of sCodes) {
            if (sCode >= tCode) {
                largerCodes.get(i)!.push(sCode);
            }
        }
    }

    // Find answer
    let charCodes = [];
    let greaterThan = false;

    for (let i = 0; i < tCodes.length; i++) {
        if (greaterThan) {
            let minCode = Math.min(...sCodes);
            charCodes.push(minCode);

            let idx = sCodes.indexOf(minCode);
            if (idx > -1) sCodes.splice(idx, 1);
        } else {
            let minCode = Math.min(...largerCodes.get(i)!);
            charCodes.push(minCode);

            if (minCode > tCodes[i]) {
                greaterThan = true;
                let idx = sCodes.indexOf(minCode);
                if (idx > -1) sCodes.splice(idx, 1);
            }

            for (let codes of largerCodes.values()) {
                let idx = codes.indexOf(minCode);
                if (idx > -1) codes.splice(idx, 1);
            }
        }
    }

    return charCodes.map((c) => String.fromCharCode(c)).join("");
}

console.log(lexGreaterPermutation("a", "b"));
