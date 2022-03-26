const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let totalMoney = 0, totalNumber = 0, n = 0, mainPro = [], sidePro = [];
let info = [
    // {
    //     series: '',
    //     price: '',
    //     weight: '',
    //     children: [{
    //         parent:'',
    //         series:'',
    //         price: '',
    //         weight: '',
    //     }]
    // }
];

r1.on('line', str => {
    let item = str.split(' ');
    if (totalMoney === 0) {
        totalMoney = parseInt(item[0]);
        totalNumber = parseInt(item[1]);
        return true
    }
    n++;
    let price = parseInt(item[0]), weight = parseInt(item[1]), type = parseInt(item[2]);
    if (type === 0) {
        mainPro.push({
            series: n,
            price,
            weight,
        })
    } else {
        sidePro.push({
            parent: type,
            series: n,
            price,
            weight,
        })
    }

    if (n === totalNumber) {
        mainPro.forEach(item => {
            let temp = sidePro.filter(vc => vc.parent === item.series);
            if (temp.length > 0) {
                item.children = temp;
            }
        });
    }
});

let obj = [{
    "series": 1,
    "price": 800,
    "weight": 2,
    "children": [{"parent": 1, "series": 2, "price": 400, "weight": 5}, {
        "parent": 1,
        "series": 3,
        "price": 300,
        "weight": 5
    }]
}, {"series": 4, "price": 400, "weight": 3}, {"series": 5, "price": 500, "weight": 2}];


// 1000 5
// 800 2 0
// 400 5 1
// 300 5 1
// 400 3 0
// 500 2 0
