//Given a linked list, remove the n-th node from the end of list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(n==0 || !head)
        return head;
    
    if(head.next==null && n>0)
        return null;
    
    var p = head;
    var len = 0;
    while(p!=null)
        {
            len++;
            p=p.next;
        }
    
    var diff = len-n;
    
    //remove first node
    if(diff==0)
        {
            head = head.next;
            return head;
        }
    
    var q = head;
    //remove other nodes
    while(diff>1)
        {
            q=q.next;
            diff-=1;
        }
    q.next = q.next.next;
    return head;
};