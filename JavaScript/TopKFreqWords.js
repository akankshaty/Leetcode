/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    if(!words || k==0)
        return [""];

    var map = new Map();
    
    //storing values in map
    for(let i =0;i<words.length; i++)
        {
            var val = map.get(words[i]);
            map.set(words[i], val>0? val+1:1);
        }
   
    var res=[];
    //extracting values from map into res
    for([key,value] of map.entries()){
               res.push([value,key]); 
    }
    
    map.clear();
    //sorting res based on values (decreasing order), alphabetical order 
    res.sort(function(a,b){return b[0]-a[0] || a[1].localeCompare(b[1]);});
    var result=[];
    for(let j =0;j<k;j++){
        result.push(res[j][1]);
    }    
    
    return result;
    
};