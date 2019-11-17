/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
 * @param {TreeNode} root
 * 这题还是没有完全理解！
 * @retu  rn {number}
 */
let max = 0
var longestUnivaluePath = function (root) {

    if (!root || (!root.left && !root.right)) {
        return 0
    }

    getMax(root)
    return max

};

var getMax = function (node) {

    if (!node) {
        return 0
    }

    let left = getMax(node.left)
    let right = getMax(node.right)

    let leftLen = rightLen = 0;
    if (node.left && node.left.val === node.val) {
        leftLen = left + 1
    }
    if (node.right && node.right.val === node.val) {
        rightLen = right + 1
    }
    max = Math.max(max, leftLen + rightLen)
    // max = Math.max(max, Math.max(leftLen, rightLen))
    return Math.max(leftLen, rightLen)
}

let a = new TreeNode(1)
a.right = new TreeNode(1)
// a.right = new TreeNode(4)
// a.left.left = new TreeNode(5)
// a.left.right = new TreeNode(4)
// a.left.right.left = new TreeNode(4)
// a.right.right = new TreeNode(5)

console.log(longestUnivaluePath(a))

// @lc code=end

