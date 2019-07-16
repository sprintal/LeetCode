/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num <= 0) return false;
    num = num.toString(2);
    num = num.split('1');
    if ((num.length === 1|| num.length === 2) && num.pop().length % 2 === 0)
        return true;
    else return false;
};

// Runtime: 68 ms, faster than 82.27% of JavaScript online submissions for Power of Four.
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions for Power of Four.