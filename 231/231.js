/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    while (n > 1) {
        if (n / 2 === Math.floor(n / 2)) {
            n = n / 2;
            }
        else {
            return false;
        }
    }
    return true;
};

// Runtime: 64 ms, faster than 94.38% of JavaScript online submissions for Power of Two.
// Memory Usage: 35.5 MB, less than 69.66% of JavaScript online submissions for Power of Two.