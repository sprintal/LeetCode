/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let map = {};
    for (let i of s) {
        map[i] ? map[i]++ : map[i] = 1;
    }
    for (let i of t) {
        if (!map[i]) {
            return false;
        }
        map[i]--;
    }
    return true;
};

// Runtime: 64 ms, faster than 93.79% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 37.2 MB, less than 56.84% of JavaScript online submissions for Valid Anagram.