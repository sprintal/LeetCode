/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let map = {};
    S = S.split('');
    J = J.split('');
    for (let i of S) {
        map[i] ? map[i] += 1 : map[i] = 1;
    }
    let result = 0;
    for (let i of J) {
        if (map[i]) {
            result += map[i];
        }
    }
    return result;
};

// Runtime: 56 ms, faster than 86.52% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 34.7 MB, less than 28.54% of JavaScript online submissions for Jewels and Stones.