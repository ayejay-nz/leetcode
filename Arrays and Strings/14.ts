function longestCommonPrefix(strs: string[]): string {
    return strs.reduce((p, s) => {
        let length = Math.min(p.length, s.length);
        let prefix = "";

        for (let i = 0; i < length; i++) {
            if (p[i] === s[i]) prefix += p[i];
            else break;
        }

        return prefix;
    });
}
