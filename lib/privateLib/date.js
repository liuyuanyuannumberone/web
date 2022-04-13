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
console.log(formatDate(new Date())); //2020-06-27 14:43:01

/**
 *
 * 秒数(number)转化为00:00:00的时间格式
 */
function transTime(minus) {
    let value = Number(minus);
    let h = parseInt(value / 3600);
    value %= 3600;
    let m = parseInt(value / 60);
    let s = value % 60;
    let hh = h.toString().length === 1 ? '0' + h : h;
    let mm = m.toString().length === 1 ? '0' + m : m;
    let ss = s.toString().length === 1 ? '0' + s : s;
    return `${hh}:${mm}:${ss}`;
}

console.log(transTime(3761)); //01:01:01

/*
 * 获取两个日期的时间差
 *
 * */
function getDateSub(start, end) {
    var interval = end - start; // 两个日期对象，相差的毫秒数
    var day, hour, minute, second;
    interval /= 1000;
    day = Math.round(interval / 60 / 60 / 24);
    hour = Math.round((interval / 60 / 60) % 24);
    minute = Math.round((interval / 60) % 60);
    second = Math.round(interval % 60);
    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second,
    };
}

