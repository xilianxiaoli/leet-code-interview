/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 * 
 * 
例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0) {
        return null;
    }
    if (inorder.length === 1) {
        return new TreeNode(inorder[0]);
    }
    const rootVal = preorder[0];
    let rootIndex = 0;
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === rootVal) {
            rootIndex = i;
            break;
        }
    }
    const root = new TreeNode(rootVal);
    root.left = buildTree(preorder.slice(1, rootIndex), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1));
    return root
};
buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
// @lc code=end

