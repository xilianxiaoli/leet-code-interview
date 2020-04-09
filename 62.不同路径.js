/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * 采用动态规划进行解决,自底向上找结果
 * 先找出边界值，当 n=1 或者 m=1 时，路径都只有一条
 * 找出状态转移方程 F(n,m) = F(n-1,m) + F(n,m-1)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(!n&&!m){
        return 0
    }
    if(n===0||m===0){
        return 1
    }
    // let dp = new Array(n)
    
    // for (let index = 0; index < dp.length; index++) {
    //     const element = dp[index] = new Array(m);
    //     if(index === 0){
    //         element.fill(1)
    //     }
    //     element[0] = 1
    // }
    // 快速创建二维数组
    let dp = Array.from(new Array(n),x=>new Array(m).fill(1))
    for (let n = 1; n < dp.length; n++) {
        const row = dp[n];
        for (let m = 1; m < row.length; m++) {
            dp[n][m] = dp[n][m-1] + dp[n-1][m]
        }
    }
    return dp[n-1][m-1]
};

console.log(uniquePaths(7,3))
// @lc code=end



