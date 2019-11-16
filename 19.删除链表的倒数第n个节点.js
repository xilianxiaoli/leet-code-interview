/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 使用快慢两个节点，还有一个哨兵节点，哨位节点指向头结点，为了便于处理边界值
    // 关键点： 首先让两个节点间隔为 n ,然后保持这个间隔往后遍历直到末尾
    // 这时候 快节点指向最后一个，而慢节点就是要删除的节点的前一个 ，这时候修改慢节点的指向就行

    let shaobing = new ListNode(-1);
    shaobing.next = head
    let first = shaobing;
    let second = shaobing;

    for (let index = 0; index < n; index++) {
        first = first.next;
    }

    while (first.next !== null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next

    return shaobing.next

};

const head = {
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:null
                }
            }
        }
    }
}

// removeNthFromEnd(head,2)

