const path = require("path");
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

common.module.rules.push({
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
    ]
})
common.plugins.push(new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
}))
module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin()
    ],
    mode: "production"
});