/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    negative = 1;
    if (x < 0) {
        x = -x;
        negative = -1;
    }
    
    let temp = x.toString().split('');
    temp = temp.reverse();
    re = parseInt(temp.join(''), 10) * negative;
    
     if ((re < -Math.pow(2,31)) || re > (Math.pow(2,31) - 1)) {
        return 0;
    }
    return re;
};

// Runtime: 76 ms, faster than 76.13% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 35.9 MB, less than 43.22% of JavaScript online submissions for Reverse Integer.