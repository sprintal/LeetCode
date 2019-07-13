/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let lower = 1;
    let upper = num;
    while (lower !== upper) {
        let mid = Math.floor((lower + upper) / 2);
        let mid2 = mid * mid;
        if (mid2 === num) {
            return true;
        }
        mid2 > num ? upper = mid : lower = mid; 
        if (upper === lower + 1) {
            return false;
        }
    }
    return true;
};

// Runtime: 44 ms, faster than 97.90% of JavaScript online submissions for Valid Perfect Square.
// Memory Usage: 33.8 MB, less than 92.18% of JavaScript online submissions for Valid Perfect Square.