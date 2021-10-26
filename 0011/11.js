/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let i = 0, j = height.length - 1;
    while (i !== j) {
        let temp = (j - i) * Math.min(height[i], height[j]);
        max = Math.max(max, temp);
        height[i] < height[j] ? i++ : j--;
    }
    return max;
};

// Runtime: 56 ms, faster than 84.94% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 35.6 MB, less than 48.48% of JavaScript online submissions for Container With Most Water.