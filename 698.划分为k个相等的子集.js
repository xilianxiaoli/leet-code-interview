/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 *
 * https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/description/
 *
 * algorithms
 * Medium (39.72%)
 * Likes:    96
 * Dislikes: 0
 * Total Accepted:    4.4K
 * Total Submissions: 11K
 * Testcase Example:  '[4,3,2,3,5,2,1]\n4'
 *
 * 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 * 
 * 示例 1：
 * 
 * 
 * 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 * 输出： True
 * 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
 * 
 * 
 * 
 * 注意:
 * 
 * 
 * 1 <= k <= len(nums) <= 16
 * 0 < nums[i] < 10000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 既然设定了子集的个数，那么每个子集的的和就是确定的
// 建立一个长度为 k 的数组，数组的值就是子集的和，然后便利这个数组，当数组中的某个值可以作为子集的值的时候，那么这个子集的和就需要减去当前元素
// 那么什么时候可以往子集添加元素了呢？  就是当前元素的值刚好等于子集剩余的值，或者当前子集放入当前元素后剩余的值大于下一个待放入的元素
// 递归的结束条件就是 当 nums 已经遍历结束的时候，就是 nums 中的元素都已经匹配结束了，那么就表示成功，反之失败
var canPartitionKSubsets = function (nums, k) {

    // 计算每个桶的和
    const sum = nums.reduce((sum, val) => sum += val, 0);
    nums = nums.sort((a, b) => b - a) //大到小排序

    if (sum % k !== 0) {
        return false;
    }
    const bucketVal = sum / k;
    if (nums[0] > bucketVal) {
        return false;
    }

    // 建立子集，子集的值就是和 
    let bucket = new Array(k).fill(bucketVal);

    return help(nums,bucket,nums.length-1)

    function help(nums, bucket,cur) {

        if(cur < 0){
            return true;
        }

        for (let i = 0; i < bucket.length; i++) {
            if(bucket[i] === nums[cur] || (cur>0 && bucket[i] - nums[cur] >= nums[cur-1] ) ){
                bucket[i] -= nums[cur];
                if(help(nums,bucket,cur-1)){
                    return true
                }
                bucket[i] += nums[cur];
            }
        }

        return false;

    }

};
// @lc code=end

