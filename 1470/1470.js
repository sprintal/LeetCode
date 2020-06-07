/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[n + i]);
    }
    return result;
};

// Runtime: 88 ms, faster than 100.00% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Shuffle the Array.