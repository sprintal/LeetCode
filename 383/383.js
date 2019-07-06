/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('')
    magazine = magazine.split('')
    for (i = 0; i < ransomNote.length; i++) {
        char = ransomNote[i]
        if (magazine.indexOf(char) !== -1) {
            magazine.splice(magazine.indexOf(char), 1)
        }
        else {
            return false;
        }
    }
    return true;
};

// Runtime: 72 ms, faster than 87.61% of JavaScript online submissions for Ransom Note.
// Memory Usage: 38.5 MB, less than 29.05% of JavaScript online submissions for Ransom Note.