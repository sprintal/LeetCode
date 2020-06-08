/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = 0;
    let submax = 0;
    for (let i of nums) {
        if (i > max) {
            [max, submax] = [i, max];
        }
        else if (i <= max && i > submax) {
            submax = i;
        }
    }
    return (max - 1) * (submax - 1);
};

// Runtime: 72 ms, faster than 67.12% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
// Memory Usage: 35.9 MB, less than 50.00% of JavaScript online submissions for Maximum Product of Two Elements in an Array.