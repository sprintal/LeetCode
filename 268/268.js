/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const expected = nums.length * (nums.length + 1) / 2;
    const actual = nums.reduce((pre, cur) => pre + cur, 0);
    return expected - actual;
};

// Runtime: 56 ms, faster than 90.94% of JavaScript online submissions for Missing Number.
// Memory Usage: 36 MB, less than 82.86% of JavaScript online submissions for Missing Number.