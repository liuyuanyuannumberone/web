const express = require('express');
const webpack = require('webpack');
const webpackDevMiddle = require('webpack-dev-middleware');
const config = require("./webpack.config");
const complier = webpack(config);
const app = express();

app.use(webpackDevMiddle(complier,{
    // publicPath:config.output.publicPath,
}));

app.listen(3000, () => {
    console.log("server is runnning");
});
    

