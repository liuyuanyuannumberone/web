let res = [{ name: '卓资', total: 12 }];
let obj = {};
for (let item of res) {
    obj[item.name] = item.total;
}
console.log(obj);
