/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * 采用快慢指针的方法
 * 若两个只指针的值相同，那么快指针往前移动，直到不相等，这时候，两个指针中间的值就全是相同的值
 * 所以只要保留一个即可，其他的删除，在删除后，遍历的下标需要进行重置，因为数组的长度已经发生的变化
 * 如果数组最后几个值是连续相等的值，那么需要循环结束后判断两个指针的下标是否一致
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let second = 0;
    let first = 1;
    for (let i = 0; i < nums.length;) {
        if (nums[first] === nums[second]) {
            first++
            i++
        } else {
            let cutCount = first - second - 1;
            nums.splice(second, cutCount)
            second = first - cutCount
            i = first = second
        }
    }
    if (first !== second) {
        nums.splice(second, first - second - 1)
    }
    return nums.length;

};
// removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// removeDuplicates([1,2,2])
// @lc code=end

