function maxProfit(prices: number[]): number {
    return prices.reverse().reduce((max, price, idx) => {
        if (price <= max) return max;
        let maxDailyProfit = price - Math.min(...prices.slice(idx));
        return Math.max(max, maxDailyProfit);
    }, 0);
}
