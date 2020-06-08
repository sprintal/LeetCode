/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
    const arr = [];
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (gcd(i, j) === 1) {
                arr.push(`${j}/${i}`);
            }
        }
    }
    return arr;
};

const gcd = (a, b) => {
    if (a % b === 0) {
        return b;
    }
    return gcd(b, a % b);
}

// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions for Simplified Fractions.
// Memory Usage: 41.8 MB, less than 32.61% of JavaScript online submissions for Simplified Fractions.