/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let maxDistance = 0;
    let distance = 0;
    if (seats[seats.length - 1] === 0) {
        distance = seats.length - seats.lastIndexOf(1) - 1;
        if (maxDistance < distance) {
                    maxDistance = distance;
        }
    } 
    while (seats.length !== 0) {
        let popped = seats.pop();
        if (popped === 1) {
            if (seats.lastIndexOf(1) !== -1) {
                distance = (seats.length - seats.lastIndexOf(1)) / 2;
                distance = Math.floor(distance);
                if (maxDistance < distance) {
                    maxDistance = distance;
                }
            }
            else {
                distance = seats.length;
                if (maxDistance < distance) {
                    maxDistance = distance;
                }
                break;
            }
        }
    }
    return maxDistance;
};

// Runtime: 64 ms, faster than 76.14% of JavaScript online submissions for Maximize Distance to Closest Person.
// Memory Usage: 35.9 MB, less than 17.82% of JavaScript online submissions for Maximize Distance to Closest Person.