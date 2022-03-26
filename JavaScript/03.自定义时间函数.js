/*
* 输入日期对象   输出yyyy-MM-dd HH:mm:ss
*
* */

function formatDate(date) {
    if (!(date instanceof Date)) {
        console.error('date不是日期对象');
        return;
    }
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
console.log(formatDate(new Date()));  //2020-06-27 14:43:01




/**
 *
 * 秒数(number)转化为00:00:00的时间格式
 */
function formatTime(value) {
    var time = "";
    var str = value.toString();
    var s = value.split(':');
    var i = 0;
    if (s.length < 3) time = "00:";
    for (; i < s.length - 1; i++) {
        time += s[i].length === 1 ? ("0" + s[i]) : s[i];
        time += ":";
    }
    time += s[i].length === 1 ? ("0" + s[i]) : s[i];

    return time;
}

function transTime(minus) {
    var time = "";
    var value = Number(minus);
    var h = parseInt(value / 3600);
    value %= 3600;
    var m = parseInt(value / 60);
    var s = parseInt(value % 60);
    if (h > 0) {
        time = formatTime(h + ":" + m + ":" + s);
    } else {
        time = formatTime(m + ":" + s);
    }
    return time;
}

console.log(transTime(3761)); //01:02:41





/*
* 获取两个日期的时间差
*
* */
function getDateSub(start, end) {
    var interval = end - start;   // 两个日期对象，相差的毫秒数
    var day, hour, minute, second;
    interval /= 1000;
    day = Math.round(interval / 60 / 60 / 24);
    hour = Math.round(interval / 60 / 60 % 24);
    minute = Math.round(interval / 60 % 60);
    second = Math.round(interval % 60);
    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    }
}









//js时间函数的使用练习代码
function dateFunctiion() {
    var date = new Date();
    var H = date.getHours();
    var M = date.getMinutes();
    var S = date.getSeconds();
    H = H < 10 ? '0' + H : H;
    M = M < 10 ? '0' + M : M;
    S = S < 10 ? '0' + S : S;
    console.log(H, M, S);//14 37 01
    console.log(date.toLocaleString());   //2020-6-27 14:34:43
    console.log(date.toLocaleDateString());//  2020-6-27
    console.log(date.toLocaleTimeString()); //14:34:43
}








