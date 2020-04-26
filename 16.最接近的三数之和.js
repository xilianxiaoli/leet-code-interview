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
            // 与 15 题不同的地方在于，这里的判断条件不再是等于0 ，而是与目标值的差值最小，
            // 那么如果相等差值就是 0 ，如果差值大于 0 ，就说明，结果偏大，反之偏小，根据这个判断来移动左右指针
            // 以保证两者的差值接近 0 ，这样便得出结果
            if(sum - target === 0){
                result = sum
                break
            }else if(sum-target>0){
                R--
            }else{
                L++
            }
            // 选择差值小的值作为 result 
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

