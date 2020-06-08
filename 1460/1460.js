/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    let xor = 0, sum = 0;
    for (let i = 0; i < target.length; i++) {
        xor = xor ^ target[i] ^ arr[i];
        sum = sum + target[i] - arr[i];
    }
    return xor === 0 && sum === 0;
};

// Runtime: 72 ms, faster than 88.57% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
// Memory Usage: 36.1 MB, less than 87.28% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.