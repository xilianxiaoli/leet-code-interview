/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal1 = function (root) {
    let list = [];
    help(root, list)
    return list;
    function help(root, list) {
        if (root) {
            list.push(root.val);
            help(root.left, list)
            help(root.right, list)
        }
    }

};

/**
 * 采用栈实现
 * 前序遍历：中左右 
 * 所以树的头结点先入栈，然后循环变量栈，中节点先出栈，因为头结点先打印，根据栈后入先出，那么接着把右节点入栈在入左节点
 * 在下一轮遍历中，栈顶的左节点变成了中节点，所以可将栈顶弹出，在接着把这个节点的右节点、左节点入栈
 * 直到栈为空
 * @param {*} root
 * @returns
 */
var preorderTraversal = function (root) {
    let stack = [];
    let list = [];
    stack.push(root)
    while (stack.length > 0) {
        if (root) {
            const item = stack.pop()
            list.push(item.val);
            if (item.right) {
                stack.push(item.right)
            }
            if (item.left) {
                stack.push(item.left)
            }
        }
    }
    console.log(list)
    return list;
}


// @lc code=end

