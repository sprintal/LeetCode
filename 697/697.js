/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = {};
    for (let i of nums) {
        map[i] ? map[i] = map[i] + 1 : map[i] = 1;
    }
    let max = 0;
    for (let i in map) {
        if (map[i] > max) {
            max = map[i];
        }
    }
    let is = [];
    for (let i in map) {
        if (map[i] === max) {
            is.push(i);
        }
    }
    let distanse = [];
    for (let i of is) {
        distanse.push(nums.lastIndexOf(parseInt(i)) - nums.indexOf(parseInt(i)) + 1);
    }
    return distanse.sort((a, b) => {return a - b;})[0];
};

// Runtime: 116 ms, faster than 22.48% of JavaScript online submissions for Degree of an Array.
// Memory Usage: 38.8 MB, less than 79.80% of JavaScript online submissions for Degree of an Array.