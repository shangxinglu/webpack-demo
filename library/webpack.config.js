const path = require('path');

const {CleanWebpackPlugin}  = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool:'source-map',
    mode:'development',
    
    entry:{
        'util':'./library/index.js',
        'util.min':'./library/index.js',
    },

    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        library:{
            name:'util',
            type:'umd',
        }
       
    },
    plugins:[
        new CleanWebpackPlugin(),
    ],

    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({test:/\.min\.js$/})
        ]
    }
}