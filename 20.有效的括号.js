/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let obj = {
        '(':')',
        '[':']',
        '{':'}',
    }

    let stackRight = new Array()
    for (let index = 0; index < s.length; index++) {
        const chat = s.charAt(index);
        switch (chat) {
            case '(':
            case '{':
            case '[':
                stackRight.push(chat)
                break;

            case ')':
            case '}':
            case ']':
                const item = stackRight.pop();
                if(chat !== obj[item]){
                    return false;
                    // break
                }
        
            default:
                break;
        }
        
    }

    return stackRight.length === 0

};

