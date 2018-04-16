/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    var max = Math.pow(2,31)-1;
    var min = -max-1;
        
    var negative = (dividend < 0) != (divisor < 0);

    var left = Math.abs(dividend);
    dividend =  Math.abs(dividend);;
    
    var div = Math.abs(divisor);
    divisor = Math.abs(divisor);
    
    var q = 1;
    var ans = 0 ;
    while(left >= div){
        left -= div;
        ans += q;
        q += q;
        div += div;        
        if(left<div)
            {
                div = Math.abs(divisor);
                q=1;
            }
    }
    
    if(negative)
        return Math.max(min,-ans);
        
    else
        return Math.min(max,ans);
    
};