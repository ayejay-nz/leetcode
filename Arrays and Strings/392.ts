function isSubsequence(s: string, t: string): boolean {
    var tArr = t.split("");

    for (const c of s.split("")) {
        let ind = tArr.indexOf(c);
        // Character not in array
        if (ind === -1) {
            return false;
        }

        tArr = tArr.slice(ind + 1);
    }

    return true;
}
