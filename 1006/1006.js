/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    let operation = 1;
    let result = ['Math.floor(' + N];
    if (N === 1) {
        result.push(')');
    }
    while (N > 1) {
        N -= 1;
        switch (operation) {
            case 1: result.push('*');
                result.push(N);
                if (N === 1) {
                    result.push(')');
                }
                operation = 2;
                break;
            case 2: result.push('/');
                result.push(N + ')');
                operation = 3;
                break;
            case 3: result.push('+');
                result.push(N);
                operation = 4;
                break;
            case 4: result.push('-');
                if (N > 1) {
                    result.push('Math.floor(');
                }
                result.push(N);
                operation = 1;
                break;
        }
        
    }
    return eval(result.join(''));
};

// Runtime: 148 ms, faster than 16.39% of JavaScript online submissions for Clumsy Factorial.
// Memory Usage: 50.9 MB, less than 14.29% of JavaScript online submissions for Clumsy Factorial.