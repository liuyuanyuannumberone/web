let read = function (fun, delay) {
    let a = 0;
    if (delay === 1000) {
        a = fun(1, 2, 3, 4);
    } else {
        a = fun(5, 6, 7, 8);
    }
    console.log(a);
};

let clg = function (a1, a2, a3, a4) {
    console.log(a1, a2, a3, a4);
    return 3;
};
read(clg, 1000);
