/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices || prices.length<2)
        return 0;
    
    var maxprofit = 0;
    
    for(var i=1;i<prices.length;i++)
        {
            if(prices[i]>prices[i-1])
                maxprofit += prices[i] - prices[i-1];
            
        }
    
    return maxprofit;
};