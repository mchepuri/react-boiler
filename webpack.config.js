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
            options: {presets:["@babel/preset-env"]}
        }]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname , './dist')
    },
    devServer: {
        port: 3000,
        hotOnly: true,
      },
    plugins:[
        new webpack.HotModuleReplacementPlugin()  ,HTMLWebpackPluginConfig
    ]
};