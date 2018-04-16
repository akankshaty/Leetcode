/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function helper( preorder,  inorder,  preorderIndex,  start,  end) {
    if (start > end) return null;
    var node = new TreeNode(preorder[preorderIndex]);
    var ind = inorder.indexOf(preorder[preorderIndex]);
    var leftTreeSize = ind - start;
    var rightTreeSize = end - ind;
    node.left = helper(preorder, inorder, preorderIndex + 1, start, ind - 1);
    node.right = helper(preorder, inorder, preorderIndex + leftTreeSize + 1, ind + 1, end);
    return node;
}

var buildTree = function(preorder, inorder) {    
    if(preorder.length==0)
        return null;
    return helper(preorder,inorder,0,0,inorder.length-1);
};