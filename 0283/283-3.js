/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            i--;
            count++;
        }
    }
    for (let i = 0; i < count; i++) {
        nums.push(0);
    }
};

// Runtime: 84 ms, faster than 17.52% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 36.6 MB, less than 22.58% of JavaScript online submissions for Move Zeroes.