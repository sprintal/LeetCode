/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            nums[++j] = nums[i];
        }
    }
    return j + 1;
};

// Runtime: 84 ms, faster than 52.63% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 39.1 MB, less than 9.44% of JavaScript online submissions for Remove Duplicates from Sorted Array.