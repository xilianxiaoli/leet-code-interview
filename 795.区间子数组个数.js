/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 *
 * https://leetcode-cn.com/problems/number-of-subarrays-with-bounded-maximum/description/
 *
 * algorithms
 * Medium (45.96%)
 * Likes:    37
 * Dislikes: 0
 * Total Accepted:    1.7K
 * Total Submissions: 3.8K
 * Testcase Example:  '[2,1,4,3]\n2\n3'
 *
 * 给定一个元素都是正整数的数组A ，正整数 L 以及 R (L <= R)。
 * 
 * 求连续、非空且其中最大元素满足大于等于L 小于等于R的子数组个数。
 * 
 * 例如 :
 * 输入: 
 * A = [2, 1, 4, 3]
 * L = 2
 * R = 3
 * 输出: 3
 * 解释: 满足条件的子数组: [2], [2, 1], [3].
 * 
 * 
 * 注意:
 * 
 * 
 * L, R  和 A[i] 都是整数，范围在 [0, 10^9]。
 * 数组 A 的长度范围在[1, 50000]。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {

    let num = 0;
    help(A,[],0);
    return num;

    function help(A,child,mindIndex){
        // if(mindIndex === A.length){
        //     return 0
        // }
        let i=mindIndex
        for(;i<A.length;i++){
            child.push(A[i])
            const max = Math.max(...child);
            if(max <= R && max >= L){
                num ++;
                console.log(child)
            }else{
                return help(A,[],mindIndex+1)
            }
            
        }
        if(i === A.length-1 && mindIndex !== A.length -1 ){
            return help(A,[],l+1)
        }
    }
    
};


// var numSubarrayBoundedMax = function(A,  L,  R) {
//     // 最大元素满足大于等于L小于等于R的子数组个数 = 最大元素小于等于R的子数组个数 - 最大元素小于L的子数组个数
//     return numSubarrayBoundedMax1(A, R) - numSubarrayBoundedMax1(A, L - 1);
// }

function numSubarrayBoundedMax1( A,  Max) {
    let res = 0;
    let numSubarry = 0;
    for (let num of A) {
        if (num <= Max) {
            numSubarry++;
            res += numSubarry;
        } else {
            numSubarry = 0;
        }
    }
    return res;
}

console.log(numSubarrayBoundedMax([73,55,36,5,55,14,9,7,72,52],32,69))
// @lc code=end

