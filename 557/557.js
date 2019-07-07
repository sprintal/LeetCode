/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ');
    let result = [];
    for (let i of s) {
        i = i.split('').reverse().join('');
        result.push(i);
    }
    return result.join(' ');
};

// Runtime: 80 ms, faster than 65.38% of JavaScript online submissions for Reverse Words in a String III.
// Memory Usage: 42.3 MB, less than 42.82% of JavaScript online submissions for Reverse Words in a String III.