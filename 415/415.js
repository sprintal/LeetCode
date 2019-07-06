/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = num1.split('').reverse()
    num2 = num2.split('').reverse()
    carry = 0
    result = []
    for (i = 0; i < num1.length || i < num2.length; i++) {
        if (!num1[i]) {
            num1[i] = '0'
        }
        if (!num2[i]) {
            num2[i] = '0'
        }
        sum = Number(num1[i]) + Number(num2[i]) + carry
        if (sum <= 9) {
            result.push(sum)
            carry = 0
        }
        else {
            result.push(sum - 10)
            carry = 1
        }
    }
    
    if (carry === 1) {
        result.push(carry)
    }
    return result.reverse().join('')
};

// Runtime: 76 ms, faster than 39.30% of JavaScript online submissions for Add Strings.
// Memory Usage: 36.2 MB, less than 85.11% of JavaScript online submissions for Add Strings.