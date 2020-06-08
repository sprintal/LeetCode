/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let result = 0, temp = 0, current = s[0];
    for (const i of s) {
        if (i === current) {
            temp++;
        }
        else {
            temp = 1;
            current = i;
        }
        result = Math.max(result, temp);
    }
    return result;
};

// Runtime: 72 ms, faster than 69.53% of JavaScript online submissions for Consecutive Characters.
// Memory Usage: 36.9 MB, less than 33.25% of JavaScript online submissions for Consecutive Characters.