/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s;
}; 

// Runtime: 104 ms, faster than 97.37% of JavaScript online submissions for Reverse String.
// Memory Usage: 47.3 MB, less than 19.25% of JavaScript online submissions for Reverse String.