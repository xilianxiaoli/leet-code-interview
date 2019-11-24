/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 *
 * https://leetcode-cn.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (35.87%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    7.2K
 * Total Submissions: 20.2K
 * Testcase Example:  '"1 + 1"'
 *
 * 实现一个基本的计算器来计算一个简单的字符串表达式的值。
 * 
 * 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。
 * 
 * 示例 1:
 * 
 * 输入: "1 + 1"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: " 2-1 + 2 "
 * 输出: 3  
 * 
 * 示例 3:
 * 
 * 输入: "(1+(4+5+2)-3)+(6+8)"
 * 输出: 23
 * 
 * 说明：
 * 
 * 
 * 你可以假设所给定的表达式都是有效的。
 * 请不要使用内置的库函数 eval。
 * 
 * 
 */

// @lc code=start
/**
 * 1. 括号和加减的优先级
 * 2. 多位整数的判断
 * 解法：因为只有加减运算，所以对于运算符来说，可以不用考虑优先级，那么括号只会影响加减，如果括号外层是 - ，那么括号的里层的运算符 加变减 减变加
 * 因此我们用一个栈来存储当前的括号是否会影响后续的加减调换，具体实现就是，每次都记录最近一次的符号，当匹配到 ( 时，判断最近的符号是不是减号，
 * 若是，则入栈 true ，反之 false，当匹配到 ) 时 ，说明一个对称的括号结束了，那么将栈顶弹出。
 * 当匹配到符号时，就根据上一个符号和上一个值，更新 result；
 * 需要注意的是对于连续的数字需要有标志位
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {

    let pointStack = [];
    let preType = '';
    let result = 0;
    let point = '+';
    let calVal = 0;

    for (let str of s) {
        str = str.trim('')
        if (!str) {
            continue;
        }
        switch (str) {
            case '(':
            case ')':
                if (str === '(' ) {
                    if(point === '-'){
                        pointStack.push(true)
                    }else{
                        pointStack.push(false);
                    }
                }else{
                    pointStack.pop();
                }
                preType = '';
                break;
            case '+':
            case '-':
                result = cal(result, calVal, point)
                point = revPoint(str,pointStack[pointStack.length - 1]);
                calVal = 0;
                preType = ''
                break;
            default:
                if (preType === 'data') {
                    calVal = calVal * 10 + Number(str);
                }else{
                    calVal = Number(str)
                }

                preType = 'data'
                break;
        }

    }

    function revPoint(point, flag) {
        if (flag) {
            if (point === '+') {
                point = '-'
            } else {
                point = '+'
            }
        }
        return point;
    }

    function cal(num1, num2, point) {
        if (point === '+') {
            return num1 + num2;
        } else {
            return num1 - num2;
        }
    }

    if(calVal){
        result = cal(result,calVal,point);
    }

    return result

};

// @lc code=end

