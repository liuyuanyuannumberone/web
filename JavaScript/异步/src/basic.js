const fs = require('fs');
fs.readFile('../static/config/data1.json', (err, data) => {
    console.log(data.toString());
});

setTimeout(() => {
    console.log('我是定时器');
}, 0);
