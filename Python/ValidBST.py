# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

from queue import Queue
class Solution:
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root is None:
            return True
        
        stack = []
        node = root
        prev = None        
        while node or len(stack) > 0:
            if node:
                stack.append(node)
                node = node.left
            else:
                node = stack.pop()
                if prev and node.val <= prev.val:
                    return False
                
                prev = node
                node = node.right
                
        return True
