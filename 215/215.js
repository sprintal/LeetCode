/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[j] > nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            }
        }
        if (i + 1 >= k) {
            return nums[i];
        }
    }
};

// Runtime: 172 ms, faster than 7.84% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 36.3 MB, less than 10.00% of JavaScript online submissions for Kth Largest Element in an Array.