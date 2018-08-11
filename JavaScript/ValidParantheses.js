//Problem Statement:
//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.



/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    
    var brackets = {'(':')','{':'}','[':']'};
    
    
    //case where s is null, is always balanced
    if(s.length==0)
        return true;

    
    var stack1=[];
    var n = s.length;
    
    //case when string is of odd length
    if(n%2 != 0)
        return false;
    
    var i =0;
    
    while(i<n){
        if(stack1.length > 0){            
            var start = stack1.pop();
            var end = s.charAt(i);
            if(brackets[start] != end){
                stack1.push(start);
                stack1.push(end);
                }
        }
        
        else{
          stack1.push(s.charAt(i));  
        }
        i++;
    }
    
    if(stack1.length <= 0)
        return true;
    else
        return false;

};