/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word == word.toUpperCase()) {
        return true;
    }
    
    if (word == word.toLowerCase()) {
        return true;
    }
    
    w = word.toLowerCase().split('');
    w[0] = w[0].toUpperCase();
    if (word == w.join('')) {
        return true;
    }
    
    return false;
};

// Runtime: 60 ms, faster than 86.28% of JavaScript online submissions for Detect Capital.
// Memory Usage: 34.3 MB, less than 34.78% of JavaScript online submissions for Detect Capital.