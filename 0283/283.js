/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0, j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
    return nums;
};

// Runtime: 68 ms, faster than 50.69% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 38.5 MB, less than 5.00% of JavaScript online submissions for Move Zeroes.