/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    const obj = {};
    cpdomains.forEach(item => {
        let [times, domain] = item.split(' ');
        times = parseInt(times);
        const domainArr = domain.split('.');
        while (domainArr.length > 0) {
            const subDomain = domainArr.join('.');
            obj[subDomain] = obj[subDomain] ? obj[subDomain] + times : times;
            domainArr.shift();
        }
    });
    return Object.entries(obj).map(([key, value]) => `${value} ${key}`);
};

// Runtime: 80 ms, faster than 62.99% of JavaScript online submissions for Subdomain Visit Count.
// Memory Usage: 38.8 MB, less than 55.88% of JavaScript online submissions for Subdomain Visit Count.