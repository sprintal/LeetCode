/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();
    let temp = 1;
    let i = 0;
    let result = 0;
    if (str[0] === '-') {
        temp = -1;
        i = 1;
    }
    if (str[0] === '+') {
        i = 1;
    }
    if (!/[0-9]/.test(str[i])) {
        return 0;
    }
    for (i; i < str.length; i++) {
        if (/[0-9]/.test(str[i])) {
            result = result * 10 + parseInt(str[i]);
        }
        else {
            break;
        }
    }
    if (result * temp > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    if (result * temp < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }
    return result * temp;
};

// Runtime: 64 ms, faster than 97.53% of JavaScript online submissions for String to Integer (atoi).
// Memory Usage: 36.8 MB, less than 14.29% of JavaScript online submissions for String to Integer (atoi).