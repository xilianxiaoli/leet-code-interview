/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * 中心向两端查找,因为 abc^cbe 的中心点在 ^ 这个位置，abcb 的中心点在 c 这个位置
 * 所以中心点的位置有 2n - 1 个，n是字符串的长度。
 * 比如当 i = 1 时，一个中心点是在 b 字符上，左右的起始点都是 1，
 * 还有另外一个中心点在 b 和 c 中间，也就是说左边的起点就是 i ，右边的起点是 i + 1
 * 这两个起点都可能找到目标子串，故我们取最长的即可。
 * 确定中心点后，往两端逐一进行匹配，返回匹配到的回文长度
 * 根据回文长度，算出这个回文的起始点
 * 在每一次的查找回来后，判断是否比前一次的长度要长，长度可根据起始位置算出
 */
var longestPalindrome = function(s) {

    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let point = getPalindLength(s, i, i)
        let point1 = getPalindLength(s, i, i + 1)
        let pointCurr = point1;
        // 取最长的
        if (point.length > point1.length) {
            pointCurr = point
        }
        // 与前一个相比较，若更长，那么更新起始位置
        if (pointCurr.length > end - start) {
            start = pointCurr.left
            end = pointCurr.right
        }
    }

    return s.slice(start, end);

    function getPalindLength(s, left, right) {
        while (left > -1 && right < s.length && s.charAt(left) === s.charAt(right)) {
            left--;
            right++
        }
        left = left + 1
        // 返回找到的子串的起始位置还有长度
        return { left, right, length: right - left }
    }

};
// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('abccbe'))



// @lc code=end

