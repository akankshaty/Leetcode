class Solution:

    def reverse(self,curr):
        prev = None
        while curr is not None:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev

    def reverseBetween(self, head, m, n):
        """
        :type head: ListNode
        :type m: int
        :type n: int
        :rtype: ListNode
        """
        
        if not head:
            return head
        
        if m == n:
            return head
        
        rev_start = None
        rev_end = None
        
        p = head
        
        start = None
        end = None
        
        c = 1
        
        while p is not None:
            
            if c < m:
                start = p
                
            if c == m:
                rev_start = p
                
            if c == n:
                rev_end = p
                end = rev_end.next
                
            p = p.next
            c += 1
            
        rev_end.next = None
        
        rev_end = self.reverse(rev_start)
            
        if start:
            start.next = rev_end
            
        else:
            head = rev_end
            
        rev_start.next = end
        
        return head
