/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 *
 * https://leetcode-cn.com/problems/implement-stack-using-queues/description/
 *
 * algorithms
 * Easy (61.14%)
 * Likes:    89
 * Dislikes: 0
 * Total Accepted:    22.1K
 * Total Submissions: 36.1K
 * Testcase Example:  '["MyStack","push","push","top","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * 使用队列实现栈的下列操作：
 * 
 * 
 * push(x) -- 元素 x 入栈
 * pop() -- 移除栈顶元素
 * top() -- 获取栈顶元素
 * empty() -- 返回栈是否为空
 * 
 * 
 * 注意:
 * 
 * 
 * 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty
 * 这些操作是合法的。
 * 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 * 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
 * 
 * 
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.list = [];
    this.index = -1;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.list.push(x);
    this.index++;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    // 弹出队列的最后一个元素
    // 返回一个新的队列 ，输出最后一个元素
    let newList = []
    let item ;
    for (let index = 0; index < this.list.length; index++) {
        const element = this.list[index];
        if(index !== this.index){
            newList.push(element)
        }else {
            item = element;
        }
    }
    this.list = newList;
    this.index--;
    return item;

};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.list[this.index]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.index > -1 ? false : true;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

