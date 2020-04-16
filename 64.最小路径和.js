/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * 状态转移方程 dp[i][j] = min(dp[i][j-1] + A[i][j] , dp[i-1][j] + A[i][j] ) 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let dp = Array.from(new Array(grid.length), () => new Array(grid[0].length));
    const firstCol = grid[0];
    for (let i = 0; i < firstCol.length; i++) {
        if (i === 0) {
            dp[0][i] = firstCol[i]
        } else {
            dp[0][i] = firstCol[i] + dp[0][i-1]
        }
    }
    for (let j = 0; j < grid.length; j++) {
        if (j === 0) {
            dp[j][0] = grid[j][0]
        } else {
            dp[j][0] = grid[j][0] + dp[j-1][0]
        }
    }
    for (let row = 1; row < dp.length; row++) {
        for (let col = 1; col < dp[0].length; col++) {
            dp[row][col] = Math.min(dp[row][col - 1] + grid[row][col], dp[row - 1][col] + grid[row][col])
        }
    }
    
    return dp[dp.length-1][dp[0].length-1]
};
minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ])
// @lc code=end

