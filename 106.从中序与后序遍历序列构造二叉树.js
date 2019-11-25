/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 * 
例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]

返回如下的二叉树：
    3
   / \
  9  20
    /  \
   15   7

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) {
        return null
    }
    if (inorder.length === 1) {
        return new TreeNode(inorder[0]);
    }
    const rootVal = postorder[postorder.length - 1];
    let inRootIndex = -1
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === rootVal) {
            inRootIndex = i;
            break;
        }
    }
    const root = new TreeNode(rootVal);
    root.left = buildTree(inorder.slice(0, inRootIndex), postorder.slice(0, inRootIndex));
    root.right = buildTree(inorder.slice(inRootIndex + 1), postorder.slice(inRootIndex, -1));
    return root;
};

console.log(buildTree([], []))
// @lc code=end

