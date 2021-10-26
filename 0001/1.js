/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] >= 0) {
            return [map[target - nums[i]], i];
        }
        else {
            map[nums[i]] = i;
        }
    }
};

// Runtime: 52 ms, faster than 92.37% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.4 MB, less than 89.67% of JavaScript online submissions for Two Sum.