/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * 跟上一题不一样的地方在与需要判断1 的情况
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let dp = Array.from(new Array(obstacleGrid.length), x => new Array(obstacleGrid[0].length));
    for (let index = 0; index < obstacleGrid.length; index++) {
        const row = obstacleGrid[index];
        if (index === 0) {
            for (let rowindex = 0; rowindex < row.length; rowindex++) {
                if (obstacleGrid[index][rowindex] === 1 || dp[index][rowindex - 1] === 0) {
                    dp[index][rowindex] = 0
                } else {
                    dp[index][rowindex] = 1
                }
            }
        }
        if (index > 0) {
            if (obstacleGrid[index][0] === 1 || dp[index - 1][0] === 0) {
                dp[index][0] = 0
            } else {
                dp[index][0] = 1
            }
        }
    }

    for (let index = 1; index < obstacleGrid.length; index++) {
        for (let col = 1; col < obstacleGrid[index].length; col++) {
            if (obstacleGrid[index][col] === 1) {
                dp[index][col] = 0;
            } else {
                dp[index][col] = dp[index - 1][col] + dp[index][col - 1]
            }
        }
    }

    return dp[dp.length - 1][dp[0].length - 1]

};

let a = [
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]]
console.log(uniquePathsWithObstacles(a))

// @lc code=end

