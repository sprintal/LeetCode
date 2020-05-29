/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    return "b".repeat(n - 1) + (n % 2 === 0 ? "a" : "b");
};

// Runtime: 60 ms, faster than 44.06% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.
// Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.