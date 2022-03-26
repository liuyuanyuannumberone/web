const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let obj = {};

r1.on('line', input => {
    if (n === 0) {
        n = parseInt(input);
        return true
    }
    if (n > 0) {
        let temp = input.split(' ');
        if (obj.hasOwnProperty(temp[0])) {
            obj[temp[0]] = parseInt(obj[temp[0]]) + parseInt(temp[1])
        } else {
            obj[temp[0]] = temp[1];
        }
    }
    n--;
    if(n===0){
        for (let i in obj){
            console.log(parseInt(i)+' ' +parseInt(obj[i]))
        }
        r1.close();
    }
});




