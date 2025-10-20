function merge(intervals: number[][]): number[][] {
    // Sort ascendingly by start
    intervals.sort((a, b) => a[0] - b[0]);

    // Calculate overlapping intervals
    let newIntervals: number[][] = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];

        if (interval[0] <= end) {
            end = Math.max(end, interval[1]);
        } else {
            newIntervals.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
    }
    newIntervals.push([start, end]);

    return newIntervals;
}
