/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n > 0 && 1162261467 % n === 0;
};

// Runtime: 184 ms, faster than 98.92% of JavaScript online submissions for Power of Three.
// Memory Usage: 48 MB, less than 50.91% of JavaScript online submissions for Power of Three.