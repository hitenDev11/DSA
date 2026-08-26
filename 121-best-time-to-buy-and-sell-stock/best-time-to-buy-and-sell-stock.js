/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0]
    let profit = 0
    for(let i = 0;i<prices.length;i++){
        if(prices[i] < buyPrice){
            buyPrice = prices[i]
        }else{
            let value = prices[i] - buyPrice
            if(value > profit){
               profit = value
            }
        }
    }

    return profit;
};