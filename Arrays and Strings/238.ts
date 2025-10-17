function productExceptSelf(nums: number[]): number[] {
    let answerLeft: number[] = [1];
    let answerRight: number[] = [1];

    nums.slice(0, -1).forEach((n, i) => {
        answerLeft.push(answerLeft[i] * n);
    });

    nums.reverse()
        .slice(0, -1)
        .forEach((n, i) => {
            answerRight.push(answerRight[i] * n);
        });
    answerRight.reverse();

    return answerLeft.map((e, i) => {
        return e * answerRight[i];
    });
}
