/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * 快慢指针 时间负责度为 O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function (nums, target) {
    if (nums.length === 1 && nums[0] === target) return [0, 0]
    let L = -1;
    let R = -1;
    for (let i = 0; i < nums.length + 1; i++) {
        if (nums[L] === nums[R] && nums[R] === target) {
            R++;
        } else if (R > L) {
            break;
        } else {
            L++;
            R++
        }
    }
    let re = [-1, -1]
    if (R > L) {
        re = [L, R - 1]
    }
    // console.log(re)
    return re
};

/**
 * 二分法查找
 * 时间复杂度满足 O(log n)
 * @param {*} nums
 * @param {*} target
 */
var searchRange = function (nums, target) {
    /**
     * 二分查找，加了个参数，用于判断是查找左区间还是右区间，
     * 对于左区间来说，当 mid 的值和 target 相同时，将 R = mid ，继续往左侧查找，直到 L===R
     * 右侧区间，当 mid 的值 小于等于 target 时，需要继续查找右侧区间，所以 L = mid + 1
     * @param {*} nums
     * @param {*} target
     * @param {*} left
     * @returns
     */
    function fn(nums, target, left) {
        let L = 0;
        let R = nums.length;
        while (L < R) {
            let mid = Math.floor((L + R) / 2)
            if (nums[mid] > target || (nums[mid] === target && left)) {
                R = mid
            } else {
                L = mid + 1
            }
        }
        return L;
    }

    let re = [-1, -1]
    re[0] = fn(nums, target, true)
    re[1] = fn(nums, target, false) - 1
    if (nums[re[0]] !== target) {
        re = [-1, -1]
    }
    console.log(re)
    return re;
}

// searchRange([5, 7, 7, 8, 8, 10], 8)
searchRange([5, 7, 7, 8, 8, 10], 6)
// searchRange([5,5], 5)
// @lc code=end

