const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd())

module.exports = {
    entry: {
        main: "./src/index.jsx"
    },
    output: {
        path: path.resolve(appDirectory, "build"),
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss", ".sass"]
    },
    module: {
        rules: [
            //js files
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            //css files
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["autoprefixer"]
                                ]
                            },
                        }
                    },
                    "sass-loader"
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: true,
            inject: true,
            filename: 'index.html',
            template: path.resolve(appDirectory, "src/index.html"),
            chunks: 'bundle',
            base: '/'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[id].[contenthash:8].css"
        })
    ]
}
