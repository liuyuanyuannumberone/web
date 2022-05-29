/*
*
* 打包库
*
* */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyrightWebpackPlugin = require('../library-plugin/copyright-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './library-math/library-math.js',
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "library-math/library-math.html",
                filename: 'library-math.html'
            }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash',
        }),
        new CopyrightWebpackPlugin({
            name: 'liuyuanyuan',
        })
    ],
    externals: [],  //'lodash'  写入你已经依赖过的库，避免对方再次引入你依赖的库，造成两
    //次同样库的打包
    resolveLoader: {
        modules: ['node_modules', './library-loader'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'loader',
                        options: {
                            name: "lyy",
                        }
                    },
                ]
            }
        ],
    },
    output: {
        filename: 'library-math.js',
        path: path.resolve(__dirname, '../library'),
        library: 'library_math',  //library_math.*****使用全局变量
        libraryTarget: "umd",  //以任何模式（es module /common js/script）都可以引入打包的库
    },
};

