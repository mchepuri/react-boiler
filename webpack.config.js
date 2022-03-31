var path = require('path');
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HTMLWebpackPluginConfig =   new HTMLWebpackPlugin(
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
        },
        {
            test: /\.(scss|sass|css)$/i,
            exclude : /node_modules/,
            //use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader','sass-loader'],
            /*loaders: [
               'style-loader',
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader?modules=true',
                  options: {
                    modules: true,
                    sourceMap: true,
                    importLoaders: 1
                  }
                },
              'sass-loader',
              ]*/
              use: [MiniCssExtractPlugin.loader, "css-loader"],
        }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output:{
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname , './dist')
    },
    devServer: {
        port: 3000,
      },
    plugins:[
        new webpack.HotModuleReplacementPlugin() ,HTMLWebpackPluginConfig,
        new MiniCssExtractPlugin({
            filename: '[name].css' ,
            chunkFilename: '[id].css',
          })
    ]
};