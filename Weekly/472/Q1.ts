function missingMultiple(nums: number[], k: number): number {
    let multiple = 1;

    for (; multiple <= 100; multiple++) {
        if (nums.indexOf(k * multiple) === -1) return multiple * k;
    }

    return multiple * k;
}
