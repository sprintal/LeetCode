/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let answer = Array(n).fill(0);
    for (let i of bookings) {
        x = i[0] - 1;
        y = i[1] - 1;
        for (let j = x; j <= y; j++) {
            answer[j] += i[2];
        }
    }
    return answer;
};

// Runtime: 1212 ms, faster than 100.00% of JavaScript online submissions for Corporate Flight Bookings.
// Memory Usage: 56.6 MB, less than 100.00% of JavaScript online submissions for Corporate Flight Bookings.