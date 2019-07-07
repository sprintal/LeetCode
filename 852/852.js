/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    for (let i = 0; i < A.length; i ++) {
        if (A[i] < A[i + 1] && A[i + 1] > A[i + 2]) {
            return i + 1;
        }
    }
};

// Runtime: 52 ms, faster than 91.32% of JavaScript online submissions for Peak Index in a Mountain Array.
// Memory Usage: 35.3 MB, less than 17.15% of JavaScript online submissions for Peak Index in a Mountain Array.