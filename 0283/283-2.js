/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j++] = nums[i];
        }
    }
    for (let i = j; j < nums.length; j++) {
        nums[j] = 0;
    }
};

// Runtime: 80 ms, faster than 21.92% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 37.5 MB, less than 9.54% of JavaScript online submissions for Move Zeroes.