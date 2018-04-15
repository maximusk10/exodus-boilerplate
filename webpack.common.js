const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: ["./src/js/index.js"],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "dist/assets/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Production",
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
