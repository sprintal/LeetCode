/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let array = Array(26).fill(0);
    for (let i of s) {
        array[i.charCodeAt() - 97]++;
    }
    for (let i of s) {
        if (array[i.charCodeAt() - 97] === 1)
            return s.indexOf(i);
    }
    return -1;
};

// Runtime: 72 ms, faster than 96.66% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 38.3 MB, less than 54.01% of JavaScript online submissions for First Unique Character in a String.