function maxProfit(prices: number[]): number {
  let totalProfit = 0;
  let tempPrice = prices[0];
  prices.forEach((price, idx) => {
    if (tempPrice < price) {
      totalProfit += price - tempPrice;
    } 
    tempPrice = price;
  });
  return totalProfit;
};