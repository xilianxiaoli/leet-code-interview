/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    const sortNums = nums.sort((a, b) => a - b)
    let result
    for (let i = 0; i < sortNums.length; i++) {
        if (sortNums[i] === sortNums[i - 1]) continue;
        const first = sortNums[i]
        let L = i + 1
        let R = sortNums.length - 1
        while (L < R) {
            const sum = first + sortNums[L] + sortNums[R]
            if (result === undefined) result = sum
            if(sum - target === 0){
                result = sum
                break
            }else if(sum-target>0){
                R--
            }else{
                L++
            }
            if(Math.abs(sum-target) < Math.abs(result-target)){
                result = sum;
            }
        }
    }
    return result
};


// threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)
// threeSumClosest([-1, 2, 1, -4], 1)
// @lc code=end

