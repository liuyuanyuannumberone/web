// let num = parseInt(readline())
let num = 3;
let str = '';
let i = 2;


function isPrime(x) {
    if (x <= 3) {
        return x > 1
    }else {
        let sq = Math.sqrt(x);
        for (let i = 2; i <= sq; i++) {
            if (x%i === 0) {
                return false
            }
        }
        return true
    }
}



while(i*i<=num){
    while(num%i === 0){
        num = Math.floor(num/i);
        str = str + i + ' ';
    }
    if(isPrime(num)){
        str = str + num + ' ';
        break;
    }else{
        i = i +1;
    }
}

console.log(str);


