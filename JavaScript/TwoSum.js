/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!nums)
        return [];
    
    var n = nums.length;
    
    for(var i=0;i<n;i++){
        var diff = target - nums[i];
        var ind = nums.indexOf(diff);
        if(ind>-1 && ind!=i){
            return [i,ind];
        }
    }
    
return [-1,-1];    
};