const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

common.module.rules.push({
    test: /\.scss$/,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader"
    ]
})
module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9001
    },
    mode: "development"
});