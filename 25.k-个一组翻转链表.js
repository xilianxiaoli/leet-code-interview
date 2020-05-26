/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 * TODO 还是没有完全搞懂
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let hair = new ListNode();
    hair.next = head;
    let prev = hair;
    while(head){
        let tail = head;
        for(let i=0;i<k;i++){
            tail = tail.next
            if(!tail){
                return hair.next
            }
        }
        let nex = tail.next
        [head,tail] = revers(head,tail);
        prev.next = head;
        tail.next = nex;
        prev = tail;
        head = tail.next
    }
    return hair.next;
};

function revers(head,tail){
    let prev = tail.next;
    let curr = head
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }
    return [head,tail]
}

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
    reverseKGroup(a, 2)