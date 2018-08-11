/* CTCI question from Arrays and Strings
String compression: Implement a method to perform basic string compression using the counts of repeated characters. Return original string in case compressed string isn't smaller in length than the original string.
*/


function stringCompression(s){
    
    if(!s)
        return s;
    
    var i=0, count=0;
    var op="";
    while(i<s.length){
        let a = s.charAt(i);
        op += a;
        while(a==s.charAt(i)){
              count++;
              i++;
              }
        op += count;
        i = count > 0? i : i+1;
        count = 0;
        }
    return op.length < s.length? op:s;
}



var res = stringCompression("aabcccccaaa");
console.log(res);