/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    for (let i of nums) {
        map[i] ? map[i]++ : map[i] = 1;
    }
    for (let i in map) {
        if (map[i] === 1) {
            return i;
        }
    }
};

// Runtime: 56 ms, faster than 90.41% of JavaScript online submissions for Single Number.
// Memory Usage: 38.1 MB, less than 18.79% of JavaScript online submissions for Single Number.