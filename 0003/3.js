/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0, j = 0, ans = 0;
    const map = new Map();
    while (i < s.length && j < s.length) {
        if (!map[s[j]]) {
            map[s[j]] = 1;
            j++;
            ans = Math.max(ans, j - i);
        }
        else {
            delete map[s[i]];
            i++;
        }
    }
    return ans;
};

// Runtime: 88 ms, faster than 77.04% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 42.2 MB, less than 18.58% of JavaScript online submissions for Longest Substring Without Repeating Characters.