/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let max;
    let maxIndex;
    for (let i = 0; i < k; i++) {
        max = nums[0];
        maxIndex = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > max) {
                [max, maxIndex] = [nums[j], j];
            }
        }
        nums.splice(maxIndex, 1);
    }
    return max;
};

// Runtime: 108 ms, faster than 15.80% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 35.6 MB, less than 70.00% of JavaScript online submissions for Kth Largest Element in an Array.