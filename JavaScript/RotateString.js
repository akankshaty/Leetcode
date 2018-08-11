/*We are given two strings, A and B.
A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    
    
    if(A.length!=B.length)
        return false;
    
    if(A==B)
        return true;
    
    var n = A.length;
    var arr = A.split("");
    for(var i = 0; i<n; i++)
        {
            var a = arr.shift();
            arr.push(a);
            var s = arr.join("");
            if(B==s)
                return true;
            
        }
    return false;
};