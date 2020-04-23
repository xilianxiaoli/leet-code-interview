/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 排序
    const sortNums = nums.sort((a, b) => a - b)
    let list = []
    for (let i = 0; i < sortNums.length; i++) {
        // 若当前值与前一位的值相同，那么就需要重复计算了，避免产生同样的结果
        if (i > 0 && sortNums[i] === sortNums[i - 1]) continue
        const first = sortNums[i];
        let L = i + 1;
        let R = sortNums.length - 1;
        while (L < R) {
            if (sortNums[L] + sortNums[R] + first === 0) {
                list.push([first, sortNums[L], sortNums[R]])
                // 因为已经排序了，所以相同的数值是挨着的，所以循环去掉重复的值
                while (L < R && sortNums[L] === sortNums[L + 1]) {
                    L++
                }
                while (L < R && sortNums[R] === sortNums[R - 1]) {
                    R--
                }
                // 各自往前进
                L++
                R--
            }
            // 若总和大于 0 ，说明 L+R 的值过大了，那么就将大的值 R 往后移一位
            else if (sortNums[L] + sortNums[R] + first > 0) {
                R--
            } else {
                // 反之
                L++
            }
        }
    }
    // console.log(list)
    return list
};
// threeSum([-1, 0, 1, 2, -1, -4])
// @lc code=end

