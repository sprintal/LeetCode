/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
    for (let i of nums) {
        result ^= i;
    }
    return result;
};

// Runtime: 72 ms, faster than 45.06% of JavaScript online submissions for Single Number.
// Memory Usage: 38.4 MB, less than 19.95% of JavaScript online submissions for Single Number.