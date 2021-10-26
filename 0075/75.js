/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.unshift(0);
        }
        else if (nums[i] === 2) {
            nums.splice(i, 1);
            nums.push(2);
            n--;
            i--;
        }
    }
    return nums;
};

// Runtime: 56 ms, faster than 71.99% of JavaScript online submissions for Sort Colors.
// Memory Usage: 33.8 MB, less than 86.97% of JavaScript online submissions for Sort Colors.