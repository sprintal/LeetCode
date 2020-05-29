var rankTeams = function (votes) {
    const obj = {};
    for (const voter of votes) {
        for (let i = 0; i < voter.length; i++) {
            obj[voter[i]] = obj[voter[i]] ? obj[voter[i]] + Math.pow(2, voter.length - i) : Math.pow(2, voter.length - i);
        }
    }
    let arr = Object.entries(obj);
    arr.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] > b[0];
        }
        return a[1] < b[1];
    });
    console.log(JSON.stringify(arr));
    return arr.map(item => item[0]).join('');
};

console.log(rankTeams(["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"]));