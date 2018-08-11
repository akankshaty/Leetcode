//Implemented strstr without using any indexOf in javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(needle.length=="" || needle==haystack)
        return 0;
    
    if(!haystack || !needle)
        return -1;
    
    var n = haystack.length;
    var s = needle.length;

    var i = 0;
    var j = 0;
    
    while(i<n)
        {
            var str = haystack.charAt(i);
            var sub = needle.charAt(j);
            if(str==sub){
                
                while(haystack.charAt(i)==needle.charAt(j) && i<n && j<s){
                    i++;
                    j++;
                }
                
                if(j==s)
                    return i-j;
                else{
                    i = i-j;
                    j=0;
                }
               }
            i++;
        }
    return -1;
    
};