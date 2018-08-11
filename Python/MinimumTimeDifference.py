# -*- coding: utf-8 -*-
"""
Created on Wed Jan  3 23:37:44 2018

@author: Akanksha
"""

class Solution(object):
    def findMinDifference(self, timePoints):
        """
        :type timePoints: List[str]
        :rtype: int
        """
        if not timePoints:
            return 0
        
        time = [int(t[:2]) * 60 + int(t[3:]) for t in timePoints]
        t=sorted(time)
        diff = min(t2-t1 for t1,t2 in zip(t,t[1:]+ [1440 + t[0]])) 
        
        return diff