class CopyrightWebpackPlugin {
    constructor(options) {
        console.log(options.name);
    }

    apply(compiler) {  //放到dist目录下前执行
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, callback) => {
            // console.log(compilation.assets)
            debugger;
            compilation.assets['Copyright.txt'] = {
                source: function () {
                    return 'Copyright by lyy'
                },
                size: function () {
                    return 16;
                },
            };
            callback();
        })
    }
}

module.exports = CopyrightWebpackPlugin;