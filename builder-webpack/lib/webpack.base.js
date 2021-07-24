'use strict';

const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getMPA = ()=>{
    const matchPath = glob.sync(path.resolve(__dirname,'./src/*/index.js'));
    const entry ={},
    htmlWebpackPlugin = [];
    matchPath.map(pathStr=>{
        const name = /src\/(.*)\/index.js/.exec(pathStr)[1];
        entry[name] = pathStr;
        htmlWebpackPlugin.push(new HtmlWebpackPlugin({
            template:path.resolve(__dirname,`./src/${name}/index.html`),
            filename:`${name}.html`,
            chunks:[name],
        }))
    });

    return {
        entry,
        htmlWebpackPlugin,
    }
}
const {entry,htmlWebpackPlugin} = getMPA();

module.exports = {
    entry,
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                ],

            },
            
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-preset-env')({ browsers: 'last 2 version' })
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // 'style-loader', 
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-preset-env')({ browsers: 'last 2 version' })
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass'),
                        }
                    }
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 10,
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
       ...htmlWebpackPlugin,
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name]_[contenthash:8].css'
        }),
    ],

}