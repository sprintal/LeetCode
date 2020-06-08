/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    const set = new Set();
    for (const i of paths) {
        set.add(i[1]);
    }
    for (const i of paths) {
        set.delete(i[0]);
    }
    for (const i of set) {
        return i;
    }
};

// Runtime: 72 ms, faster than 46.76% of JavaScript online submissions for Destination City.
// Memory Usage: 39.5 MB, less than 5.58% of JavaScript online submissions for Destination City.