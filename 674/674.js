/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let results = [];
    let distance = 1;
    if (nums.length === 0) {
        return 0;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            distance++;
        }
        else {
            results.push(distance);
            distance = 1;
        }
    }
    results.push(distance);
    return results.sort((a, b) => {
        return b - a;
    })[0];
};

// Runtime: 56 ms, faster than 79.69% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
// Memory Usage: 36.1 MB, less than 8.67% of JavaScript online submissions for Longest Continuous Increasing Subsequence.