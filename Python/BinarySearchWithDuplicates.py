class Solution:
    def search(self, nums, target, left):
        index = -1
        low = 0
        high = len(nums)-1
        
        while low <= high:
            mid = (low+high) // 2
            if left:
                if nums[mid] <= target:
                    low = mid + 1
                else:
                    high = mid - 1

            else:
                if nums[mid] >= target:
                    high = mid - 1
                else:
                    low = mid + 1
                
            if nums[mid] == target:
                index = mid
        
        return index
    
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        first = self.search(nums,target, False)
        last = self.search(nums,target, True)
        
        return [first,last]