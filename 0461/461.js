/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var diff = x ^ y;
    diff = diff.toString(2);
    diff = diff.split('');
    var sum = 0;
    for(var i = 0; i < diff.length; i++) {
        sum = sum + Number(diff[i]);
    }
    return sum;
};

// Runtime: 48 ms, faster than 96.48% of JavaScript online submissions for Hamming Distance.
// Memory Usage: 34 MB, less than 14.22% of JavaScript online submissions for Hamming Distance.