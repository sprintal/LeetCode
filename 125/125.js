/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let temp = s.replace(/\W/g, '').toLowerCase();
    if (temp === temp.split('').reverse().join('')) {
        return true;
    }
    else return false;
};

// Runtime: 68 ms, faster than 87.90% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 38.4 MB, less than 46.01% of JavaScript online submissions for Valid Palindrome.