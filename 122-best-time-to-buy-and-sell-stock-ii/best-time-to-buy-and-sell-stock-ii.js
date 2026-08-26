/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let buyPrice = prices[0]
    let holding = false

    for(let i = 0; i < prices.length; i++){
        if(holding){
            let value = prices[i] - buyPrice
            profit = profit + value
            holding = false
        }
        if(!holding){
           if(prices[i+1] > prices[i]){
            buyPrice = prices[i]
            holding = true
           }
        }
    }

      return profit;
};