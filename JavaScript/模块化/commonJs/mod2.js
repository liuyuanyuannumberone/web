let count = 0;
let friends = [];

function plusCount() {
    count++
};

function plusYuanhua() {
    friends.push(1);
}

setInterval(() => {
    console.log('每秒打印', count, friends);
}, 5000);

module.exports = {
    count,
    friends,
    plusCount,
    plusYuanhua,
}