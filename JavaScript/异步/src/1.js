const fs = require('fs');
fs.readFile('../static/config/config.json', (err, data) => {
    console.log(data.toString());
});

setTimeout(() => {
    console.log('我是定时器');
}, 0);
