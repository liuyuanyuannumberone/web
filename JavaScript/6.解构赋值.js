let obj = {
    type: 'image/png',
    size: 1432,
    hobby: ['sleep', 'swim', 'drink'],
    family: {
        fa: 'liu',
        mo: 'wang',
    },
};

const { type, size, imgName } = obj;
const { type: var1, size: var2 } = obj;
let {
    hobby: [item], //sleep
    family: {fa:father}, //liu
} = obj;


let [a, b, c] = [1, 2, 3];
let [m, [[n], f]] = [1, [[2], 3]];

let [, , q] = [1, 2, 3];
let [, ...all] = [1, 2, 3, 4];

//console.log(all); //[ 2, 3, 4 ]
