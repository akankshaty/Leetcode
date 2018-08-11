//Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result=[];
    
    if(nums.length<3 || !nums)
        return result;
    
    var a =0 ;
    var b = 0;
    var c=0;
    var target = 0;
    b=1;
    var n = nums.length - 1;

    c=n;
    
   nums.sort(function(a,b) {return a-b;});
    
    while(a<n){
        if(a == 0 || nums[a] > nums[a-1]){
        while(b<c){
            var sum = nums[b]+nums[c] + nums[a];

            if(sum == 0){
                result.push([nums[a],nums[b],nums[c]]);
                b++;
                c--;
                while(b<c && nums[b-1]==nums[b]) b++;
                while(c>b && nums[c+1]==nums[c]) c--; 
            }
            else if(sum > 0){
                c = c - 1;
            }
            else if (sum < 0){
                b = b + 1;
            }
        }
        }
                    a += 1;
            b = a+1;
            c = n;

    }
    
    return result;
    
};