/*
虽然可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下也无法保证与目标对象的行为一致
原因就是在Proxy 代理的情况下，目标对象内部的this关键字会指向Proxy代理
*/
{
    const target = {
        m: function () {
            console.log(this === proxy);
        },
    };
    const proxy = new Proxy(target, {});

    target.m(); // false
    proxy.m(); // true
}