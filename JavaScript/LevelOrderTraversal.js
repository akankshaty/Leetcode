/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root)
        return [];
    
    var q = [];
    var res=[];
    q.push(root);
    while(q.length>0){
        let tmp = [];
        let s = q.length;
        while(s--){
                var node = q.shift();
                tmp.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
        }
        res.push(tmp);
    }
    return res;
};