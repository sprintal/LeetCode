/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.history = [homepage];
    this.current = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.history = this.history.splice(0, this.current + 1);
    this.history.push(url);
    this.current = this.history.length - 1;

};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    if (this.current < steps) {
        this.current = 0;
    }
    else {
        this.current -= steps;
    }
    return this.history[this.current];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    if (this.history.length - this.current - 1 < steps) {
        this.current = this.history.length - 1;
    }
    else {
        this.current += steps;
    }
    return this.history[this.current];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// Runtime: 324 ms, faster than 100.00% of JavaScript online submissions for Design Browser History.
// Memory Usage: 47.4 MB, less than 100.00% of JavaScript online submissions for Design Browser History.