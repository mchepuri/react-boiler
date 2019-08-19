var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginCoonfig =   new HTMLWebpackPlugin(
    {
        template: __dirname  + '/app/index.html',
        filename: 'index.html',
        inject: 'body'
    }
);
module.exports = {
    entry : __dirname + '/app/index.js',
    module:{
        rules:[{
            test:/\.js$/,
            exclude : /node_modules/,
            loader: 'babel-loader'
        }]
    },
    output:{
        filename: 'build.js',
        path: __dirname + '/build'
    },
    plugins:[
        HTMLWebpackPluginCoonfig  
    ]
};