# -*- coding: utf-8 -*-
"""
Created on Mon Jan  8 23:20:44 2018

@author: Akanksha
"""

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def getMinimumDifference(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        diff = 0

        if not root:
            return 0
                
        def dfs(node,nodelist=[]):
            if node.left:
                dfs(node.left,nodelist)
                
            nodelist.append(node.val)
            
            if node.right:
                dfs(node.right,nodelist)

            return nodelist                

        nodelist = dfs(root,[])    
        diff = min([abs(a-b) for a,b in zip(nodelist,nodelist[1:])])
        return diff
                    
