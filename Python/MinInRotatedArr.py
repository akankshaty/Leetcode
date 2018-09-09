#O(n) solution
class Solution:
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        i = 0
        res = nums[0]
        while i < len(nums)-1:
            if nums[i] < nums[i+1]:
                i+=1
                
            else:
                res = nums[i+1]
                break
            
        return res