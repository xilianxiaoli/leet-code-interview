/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * 
 *   maxDP[i + 1] = max(maxDP[i] * A[i + 1], A[i + 1],minDP[i] * A[i + 1])
 *   minDP[i + 1] = min(minDP[i] * A[i + 1], A[i + 1],maxDP[i] * A[i + 1])
 *   dp[i + 1] = max(dp[i], maxDP[i + 1])
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length;
    if(n == 0){
        return 0;
    } else if(n == 1) {
        return nums[0];
    }
    let p = nums[0];
    let maxP = nums[0];
    let minP = nums[0];
    for(let i = 1; i < n; i++) {
        let t = maxP;
        maxP = Math.max(Math.max(maxP * nums[i], nums[i]), minP *nums[i]);
        minP = Math.min(Math.min(t * nums[i], nums[i]), minP * nums[i]);
        p = Math.max(maxP, p);
    }
    return p;
};
console.log(
maxProduct([2,3,5,-2,4])
)
// @lc code=end

