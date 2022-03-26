const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const isPrime = (value) => {
    if(value===1) return false;
    if (value <= 3&&value > 1) return true;
    let start, end = Math.sqrt(value);
    for (start = 2; start <= end; start++) {
        if (value % start === 0) {
            return false
        }
    }
    return true;
};

r1.on('line', input => {
    let number = parseInt(input);
    if (isPrime(number)) {
        console.log(number + ' ');
        return true
    }
    let str = '', start = 2, end = Math.sqrt(number);
    while (start <= end) {
        if (number % start === 0) {
            number = Math.floor(number / start);
            str = str +start+' ';
        } else if (isPrime(number)) {
            str = str+number+' ';
            break;
        } else {
            start++;
            while (!isPrime(start)) {
                start++;
            }
        }
    }
    console.log(str)
});

