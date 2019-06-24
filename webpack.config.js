const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './main.ts'],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: './dist',
        port: 3000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loaders: ['babel-loader?presets[]=es2015', 'ts-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(jsx?)$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }]
    }
};
