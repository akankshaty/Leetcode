# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        
        p = l1
        q = l2
        
        carry = 0
        dummy = ListNode(0)
        res = None
        
        while p or q:
            
            Sum = (p.val if p else 0) + (q.val if q else 0) + carry 
            carry = 0
            
            if Sum > 9:
                carry = 1
                Sum %= 10
                
            temp = ListNode(Sum)
            
            if res:
                res.next = temp                            
                res = temp
            
            else:
                res = temp
                dummy.next = res
            
            if p: p=p.next
            if q: q=q.next
                
        if carry:
            temp = ListNode(carry)
            res.next = temp
            
        return dummy.next