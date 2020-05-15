/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 后序遍历 L R Mid 跟前序遍历有些相似 Mid L R
 * 结果入栈的时候可以采用逆序的方式，头部插入
 * 因为是头部插入，所以先遍历右节点在遍历左节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = [];
    let stack = [];
    stack.push(root)
    while(stack.length > 0){
        const item = stack.pop();
        result.unshift( item.val);
        if(item.right){
            stack.push(item.right)
        }
        if(item.left){
            stack.push(item.left)
        }
    }
    console.log(result)
    return result
};
// @lc code=end

