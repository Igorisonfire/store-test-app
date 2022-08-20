const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        filename: "[name].[contenthash:8].bundle.js",
        chunkFilename: "[name].[contenthash:8].bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            minify: true,
            template: "./src/index.html",
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: false
    }
});