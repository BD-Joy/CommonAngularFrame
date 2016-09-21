let webpack = require("webpack");
let htmlWebpackPlugin = require("html-webpack-plugin");
let extractTextPlugin = require("extract-text-webpack-plugin");
let path = require("path");

module.exports = {
    entry: {
        "vendor": "./src/vendor.ts",
        "polyfills": "./src/polyfills.ts",
        "app": "./src/main.ts"
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ["ts", "angular2-template"]
            },
            {
                test: /\.css$/,
                include: /src\\assets\\css/,
                loader: extractTextPlugin.extract("style","css?sourceMap")
            },
            {
                test: /\.css$/,
                include: /src\\app/,
                loader: "raw"
            },
            {
                test: /\.html$/,
                loader: "html"
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),
        new extractTextPlugin("assets/css/[name].css"),
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}
