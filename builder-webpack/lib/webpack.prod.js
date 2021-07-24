'use strict';

const merge = require('webpack-merge');

const bascConfig = require('./webpack.base.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const prodConfig = {

    mode:'production',
    optimization: {
        // minimize:true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    }
    
};

module.exports = merge(bascConfig,prodConfig);