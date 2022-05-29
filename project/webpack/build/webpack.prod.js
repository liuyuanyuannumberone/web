const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',//线上环境
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        // modules:true, //css模块化打包
                    }
                }, 'sass-loader', 'postcss-loader'],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        // modules:true,
                    }
                }, 'postcss-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].chunk.css',
    }),
        new WorkboxPlugin.GenerateSW({   //PWA
            clientsClaim: true,
            skipWaiting: true,
        })], //serviceworker

    output: {
        // publicPath: "/",
        // publicPath: "http://cdn.com.cn", //打包完成后的文件会变成
        // <script src="http://cdn./com.cn/main.js"></script>
        filename: '[name].[contenthash].js',  //占位符
        chunkFilename: "[name].[contenthash].js",
        //contenthash产生新文件名，浏览器不会利用本地缓存的文件，就会重新加载新打包文件。
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],  //css代码压缩
    },
};


module.exports = prodConfig;
