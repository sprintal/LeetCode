/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    const arr = sentence.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(searchWord) === 0) {
            return i + 1;
        }
    }
    return -1;
};

// Runtime: 60 ms, faster than 94.78% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
// Memory Usage: 32.8 MB, less than 100.00% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.