// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//
// module.exports = {
//     entry: {
//         main: "./src/index.js",
//     },
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "main.js",
//         publicPath: "",
//     },
//     target: ["web", "es5"],
//     stats: { children: true },
//     mode: "development",
//     devServer: {
//         static: path.resolve(__dirname, "./dist"),
//         compress: true,
//         port: 8080,
//         open: true,
//     },
//     devtool: "inline-source-map",
//     module: {
//         rules: [
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [
//                     // Creates `style` nodes from JS strings
//                     "style-loader",
//                     // Translates CSS into CommonJS
//                     "css-loader",
//                     // Compiles Sass to CSS
//                     "sass-loader",
//                 ],
//             },
//
//         ],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/index.html",
//         }),
//         new CleanWebpackPlugin(),
//     ],
// };

import path from 'path';
const source = path.resolve(__dirname, 'src');

export default {
    context: __dirname,
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: source,
                use: {
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.css$/,
                include: source,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        query: {
                            importLoader: 1,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};