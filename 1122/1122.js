/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = [];
    let remains = [];
    for (let i of arr2) {
        while (arr1.indexOf(i) !== -1) {
            arr.push(i);
            arr1.splice(arr1.indexOf(i), 1);
        }
        // else {
        //     remains.push(i);
        // }
    }
    return arr.concat(arr1.sort((a, b) => {return a - b;}))
};

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Relative Sort Array.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Relative Sort Array.