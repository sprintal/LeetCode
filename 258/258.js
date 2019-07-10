/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num > 0) {
        return (num - 1) % 9 + 1;
    }
    else return 0;
};

// Runtime: 64 ms, faster than 96.82% of JavaScript online submissions for Add Digits.
// Memory Usage: 35.5 MB, less than 83.66% of JavaScript online submissions for Add Digits.