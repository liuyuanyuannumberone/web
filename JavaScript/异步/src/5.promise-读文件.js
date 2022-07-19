 /*

  Promise.all();
  Promise.race();
  */
const fs = require('fs');
const path = require('path');
const readFilePromise = function (filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(`文件${filePath.slice(-10)}   ${err}`);
            } else {
                resolve(`文件${filePath.slice(-10)}   ${data.toString()}`);
            }
        });
    });
};
const result1 = readFilePromise(path.resolve(__dirname, '../static/config/data1.json'));
const result2 = readFilePromise(path.resolve(__dirname, '../static/config/data4.json'));
const result3 = readFilePromise(path.resolve(__dirname, '../static/config/data3.json'));



result1
    .then(data => {
        // console.log("result1",data);
        return result2;  
    })
    .then(data => {  
        // console.log("result2",data);   
        return result3
    },err=>{
        console.log("2",err);
        // return result3
    })
    .then(data => {  
        console.log("result3",data);
        // return "完成"  
    })
    .then(data => {
        // console.log("result", data);
    })
    .catch(err => {
        console.log(err);
    });

//串联：全部成功才成功，有一个失败就失败,执行reject
Promise.all([result1, result2,result3]).then(data => {
    // console.log(data[0],data[1],data[2]);
},function(err){
//   console.log(err);
})

//并联：一个成功就可以进行下一步操作了
Promise.race([result1, result2,result3]).then(data => {
    // console.log(data);
});



