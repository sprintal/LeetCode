/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (const str of strs) {
        const arr = new Array(26).fill(0);
        for (const char of str) {
            arr[char.charCodeAt() - 'a'.charCodeAt()] += 1;
        }
        map[arr.join('')] ? map[arr.join('')].push(str) : map[arr.join('')] = [str];
    }
    return Object.values(map);
};

// Runtime: 128 ms, faster than 81.83% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 44.8 MB, less than 73.91% of JavaScript online submissions for Group Anagrams.