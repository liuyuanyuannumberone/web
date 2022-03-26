const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //作用：打包完js文件，然后将js文件注入到html模板中
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
    entry: {
        index: './src/index.js', // 打包生成main.js
    },
    module: {
        rules: [
            // {test: /\.(jpe?g|png|gif)$/, use: {loader: 'file-loader'}},
            //             {
            //                 test: /\.(jpe?g|png|gif)$/,
            //                 loader: 'file-loader',
            //                 options: {
            //                     //占位符，webpack官网还有其他
            //                     name: '[name]_[hash].[ext]',
            //                     outputPath:'images/'
            //                 },
            //             },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    //占位符，webpack官网还有其他
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 20480 //（B 字节）默认将图片打包到js文件，但是图片很大时，超过20KB，
                    // 执行file-loader的打包方式
                },
            },
            {test: /\.(eot|svg|ttf|woff|woff2)$/, use: {loader: 'file-loader'}},
            {
                test: /\.js$/, exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader', options: {
                            // presets: [["@babel/preset-env", {useBuiltIns: "usage"}]],
                            // 用babelrc，runtime 免类库污染
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "src/index.html"}),
        new CleanWebpackPlugin(), //两种方式都可以，作用 先删除dist目录，然后再打包
        // new CleanWebpackPlugin({
        //     cleanAfterEveryBuildPatterns: ['dist']
        // })
        new webpack.ProvidePlugin({  //！！！！！垫片
            $: 'jquery',  //shimming  当使用$时，自动加载jquery库，
            // webpack默认是模块化的，所以$不可能跨模块使用。分模块管理，所以这里相当于定义了全局变量。
            _: 'lodash',
        }),
    ],
    optimization: {
        runtimeChunk: {
            name: 'runtime', //新版本不用配置，这是和打包上线hash值变化有关。
        }, //新生成runtime，业务代码放在主文件、ventor放库代码，runtime文件放置两者之间关系的文件，
        // 解决了老版本问题。
        splitChunks: {
            // chunks: 'async',
            // minSize: 30000,
            // minChunks: 1,
            // maxAsyncRequests: 6,
            // maxInitialRequests: 4,
            // automaticNameDelimiter: '~',
            // cacheGroups: {
            //     defaultVendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10,
            //         filename:'vendors.js'
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true,
            //         filename:'common.js'
            //     }
            // },
            chunks: "all"
        }  //类库代码分割，产生vendors-main.js文件。避免加载不需要的代码浪费时间
    },
    performance: false,
    output: {
        path: path.resolve(__dirname, '../dist')
    },
};

module.exports = (env) => {   //环境变量
    if (env && env.production) {
        //线上环境
        return merge(commonConfig, prodConfig);
    } else {
        //开发环境
        return merge(commonConfig, devConfig);
    }
};