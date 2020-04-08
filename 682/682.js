/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    const validScores = [];
    ops.forEach(item => {
        if (item === '+') {
            validScores.push(validScores[validScores.length - 1] + validScores[validScores.length - 2]);
        }
        else if (item === 'D') {
            validScores.push(validScores[validScores.length - 1] * 2);
        }
        else if (item === 'C') {
            validScores.pop();
        }
        else {
            validScores.push(parseInt(item));
        }
    });
    return validScores.reduce((pre, cur) => pre + cur, 0);
};

// Runtime: 44 ms, faster than 100.00% of JavaScript online submissions for Baseball Game.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Baseball Game.