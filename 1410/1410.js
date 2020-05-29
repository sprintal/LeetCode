/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
    const replacer = {
        '&quot;': `"`,
        '&apos;': `'`,
        '&gt;': `>`,
        '&lt;': `<`,
        '&frasl;': `/`,
        '&amp;': `&`,
    }
    for (let [key, value] of Object.entries(replacer)) {
        const regExp = new RegExp(key, 'g');
        text = text.replace(regExp, value);
    }
    return text;
};

// Runtime: 84 ms, faster than 98.76% of JavaScript online submissions for HTML Entity Parser.
// Memory Usage: 41.2 MB, less than 100.00% of JavaScript online submissions for HTML Entity Parser.