/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let i = 0;
    let x = 0, y = 0;
    if (s.length <= numRows || numRows <= 1) {
        return s;
    }
    const arr = new Array(numRows);
    while (i < s.length) {
        if (x % (numRows - 1) === 0) {
            if (!arr[y]) {
                arr[y] = [];
            }
            arr[y][x] = s[i];
            y++;
            if (y >= numRows) {
                x++;
                y = 0;
            }
        }
        else {
            arr[numRows - 1 - (x % (numRows - 1))][x] = s[i];
            x++;
        }
        i++;
    }
    return arr.reduce((pre, cur) => pre + cur.join(''), '');
};

// Runtime: 132 ms, faster than 20.37% of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 50.3 MB, less than 33.33% of JavaScript online submissions for ZigZag Conversion.