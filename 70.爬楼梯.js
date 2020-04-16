/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * dp 公式 ： dp[i] = dp[i - 1] + dp[i - 2]
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
// @lc code=end

