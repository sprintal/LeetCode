/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0)
        return false;
    for (var i = 0; i < matrix.length; i++) {
        if (matrix[i][0] > target)
            break;
    }
    if (i === 0)
        return false;
    let flag = matrix[i - 1].indexOf(target);
    return flag === -1 ? false : true;
};

// Runtime: 44 ms, faster than 99.45% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 34.3 MB, less than 93.44% of JavaScript online submissions for Search a 2D Matrix.