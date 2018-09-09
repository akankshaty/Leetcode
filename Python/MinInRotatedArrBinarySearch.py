#O(log n) solution
class Solution:
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        if not nums:
            return 0
        
        if nums[0] < nums[-1]:
            return nums[0]
        
        low = 0
        high = len(nums) - 1 
        first = nums[0]
        
        while low < high:
            mid = (low + high) // 2
            
            #search in right half
            if nums[mid] > first:
                low = mid+1
                
            elif nums[mid] < first:
                high = mid-1
                
            if nums[mid] > nums[mid+1]:
                return nums[mid+1]
            
            elif nums[mid] < nums[mid-1]:
                return nums[mid]
            
        return nums[0]