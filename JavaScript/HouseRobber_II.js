/*Note: This is an extension of House Robber.
Ater robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(!nums || nums.length==0)
        return 0;
    
    var n = nums.length;
    
    if(n==1)
        return nums[0];
    
    if(n==2)
        return Math.max(nums[0],nums[1]);
    
    var first=new Array(n+1);
    first.fill(0);
    first[0] = 0;
    first[1] = nums[0];
    
    var second=new Array(n+1);
    second.fill(0);
    second[0] = 0;
    second[1] = 0;

    for(var i=2; i<=n; i++){
        
        first[i] += Math.max(first[i-2]+nums[i-1],first[i-1]);
        second[i] += Math.max(second[i-2]+nums[i-1],second[i-1]);
    }
    
    return Math.max(first[n-1],second[n]);
};