/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 中序遍历 递归实现
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal1 = function (root) {
//     let list = [];
//     help(root,list)
//     return list
//     function help(root, list) {
//         if (root) {
//             help(root.left,list)
//             list.push(root.val)
//             help(root.right,list)
//         }
//     }
// };

/**
 * 使用栈来实现
 *
 * @param {*} root
 * @returns
 */
var inorderTraversal = function (root) {
    let stack = [];
    let list = []
    while(root || stack.length > 0 ){
        // 先往左循环，直到左节点为 null 
        while(root){
            stack.push(root);
            root = root.left;
        }
        // 左节点循环结束，这时候最后一个入栈的节点便是最底下的根节点
        // 那么弹出这个节点，并将这个值输出
        // 接着就是右节点，右节点在重复一遍刚刚的过程即可
        let item = stack.pop();
        item && list.push(item.val);
        root = item.right;
    }
    console.log(list)
    return list
}


// @lc code=end

