/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = new ListNode()
    let prev = new ListNode()
    current = head;
    while(current){
        let temp = current.next
        current.next = prev;
        prev = current;
        current = temp
    }
    return prev
};
// @lc code=end
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)
a.next.next.next.next = new ListNode(5)
reverseList(a)
