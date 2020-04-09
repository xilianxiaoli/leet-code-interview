/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * 状态转移方程
 * maxDp[i+1] = max(A[i+1],maxDp[i]+A[i+1])   // maxDp[i]+A[i+1] 的值不及A[i+1] 大，说明前面的累加和需要被重置，重置成当前的数值，从当前数值开始算起
 * dp[i+1] = max(dp[i],maxDp[i+1])
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = maxDp = nums[0]
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        maxDp = Math.max(element,maxDp+element);
        dp = Math.max(dp,maxDp)
    }
    return dp;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// @lc code=end

