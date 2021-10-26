/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let result = [];
    for (let i = 0; i < T.length; i++) {
        for (var j = i + 1; j < T.length; j++) {
            if (T[i] < T[j]) {
                result.push(j - i);
                break;
            }
        }
        if (j === T.length)
            result.push(0);
        continue;
    }
    return result;
};

// Runtime: 684 ms, faster than 45.45% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 42.5 MB, less than 69.60% of JavaScript online submissions for Daily Temperatures.