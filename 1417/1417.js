/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    const nums = [];
    const chars = [];
    let result = '';
    for (const i of s) {
        if (parseInt(i) == i) {
            nums.push(i);
        }
        else {
            chars.push(i);
        }
    }
    if (Math.abs(nums.length - chars.length) > 1) {
        return '';
    }
    if (nums.length >= chars.length) {
        let i;
        for (i = 0; i < chars.length; i++) {
            result = result + nums[i] + chars[i];
        }
        for (i; i < nums.length; i++) {
            result += nums[i];
        }
    }
    else {
        for (let i = 0; i < nums.length; i++) {
            result = result + chars[i] + nums[i];
        }
        result += chars[chars.length - 1];
    }
    return result;
};

// Runtime: 76 ms, faster than 63.88% of JavaScript online submissions for Reformat The String.
// Memory Usage: 41 MB, less than 11.61% of JavaScript online submissions for Reformat The String.