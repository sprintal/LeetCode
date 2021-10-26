/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let set = new Set();
    for (let i of A) {
        if (set.has(i)) {
            return i;
        }
        set.add(i);
    }
};

// Runtime: 52 ms, faster than 98.55% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 36.2 MB, less than 91.77% of JavaScript online submissions for N-Repeated Element in Size 2N Array.