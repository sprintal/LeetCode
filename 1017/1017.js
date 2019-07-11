/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
    let result = '';
    do {
        // result.push(devide(N)[1]);
        result = devide(N)[1] + result;
        N = devide(N)[0];
    } while(N !== 0);
    return result;
};
function devide(num) {
        if (num < 0) return [-Math.floor(Math.abs(num) / -2), Math.abs(num) % -2];
        return [Math.ceil(num / -2), num % -2];
}

// Runtime: 44 ms, faster than 98.51% of JavaScript online submissions for Convert to Base -2.
// Memory Usage: 34.5 MB, less than 5.00% of JavaScript online submissions for Convert to Base -2.