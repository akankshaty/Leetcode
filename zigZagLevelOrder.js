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
var zigzagLevelOrder = function(root) {
    
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
    
    for(var i =0;i<res.length;i++){
        if(i%2!=0)
            res[i]=res[i].reverse();
    }
    return res;
    
};