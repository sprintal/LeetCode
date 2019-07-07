/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for (let i of strs) {
        ii = i.split('').sort();
        map[ii] ? map[ii].push(i) : map[ii] = [i];
    }
    let result = [];
    for (let i in map) {
        result.push(map[i]);
    }
    return result;
};

// Runtime: 132 ms, faster than 61.67% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 45.9 MB, less than 41.55% of JavaScript online submissions for Group Anagrams.