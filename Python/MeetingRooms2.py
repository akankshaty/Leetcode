# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution:
    def minMeetingRooms(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: int
        """
        
        if not intervals:
            return 0
        
        intervals = sorted(intervals, key = lambda x: x.start)
        
        res = 1
        temp = []
        temp.append([intervals[0]])
        for i in range(1,len(intervals)):
            j = 0
            while j < len(temp):
                if intervals[i].start >= temp[j][-1].end:                
                    temp[j].append(intervals[i])
                    break
                j += 1

            if j == len(temp):
                temp.append([intervals[i]])
                res+=1
                
        return res