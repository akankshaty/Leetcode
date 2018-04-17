/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    
    var plusOne = digits[digits.length-1] + 1;
    var carry = 0;
    i=digits.length-2;
    if(plusOne > 9){
        carry = 1;
        digits[digits.length-1] = plusOne%10;
        while(carry){
            if(carry==1 && i<0)
                digits.unshift(1);

            digits[i] += carry;
            carry = digits[i]>9? 1:0;
            digits[i] = digits[i]>9?digits[i]%10:digits[i];
            i--;

        }
    }
    else{
            digits[digits.length-1] = plusOne;

    }
    return digits;
};