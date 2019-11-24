/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 *
 * https://leetcode-cn.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (51.78%)
 * Likes:    96
 * Dislikes: 0
 * Total Accepted:    9.2K
 * Total Submissions: 17.8K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * 给定两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。
 * 
 * 
 * 
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 
 * 进阶:
 * 
 * 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
 * 
 * 示例:
 * 
 * 
 * 输入: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出: 7 -> 8 -> 0 -> 7
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // 采用翻转链表的方式
    let rl1 = rever(l1);
    let rl2 = rever(l2);
    let node;
    let point = 0
    let headNode = new ListNode()
    while (rl1 || rl2) {
        let sum = point;
        sum += rl1 ? rl1.val : 0;
        sum += rl2 ? rl2.val : 0;
        point = Math.floor(sum / 10);

        const curr = new ListNode(sum % 10);
        if (!headNode.next) {
            headNode.next = curr;
            node = headNode.next
        } else {
            node.next = curr;
        }
        node = curr;
        rl1 = (rl1 && rl1.next) || null;
        rl2 = (rl2 && rl2.next) || null;
    }

    if (point) {
        node.next = new ListNode(point)
    }

    return rever(headNode.next)

    function rever(List) {
        let head = List;
        let preNode = null;
        while (head) {
            const curr = new ListNode(head.val);
            if (preNode) {
                curr.next = preNode;
            }
            preNode = curr;
            head = head.next
        }
        return preNode;
    }

};

// let a = new ListNode(0);
// a.next = b = new ListNode(2)
// b.next = new ListNode(4)

// let aa = new ListNode(0)
// aa.next = new ListNode(6)

// addTwoNumbers(a,aa)
// @lc code=end

