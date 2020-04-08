/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    S = S.split('');
    let result = [''];
    for (let i = 0; i < S.length; i++) {
        const length = result.length;
        if (/[A-Za-z]/.test(S[i])) {
            for (let j = 0; j < length; j++) {
                result.push(result[j] + S[i].toLowerCase());
                result[j] = result[j] + S[i].toUpperCase();
            }
        }
        else {
            result = result.map(item => item + S[i]);
        }
    }
    return result;
};

// Runtime: 68 ms, faster than 86.16% of JavaScript online submissions for Letter Case Permutation.
// Memory Usage: 37.6 MB, less than 33.33% of JavaScript online submissions for Letter Case Permutation.