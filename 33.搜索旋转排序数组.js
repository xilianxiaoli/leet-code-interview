/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * 时间复杂度要求 logn 那么可以想到采用二分法；
 * 首先需要找出一点，若 mid 大于最右边的数值，那说明 mid 左侧的数值是没有被翻转过的。是升序的
 * 所以只要在升序这一侧进行查找判断即可
 * 1. 若目标值在升序这一侧的范围内，那么就继续在这一侧二分查找
 * 2. 若不在，那么查找的范围往另一侧移 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let begin = 0;
    let end = nums.length - 1;
    let mid;
    let result = -1;
    while (end >= begin) {
        mid = Math.floor((begin + end) / 2);
        if (nums[mid] === target) {
            result = mid;
            break;
        }
        if (nums[mid] > nums[end]) {
            // 左边是升序
            if (nums[begin] <= target && target <= nums[mid]) {
                end = mid - 1;
            } else {
                begin = mid + 1;
            }
        } else {
            // 右边是升序
            if (nums[mid] <= target && target <= nums[end]) {
                begin = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    console.log(result)
    return result;
};
search([4, 5, 6, 7, 0, 1, 2], 0)
search([4, 5, 6, 7, 0, 1, 2], 3)
search([5, 6, 0, 1, 2, 3, 4], 0)
// @lc code=end

