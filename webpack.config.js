var path = require('path');
const webpack = require("webpack");
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig =   new HTMLWebpackPlugin(
    {
        template: './app/index.html',
        filename: 'index.html',
        inject: 'body'
    }
);
/* exports */
module.exports = {
    entry :  './app/index.js',
    mode: 'development',
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            exclude : /node_modules/,
            loader: 'babel-loader',
            options: {presets:["@babel/env"]}
        }]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output:{
        filename: 'bundle.js',
        publicPath: "./dist/",
        path: path.resolve(__dirname , './dist')
    },
    devServer: {
        contentBase : "./dist",
        port: 3000,
        hotOnly: true,
        publicPath: "http://localhost:3000/dist/",
      },
    plugins:[
        new webpack.HotModuleReplacementPlugin()  ,HTMLWebpackPluginConfig
    ]
};