/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (36.30%)
 * Likes:    1788
 * Dislikes: 0
 * Total Accepted:    114.5K
 * Total Submissions: 315.5K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    for (let i = 0; i < nums1.length;) {
        let j = 0;
        for (; j < nums2.length; j++) {
            if (nums1[i] < nums2[j]) {
                break
            }
        }
        if(j===0){
            i++
            continue;
        }
        nums1.splice(i , 0, ...nums2.splice(0,j));
        i += j
    }
    if(nums2.length > 0){
        nums1.push(...nums2)
    }

    const n = Math.floor( nums1.length / 2)
    if(nums1.length  %2 === 1 ){
        return nums1[n ]
    }else{
        return (nums1[n]+nums1[n-1])/2
    }

};

// console.log(findMedianSortedArrays([1,2,4,5,9],[3,3,6,8,10]))
// console.log(findMedianSortedArrays([1,2],[3,4]))


// @lc code=end

