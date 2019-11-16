/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    const s = Math.abs(x).toString();
    let r = ''
    for (const iterator of s) {
        r = iterator + r;
    }
    let n = x < 0 ? -Number(r) : Number(r);
    if (n > Math.pow(2, 31) - 1 || n < Math.pow(-2, 31)) {
        n = 0
    }
    return n
};
// @lc code=end

