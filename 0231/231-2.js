/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n.toString(2).replace(/0/g, '') === '1';
};

// Runtime: 68 ms, faster than 88.11% of JavaScript online submissions for Power of Two.
// Memory Usage: 35.7 MB, less than 18.35% of JavaScript online submissions for Power of Two.