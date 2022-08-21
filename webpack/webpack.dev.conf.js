const {merge} = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.conf");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd())

module.exports = merge(baseConfig, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"
    },
    devServer: {
        static: {
            directory: path.resolve(appDirectory, "src")
        },
        port: 3000,
        client: {
            progress: true
        },
        compress: true,
        historyApiFallback: true
    },
    devtool: "source-map",
    target: "web",
});