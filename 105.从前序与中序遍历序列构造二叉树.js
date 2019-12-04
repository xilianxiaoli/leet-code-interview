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
 * 前序遍历：根节点->左节点->右节点
 * 中序遍历：左节点->根节点->右节点
 * 可见 前序遍历数组的首元素就是根节点，那么我们根据这个根节点在中序遍历中找个该值，在根据可以划分出左右子树
 * 然后递归构建左右树，直到叶子节点返回即可
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
    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
    return root
};

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
var buildTree = function(preorder, inorder) {
    let map = {}
    let preIndex = 0
    inorder.forEach((num, i) => (map[num] = i))
    function helper(left, right) {
        if (left > right) {
            return null
        }
        let root_val = preorder[preIndex]
        let root = new TreeNode(root_val)

        let in_index = map[root_val]
        preIndex++
        root.left = helper(left, in_index - 1)
        root.right = helper(in_index + 1, right)
        return root
    }
    return helper(0, inorder.length - 1)
};

// buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
// @lc code=end

