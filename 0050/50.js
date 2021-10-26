/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let pow = Math.abs(n);
    if (pow === 0) {
        return 1;
    }
    else if (pow === 1) {
        return n >= 0 ? x : 1 / x;
    }
    else if (pow % 2 === 0) {
        return n >= 0 ? myPow(x * x, pow / 2) : 1 / myPow(x * x, pow / 2);
    }
    else {
        return n >= 0 ? myPow(x * x, (pow - 1) / 2) * x : 1 / (myPow(x * x, (pow - 1) / 2) * x);
    }
};

// Runtime: 52 ms, faster than 91.90% of JavaScript online submissions for Pow(x, n).
// Memory Usage: 34.1 MB, less than 11.76% of JavaScript online submissions for Pow(x, n).