/*We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.*/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num<2)
        return false;
    var i = 2;
    var sum = 1;
    while(i<=Math.sqrt(num)){
        if(num%i==0){
            sum+=i;
            sum+=num/i;
        }
        i++;
    }
    return sum==num;
};