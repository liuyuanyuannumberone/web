let arr = [-7, 4, 4, 5, 9, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {}
for (let key in arr) {}// console.log(arr[key]); //key不是索引  主要为遍历对象设计
for (let item of arr) {} //可以遍历所有数据结构  主要为遍历可遍历对象设计

arr.forEach((item, index) => {});
arr.every(item => {return item > 0});//只有 return为true 时他才继续遍历，否则停止遍历返回false

