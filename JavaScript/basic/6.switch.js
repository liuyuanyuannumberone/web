//遇到满足条件的开始执行
//遇到break 和return 停止
// ！！！如果满足条件后，没有遇到break，他会执行下面所有case和default直到遇到break;

let status = 2;
switch (status) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
    case 4:
        console.log(3);
    default:
        console.log(4);
}

let grade = 100;
switch (true) {
    case grade < 60:
        console.log('不及格');
        break;
    case grade > 90:
        console.log('优秀');
        break;
    case 60:
    case 61:
        console.log('有点危险');
        break;
    default:
        console.log('表现一般');
}