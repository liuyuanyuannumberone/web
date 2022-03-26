const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const value = (num1, num2 = 3) => {
    return [Math.floor(num1 / num2), num1 % num2];
};


r1.on('line', str => {
    let n = parseInt(str);
    let count = 0, lastCount = 0;
    if (n === 0) return true;
    if (n === 1) count = 0;
    if (n === 2) count = 1;
    if (n > 2) {
        lastCount = n;
        while (lastCount > 2) {
            count += value(lastCount)[0];
            lastCount -= value(lastCount)[0] * 2;
        }
        if (lastCount === 2) count += 1;
    }
    console.log(count, Math.floor(n / 2));
});



