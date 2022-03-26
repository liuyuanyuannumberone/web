//递归实现:求n个数字的和   n=5--->  5+4+3+2+1

function getSum(x) {
    if (x === 1) {
        return 1;
    }
    return x + getSum(x - 1);
}
console.log(getSum(5));//15


//递归案例:求一个数字各个位数上的数字的和:  123   --->6 ---1+2+3
//523
function getEverySum(x) {
    if (x < 10) {
        return x;
    }
    //获取的是这个数字的个位数
    return x % 10 + getEverySum(parseInt(x / 10));
}
console.log(getEverySum(1364));//14


//递归案例:求斐波那契数列

function getFib(x) {
    if (x === 1 || x === 2) {
        return 1
    }
    return getFib(x - 1) + getFib(x - 2);
}

console.log(getFib(12)); //144



