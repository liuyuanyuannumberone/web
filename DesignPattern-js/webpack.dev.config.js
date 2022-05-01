const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: "index.html",
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        // hot:true,
        open: true,
        port: 9001,
    },
};
