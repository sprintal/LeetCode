/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    s = s.split('');
    t = t.split('');
    let i = 0;
    let j = 0;
    while (i < t.length) {
        if (s[j] === t[i]) {
            j++;
        }
        i++;
    }
    if (j === s.length) {
        return true;
    }
    else {
        return false;
    }
}

// Runtime: 72 ms, faster than 68.90% of JavaScript online submissions for Is Subsequence.
// Memory Usage: 55.8 MB, less than 11.21% of JavaScript online submissions for Is Subsequence.