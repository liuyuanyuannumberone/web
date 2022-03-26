const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let arr = [];

const sortAph = (one, two) => {
    if (one < two) return -1;
    if (one > two) return 1;
    if (one === two) return 0
};

r1.on('line', str => {
    if (count === 0) {
        count = parseInt(str);
        return true;
    }
    count--;
    if (count >= 0) {
        arr.push(str);
    }
    if (count === 0) {
        arr.sort(sortAph)
        arr.forEach(item=>console.log(item))
    }
});



