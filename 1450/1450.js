/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
    let num = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
            num++;
        }
    }
    return num;
};

// Runtime: 68 ms, faster than 60.67% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.