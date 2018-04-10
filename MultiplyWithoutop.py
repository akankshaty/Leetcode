# -*- coding: utf-8 -*-


#Multiply two positive integers without using * operator
'''
def helper(small,big):
    if small == 0:
        return 0
    if small == 1:
        return big
    
    s = small >> 1
    halfprod = helper(s,big)
    if small%2 == 0:
        return halfprod + halfprod
    else:
        return halfprod + halfprod + big

def multiply(a,b):
    small = b if a > b else a
    big = a if a > b else b
    return helper(small,big)
'''
#Code to check the above function
#ans = multiply(32,32)
#print(ans)

pathLength = 9
l = [[1,10],[1,6],[2,8],[3,5]]

class Solution(object):
    def merge(self,pathLength, intervals):
        """
        :type intervals: List[Interval]
        :rtype: List[Interval]
        """
        count = 0
        flag = 0
        if len(intervals) == 0: return []
        intervals = sorted(intervals, key = lambda x: x[0])
        res = [intervals[0]]
        
        for n in intervals[1:]:
            if n[1] > pathLength:
                flag = 1
            if n[0] <= res[-1][1] and n[0] <= pathLength: 
                res[-1][1] = max(n[1], res[-1][1])
                count += 1            
            else: res.append(n)
            print(count)

        if flag == 0:
            return -1

        return count




a = Solution()
r = a.merge(pathLength,l)
print(r)    