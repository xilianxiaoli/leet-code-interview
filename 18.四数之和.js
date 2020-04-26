/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * 这题与三数之和的区别在于，外层多加一个循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const sortNums = nums.sort((a, b) => a - b)
    let list = []
    // 新增一层循环
    for (let i = 0; i < sortNums.length; i++) {
        if (sortNums[i] === sortNums[i - 1]) continue;
        let first = sortNums[i]
        // 新的 target 值
        let val = target - first
        let preJVal;
        for (let j = i + 1; j < sortNums.length; j++) {
            // 为了去重，这个判断就不能简单的与上一个值进行判断，而是与上一个被push进结果数组的值进行判断
            if (sortNums[j] === preJVal) continue;
            let l = j + 1;
            let r = sortNums.length - 1;

            while (l < r) {
                let t = sortNums[l] + sortNums[r] + sortNums[j]
                if (t === val) {
                    list.push([first, sortNums[l], sortNums[r], sortNums[j]])
                    while (l < r && sortNums[l] === sortNums[l+1]) {
                        l++
                    }
                    while (l < r && sortNums[r] === sortNums[r-1]) {
                        r--
                    }
                    l++
                    r--
                    preJVal = sortNums[j];
                } else if (t > val) {
                    r--
                } else {
                    l++
                }
            }
        }
    }
    return list;
};
// fourSum([1, 0, -1, 0, -2, 2], 0)
// fourSum([0, 0, 0], 0)
// fourSum([0, 0, 0, 0], 0)
// fourSum([-1, 0, 1, 2, -1, -4], -1)
// fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)
// @lc code=end

// -3, -2, -1, 0, 0, 1, 2, 3
// 0    1   2   3  4 5  6  7
// [[-3, 2, 3, -2], [-3, 1, 3, -1], [-3, 0, 3, 0], [-2, 0, 3, -1], [-2, 0, 2, 0], [-1, 0, 1, 0]]
// [, , , 
// [-3, 0, 1, 2], , [-2, -1, 1, 2], ]


