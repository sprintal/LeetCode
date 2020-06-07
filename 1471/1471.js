/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
    arr.sort((a, b) => a - b);
    mid = arr[Math.floor((arr.length - 1) / 2)];
    const result = [];
    let i = 0;
    let j = arr.length - 1;
    for (let n = 0; n < k; n++) {
        if ((arr[j] - mid) >= (mid - arr[i])) {
            result.push(arr[j--]);
        }
        else {
            result.push(arr[i++]);
        }
    }
    return result;
};

// Runtime: 288 ms, faster than 100.00% of JavaScript online submissions for The k Strongest Values in an Array.
// Memory Usage: 55.2 MB, less than 100.00% of JavaScript online submissions for The k Strongest Values in an Array.