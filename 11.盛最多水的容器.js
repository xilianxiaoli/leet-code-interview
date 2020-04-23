/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 短板决定能盛多少水，所以短板前移
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1;
    let max = 0;
    while (left <= right) {
        let next = Math.min(height[left], height[right])
        let val = next * (right - left)
        max = Math.max(max, val)
        if (next === height[left]) {
            left++
        } else {
            right--
        }
    }
    // console.log(max)
    return max
};
// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
// @lc code=end

