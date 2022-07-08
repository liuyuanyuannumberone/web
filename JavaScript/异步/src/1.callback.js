let read = function (fun, delay) {
    if (delay === 1000) {
        fun(1, 2, 3, 4);
    } else {
        fun(5, 6, 7, 8);
    }
};

let clg = function (a1, a2, a3, a4) {
    console.log(a1, a2, a3, a4);
};
read(clg, 1000);
