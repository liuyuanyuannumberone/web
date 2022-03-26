const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sortNumber=(a,b)=>{
    return  a.key-b.key
};


let n = 0;
let arr = [];
r1.on('line', input => {
    if (n === 0 && arr.length === 0) {
        n = input;
        return true;
    }
    let inputStr = input.split(' ');
    if (n > 0) {
        let index = arr.findIndex(item => parseInt(Object.values(item)[0]) === parseInt(inputStr[0]));
        if (index === -1) {
            arr.push({key: parseInt(inputStr[0]), value: parseInt(inputStr[1])})
        } else {
            arr[index]["value"] = arr[index]["value"] + parseInt(inputStr[1]);
        }
        n--
    }
    if(n===0){
        arr.sort(sortNumber);
        arr.forEach(item=>{
            console.log(item.key+' '+item.value)
        })
    }
});
