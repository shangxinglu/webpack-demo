const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const Uglifyplugin = require('uglifyjs-webpack-plugin');



module.exports = {
    mode: 'development',
    // mode:'production',

    entry: './basic/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },


    module: {
        rules: [
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[
                                '@babel/preset-env'
                            ]
                        }
                    }
                ],
               
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: {
                        list: [
                            {
                                tag: 'script',
                                attribute: 'src',
                                type: 'src'
                            }
                        ]
                    }

                }
            },
            // {
            //     test: /lib-flexible\.js/,
            //     type: 'asset/source'
            // },
            {
                test: /\.css$/,
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
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass'),
                        }
                    }
                ]
            },
            // {
            //     test:/\.(png|jpg|gif|svg)/,
            //     use:[
            //         'file-loader'
            //     ]
            // }
            {
                test: /\.(png|jpg|gif|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 100,
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'basic',
            template: path.resolve(__dirname, 'index.html'),
            scripts: [
                './node_modules/lib-flexible/flexible.js'
            ]
            // minify:{
            //     collapseWhitespace:true,
            //     keepClosingSlash:true,
            //     removeComments:true,
            //     removeRedundantAttributes:true,
            //     removeScriptTypeAttributes:true,
            //     removeStyleLinkTypeAttributes:true,
            //     useShortDoctype:true 
            // }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],

    optimization: {
        // minimize:true,
        minimizer: [
            new CssMinimizerPlugin(),
            new Uglifyplugin(),
        ],
    }
}