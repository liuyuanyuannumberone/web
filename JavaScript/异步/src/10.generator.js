const fs = require('fs');
const path = require('path');
const readFilePromise = function (filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};
const filePath1 = path.resolve(__dirname, '../static/config/data.json');
const filePath2 = path.resolve(__dirname, '../static/config/config.json');
let redFileGenerator = function* () {
    const r1 = yield readFilePromise(filePath1);
    console.log(r1);
    const r2 = yield readFilePromise(filePath2);
    console.log(r2);
};
var gen = redFileGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


