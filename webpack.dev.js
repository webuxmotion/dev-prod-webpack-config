const path = require("path");
const {merge} = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader", 
                    "css-loader"
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader"
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ]
});