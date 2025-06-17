var maxProfit = function(prices) {
    let minPrice = prices[0];  // Giá thấp nhất ban đầu là ngày đầu tiên
    let maxProfit = 0;         // Lợi nhuận ban đầu là 0

    for (let i = 1; i < prices.length; i++) {
        // Nếu tìm được giá nhỏ hơn minPrice => cập nhật giá mua tốt hơn
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Tính lợi nhuận nếu bán hôm nay
            let profit = prices[i] - minPrice;
            // Nếu lợi nhuận cao hơn maxProfit => cập nhật maxProfit
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4])); // Output: 1