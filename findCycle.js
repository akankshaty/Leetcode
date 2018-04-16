/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head)
        return false;
    
    var p = head;
    var set = new Set();
    while(p!=null){
        if(set.has(p)){
            return true;}
        else
            set.add(p);
        p=p.next;
    }
    
    return false;
};