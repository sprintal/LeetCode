/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(a, b) {
    var num1, num2;
a = ('' + a).split('.');
b = ('' + b).split('.');
while (a.length < b.length) { a.push('0'); }
while (b.length < a.length) { b.push('0'); }
for (var i = 0; i < a.length; i++) {
    num1 = parseInt(a[i], 10);
    num2 = parseInt(b[i], 10);
    if (num1 > num2) { return 1; }
    if (num1 < num2) { return -1; }
}
return 0;
};

// Runtime: 56 ms, faster than 70.73% of JavaScript online submissions for Compare Version Numbers.
// Memory Usage: 33.7 MB, less than 88.31% of JavaScript online submissions for Compare Version Numbers.