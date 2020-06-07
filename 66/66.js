/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i] += 1;
            return digits;
        }
        else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};

// Runtime: 60 ms, faster than 43.51% of JavaScript online submissions for Plus One.
// Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Plus One.