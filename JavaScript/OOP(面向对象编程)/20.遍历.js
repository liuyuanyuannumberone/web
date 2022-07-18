let arr = [-7, 4, 4, 5, 9, 5, 6, 7];
let obj={name:"lyy",age:12};

for (let i = 0; i < arr.length; i++) {// console.log("T1",i,arr[i]);
}

  
for (let index in arr) {   // console.log("T2",index,arr[index]);
}
for (let key in obj) {// console.log("T3",key,obj[key]);  //key  value
}

//主要为可遍历对象设计
for (let item of arr) { // console.log(item);  // 数组值 
} 




arr.forEach((item, index) => {});
arr.every(item => {
    return item > 0;
});  //只有 return为true 时他才继续遍历，否则停止遍历返回false


