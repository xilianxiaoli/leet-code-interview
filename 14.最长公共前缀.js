/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @desc
 * 默认最长前缀是第一个字符串，然后循环字符串数组，依次找出当前字符串和上一个最长前缀的公共前缀
 * 并重新更新最新的公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    let str = strs[0];
    const [one, ...list] = strs;
    for (let iterator of list) {
        for (let i = 0; i < str.length; i++) {
            // 字符比较
            if (iterator[i] !== str[i]) {
                str = str.slice(0, i);
                break;
            }
        }
    }
    return str
};

/**
 * @description
 * 采用二分法
 * 1. 初始起点为0 ，终点为最短的字符串长度，mid = Math.floor((low + hight) / 2)
 * 2. 每次循环时，取数组的第一个字符串的(0,mid)长度作为最长前缀，然后对每个字符串进行判断，是否均以该字符串作为起始
 * 3. 若是，说明mid这个位置的字符串是公共前缀，但不一定是最长的，所以，修改起始点 = mid + 1，继续判断
 * 4. 若不是，说明这个位置的字符串不是公共前缀，那么设置终点 = mid - 1 ,缩短字符串
 * 5. 直到起始点大于终点，输出 (0,(low + hight) / 2) 的字符串即可
 * @param {*} strs
 * @returns
 */
var longestCommonPrefix1 = function (strs) {
    if (strs.length === 0) return '';
    if(strs.length === 1) return strs[0]
    let low = 0;
    let lenList = strs.map(val => val.length)
    let hight = Math.min(...lenList)
    let mid = 0
    while (low <= hight) {
        mid = Math.floor((low + hight) / 2)
        if (checkPrefix(strs, mid)) {
            low = mid + 1
        } else {
            hight = mid - 1
        }
    }
    return strs[0].slice(0,(low + hight) / 2)

    function checkPrefix(strs, mid) {
        let prefix = strs[0].slice(0, mid);
        for (const iterator of strs) {
            if (iterator.indexOf(prefix) !== 0) {
                return false
            }
        }
        return true
    }
}
console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["f","f"]))
// console.log(longestCommonPrefix(["f","r"]))
// @lc code=end

