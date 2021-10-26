/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const arr = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            arr.push(s[i]);
        }
        else if (s[i] !== map[arr.pop()]) {
            return false;
        }
    }
    return arr.length === 0;
};

// Runtime: 88 ms, faster than 11.59% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 33.8 MB, less than 90.00% of JavaScript online submissions for Valid Parentheses.