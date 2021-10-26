/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const pattern = RegExp(/^[+-]?(([0-9]+\.?[0-9]*)|([0-9]*\.?[0-9]+)){1}(e[+-]?[0-9]+)?$/);
    return pattern.test(s.trim());
};

// Runtime: 76 ms, faster than 96.50% of JavaScript online submissions for Valid Number.
// Memory Usage: 36.3 MB, less than 89.27% of JavaScript online submissions for Valid Number.