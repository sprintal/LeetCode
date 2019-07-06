/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var transfer = {
        'A' : 'a',
        'B' : 'b',
        'C' : 'c',
        'D' : 'd',
        'E' : 'e',
        'F' : 'f',
        'G' : 'g',
        'H' : 'h',
        'I' : 'i',
        'J' : 'j',
        'K' : 'k',
        'L' : 'l',
        'M' : 'm',
        'N' : 'n',
        'O' : 'o',
        'P' : 'p',
        'Q' : 'q',
        'R' : 'r',
        'S' : 's',
        'T' : 't',
        'U' : 'u',
        'V' : 'v',
        'W' : 'w',
        'X' : 'x',
        'Y' : 'y',
        'Z' : 'z'
    }
    
    var li = str.split('')
    for (i = 0; i < li.length; i++) {
        if (transfer[li[i]]) {
            li[i] = transfer[li[i]]
        }
    }
    return li.join('')
};

// Runtime: 40 ms, faster than 99.69% of JavaScript online submissions for To Lower Case.
// Memory Usage: 33.9 MB, less than 17.02% of JavaScript online submissions for To Lower Case.