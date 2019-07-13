/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    for (let i of dict) {
        let regex = new RegExp('\\b' + i + '\\w+', "g");
        sentence = sentence.replace(regex, i);
    }
    return sentence;
};

// Runtime: 436 ms, faster than 10.26% of JavaScript online submissions for Replace Words.
// Memory Usage: 50.7 MB, less than 38.33% of JavaScript online submissions for Replace Words.