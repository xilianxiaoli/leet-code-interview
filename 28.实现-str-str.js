/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function(haystack, needle) {

    if (!needle) {
        return 0
    }

    for (let i = 0; i < haystack.length; i++) {
        let flag = false;
        if (haystack[i] === needle[0]) {

            flag = true;
            for (let j = 1; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                return i
            }

        }

    }
    return -1

};

var strStr = function(haystack, needle) {
    if (!needle) {
        return 0
    }

    // 计算偏移量
    const needleLength = needle.length;
    let step = { 'other': needleLength + 1 }
    for (let i = 0; i < needleLength; i++) {
        step[needle[i]] = needleLength - i;
    }

    // 已 needle 作为一个整体进行匹配
    let index = 0
    while (index < haystack.length) {
        if (haystack.slice(index, needleLength + index) === needle) {
            return index;
        }
        const nextS = haystack[index + needleLength]
        if (nextS) {
            index += step[nextS] ? step[nextS] : step['other']
        } else {
            return -1
        }
    }

    return -1;

}


// @lc code=end

