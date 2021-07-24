'use strict';

const merge = require('webpack-merge');

const webpack = require('webpack');

const bascConfig = require('./webpack.base.js');

const devConfig = {
    devtool:'sourece-map',
    mode:'development',
    devServe:{
        hot:true,
        port:8080,
        contentBase:'./dist',
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = merge(bascConfig,devConfig);