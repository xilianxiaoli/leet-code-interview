/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * 写不粗来 烦烦烦
 * 1611 为什么是 4 种啊 ？？
 * @param {string} s
 * @return {number}
 */
var numDecodings1 = function (s) {
    if (s[0] === '0' || Number(s) === 0 || s.length === 0) return 0
    if (s.length === 1 || (s.length === 2 && s.includes('0'))) return 1
    let dp = new Array(s.length + 1);
    const two = s.slice(0, 2);
    if (Number(two) < 27 && Number(two) > 0) {
        dp[2] = 2;
    } else {
        dp[2] = 1;
    }
    for (let i = 3; i <= s.length; i++) {
        const two = s.slice(i - 2, i)
        let count = 0
        if (Number(two) < 27 && Number(two) > 0) {
            count = 1
        }
        dp[i] = dp[i - 1] + count;
    }
    // console.log(dp.pop())
    return dp.pop()
};

var numDecodings = function (s) {
    if (s[0] == '0') return 0;
    let pre = 1, curr = 1;//dp[-1] = dp[0] = 1
    for (let i = 1; i < s.length; i++) {
        let tmp = curr;
        if (s[i] == '0')
            if (s[i - 1] == '1' || s[i - 1] == '2') curr = pre;
            else return 0;
        else if (s[i - 1] == '1' || (s[i - 1] == '2' && s[i] >= '1' && s[i] <= '6'))
            curr = curr + pre;
        pre = tmp;
    }
    return curr;
}

console.log(numDecodings('1611'))

// @lc code=end

