/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    for (var i = 0; i < t.length; i++) {
        if (t[i] !== s[i]) {
            return t[i];
        }
    }
};

// Runtime: 64 ms, faster than 64.00% of JavaScript online submissions for Find the Difference.
// Memory Usage: 35 MB, less than 87.70% of JavaScript online submissions for Find the Difference.