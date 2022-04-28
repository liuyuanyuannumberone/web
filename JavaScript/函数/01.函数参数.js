function test(x, y = 1, z = 2, d = x + y + z) {
}

function sum(base, ...all_var) {
    console.log(all_var); //数组
}
sum(1, 2, 3, 4, 5, 6, 7, 8);


function add(x = 1, y = 2, z = 3) {
    console.log(x, y, z);
}
add(...[4, 5, 6]);







